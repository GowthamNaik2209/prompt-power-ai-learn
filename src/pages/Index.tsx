
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, Users, Zap, Mail, Check } from "lucide-react";
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
        description: "We'll notify you when AI101 launches. Check your email for updates.",
      });
    }
  };

  const features = [
    {
      icon: BookOpen,
      title: "Module-Based Learning",
      description: "Structured courses from absolute beginner to advanced AI applications"
    },
    {
      icon: Brain,
      title: "Interactive Playground",
      description: "Test and experiment with AI prompts in real-time"
    },
    {
      icon: Users,
      title: "Practical Focus",
      description: "Learn by doing with real-world examples and use cases"
    },
    {
      icon: Zap,
      title: "Beginner Friendly",
      description: "No technical background required - we start from zero"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">AI101</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <Button onClick={onOpenAuth} className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Master AI<br />
            <span className="text-blue-600">Without the Complexity</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The most trusted, simplest, and practical online learning platform for Artificial Intelligence. 
            Learn to confidently apply AI tools in your daily life and work.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
              onClick={onOpenAuth}
            >
              Start Learning Free
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Join 1,000+ people learning AI the right way
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose AI101?
          </h2>
          <p className="text-xl text-gray-600">
            Inspired by Zerodha Varsity's philosophy of making complex topics simple
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Coming Soon Module Preview */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You'll Learn
            </h2>
            <p className="text-xl text-gray-600">
              Starting with our flagship module: Mastering Conversational AI
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-600">Module 2: Mastering Conversational AI</CardTitle>
              <CardDescription className="text-lg">
                Learn to have productive conversations with AI assistants like ChatGPT, Claude, and more
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">What You'll Master:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Prompt engineering fundamentals</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Context and conversation flow</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Role-based prompting</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Advanced techniques</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Interactive Features:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><Check className="w-4 h-4 text-blue-500 mr-2" />Prompt Playground</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-blue-500 mr-2" />Real-world examples</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-blue-500 mr-2" />Copy-paste templates</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-blue-500 mr-2" />Progress tracking</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of learners who are mastering AI without the complexity
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={onOpenAuth}
          >
            Start Learning for Free
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-2xl font-bold">AI101</span>
              </div>
              <p className="text-gray-400 mb-4">
                Making AI accessible to everyone. Learn, apply, and master artificial intelligence 
                without the technical complexity.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Modules</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Playground</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI101. All rights reserved. Making AI education accessible to all.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
