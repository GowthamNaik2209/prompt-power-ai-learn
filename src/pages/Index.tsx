
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { BookOpen, Play, Users, Target, Lightbulb, TrendingUp, Languages, Save, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface IndexProps {
  onOpenAuth: () => void;
}

const Index = ({ onOpenAuth }: IndexProps) => {
  const [isHindi, setIsHindi] = useState(false);
  const [currentChapter, setCurrentChapter] = useState<{moduleId: number, chapterId: number} | null>(null);
  const { toast } = useToast();

  const handleChapterClick = (moduleId: number, chapterId: number) => {
    setCurrentChapter({ moduleId, chapterId });
    
    // Show nudge to save progress
    toast({
      title: isHindi ? "अपनी प्रगति सहेजें" : "Save Your Progress",
      description: isHindi ? "साइन इन करें ताकि आप अपनी सीखने की प्रगति को ट्रैक कर सकें!" : "Sign in to track your learning progress and pick up where you left off!",
      action: (
        <Button onClick={onOpenAuth} size="sm" className="ml-auto">
          <Save className="h-4 w-4 mr-1" />
          {isHindi ? "साइन इन" : "Sign In"}
        </Button>
      ),
    });
  };

  const modules = [
    {
      id: 1,
      title: isHindi ? "AI का परिचय" : "Introduction to AI",
      description: isHindi ? "कृत्रिम बुद्धिमत्ता की मूल बातें सीखें" : "Learn the fundamentals of artificial intelligence",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200",
      chapters: [
        { 
          id: 1, 
          title: isHindi ? "AI क्या है?" : "What is AI?", 
          duration: "15 min",
          content: isHindi 
            ? "कृत्रिम बुद्धिमत्ता (AI) एक तकनीक है जो मशीनों को इंसानों की तरह सोचने और सीखने की क्षमता देती है। यह हमारे दैनिक जीवन में कई रूपों में मौजूद है - जैसे वॉयस असिस्टेंट, रिकमेंडेशन सिस्टम, और स्मार्ट कैमरे।"
            : "Artificial Intelligence (AI) is a technology that enables machines to think and learn like humans. It exists in many forms in our daily lives - from voice assistants to recommendation systems and smart cameras."
        },
        { 
          id: 2, 
          title: isHindi ? "AI का इतिहास" : "History of AI", 
          duration: "20 min",
          content: isHindi
            ? "AI की शुरुआत 1950 के दशक में हुई थी। एलन ट्यूरिंग ने 'ट्यूरिंग टेस्ट' का प्रस्ताव रखा था। समय के साथ AI में कई उतार-चढ़ाव आए, और आज हम मशीन लर्निंग और डीप लर्निंग के युग में हैं।"
            : "AI began in the 1950s when Alan Turing proposed the 'Turing Test'. Over time, AI has had many ups and downs, and today we're in the era of machine learning and deep learning."
        },
        { 
          id: 3, 
          title: isHindi ? "AI के प्रकार" : "Types of AI", 
          duration: "18 min",
          content: isHindi
            ? "AI को मुख्यतः तीन श्रेणियों में बांटा जा सकता है: नैरो AI (विशिष्ट कार्यों के लिए), जनरल AI (इंसान जैसी बुद्धि), और सुपर AI (इंसान से बेहतर)। फिलहाल हम नैरो AI के युग में हैं।"
            : "AI can be categorized into three main types: Narrow AI (for specific tasks), General AI (human-like intelligence), and Super AI (beyond human capabilities). Currently, we're in the era of Narrow AI."
        },
        { 
          id: 4, 
          title: isHindi ? "AI के अनुप्रयोग" : "AI Applications", 
          duration: "22 min",
          content: isHindi
            ? "AI का उपयोग स्वास्थ्य सेवा, शिक्षा, परिवहन, मनोरंजन, और व्यापार में हो रहा है। चिकित्सा निदान से लेकर स्वायत्त वाहन तक, AI हर क्षेत्र में क्रांति ला रहा है।"
            : "AI is being used in healthcare, education, transportation, entertainment, and business. From medical diagnosis to autonomous vehicles, AI is revolutionizing every field."
        }
      ]
    },
    {
      id: 2,
      title: isHindi ? "मशीन लर्निंग की मूल बातें" : "Machine Learning Basics",
      description: isHindi ? "मशीन लर्निंग की मुख्य अवधारणाओं को समझना" : "Understanding the core concepts of machine learning",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-200",
      chapters: [
        { 
          id: 1, 
          title: isHindi ? "ML का परिचय" : "Introduction to ML", 
          duration: "25 min",
          content: isHindi
            ? "मशीन लर्निंग AI का एक हिस्सा है जो कंप्यूटर को डेटा से सीखने की क्षमता देता है। यह पारंपरिक प्रोग्रामिंग से अलग है क्योंकि यहाँ कंप्यूटर खुद ही पैटर्न खोजता है।"
            : "Machine Learning is a subset of AI that gives computers the ability to learn from data. It's different from traditional programming because the computer finds patterns on its own."
        },
        { 
          id: 2, 
          title: isHindi ? "सुपरवाइज्ड लर्निंग" : "Supervised Learning", 
          duration: "30 min",
          content: isHindi
            ? "सुपरवाइज्ड लर्निंग में हम मशीन को लेबल्ड डेटा देते हैं। उदाहरण के लिए, हम तस्वीरों को 'कुत्ता' या 'बिल्ली' के रूप में लेबल करते हैं, और मशीन सीखती है कि कैसे पहचाना जाए।"
            : "In supervised learning, we provide labeled data to the machine. For example, we label pictures as 'dog' or 'cat', and the machine learns how to recognize them."
        },
        { 
          id: 3, 
          title: isHindi ? "अनसुपरवाइज्ड लर्निंग" : "Unsupervised Learning", 
          duration: "28 min",
          content: isHindi
            ? "अनसुपरवाइज्ड लर्निंग में मशीन को बिना लेबल के डेटा दिया जाता है। यह डेटा में छुपे हुए पैटर्न खोजती है, जैसे ग्राहकों को समूहों में बांटना।"
            : "In unsupervised learning, the machine is given data without labels. It finds hidden patterns in the data, like grouping customers into segments."
        },
        { 
          id: 4, 
          title: isHindi ? "रीइंफोर्समेंट लर्निंग" : "Reinforcement Learning", 
          duration: "35 min",
          content: isHindi
            ? "रीइंफोर्समेंट लर्निंग में मशीन पुरस्कार और दंड के माध्यम से सीखती है। यह गेम खेलने या रोबोट को चलाने के लिए उपयोग होता है।"
            : "In reinforcement learning, the machine learns through rewards and penalties. This is used for playing games or controlling robots."
        },
        { 
          id: 5, 
          title: isHindi ? "डीप लर्निंग की मूल बातें" : "Deep Learning Basics", 
          duration: "40 min",
          content: isHindi
            ? "डीप लर्निंग मशीन लर्निंग का एक उन्नत रूप है जो न्यूरल नेटवर्क का उपयोग करता है। यह जटिल पैटर्न को पहचानने में बहुत अच्छा है।"
            : "Deep learning is an advanced form of machine learning that uses neural networks. It's very good at recognizing complex patterns."
        },
        { 
          id: 6, 
          title: isHindi ? "न्यूरल नेटवर्क्स" : "Neural Networks", 
          duration: "45 min",
          content: isHindi
            ? "न्यूरल नेटवर्क इंसानी दिमाग की नकल करते हैं। ये कई परतों में न्यूरॉन्स होते हैं जो जानकारी को प्रोसेस करते हैं।"
            : "Neural networks mimic the human brain. They have neurons in multiple layers that process information."
        }
      ]
    }
  ];

  const getCurrentChapterData = () => {
    if (!currentChapter) return null;
    const module = modules.find(m => m.id === currentChapter.moduleId);
    const chapter = module?.chapters.find(c => c.id === currentChapter.chapterId);
    return { module, chapter };
  };

  const chapterData = getCurrentChapterData();

  if (currentChapter && chapterData?.chapter) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-teal-50 to-violet-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-4">
                <Button 
                  variant="ghost" 
                  onClick={() => setCurrentChapter(null)}
                  className="mr-2"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {isHindi ? "वापस" : "Back"}
                </Button>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {isHindi ? "AI शिक्षा मंच" : "AI Learning Platform"}
                  </h1>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {/* Language Toggle */}
                <div className="flex items-center space-x-2 bg-white/60 rounded-lg px-3 py-2 border border-purple-200">
                  <Languages className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">EN</span>
                  <Switch
                    checked={isHindi}
                    onCheckedChange={setIsHindi}
                    className="data-[state=checked]:bg-purple-600"
                  />
                  <span className="text-sm font-medium text-gray-700">हिं</span>
                </div>
                
                <Button 
                  variant="outline" 
                  onClick={onOpenAuth}
                  className="border-purple-200 text-purple-700 hover:bg-purple-50"
                >
                  {isHindi ? "साइन इन" : "Sign In"}
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Chapter Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              {chapterData.chapter.title}
            </h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                {chapterData.module?.title}
              </span>
              <span className="text-sm">⏱️ {chapterData.chapter.duration}</span>
            </div>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {chapterData.chapter.content}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Progress Nudge */}
          <Card className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-purple-900 mb-2">
                    {isHindi ? "अपनी प्रगति को ट्रैक करें" : "Track Your Progress"}
                  </h3>
                  <p className="text-purple-700 text-sm">
                    {isHindi 
                      ? "साइन इन करें ताकि आप अपनी सीखने की प्रगति को सहेज सकें और जहाँ छोड़ा था वहीं से शुरू कर सकें।"
                      : "Sign in to save your learning progress and pick up where you left off."
                    }
                  </p>
                </div>
                <Button onClick={onOpenAuth} className="bg-gradient-to-r from-purple-600 to-pink-600">
                  <Save className="h-4 w-4 mr-2" />
                  {isHindi ? "साइन इन" : "Sign In"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-teal-50 to-violet-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {isHindi ? "AI शिक्षा मंच" : "AI Learning Platform"}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <div className="flex items-center space-x-2 bg-white/60 rounded-lg px-3 py-2 border border-purple-200">
                <Languages className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">EN</span>
                <Switch
                  checked={isHindi}
                  onCheckedChange={setIsHindi}
                  className="data-[state=checked]:bg-purple-600"
                />
                <span className="text-sm font-medium text-gray-700">हिं</span>
              </div>
              
              <Button 
                variant="outline" 
                onClick={onOpenAuth}
                className="border-purple-200 text-purple-700 hover:bg-purple-50"
              >
                {isHindi ? "साइन इन" : "Sign In"}
              </Button>
              <Button 
                onClick={onOpenAuth}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {isHindi ? "शुरू करें" : "Get Started"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-700 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            {isHindi ? "इंटरैक्टिव शिक्षा के साथ AI में महारत हासिल करें" : "Master AI with Interactive Learning"}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {isHindi 
              ? "व्यावहारिक मॉड्यूल, इंटरैक्टिव अभ्यास और वास्तविक दुनिया के अनुप्रयोगों के माध्यम से कृत्रिम बुद्धिमत्ता की दुनिया की खोज करें।"
              : "Discover the world of artificial intelligence through hands-on modules, interactive exercises, and real-world applications."
            }
          </p>
          <Button 
            size="lg" 
            onClick={onOpenAuth}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 text-lg"
          >
            <Play className="mr-2 h-5 w-5" />
            {isHindi ? "अभी सीखना शुरू करें" : "Start Learning Now"}
          </Button>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              {isHindi ? "शिक्षा मॉड्यूल" : "Learning Modules"}
            </h3>
            <p className="text-lg text-gray-600">
              {isHindi 
                ? "संरचित पाठ्यक्रम जो आपको शुरुआती से विशेषज्ञ तक ले जाने के लिए डिज़ाइन किए गए हैं"
                : "Structured courses designed to take you from beginner to expert"
              }
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
                        {isHindi ? `अध्याय देखें (${module.chapters.length})` : `View Chapters (${module.chapters.length})`}
                      </AccordionTrigger>
                      <AccordionContent className="pt-2">
                        <div className="space-y-2">
                          {module.chapters.map((chapter) => (
                            <div 
                              key={chapter.id}
                              className="flex items-center justify-between p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors cursor-pointer"
                              onClick={() => handleChapterClick(module.id, chapter.id)}
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
                    onClick={() => handleChapterClick(module.id, 1)}
                  >
                    {isHindi ? "मॉड्यूल शुरू करें" : "Start Module"}
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
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              {isHindi ? "हमारे प्लेटफॉर्म को क्यों चुनें?" : "Why Choose Our Platform?"}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-green-200 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-white rounded-full shadow-sm w-fit">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">
                  {isHindi ? "इंटरैक्टिव शिक्षा" : "Interactive Learning"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  {isHindi 
                    ? "अपनी समझ को मजबूत बनाने के लिए व्यावहारिक अभ्यास और वास्तविक दुनिया की परियोजनाओं के साथ जुड़ें।"
                    : "Engage with hands-on exercises and real-world projects to reinforce your understanding."
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-yellow-200 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-white rounded-full shadow-sm w-fit">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">
                  {isHindi ? "विशेषज्ञ प्रशिक्षक" : "Expert Instructors"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  {isHindi 
                    ? "AI और मशीन लर्निंग में वर्षों के अनुभव वाले उद्योग के पेशेवरों से सीखें।"
                    : "Learn from industry professionals with years of experience in AI and machine learning."
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-100 to-purple-100 border-indigo-200 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-white rounded-full shadow-sm w-fit">
                  <Target className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">
                  {isHindi ? "व्यावहारिक फोकस" : "Practical Focus"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  {isHindi 
                    ? "वास्तविक एप्लिकेशन बनाएं और व्यावहारिक कौशल प्राप्त करें जिन्हें आप तुरंत लागू कर सकते हैं।"
                    : "Build real applications and gain practical skills that you can apply immediately."
                  }
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
