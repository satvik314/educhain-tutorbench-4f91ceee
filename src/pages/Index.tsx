import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { ApiKeyInput } from "@/components/ApiKeyInput";
import { ModelSelector } from "@/components/ModelSelector";
import { PromptInput } from "@/components/PromptInput";
import { ModelResponse } from "@/components/ModelResponse";
import { availableModels } from "@/data/models";
import { useOpenRouter } from "@/hooks/useOpenRouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

const Index = () => {
  const [apiKey, setApiKey] = useState(() => 
    localStorage.getItem("openrouter_api_key") || ""
  );
  const [models, setModels] = useState(availableModels);
  const [showBenchmark, setShowBenchmark] = useState(false);
  const { responses, isLoading, testModels } = useOpenRouter();

  useEffect(() => {
    if (apiKey) {
      localStorage.setItem("openrouter_api_key", apiKey);
    }
  }, [apiKey]);

  const handleToggleModel = (modelId: string) => {
    setModels(prev => 
      prev.map(model => 
        model.id === modelId 
          ? { ...model, selected: !model.selected }
          : model
      )
    );
  };

  const handleSelectAll = () => {
    setModels(prev => prev.map(model => ({ ...model, selected: true })));
  };

  const handleDeselectAll = () => {
    setModels(prev => prev.map(model => ({ ...model, selected: false })));
  };

  const handleSubmitPrompt = async (prompt: string) => {
    const selectedModels = models.filter(m => m.selected).map(m => m.id);
    await testModels(prompt, selectedModels, apiKey);
  };

  const scrollToBenchmark = () => {
    setShowBenchmark(true);
    setTimeout(() => {
      document.getElementById('benchmark-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const selectedModels = models.filter(m => m.selected);
  const hasResponses = Object.keys(responses).length > 0;

  return (
    <div className="min-h-screen gradient-peach relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern"></div>
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-16 pb-24 max-w-6xl">
          <div className="text-center space-y-6 animate-slide-down">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border-2 border-border shadow-brutal-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">AI-Powered Education Platform</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Reimagine Education
              <br />
              <span className="text-gray-600">with AI</span>
            </h1>
            
            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl text-primary font-bold">
              Teaching Made Easy
            </h2>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Generate educational content in seconds with our AI platform. From MCQs to lesson plans - transform your teaching experience.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button 
                onClick={scrollToBenchmark}
                variant="brutal"
                size="lg"
                className="group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="brutal-white"
                size="lg"
                onClick={() => window.open('/why-pteb', '_blank')}
              >
                Explore Features
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Benchmark Section */}
        {showBenchmark && (
          <div id="benchmark-section" className="container mx-auto px-4 py-16 max-w-7xl animate-slide-up">
            <div className="space-y-8">
              {/* Section Title */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Test AI Teaching Effectiveness
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Compare how different AI models respond to educational prompts
                </p>
              </div>
              
              {/* Benchmark Tools */}
              <div className="space-y-6">
                {/* API Key Section */}
                <div className="brutal-card p-6">
                  <ApiKeyInput 
                    apiKey={apiKey} 
                    onApiKeyChange={setApiKey}
                  />
                </div>
                
                {/* Model Selection */}
                <div className="brutal-card p-6">
                  <ModelSelector
                    models={models}
                    onToggleModel={handleToggleModel}
                    onSelectAll={handleSelectAll}
                    onDeselectAll={handleDeselectAll}
                  />
                </div>
                
                {/* Prompt Input */}
                <div className="brutal-card p-6">
                  <PromptInput
                    onSubmit={handleSubmitPrompt}
                    isLoading={isLoading}
                    selectedModelsCount={selectedModels.length}
                  />
                </div>
                
                {/* Responses Grid */}
                {hasResponses && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                      Model Responses
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {selectedModels.map((model) => {
                        const response = responses[model.id];
                        return (
                          <div key={model.id} className="brutal-card p-4">
                            <ModelResponse
                              modelName={model.name}
                              provider={model.provider}
                              response={response?.response}
                              responseTime={response?.responseTime}
                              isLoading={isLoading && !response?.response && !response?.error}
                              error={response?.error}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
