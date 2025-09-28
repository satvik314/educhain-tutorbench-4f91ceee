import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { ApiKeyInput } from "@/components/ApiKeyInput";
import { StreamlinedModelSelector } from "@/components/StreamlinedModelSelector";
import { PromptInput } from "@/components/PromptInput";
import { ModelResponse } from "@/components/ModelResponse";
import { availableModels } from "@/data/models";
import { useOpenRouter } from "@/hooks/useOpenRouter";

const Index = () => {
  const [apiKey, setApiKey] = useState(() => 
    localStorage.getItem("openrouter_api_key") || ""
  );
  const [models, setModels] = useState(availableModels);
  const { responses, isLoading, testModels } = useOpenRouter();

  useEffect(() => {
    if (apiKey) {
      localStorage.setItem("openrouter_api_key", apiKey);
    }
  }, [apiKey]);

  const handleToggleModel = (modelId: string) => {
    setModels(prev => 
      prev.map(model => 
        model.id === modelId 
          ? { ...model, selected: !model.selected }
          : model
      )
    );
  };

  const handleSelectAll = () => {
    setModels(prev => prev.map(model => ({ ...model, selected: true })));
  };

  const handleDeselectAll = () => {
    setModels(prev => prev.map(model => ({ ...model, selected: false })));
  };

  const handleSubmitPrompt = async (prompt: string) => {
    const selectedModels = models.filter(m => m.selected).map(m => m.id);
    await testModels(prompt, selectedModels, apiKey);
  };

  const selectedModels = models.filter(m => m.selected);
  const hasResponses = Object.keys(responses).length > 0;

  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}></div>
      
      <div className="relative z-10">
        {/* Fixed Header Section */}
        <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b-2 border-foreground">
          <div className="container mx-auto px-4 py-4 max-w-7xl">
            <Header />
            
            {/* API Key, Model Selection and Prompt Input in Header */}
            <div className="mt-4 space-y-4">
              <ApiKeyInput 
                apiKey={apiKey} 
                onApiKeyChange={setApiKey}
              />
              
              {/* Streamlined Model Selector */}
              <StreamlinedModelSelector
                models={models}
                onToggleModel={handleToggleModel}
                onSelectAll={handleSelectAll}
                onDeselectAll={handleDeselectAll}
              />
              
              {/* Prompt Input */}
              <PromptInput
                onSubmit={handleSubmitPrompt}
                isLoading={isLoading}
                selectedModelsCount={selectedModels.length}
              />
            </div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="space-y-6">
            {/* Responses Grid */}
            {hasResponses && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                  Model Responses
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {selectedModels.map((model) => {
                    const response = responses[model.id];
                    return (
                      <ModelResponse
                        key={model.id}
                        modelName={model.name}
                        provider={model.provider}
                        response={response?.response}
                        responseTime={response?.responseTime}
                        isLoading={isLoading && !response?.response && !response?.error}
                        error={response?.error}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
