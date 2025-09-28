import { useState } from "react";
import { ChevronDown, Sparkles, Check } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ImprovedModelSelector } from "./ImprovedModelSelector";
import { Model } from "./ModelSelector";

interface CompactModelSelectorProps {
  models: Model[];
  onToggleModel: (modelId: string) => void;
  onSelectAll: () => void;
  onDeselectAll: () => void;
}

export function CompactModelSelector({
  models,
  onToggleModel,
  onSelectAll,
  onDeselectAll,
}: CompactModelSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedModels = models.filter((m) => m.selected);
  const selectedCount = selectedModels.length;

  return (
    <>
      {/* Compact selector button */}
      <div className="brutal-card p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <div>
              <div className="text-sm font-medium text-foreground">
                Selected Models
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {selectedCount === 0
                  ? "No models selected"
                  : `${selectedCount} model${selectedCount !== 1 ? "s" : ""} selected`}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Show selected model badges */}
            {selectedCount > 0 && (
              <div className="hidden md:flex items-center gap-2 max-w-md overflow-x-auto">
                {selectedModels.slice(0, 3).map((model) => (
                  <div
                    key={model.id}
                    className="flex items-center gap-1 px-2 py-1 bg-primary/10 border border-primary/20 rounded-md text-xs whitespace-nowrap"
                  >
                    <Check className="h-3 w-3 text-primary" />
                    <span className="text-foreground">{model.name}</span>
                  </div>
                ))}
                {selectedCount > 3 && (
                  <span className="text-xs text-muted-foreground">
                    +{selectedCount - 3} more
                  </span>
                )}
              </div>
            )}
            
            <Button
              onClick={() => setIsOpen(true)}
              variant="brutal"
              size="sm"
              className="gap-2"
            >
              <span>Select Models</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Full selector dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto brutal-dialog">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Select AI Models
            </DialogTitle>
          </DialogHeader>
          <div className="-mx-6 px-6">
            <ImprovedModelSelector
              models={models}
              onToggleModel={onToggleModel}
              onSelectAll={onSelectAll}
              onDeselectAll={onDeselectAll}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}