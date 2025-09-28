import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export interface Model {
  id: string;
  name: string;
  provider: string;
  contextLength: number;
  selected: boolean;
}

interface ModelSelectorProps {
  models: Model[];
  onToggleModel: (modelId: string) => void;
  onSelectAll: () => void;
  onDeselectAll: () => void;
}

export function ModelSelector({ models, onToggleModel, onSelectAll, onDeselectAll }: ModelSelectorProps) {
  const selectedCount = models.filter(m => m.selected).length;

  return (
    <div className="brutal-card p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">AI Models</h2>
          <span className="text-sm text-muted-foreground ml-2">
            ({selectedCount} selected)
          </span>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onSelectAll}
            className="text-xs"
          >
            Select All
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onDeselectAll}
            className="text-xs"
          >
            Clear
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {models.map((model) => (
          <button
            key={model.id}
            onClick={() => onToggleModel(model.id)}
            className={cn(
              "group relative p-3 rounded-lg border-2 transition-all duration-200",
              "hover:-translate-x-0.5 hover:-translate-y-0.5",
              model.selected
                ? "bg-primary text-primary-foreground border-foreground shadow-brutal hover:shadow-brutal-hover"
                : "bg-card border-foreground hover:bg-muted"
            )}
          >
            <div className="flex items-start justify-between">
              <div className="text-left">
                <div className={cn(
                  "font-medium text-sm",
                  model.selected ? "text-primary-foreground" : "text-foreground"
                )}>
                  {model.name}
                </div>
                <div className={cn(
                  "text-xs mt-1",
                  model.selected ? "text-primary-foreground/80" : "text-muted-foreground"
                )}>
                  {model.provider}
                </div>
                <div className={cn(
                  "text-xs mt-1",
                  model.selected ? "text-primary-foreground/70" : "text-muted-foreground/70"
                )}>
                  {model.contextLength.toLocaleString()} tokens
                </div>
              </div>
              <div className={cn(
                "w-5 h-5 rounded-full border-2 transition-all duration-200",
                model.selected
                  ? "bg-primary border-primary"
                  : "border-muted-foreground/30 group-hover:border-primary/50"
              )}>
                {model.selected && (
                  <Check className="w-3 h-3 text-primary-foreground" />
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}