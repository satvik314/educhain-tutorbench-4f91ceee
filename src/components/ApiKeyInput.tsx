import { useState } from "react";
import { Key, Eye, EyeOff, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface ApiKeyInputProps {
  apiKey: string;
  onApiKeyChange: (key: string) => void;
}

export function ApiKeyInput({ apiKey, onApiKeyChange }: ApiKeyInputProps) {
  const [showKey, setShowKey] = useState(false);
  const [localKey, setLocalKey] = useState(apiKey);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    onApiKeyChange(localKey);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="glass-card rounded-xl p-4 border-primary/20 animate-fade-in">
      <div className="flex items-center gap-2 mb-3">
        <Key className="h-4 w-4 text-primary" />
        <h3 className="text-sm font-medium text-foreground">OpenRouter API Key</h3>
      </div>
      
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Input
            type={showKey ? "text" : "password"}
            value={localKey}
            onChange={(e) => setLocalKey(e.target.value)}
            placeholder="sk-or-..."
            className="pr-10 bg-input/50 border-border/50 focus:border-primary/50 font-mono text-xs"
          />
          <button
            onClick={() => setShowKey(!showKey)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        <Button
          onClick={handleSave}
          variant={saved ? "secondary" : "glass"}
          size="sm"
          className="min-w-[80px]"
        >
          {saved ? (
            <>
              <Check className="mr-1 h-3 w-3" />
              Saved
            </>
          ) : (
            "Save"
          )}
        </Button>
      </div>
      
      {!apiKey && (
        <p className="text-xs text-muted-foreground mt-2">
          Get your API key from{" "}
          <a 
            href="https://openrouter.ai/keys" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            OpenRouter
          </a>
        </p>
      )}
    </div>
  );
}