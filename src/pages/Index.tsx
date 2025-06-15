
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Play, Users, Target, Lightbulb, TrendingUp } from "lucide-react";

interface IndexProps {
  onOpenAuth: () => void;
}

const Index = ({ onOpenAuth }: IndexProps) => {
  const modules = [
    {
      id: 1,
      title: "Introduction to AI",
      description: "Learn the fundamentals of artificial intelligence",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200",
      chapters: [
        { id: 1, title: "What is AI?", duration: "15 min" },
        { id: 2, title: "History of AI", duration: "20 min" },
        { id: 3, title: "Types of AI", duration: "18 min" },
        { id: 4, title: "AI Applications", duration: "22 min" }
      ]
    },
    {
      id: 2,
      title: "Machine Learning Basics",
      description: "Understanding the core concepts of machine learning",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-200",
      chapters: [
        { id: 1, title: "Introduction to ML", duration: "25 min" },
        { id: 2, title: "Supervised Learning", duration: "30 min" },
        { id: 3, title: "Unsupervised Learning", duration: "28 min" },
        { id: 4, title: "Reinforcement Learning", duration: "35 min" },
        { id: 5, title: "Deep Learning Basics", duration: "40 min" },
        { id: 6, title: "Neural Networks", duration: "45 min" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-teal-50 to-violet-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI Learning Platform
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={onOpenAuth}
                className="border-purple-200 text-purple-700 hover:bg-purple-50"
              >
                Sign In
              </Button>
              <Button 
                onClick={onOpenAuth}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-700 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Master AI with Interactive Learning
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the world of artificial intelligence through hands-on modules, 
            interactive exercises, and real-world applications.
          </p>
          <Button 
            size="lg" 
            onClick={onOpenAuth}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 text-lg"
          >
            <Play className="mr-2 h-5 w-5" />
            Start Learning Now
          </Button>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Learning Modules</h3>
            <p className="text-lg text-gray-600">
              Structured courses designed to take you from beginner to expert
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module) => (
              <Card key={module.id} className={`${module.color} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      {module.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-800">{module.title}</CardTitle>
                      <CardDescription className="text-gray-600 mt-1">
                        {module.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`module-${module.id}`} className="border-none">
                      <AccordionTrigger className="text-purple-700 hover:text-purple-800 font-medium py-2">
                        View Chapters ({module.chapters.length})
                      </AccordionTrigger>
                      <AccordionContent className="pt-2">
                        <div className="space-y-2">
                          {module.chapters.map((chapter) => (
                            <div 
                              key={chapter.id}
                              className="flex items-center justify-between p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors cursor-pointer"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                <span className="text-gray-700 font-medium">{chapter.title}</span>
                              </div>
                              <span className="text-sm text-gray-500">{chapter.duration}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Button 
                    className="w-full mt-4 bg-white/20 text-purple-700 border border-purple-200 hover:bg-white/40"
                    variant="outline"
                    onClick={onOpenAuth}
                  >
                    Start Module
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Our Platform?</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-green-200 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-white rounded-full shadow-sm w-fit">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">Interactive Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Engage with hands-on exercises and real-world projects to reinforce your understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-yellow-200 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-white rounded-full shadow-sm w-fit">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">Expert Instructors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Learn from industry professionals with years of experience in AI and machine learning.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-100 to-purple-100 border-indigo-200 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-white rounded-full shadow-sm w-fit">
                  <Target className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">Practical Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Build real applications and gain practical skills that you can apply immediately.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
