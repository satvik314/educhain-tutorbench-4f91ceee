import { useState, useEffect } from "react";
import { Copy, Check, Clock, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { LatexRenderer } from "./LatexRenderer";

interface ModelResponseProps {
  modelName: string;
  provider: string;
  response?: string;
  responseTime?: number;
  isLoading: boolean;
  error?: string;
}

export function ModelResponse({ 
  modelName, 
  provider, 
  response, 
  responseTime, 
  isLoading, 
  error 
}: ModelResponseProps) {
  const [copied, setCopied] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (response && !isLoading) {
      setIsTyping(true);
      setDisplayedText("");
      let index = 0;
      const typingSpeed = 10; // ms per character
      
      const typeInterval = setInterval(() => {
        if (index < response.length) {
          setDisplayedText(response.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, typingSpeed);

      return () => clearInterval(typeInterval);
    }
  }, [response, isLoading]);

  const handleCopy = () => {
    if (response) {
      navigator.clipboard.writeText(response);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={cn(
      "h-full transition-all duration-300",
      isLoading ? "opacity-80" : 
      error ? "border-destructive/50" : 
      ""
    )}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-bold text-lg">{modelName}</h4>
          <p className="text-sm text-muted-foreground">{provider}</p>
        </div>
        <div className="flex items-center gap-2">
          {responseTime && (
            <div className="badge-orange text-xs">
              <Clock className="h-3 w-3" />
              {responseTime.toFixed(2)}s
            </div>
          )}
          {response && (
            <Button
              variant="outline"
              size="icon"
              onClick={handleCopy}
              className="h-8 w-8"
            >
              {copied ? (
                <Check className="h-4 w-4 text-primary" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      </div>

      <div className="relative min-h-[120px] bg-secondary/30 rounded-sm border-2 border-border p-4">
        {isLoading && (
          <div className="flex items-center justify-center h-[100px]">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        )}
        
        {error && (
          <div className="flex items-start gap-2 text-destructive">
            <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm">{error}</p>
          </div>
        )}
        
        {response && !error && !isLoading && (
          <div className="prose prose-sm max-w-none">
            <div className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground">
              <LatexRenderer text={displayedText} />
              {isTyping && <span className="text-primary animate-pulse">▊</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}