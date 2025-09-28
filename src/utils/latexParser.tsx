import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export function parseLatexContent(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  
  // Regex patterns for LaTeX delimiters
  const blockMathPattern = /\$\$(.*?)\$\$/gs;
  const displayMathPattern = /\\\[(.*?)\\\]/gs;
  const inlineMathPattern = /\$(.*?)\$/g;
  const inlineMathPattern2 = /\\\((.*?)\\\)/g;
  
  // Combined pattern to find all math expressions
  const combinedPattern = /(\$\$.*?\$\$|\\\[.*?\\\]|\$.*?\$|\\\(.*?\\\))/gs;
  
  let lastIndex = 0;
  let match;
  let key = 0;
  
  const matches = text.matchAll(combinedPattern);
  
  for (match of matches) {
    const [fullMatch] = match;
    const index = match.index || 0;
    
    // Add text before the match
    if (index > lastIndex) {
      parts.push(
        <span key={`text-${key++}`}>
          {text.slice(lastIndex, index)}
        </span>
      );
    }
    
    // Determine the type of math expression and render accordingly
    if (fullMatch.startsWith('$$') && fullMatch.endsWith('$$')) {
      // Block math with $$
      const math = fullMatch.slice(2, -2).trim();
      parts.push(
        <div key={`block-${key++}`} className="my-4 overflow-x-auto">
          <BlockMath math={math} />
        </div>
      );
    } else if (fullMatch.startsWith('\\[') && fullMatch.endsWith('\\]')) {
      // Block math with \[ \]
      const math = fullMatch.slice(2, -2).trim();
      parts.push(
        <div key={`block-${key++}`} className="my-4 overflow-x-auto">
          <BlockMath math={math} />
        </div>
      );
    } else if (fullMatch.startsWith('$') && fullMatch.endsWith('$')) {
      // Inline math with $
      const math = fullMatch.slice(1, -1).trim();
      parts.push(
        <InlineMath key={`inline-${key++}`} math={math} />
      );
    } else if (fullMatch.startsWith('\\(') && fullMatch.endsWith('\\)')) {
      // Inline math with \( \)
      const math = fullMatch.slice(2, -2).trim();
      parts.push(
        <InlineMath key={`inline-${key++}`} math={math} />
      );
    }
    
    lastIndex = index + fullMatch.length;
  }
  
  // Add any remaining text
  if (lastIndex < text.length) {
    parts.push(
      <span key={`text-${key++}`}>
        {text.slice(lastIndex)}
      </span>
    );
  }
  
  return parts.length > 0 ? parts : [<span key="text-0">{text}</span>];
}