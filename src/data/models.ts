import { Model } from "@/components/ModelSelector";

export const availableModels: Model[] = [
  // OpenAI Models
  {
    id: "openai/gpt-5",
    name: "GPT-5",
    provider: "OpenAI",
    contextLength: 200000,
    selected: true,
  },
  {
    id: "openai/gpt-oss-120b:free",
    name: "GPT OSS 120B (Free)",
    provider: "OpenAI",
    contextLength: 128000,
    selected: false,
  },
  
  // Anthropic Models
  {
    id: "anthropic/claude-sonnet-4",
    name: "Claude Sonnet 4",
    provider: "Anthropic",
    contextLength: 200000,
    selected: true,
  },
  
  // Google Models
  {
    id: "google/gemini-2.5-pro",
    name: "Gemini 2.5 Pro",
    provider: "Google",
    contextLength: 2097152,
    selected: true,
  },
  {
    id: "google/gemini-2.5-flash-preview-09-2025",
    name: "Gemini 2.5 Flash Preview",
    provider: "Google",
    contextLength: 1048576,
    selected: true,
  },
  
  // DeepSeek Models
  {
    id: "deepseek/deepseek-v3.1-terminus",
    name: "DeepSeek V3.1 Terminus",
    provider: "DeepSeek",
    contextLength: 128000,
    selected: true,
  },
  
  // Qwen Models
  {
    id: "qwen/qwen3-max",
    name: "Qwen3 Max",
    provider: "Qwen",
    contextLength: 32768,
    selected: false,
  },
  
  // X.AI Models
  {
    id: "x-ai/grok-4-fast:free",
    name: "Grok 4 Fast (Free)",
    provider: "X.AI",
    contextLength: 128000,
    selected: false,
  },
];