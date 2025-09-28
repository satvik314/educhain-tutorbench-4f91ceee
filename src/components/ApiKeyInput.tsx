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
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="inline-block w-3 h-3 bg-primary rounded-full animate-pulse"></div>
        <h3 className="text-2xl font-bold">API Configuration</h3>
      </div>
      
      <div className="space-y-3">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Input
              type={showKey ? "text" : "password"}
              value={localKey}
              onChange={(e) => setLocalKey(e.target.value)}
              placeholder="Enter your OpenRouter API key..."
              className="h-12 px-4 pr-10 font-mono text-sm bg-card border-2 border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            />
            <button
              onClick={() => setShowKey(!showKey)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-secondary rounded-sm transition-colors"
            >
              {showKey ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}
            </button>
          </div>
          <Button
            onClick={handleSave}
            variant={saved ? "secondary" : "brutal"}
            size="lg"
            className="min-w-[100px]"
          >
            {saved ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Saved
              </>
            ) : (
              "Save Key"
            )}
          </Button>
        </div>
        
        {!apiKey && (
          <p className="text-sm text-muted-foreground">
            Get your API key from{" "}
            <a 
              href="https://openrouter.ai/keys" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              OpenRouter
            </a>
          </p>
        )}
      </div>
    </div>
  );
}