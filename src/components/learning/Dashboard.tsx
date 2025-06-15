
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ModuleCard } from "./ModuleCard";
import { ModuleView } from "./ModuleView";
import { PromptPlayground } from "./PromptPlayground";
import { BookOpen, Brain, Trophy, Target, Play, Users } from "lucide-react";

interface User {
  id: string;
  email: string;
  name: string;
}

interface DashboardProps {
  user: User;
}

export const Dashboard = ({ user }: DashboardProps) => {
  const [currentView, setCurrentView] = useState<"dashboard" | "modules" | "playground" | "module">("dashboard");
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [currentChapter, setCurrentChapter] = useState<number | null>(null);

  const modules = [
    {
      id: "module-1",
      title: "Understanding AI Fundamentals",
      description: "Learn what AI really is and how it impacts your daily life",
      chapters: 4,
      completedChapters: 0,
      estimatedTime: "2 hours",
      difficulty: "Beginner" as const,
      isLocked: false,
      chapterList: [
        { 
          id: 1, 
          title: "What is AI?", 
          duration: "15 min",
          content: "Artificial Intelligence (AI) is a technology that enables machines to think and learn like humans. It exists in many forms in our daily lives - from voice assistants to recommendation systems and smart cameras. AI can process information, recognize patterns, and make decisions based on data."
        },
        { 
          id: 2, 
          title: "History of AI", 
          duration: "20 min",
          content: "AI began in the 1950s when Alan Turing proposed the 'Turing Test'. Over time, AI has had many ups and downs, and today we're in the era of machine learning and deep learning. Key milestones include expert systems in the 1980s, the AI winter periods, and the recent breakthrough with neural networks."
        },
        { 
          id: 3, 
          title: "Types of AI", 
          duration: "18 min",
          content: "AI can be categorized into three main types: Narrow AI (for specific tasks), General AI (human-like intelligence), and Super AI (beyond human capabilities). Currently, we're in the era of Narrow AI, where systems excel at specific tasks like image recognition, language translation, or game playing."
        },
        { 
          id: 4, 
          title: "AI Applications", 
          duration: "22 min",
          content: "AI is being used in healthcare for medical diagnosis, in education for personalized learning, in transportation for autonomous vehicles, and in entertainment for content recommendations. Every industry is finding ways to leverage AI to improve efficiency and create new possibilities."
        }
      ]
    },
    {
      id: "module-2",
      title: "Mastering Conversational AI",
      description: "Learn to have productive conversations with AI assistants like ChatGPT",
      chapters: 12,
      completedChapters: 3,
      estimatedTime: "3 hours",
      difficulty: "Beginner" as const,
      isLocked: false,
      chapterList: [
        { 
          id: 1, 
          title: "Introduction to Conversational AI", 
          duration: "25 min",
          content: "Conversational AI represents a breakthrough in how we interact with machines. These systems can understand natural language, maintain context, and provide helpful responses across a wide range of topics."
        },
        { 
          id: 2, 
          title: "Effective Prompting Basics", 
          duration: "30 min",
          content: "The key to getting great results from AI is learning how to communicate effectively. This involves being clear, specific, and providing the right context for your requests."
        }
      ]
    },
    {
      id: "module-3",
      title: "AI Tools for Productivity",
      description: "Discover and master AI tools that can supercharge your workflow",
      chapters: 10,
      completedChapters: 0,
      estimatedTime: "2.5 hours",
      difficulty: "Intermediate" as const,
      isLocked: true,
      chapterList: [
        { 
          id: 1, 
          title: "Overview of AI Productivity Tools", 
          duration: "20 min",
          content: "Coming soon - explore the landscape of AI tools that can enhance your daily productivity."
        }
      ]
    }
  ];

  const totalChapters = modules.reduce((acc, module) => acc + module.chapters, 0);
  const completedChapters = modules.reduce((acc, module) => acc + module.completedChapters, 0);
  const overallProgress = totalChapters > 0 ? (completedChapters / totalChapters) * 100 : 0;

  const handleModuleClick = (moduleId: string) => {
    setSelectedModuleId(moduleId);
    setCurrentView("module");
    setCurrentChapter(null);
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
    setSelectedModuleId(null);
    setCurrentChapter(null);
  };

  const handleBackToModules = () => {
    setCurrentView("modules");
    setSelectedModuleId(null);
    setCurrentChapter(null);
  };

  const handleChapterClick = (chapterId: number) => {
    setCurrentChapter(chapterId === 0 ? null : chapterId);
  };

  const selectedModule = selectedModuleId ? modules.find(m => m.id === selectedModuleId) : null;

  if (currentView === "playground") {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Brain className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900">AI101</span>
              </div>
              <div className="flex items-center space-x-4">
                <Button 
                  variant="ghost" 
                  onClick={() => setCurrentView("dashboard")}
                >
                  Dashboard
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => setCurrentView("modules")}
                >
                  Modules
                </Button>
                <Button 
                  variant="default" 
                  onClick={() => setCurrentView("playground")}
                >
                  Playground
                </Button>
                <div className="text-sm text-gray-600">
                  Welcome, {user.name}!
                </div>
              </div>
            </div>
          </div>
        </nav>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <PromptPlayground />
        </div>
      </div>
    );
  }

  if (currentView === "module" && selectedModule) {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Brain className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900">AI101</span>
              </div>
              <div className="flex items-center space-x-4">
                <Button 
                  variant="ghost" 
                  onClick={() => setCurrentView("dashboard")}
                >
                  Dashboard
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => setCurrentView("modules")}
                >
                  Modules
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => setCurrentView("playground")}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Playground
                </Button>
                <div className="text-sm text-gray-600">
                  Welcome, {user.name}!
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ModuleView 
            module={selectedModule}
            onBack={handleBackToDashboard}
            currentChapter={currentChapter}
            onChapterClick={handleChapterClick}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">AI101</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant={currentView === "dashboard" ? "default" : "ghost"} 
                onClick={() => setCurrentView("dashboard")}
              >
                Dashboard
              </Button>
              <Button 
                variant={currentView === "modules" ? "default" : "ghost"} 
                onClick={() => setCurrentView("modules")}
              >
                Modules
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => setCurrentView("playground")}
              >
                <Play className="h-4 w-4 mr-2" />
                Playground
              </Button>
              <div className="text-sm text-gray-600">
                Welcome, {user.name}!
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === "dashboard" && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Welcome back, {user.name}! 👋
              </h1>
              <p className="text-xl text-gray-600">
                Continue your AI learning journey
              </p>
            </div>

            {/* Progress Overview */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
                  <Trophy className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{Math.round(overallProgress)}%</div>
                  <Progress value={overallProgress} className="mt-2" />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Modules Started</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">of 3 available</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Chapters Completed</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{completedChapters}</div>
                  <p className="text-xs text-muted-foreground">of {totalChapters} total</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">days in a row</p>
                </CardContent>
              </Card>
            </div>

            {/* Continue Learning */}
            <Card>
              <CardHeader>
                <CardTitle>Continue Learning</CardTitle>
                <CardDescription>
                  Pick up where you left off in Module 2: Mastering Conversational AI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Chapter 2.4: Advanced Prompting Techniques</h4>
                    <p className="text-sm text-gray-600">Learn to use role-based prompting and context management</p>
                  </div>
                  <Button onClick={() => handleModuleClick("module-2")}>Continue Learning</Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5" />
                    Try the Prompt Playground
                  </CardTitle>
                  <CardDescription>
                    Practice what you've learned with interactive AI conversations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full" 
                    onClick={() => setCurrentView("playground")}
                  >
                    Open Playground
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Browse All Modules
                  </CardTitle>
                  <CardDescription>
                    Explore all available learning modules and track your progress
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setCurrentView("modules")}
                  >
                    View Modules
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {currentView === "modules" && (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Modules</h1>
              <p className="text-xl text-gray-600">
                Master AI through structured, hands-on learning paths
              </p>
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

            {/* Coming Soon Banner */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">More Modules Coming Soon!</CardTitle>
                <CardDescription className="text-blue-700">
                  We're working on additional modules covering AI image generation, 
                  automation tools, and advanced AI applications. Stay tuned!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-blue-100 text-blue-800">
                  In Development
                </Badge>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
