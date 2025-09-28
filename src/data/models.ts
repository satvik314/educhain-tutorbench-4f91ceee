import { Model } from "@/components/ModelSelector";

export const availableModels: Model[] = [
  // OpenAI Models
  {
    id: "openai/gpt-4-turbo",
    name: "GPT-4 Turbo",
    provider: "OpenAI",
    contextLength: 128000,
    selected: true,
  },
  {
    id: "openai/gpt-4o",
    name: "GPT-4o",
    provider: "OpenAI",
    contextLength: 128000,
    selected: true,
  },
  {
    id: "openai/gpt-3.5-turbo",
    name: "GPT-3.5 Turbo",
    provider: "OpenAI",
    contextLength: 16385,
    selected: false,
  },
  
  // Anthropic Models
  {
    id: "anthropic/claude-3-opus",
    name: "Claude 3 Opus",
    provider: "Anthropic",
    contextLength: 200000,
    selected: true,
  },
  {
    id: "anthropic/claude-3-sonnet",
    name: "Claude 3 Sonnet",
    provider: "Anthropic",
    contextLength: 200000,
    selected: true,
  },
  {
    id: "anthropic/claude-3-haiku",
    name: "Claude 3 Haiku",
    provider: "Anthropic",
    contextLength: 200000,
    selected: false,
  },
  
  // Google Models
  {
    id: "google/gemini-pro",
    name: "Gemini Pro",
    provider: "Google",
    contextLength: 32760,
    selected: true,
  },
  {
    id: "google/gemini-pro-1.5",
    name: "Gemini Pro 1.5",
    provider: "Google",
    contextLength: 1048576,
    selected: false,
  },
  
  // Meta Models
  {
    id: "meta-llama/llama-3-70b-instruct",
    name: "Llama 3 70B",
    provider: "Meta",
    contextLength: 8192,
    selected: false,
  },
  {
    id: "meta-llama/llama-3-8b-instruct",
    name: "Llama 3 8B",
    provider: "Meta",
    contextLength: 8192,
    selected: false,
  },
  
  // Mistral Models
  {
    id: "mistralai/mistral-large",
    name: "Mistral Large",
    provider: "Mistral",
    contextLength: 32000,
    selected: false,
  },
  {
    id: "mistralai/mixtral-8x7b-instruct",
    name: "Mixtral 8x7B",
    provider: "Mistral",
    contextLength: 32768,
    selected: false,
  },
];