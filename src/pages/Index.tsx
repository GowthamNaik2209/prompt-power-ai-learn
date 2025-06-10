
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, ArrowRight, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface IndexProps {
  onOpenAuth: () => void;
}

const Index = ({ onOpenAuth }: IndexProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Thank you for your interest!",
        description: "We'll notify you when AI101 launches.",
      });
    }
  };

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
              Get Started
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-sm mx-auto">
            <Button 
              size="lg" 
              className="flex-1"
              onClick={onOpenAuth}
            >
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* What You'll Learn - Simplified */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What You'll Master</h2>
          <p className="text-muted-foreground">Starting with our flagship module</p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              <div>
                <CardTitle className="text-left">Conversational AI</CardTitle>
                <CardDescription className="text-left">
                  Master productive conversations with AI assistants
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-2">
              <div className="flex items-center text-sm">
                <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                Prompt engineering fundamentals
              </div>
              <div className="flex items-center text-sm">
                <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                Context and conversation flow
              </div>
              <div className="flex items-center text-sm">
                <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                Real-world examples and templates
              </div>
              <div className="flex items-center text-sm">
                <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                Interactive practice playground
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Simple CTA */}
      <div className="bg-muted py-16">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join others who are learning AI the simple way
          </p>
          <Button 
            size="lg" 
            onClick={onOpenAuth}
          >
            Begin Your Journey
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
