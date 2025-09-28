import { useState, useMemo } from "react";
import { Check, Sparkles, Search, Star, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Model } from "./ModelSelector";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

interface StreamlinedModelSelectorProps {
  models: Model[];
  onToggleModel: (modelId: string) => void;
  onSelectAll: () => void;
  onDeselectAll: () => void;
}

const POPULAR_MODELS = [
  "openai/gpt-5",
  "anthropic/claude-sonnet-4",
  "google/gemini-2.5-pro",
  "deepseek/deepseek-v3.1-terminus"
];

export function StreamlinedModelSelector({ 
  models, 
  onToggleModel, 
  onSelectAll, 
  onDeselectAll 
}: StreamlinedModelSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const providers = useMemo(() => {
    const uniqueProviders = new Set(models.map(m => m.provider));
    return ["all", ...Array.from(uniqueProviders)];
  }, [models]);

  const filteredModels = useMemo(() => {
    let filtered = models;
    
    if (selectedProvider !== "all") {
      filtered = filtered.filter(m => m.provider === selectedProvider);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(m => 
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.provider.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [models, selectedProvider, searchQuery]);

  const popularModels = models.filter(m => POPULAR_MODELS.includes(m.id));
  const selectedCount = models.filter(m => m.selected).length;
  const selectedModels = models.filter(m => m.selected);

  return (
    <div className="brutal-card">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        {/* Compact Header */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <div>
                <div className="text-sm font-medium text-foreground">
                  Model Selection
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
                <div className="hidden lg:flex items-center gap-2 max-w-xl overflow-x-auto">
                  {selectedModels.slice(0, 4).map((model) => (
                    <div
                      key={model.id}
                      className="flex items-center gap-1 px-2 py-1 bg-primary/10 border border-primary/20 rounded-md text-xs whitespace-nowrap"
                    >
                      <Check className="h-3 w-3 text-primary" />
                      <span className="text-foreground">{model.name}</span>
                    </div>
                  ))}
                  {selectedCount > 4 && (
                    <span className="text-xs text-muted-foreground">
                      +{selectedCount - 4} more
                    </span>
                  )}
                </div>
              )}
              
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2"
                >
                  <span>{isOpen ? "Hide" : "Show"} Models</span>
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform",
                    isOpen && "rotate-180"
                  )} />
                </Button>
              </CollapsibleTrigger>
            </div>
          </div>
        </div>

        {/* Expandable Content */}
        <CollapsibleContent>
          <div className="border-t-2 border-foreground p-4 space-y-4">
            {/* Quick Actions */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onSelectAll}
                  className="text-xs"
                >
                  Select All ({models.length})
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onDeselectAll}
                  className="text-xs"
                >
                  Clear Selection
                </Button>
              </div>
              
              {/* Search Bar */}
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search models..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 brutal-input h-8 text-sm"
                />
              </div>
            </div>

            {/* Provider Tabs */}
            <div className="flex gap-2 flex-wrap">
              {providers.map((provider) => (
                <button
                  key={provider}
                  onClick={() => setSelectedProvider(provider)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg font-medium text-xs transition-all duration-200",
                    "border-2 hover:-translate-x-0.5 hover:-translate-y-0.5",
                    selectedProvider === provider
                      ? "bg-primary text-primary-foreground border-foreground shadow-brutal"
                      : "bg-card border-foreground hover:bg-muted"
                  )}
                >
                  {provider === "all" ? "All" : provider}
                  {provider !== "all" && (
                    <span className="ml-1 opacity-70">
                      ({models.filter(m => m.provider === provider).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Popular Models Section */}
            {selectedProvider === "all" && popularModels.length > 0 && searchQuery === "" && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-4 w-4 text-primary" />
                  <h3 className="text-xs font-semibold text-foreground">Popular Models</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {popularModels.map((model) => (
                    <CompactModelCard
                      key={model.id}
                      model={model}
                      onToggle={onToggleModel}
                      isPopular={true}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* All Models Grid */}
            <div>
              {(selectedProvider !== "all" || searchQuery !== "" || popularModels.length === 0) && (
                <h3 className="text-xs font-semibold text-foreground mb-2">
                  {searchQuery ? "Search Results" : selectedProvider === "all" ? "All Models" : `${selectedProvider} Models`}
                </h3>
              )}
              {selectedProvider === "all" && searchQuery === "" && popularModels.length > 0 && (
                <h3 className="text-xs font-semibold text-foreground mb-2">Other Models</h3>
              )}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {filteredModels
                  .filter(model => 
                    selectedProvider !== "all" || searchQuery !== "" || !POPULAR_MODELS.includes(model.id)
                  )
                  .map((model) => (
                    <CompactModelCard
                      key={model.id}
                      model={model}
                      onToggle={onToggleModel}
                      isPopular={POPULAR_MODELS.includes(model.id)}
                    />
                  ))}
              </div>
              {filteredModels.length === 0 && (
                <div className="text-center py-4 text-muted-foreground text-sm">
                  No models found matching your criteria
                </div>
              )}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

interface CompactModelCardProps {
  model: Model;
  onToggle: (modelId: string) => void;
  isPopular?: boolean;
}

function CompactModelCard({ model, onToggle, isPopular }: CompactModelCardProps) {
  return (
    <button
      onClick={() => onToggle(model.id)}
      className={cn(
        "group relative p-3 rounded-lg border-2 transition-all duration-200",
        "hover:-translate-x-0.5 hover:-translate-y-0.5",
        model.selected
          ? "bg-primary text-primary-foreground border-foreground shadow-brutal"
          : "bg-card border-foreground hover:bg-muted"
      )}
    >
      <div className="flex items-start justify-between">
        <div className="text-left flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <div className={cn(
              "font-medium text-xs truncate",
              model.selected ? "text-primary-foreground" : "text-foreground"
            )}>
              {model.name}
            </div>
            {isPopular && (
              <Star className={cn(
                "h-3 w-3 flex-shrink-0",
                model.selected ? "text-primary-foreground" : "text-primary"
              )} />
            )}
          </div>
          <div className={cn(
            "text-xs mt-0.5 truncate",
            model.selected ? "text-primary-foreground/80" : "text-muted-foreground"
          )}>
            {model.provider}
          </div>
          {model.id.includes(":free") && (
            <span className={cn(
              "inline-block text-xs px-1 py-0.5 rounded mt-1 font-medium",
              model.selected 
                ? "bg-primary-foreground/20 text-primary-foreground" 
                : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            )}>
              FREE
            </span>
          )}
        </div>
        <div className={cn(
          "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 ml-2",
          model.selected
            ? "bg-primary-foreground border-primary-foreground"
            : "border-muted-foreground/30 group-hover:border-primary/50"
        )}>
          {model.selected && (
            <Check className="w-2.5 h-2.5 text-primary" />
          )}
        </div>
      </div>
    </button>
  );
}