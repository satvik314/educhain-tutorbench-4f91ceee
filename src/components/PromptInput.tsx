import { useState } from "react";
import { Send, Loader2, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
  selectedModelsCount: number;
}

const SAMPLE_PROMPTS = [
  "Explain the water cycle to a 5th grader in simple terms",
  "Create a lesson plan for teaching photosynthesis",
  "What are effective strategies for teaching multiplication tables?",
  "Explain the concept of gravity using everyday examples",
];

export function PromptInput({ onSubmit, isLoading, selectedModelsCount }: PromptInputProps) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {
    if (prompt.trim() && selectedModelsCount > 0) {
      onSubmit(prompt);
    }
  };

  const handleSamplePrompt = (samplePrompt: string) => {
    setPrompt(samplePrompt);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="inline-block w-3 h-3 bg-primary rounded-full animate-pulse"></div>
        <h3 className="text-2xl font-bold">Test Your Prompt</h3>
      </div>

      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your educational prompt here..."
        className="min-h-[150px] p-4 bg-card border-2 border-border rounded-sm resize-none font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
        disabled={isLoading}
      />

      <div className="flex flex-wrap gap-2">
        <span className="text-sm font-semibold text-muted-foreground">Quick Prompts:</span>
        {SAMPLE_PROMPTS.map((sample, index) => (
          <button
            key={index}
            onClick={() => handleSamplePrompt(sample)}
            className="text-xs px-3 py-1.5 rounded-sm bg-secondary border border-border hover:shadow-brutal-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px]"
            disabled={isLoading}
          >
            {sample.substring(0, 40)}...
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">
          {selectedModelsCount === 0 
            ? "Select at least one model to test"
            : `Testing on ${selectedModelsCount} model${selectedModelsCount > 1 ? 's' : ''}`
          }
        </span>
        <Button
          onClick={handleSubmit}
          disabled={!prompt.trim() || selectedModelsCount === 0 || isLoading}
          variant="brutal"
          size="lg"
          className="min-w-[140px]"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Testing...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Run Test
            </>
          )}
        </Button>
      </div>
    </div>
  );
}