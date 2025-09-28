import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Get or create a session ID for this user session
const getSessionId = (): string => {
  const SESSION_KEY = 'ai-model-tester-session';
  let sessionId = localStorage.getItem(SESSION_KEY);
  
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, sessionId);
  }
  
  return sessionId;
};

interface ModelResponse {
  modelId: string;
  response?: string;
  responseTime?: number;
  error?: string;
}

export function useOpenRouter() {
  const [responses, setResponses] = useState<Record<string, ModelResponse>>({});
  const [isLoading, setIsLoading] = useState(false);

  const testModels = async (
    prompt: string,
    modelIds: string[],
    apiKey: string,
    promptId?: string
  ) => {
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please add your OpenRouter API key to continue",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResponses({});

    // Initialize loading state for all models
    const initialResponses: Record<string, ModelResponse> = {};
    modelIds.forEach(id => {
      initialResponses[id] = { modelId: id };
    });
    setResponses(initialResponses);

    // Test each model in parallel
    const promises = modelIds.map(async (modelId) => {
      const startTime = Date.now();
      
      try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": window.location.origin,
            "X-Title": "Educhain TutorBench",
          },
          body: JSON.stringify({
            model: modelId,
            messages: [
              {
                role: "system",
                content: "You are an expert educational tutor. Provide clear, engaging, and age-appropriate explanations."
              },
              {
                role: "user",
                content: prompt
              }
            ],
            temperature: 0.7,
            max_tokens: 500,
          }),
        });

        const endTime = Date.now();
        const responseTime = (endTime - startTime) / 1000;

        if (!response.ok) {
          const error = await response.text();
          throw new Error(error || `HTTP ${response.status}`);
        }

        const data = await response.json();
        const content = data.choices?.[0]?.message?.content || "No response received";

        setResponses(prev => ({
          ...prev,
          [modelId]: {
            modelId,
            response: content,
            responseTime,
          }
        }));
        
        // Save successful response to database
        if (promptId) {
          await supabase
            .from('model_responses')
            .upsert({
              prompt_id: promptId,
              model_name: modelId,
              response_content: content,
              response_time_ms: Math.round(responseTime * 1000)
            });
        }
      } catch (error) {
        console.error(`Error with model ${modelId}:`, error);
        const errorMessage = error instanceof Error ? error.message : "Failed to get response";
        
        setResponses(prev => ({
          ...prev,
          [modelId]: {
            modelId,
            error: errorMessage,
          }
        }));
        
        // Save error response to database
        if (promptId) {
          await supabase
            .from('model_responses')
            .upsert({
              prompt_id: promptId,
              model_name: modelId,
              response_error: errorMessage,
              response_time_ms: Math.round((Date.now() - startTime))
            });
        }
      }
    });

    await Promise.allSettled(promises);
    setIsLoading(false);
    
    toast({
      title: "Test Complete",
      description: `Tested ${modelIds.length} models successfully`,
    });
  };

  return {
    responses,
    isLoading,
    testModels,
  };
}