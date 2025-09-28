import { useState, useEffect, useMemo } from "react";
import { Copy, Check, Clock, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import 'katex/dist/katex.min.css';
import { parseLatexContent } from '@/utils/latexParser';

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
      "glass-card rounded-xl p-6 border transition-all duration-300 animate-slide-up",
      isLoading ? "border-secondary/50 shadow-glow-cyan" : 
      error ? "border-destructive/50" : 
      "border-primary/20 hover:border-primary/40"
    )}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-foreground">{modelName}</h3>
          <p className="text-xs text-muted-foreground mt-1">{provider}</p>
        </div>
        <div className="flex items-center gap-2">
          {responseTime && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {responseTime.toFixed(2)}s
            </div>
          )}
          {response && (
            <Button
              variant="ghost"
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

      <div className="relative min-h-[100px]">
        {isLoading && (
          <div className="flex items-center justify-center h-[100px]">
            <Loader2 className="h-6 w-6 animate-spin text-secondary" />
          </div>
        )}
        
        {error && (
          <div className="flex items-start gap-2 text-destructive">
            <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm">{error}</p>
          </div>
        )}
        
        {response && !error && !isLoading && (
          <div className="prose prose-sm max-w-none text-foreground/90">
            <div className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
              {useMemo(() => parseLatexContent(displayedText), [displayedText])}
              {isTyping && <span className="animate-pulse">▊</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}