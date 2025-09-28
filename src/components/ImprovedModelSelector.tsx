import { useState, useMemo } from "react";
import { Check, Sparkles, Search, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Model } from "./ModelSelector";

interface ImprovedModelSelectorProps {
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

export function ImprovedModelSelector({ 
  models, 
  onToggleModel, 
  onSelectAll, 
  onDeselectAll 
}: ImprovedModelSelectorProps) {
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

  return (
    <div className="brutal-card p-6 animate-fade-in">
      {/* Header */}
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

      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search models..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 brutal-input"
        />
      </div>

      {/* Provider Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {providers.map((provider) => (
          <button
            key={provider}
            onClick={() => setSelectedProvider(provider)}
            className={cn(
              "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200",
              "border-2 hover:-translate-x-0.5 hover:-translate-y-0.5",
              selectedProvider === provider
                ? "bg-primary text-primary-foreground border-foreground shadow-brutal"
                : "bg-card border-foreground hover:bg-muted"
            )}
          >
            {provider === "all" ? "All Providers" : provider}
            {provider !== "all" && (
              <span className="ml-2 text-xs opacity-70">
                ({models.filter(m => m.provider === provider).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Popular Models Section */}
      {selectedProvider === "all" && popularModels.length > 0 && searchQuery === "" && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Star className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">Popular Models</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {popularModels.map((model) => (
              <ModelCard
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
        {(selectedProvider !== "all" || searchQuery !== "") && (
          <h3 className="text-sm font-semibold text-foreground mb-3">
            {searchQuery ? "Search Results" : `${selectedProvider} Models`}
          </h3>
        )}
        {selectedProvider === "all" && searchQuery === "" && popularModels.length > 0 && (
          <h3 className="text-sm font-semibold text-foreground mb-3">All Models</h3>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredModels.map((model) => (
            <ModelCard
              key={model.id}
              model={model}
              onToggle={onToggleModel}
              isPopular={POPULAR_MODELS.includes(model.id)}
            />
          ))}
        </div>
        {filteredModels.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No models found matching your criteria
          </div>
        )}
      </div>
    </div>
  );
}

interface ModelCardProps {
  model: Model;
  onToggle: (modelId: string) => void;
  isPopular?: boolean;
}

function ModelCard({ model, onToggle, isPopular }: ModelCardProps) {
  return (
    <button
      onClick={() => onToggle(model.id)}
      className={cn(
        "group relative p-4 rounded-lg border-2 transition-all duration-200",
        "hover:-translate-x-0.5 hover:-translate-y-0.5",
        model.selected
          ? "bg-primary text-primary-foreground border-foreground shadow-brutal hover:shadow-brutal-hover"
          : "bg-card border-foreground hover:bg-muted"
      )}
    >
      <div className="flex items-start justify-between">
        <div className="text-left flex-1">
          <div className="flex items-center gap-2">
            <div className={cn(
              "font-medium text-sm",
              model.selected ? "text-primary-foreground" : "text-foreground"
            )}>
              {model.name}
            </div>
            {isPopular && (
              <Star className={cn(
                "h-3 w-3",
                model.selected ? "text-primary-foreground" : "text-primary"
              )} />
            )}
            {model.id.includes(":free") && (
              <span className={cn(
                "text-xs px-1.5 py-0.5 rounded font-medium",
                model.selected 
                  ? "bg-primary-foreground/20 text-primary-foreground" 
                  : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              )}>
                FREE
              </span>
            )}
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
          "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200",
          model.selected
            ? "bg-primary-foreground border-primary-foreground"
            : "border-muted-foreground/30 group-hover:border-primary/50"
        )}>
          {model.selected && (
            <Check className="w-3 h-3 text-primary" />
          )}
        </div>
      </div>
    </button>
  );
}