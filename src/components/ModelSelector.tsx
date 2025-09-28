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
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-block w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          <h3 className="text-2xl font-bold">Select AI Models</h3>
          <span className="badge-orange">
            {selectedCount} selected
          </span>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onSelectAll}
          >
            Select All
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onDeselectAll}
          >
            Clear
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {models.map((model) => (
          <button
            key={model.id}
            onClick={() => onToggleModel(model.id)}
            className={cn(
              "group relative p-4 rounded-sm border-2 transition-all duration-200",
              "hover:translate-x-[-2px] hover:translate-y-[-2px]",
              model.selected
                ? "bg-secondary border-border shadow-brutal hover:shadow-brutal-lg"
                : "bg-card border-border shadow-brutal-sm hover:shadow-brutal"
            )}
          >
            <div className="flex items-start justify-between">
              <div className="text-left space-y-1">
                <div className="font-bold text-sm">
                  {model.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {model.provider}
                </div>
                <div className="text-xs text-muted-foreground">
                  {model.contextLength.toLocaleString()} tokens
                </div>
              </div>
              <div className={cn(
                "w-6 h-6 rounded-sm border-2 flex items-center justify-center transition-all",
                model.selected
                  ? "bg-primary border-border"
                  : "bg-card border-border"
              )}>
                {model.selected && (
                  <Check className="w-4 h-4 text-primary-foreground" />
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}