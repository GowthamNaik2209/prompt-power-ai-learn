
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Play, Copy, Zap, Brain, Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const PromptPlayground = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const examplePrompts = [
    {
      title: "Email Writing Assistant",
      prompt: "You are a professional email writing assistant. Help me write a polite follow-up email to a client who hasn't responded to my proposal in 2 weeks. Keep it professional but friendly.",
      category: "Business"
    },
    {
      title: "Creative Story Starter",
      prompt: "You are a creative writing mentor. Give me an intriguing opening paragraph for a mystery novel set in a small coastal town where the lighthouse keeper has disappeared.",
      category: "Creative"
    },
    {
      title: "Learning Explanation",
      prompt: "You are an expert teacher. Explain the concept of machine learning to a 12-year-old using simple analogies and examples they can relate to.",
      category: "Education"
    }
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Please enter a prompt",
        description: "Type something in the prompt area to get started.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI response generation
    setTimeout(() => {
      const mockResponse = `This is a simulated AI response to your prompt. In the full version of AI101, this would connect to a real AI model to generate actual responses.

Your prompt: "${prompt.substring(0, 100)}${prompt.length > 100 ? '...' : ''}"

This playground helps you practice prompt engineering techniques you've learned in the modules. Try different approaches:
• Be specific about the role you want the AI to play
• Provide clear context and examples
• Specify the format you want for the response
• Use follow-up questions to refine the output

Keep experimenting with different prompts to see how small changes can lead to dramatically different results!`;
      
      setResponse(mockResponse);
      setIsGenerating(false);
    }, 2000);
  };

  const handleCopyPrompt = (promptText: string) => {
    setPrompt(promptText);
    toast({
      title: "Prompt copied!",
      description: "The example prompt has been loaded into the playground.",
    });
  };

  const handleCopyResponse = () => {
    navigator.clipboard.writeText(response);
    toast({
      title: "Response copied!",
      description: "The AI response has been copied to your clipboard.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Brain className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Prompt Playground</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Practice and experiment with AI prompts in real-time. Test what you've learned 
          in the modules and discover how different approaches affect AI responses.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Example Prompts Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Example Prompts
              </CardTitle>
              <CardDescription>
                Try these examples to get started
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {examplePrompts.map((example, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">{example.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      {example.category}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-3">
                    {example.prompt}
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full"
                    onClick={() => handleCopyPrompt(example.prompt)}
                  >
                    <Copy className="h-3 w-3 mr-1" />
                    Use This Prompt
                  </Button>
                  {index < examplePrompts.length - 1 && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Playground */}
        <div className="lg:col-span-2 space-y-6">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Your Prompt
              </CardTitle>
              <CardDescription>
                Enter your prompt below and see how the AI responds
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Type your prompt here... For example: 'You are a helpful cooking assistant. Help me plan a healthy meal for dinner using ingredients I have in my fridge: chicken, broccoli, rice, and soy sauce.'"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={6}
                className="resize-none"
              />
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {prompt.length} characters
                </span>
                <Button onClick={handleGenerate} disabled={isGenerating}>
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Generate Response
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI Response
                </span>
                {response && (
                  <Button size="sm" variant="outline" onClick={handleCopyResponse}>
                    <Copy className="h-3 w-3 mr-1" />
                    Copy
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {response ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <pre className="whitespace-pre-wrap text-sm text-gray-800 font-sans">
                      {response}
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Brain className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Enter a prompt above and click "Generate Response" to see AI output</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
