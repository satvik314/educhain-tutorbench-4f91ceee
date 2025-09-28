import React, { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface LatexRendererProps {
  text: string;
}

export function LatexRenderer({ text }: LatexRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current || !text) return;
    
    // Clear previous content
    containerRef.current.innerHTML = '';
    
    // Combined pattern to find all math expressions
    const combinedPattern = /(\$\$.*?\$\$|\\\[.*?\\\]|\$.*?\$|\\\(.*?\\\))/gs;
    
    let lastIndex = 0;
    let match;
    const fragments: (string | { type: 'math', content: string, display: boolean })[] = [];
    
    const matches = text.matchAll(combinedPattern);
    
    for (match of matches) {
      const [fullMatch] = match;
      const index = match.index || 0;
      
      // Add text before the match
      if (index > lastIndex) {
        fragments.push(text.slice(lastIndex, index));
      }
      
      // Determine the type of math expression
      if (fullMatch.startsWith('$$') && fullMatch.endsWith('$$')) {
        // Block math with $$
        const math = fullMatch.slice(2, -2).trim();
        fragments.push({ type: 'math', content: math, display: true });
      } else if (fullMatch.startsWith('\\[') && fullMatch.endsWith('\\]')) {
        // Block math with \[ \]
        const math = fullMatch.slice(2, -2).trim();
        fragments.push({ type: 'math', content: math, display: true });
      } else if (fullMatch.startsWith('$') && fullMatch.endsWith('$')) {
        // Inline math with $
        const math = fullMatch.slice(1, -1).trim();
        fragments.push({ type: 'math', content: math, display: false });
      } else if (fullMatch.startsWith('\\(') && fullMatch.endsWith('\\)')) {
        // Inline math with \( \)
        const math = fullMatch.slice(2, -2).trim();
        fragments.push({ type: 'math', content: math, display: false });
      }
      
      lastIndex = index + fullMatch.length;
    }
    
    // Add any remaining text
    if (lastIndex < text.length) {
      fragments.push(text.slice(lastIndex));
    }
    
    // Render fragments
    fragments.forEach(fragment => {
      if (typeof fragment === 'string') {
        const textNode = document.createTextNode(fragment);
        containerRef.current?.appendChild(textNode);
      } else {
        const span = document.createElement(fragment.display ? 'div' : 'span');
        if (fragment.display) {
          span.className = 'my-4 overflow-x-auto text-center';
        } else {
          span.className = 'inline-block mx-1';
        }
        try {
          katex.render(fragment.content, span, {
            throwOnError: false,
            displayMode: fragment.display,
          });
        } catch (e) {
          span.textContent = fragment.content;
        }
        containerRef.current?.appendChild(span);
      }
    });
  }, [text]);
  
  return <div ref={containerRef} className="katex-content" />;
}