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
    <div className="brutal-card p-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="h-5 w-5 text-secondary" />
        <h2 className="text-xl font-semibold text-foreground">Test Prompt</h2>
      </div>

      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your educational prompt here..."
        className="min-h-[120px] bg-input/50 border-border/50 focus:border-primary/50 resize-none font-mono text-sm"
        disabled={isLoading}
      />

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="text-xs text-muted-foreground">Try:</span>
        {SAMPLE_PROMPTS.map((sample, index) => (
          <button
            key={index}
            onClick={() => handleSamplePrompt(sample)}
            className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
            disabled={isLoading}
          >
            {sample.substring(0, 40)}...
          </button>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-muted-foreground">
          {selectedModelsCount === 0 
            ? "Select at least one model to test"
            : `Testing on ${selectedModelsCount} model${selectedModelsCount > 1 ? 's' : ''}`
          }
        </span>
        <Button
          onClick={handleSubmit}
          disabled={!prompt.trim() || selectedModelsCount === 0 || isLoading}
          variant="default"
          className="min-w-[120px]"
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