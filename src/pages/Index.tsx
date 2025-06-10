
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, ArrowRight, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ModuleCard } from "@/components/learning/ModuleCard";

interface IndexProps {
  onOpenAuth: () => void;
}

const Index = ({ onOpenAuth }: IndexProps) => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const { toast } = useToast();

  // Mock modules data
  const modules = [
    {
      id: "conversational-ai",
      title: "Conversational AI",
      description: "Master productive conversations with AI assistants",
      chapters: 8,
      completedChapters: 0,
      estimatedTime: "2-3 hours",
      difficulty: "Beginner" as const,
      content: [
        {
          id: "intro",
          title: "Introduction to Conversational AI",
          content: `# Welcome to Conversational AI

Conversational AI is the foundation of modern AI interaction. Whether you're using ChatGPT, Claude, or any other AI assistant, understanding how to communicate effectively will dramatically improve your results.

## What You'll Learn
- How to structure effective prompts
- Understanding context and conversation flow
- Advanced techniques for better responses
- Real-world applications and examples

Let's start your journey to becoming an AI conversation expert!`
        },
        {
          id: "basics",
          title: "Prompt Engineering Fundamentals",
          content: `# Prompt Engineering Fundamentals

The art of crafting effective prompts is the key to getting great results from AI.

## Key Principles

### 1. Be Clear and Specific
Instead of: "Help me write"
Try: "Help me write a professional email to a client explaining a project delay"

### 2. Provide Context
Always give the AI enough background information to understand your needs.

### 3. Use Examples
Show the AI what you want by providing examples of the desired output.

## Practice Exercise
Try crafting a prompt for planning a weekend trip to a new city. Include your interests, budget, and travel style.`
        }
      ]
    },
    {
      id: "prompt-engineering",
      title: "Advanced Prompt Engineering",
      description: "Deep dive into sophisticated prompting techniques",
      chapters: 6,
      completedChapters: 0,
      estimatedTime: "1.5-2 hours",
      difficulty: "Intermediate" as const,
      isLocked: true
    },
    {
      id: "ai-tools",
      title: "AI Tools Mastery",
      description: "Learn to use various AI tools effectively",
      chapters: 10,
      completedChapters: 0,
      estimatedTime: "3-4 hours",
      difficulty: "Beginner" as const,
      isLocked: true
    }
  ];

  const handleModuleClick = (moduleId: string) => {
    const module = modules.find(m => m.id === moduleId);
    if (module && !module.isLocked) {
      setSelectedModule(moduleId);
    }
  };

  const handleBackToModules = () => {
    setSelectedModule(null);
  };

  const selectedModuleData = modules.find(m => m.id === selectedModule);

  if (selectedModule && selectedModuleData) {
    return (
      <div className="min-h-screen bg-background">
        {/* Simple Navigation */}
        <nav className="border-b">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Brain className="h-8 w-8 text-primary" />
                <span className="ml-2 text-2xl font-bold">AI101</span>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleBackToModules} variant="outline">
                  Back to Modules
                </Button>
                <Button onClick={onOpenAuth} variant="outline">
                  Login to Save Progress
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Module Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{selectedModuleData.title}</h1>
            <p className="text-muted-foreground">{selectedModuleData.description}</p>
          </div>

          {selectedModuleData.content?.map((chapter, index) => (
            <Card key={chapter.id} className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded">
                    Chapter {index + 1}
                  </span>
                  {chapter.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none">
                  {chapter.content.split('\n').map((line, i) => {
                    if (line.startsWith('# ')) {
                      return <h1 key={i} className="text-2xl font-bold mb-4">{line.slice(2)}</h1>;
                    }
                    if (line.startsWith('## ')) {
                      return <h2 key={i} className="text-xl font-semibold mb-3 mt-6">{line.slice(3)}</h2>;
                    }
                    if (line.startsWith('### ')) {
                      return <h3 key={i} className="text-lg font-medium mb-2 mt-4">{line.slice(4)}</h3>;
                    }
                    if (line.trim() === '') {
                      return <br key={i} />;
                    }
                    return <p key={i} className="mb-2">{line}</p>;
                  })}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Progress Save Prompt */}
          <Card className="bg-muted">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Ready to track your progress?</h3>
                <p className="text-muted-foreground mb-4">
                  Sign up to save your progress and unlock interactive features
                </p>
                <Button onClick={onOpenAuth}>
                  Create Free Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Navigation */}
      <nav className="border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold">AI101</span>
            </div>
            <Button onClick={onOpenAuth} variant="outline">
              Login
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Clean and Focused */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Learn AI.<br />
            <span className="text-primary">Simply.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The easiest way to understand and use AI tools. No technical background required.
          </p>
        </div>
      </div>

      {/* Available Modules */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
          <p className="text-muted-foreground">Browse our modules and start reading immediately. No signup required.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              {...module}
              onClick={() => handleModuleClick(module.id)}
            />
          ))}
        </div>
      </div>

      {/* Simple CTA */}
      <div className="bg-muted py-16">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Track Your Progress?
          </h2>
          <p className="text-muted-foreground mb-8">
            Create a free account to save your progress and unlock interactive features
          </p>
          <Button 
            size="lg" 
            onClick={onOpenAuth}
          >
            Create Free Account
          </Button>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer className="border-t py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Brain className="h-6 w-6 text-primary" />
              <span className="ml-2 font-semibold">AI101</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Making AI accessible to everyone
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
