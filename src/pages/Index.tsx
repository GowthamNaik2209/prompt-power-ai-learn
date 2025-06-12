
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, ArrowRight, Check, Clock, ChevronLeft, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ModuleCard } from "@/components/learning/ModuleCard";

interface IndexProps {
  onOpenAuth: () => void;
}

const Index = ({ onOpenAuth }: IndexProps) => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const { toast } = useToast();

  // Content translations
  const content = {
    en: {
      title: "Learn AI.",
      subtitle: "Simply.",
      description: "The easiest way to understand and use AI tools. No technical background required.",
      startLearning: "Start Learning Today",
      browseModules: "Browse our modules and start reading immediately. No signup required.",
      readyToTrack: "Ready to Track Your Progress?",
      createAccount: "Create a free account to save your progress and unlock interactive features",
      createFreeAccount: "Create Free Account",
      makingAI: "Making AI accessible to everyone",
      login: "Login",
      loginToSave: "Login to Save Progress",
      backToModules: "Back to Modules",
      backToChapters: "Back to Chapters",
      previous: "Previous",
      next: "Next",
      estimatedTime: "Estimated Reading Time",
      chapters: "chapters"
    },
    hi: {
      title: "AI सीखें।",
      subtitle: "आसानी से।",
      description: "AI टूल्स को समझने और उपयोग करने का सबसे आसान तरीका। कोई तकनीकी पृष्ठभूमि की आवश्यकता नहीं।",
      startLearning: "आज ही सीखना शुरू करें",
      browseModules: "हमारे मॉड्यूल देखें और तुरंत पढ़ना शुरू करें। साइन अप की आवश्यकता नहीं।",
      readyToTrack: "अपनी प्रगति ट्रैक करने के लिए तैयार हैं?",
      createAccount: "अपनी प्रगति को सेव करने और इंटरैक्टिव फीचर्स अनलॉक करने के लिए एक मुफ्त खाता बनाएं",
      createFreeAccount: "मुफ्त खाता बनाएं",
      makingAI: "AI को सभी के लिए सुलभ बनाना",
      login: "लॉगिन",
      loginToSave: "प्रगति सेव करने के लिए लॉगिन करें",
      backToModules: "मॉड्यूल पर वापस",
      backToChapters: "चैप्टर पर वापस",
      previous: "पिछला",
      next: "अगला",
      estimatedTime: "अनुमानित पढ़ने का समय",
      chapters: "चैप्टर"
    }
  };

  // Module 1 chapters data with translations
  const module1Chapters = [
    {
      id: "1-1",
      title: language === 'en' ? "What is AI? (The Big Picture)" : "AI क्या है? (बड़ी तस्वीर)",
      description: language === 'en' ? "Understanding AI through everyday examples like Netflix and Google Maps" : "Netflix और Google Maps जैसे रोजमर्रा के उदाहरणों के माध्यम से AI को समझना",
      estimatedTime: "15 min",
      content: language === 'en' ? `# Chapter 1.1: What is AI? (The Big Picture)

## The Netflix Moment

Let me start with a question: Have you ever wondered how Netflix seems to know exactly what show you want to watch next? Or how your phone's camera instantly recognizes your face to unlock? Maybe you've noticed that Google Maps always suggests the fastest route, even accounting for current traffic conditions?

Congratulations – you've been using Artificial Intelligence, probably multiple times today, without even thinking about it.

## Defining AI: Beyond the Science Fiction

**Artificial Intelligence (AI)** is simply machines that can learn patterns and solve problems. That's it. No robot uprising, no sentient computers plotting world domination – just very clever software that can recognize patterns in data and make decisions based on those patterns.

Think of AI like a really, really good pattern recognition system. Imagine you have a friend who's incredibly observant. After watching you choose what to eat for breakfast for a few months, they could probably predict with surprising accuracy what you'll want tomorrow morning. AI works similarly, but instead of watching just one person's breakfast choices, it can analyze millions of people's preferences, behaviors, and decisions to make predictions and suggestions.

## AI is Already Everywhere in Your Life

Let's play a quick game. I'll list some everyday experiences, and you'll probably realize that AI is working behind the scenes:

**When you shop online:**
- Amazon shows you "Customers who bought this also bought..." – that's AI analyzing purchasing patterns
- Your credit card company flags unusual spending as potential fraud – AI is comparing your current transaction to your historical behavior

**When you use your phone:**
- Your keyboard predicts what word you're typing next – AI has learned from millions of text messages
- Your camera app can blur the background in portrait mode – AI can distinguish between faces and backgrounds
- Siri, Google Assistant, or Alexa understand your voice commands – AI converts your speech to text and interprets your intent

**When you travel:**
- Google Maps calculates the fastest route – AI processes real-time traffic data from millions of phones
- Flight prices change dynamically – AI algorithms adjust prices based on demand, season, and booking patterns
- Uber matches you with nearby drivers – AI optimizes the entire network of riders and drivers

**When you consume content:**
- YouTube suggests videos you might like – AI analyzes your viewing history and behavior
- Spotify creates personalized playlists – AI understands your music taste and mood patterns
- News apps curate articles for you – AI selects content based on your reading preferences

## The Three Types of AI You Encounter Daily

To make this even clearer, let's categorize the AI you interact with:

**1. Recommendation AI**
This AI studies what you like and suggests more of it. Every time you see "Recommended for you" or "People also viewed," you're seeing recommendation AI at work. It's like having a personal shopper who knows your taste perfectly.

**2. Recognition AI**
This AI identifies things in images, sounds, or text. When your phone recognizes faces in photos, when Shazam identifies a song, or when Google Translate reads text from a photo – that's recognition AI. It's like having superhuman senses that can instantly identify anything.

**3. Prediction AI**
This AI forecasts what might happen next. Weather apps, stock price predictions, or your GPS estimating arrival time – all powered by prediction AI. It's like having a crystal ball, but one based on data rather than magic.

## Why AI Works So Well Now

You might wonder: "If AI is so useful, why am I just hearing about it now?" Great question!

AI isn't new – the concept has been around since the 1950s. But three things came together recently to make AI incredibly powerful:

**1. Massive Amounts of Data**
Every time you use the internet, you create data. Every search, click, purchase, photo, and message becomes training material for AI. We now have more data than ever before in human history.

**2. Powerful Computing**
The computers needed to process all this data became fast enough and cheap enough. What would have required a room-sized supercomputer in the 1990s can now be done on your laptop.

**3. Better Algorithms**
Scientists and engineers developed smarter ways to find patterns in data. These new techniques, especially something called "deep learning," are much more effective than older methods.

Think of it like cooking: you always had the recipe (algorithms), but now you have better ingredients (data) and a much better kitchen (computing power).

## Key Takeaway for Chapter 1.1

AI isn't some futuristic technology – it's already seamlessly integrated into your daily life, making your experiences more convenient, personalized, and efficient. The AI revolution isn't coming; it's already here, working quietly in the background of apps and services you use every day.

**Quick Self-Check:** Can you identify three AI-powered features you've used in the last 24 hours? (Hint: Check your phone's recent activity, your streaming service, or your online shopping history.)` : `# चैप्टर 1.1: AI क्या है? (बड़ी तस्वीर)

## Netflix का पल

मैं एक सवाल से शुरुआत करता हूं: क्या आपने कभी सोचा है कि Netflix को कैसे पता चल जाता है कि आप अगला कौन सा शो देखना चाहते हैं? या आपके फोन का कैमरा तुरंत आपके चेहरे को पहचानकर अनलॉक कैसे हो जाता है? शायद आपने देखा है कि Google Maps हमेशा सबसे तेज रास्ता सुझाता है, वर्तमान ट्रैफिक की स्थिति को भी ध्यान में रखते हुए?

बधाई हो – आप आर्टिफिशियल इंटेलिजेंस का उपयोग कर रहे हैं, शायद आज कई बार, इसके बारे में सोचे बिना भी।

## AI को परिभाषित करना: साइंस फिक्शन से परे

**आर्टिफिशियल इंटेलिजेंस (AI)** सिर्फ ऐसी मशीनें हैं जो पैटर्न सीख सकती हैं और समस्याओं को हल कर सकती हैं। बस इतना ही। कोई रोबोट विद्रोह नहीं, कोई संवेदनशील कंप्यूटर दुनिया पर कब्जा करने की योजना नहीं बना रहे – सिर्फ बहुत चतुर सॉफ्टवेयर जो डेटा में पैटर्न पहचान सकता है और उन पैटर्न के आधार पर निर्णय ले सकता है।

AI को वास्तव में अच्छे पैटर्न पहचान सिस्टम की तरह समझिए। कल्पना कीजिए कि आपका एक दोस्त है जो बहुत ही अवलोकन करने वाला है। कुछ महीनों तक आपको नाश्ते के लिए क्या चुनते देखने के बाद, वे शायद आश्चर्यजनक सटीकता के साथ अनुमान लगा सकते हैं कि आप कल सुबह क्या चाहेंगे। AI इसी तरह काम करता है, लेकिन सिर्फ एक व्यक्ति के नाश्ते की पसंद देखने के बजाय, यह लाखों लोगों की प्राथमिकताओं, व्यवहारों और निर्णयों का विश्लेषण कर सकता है ताकि भविष्यवाणियां और सुझाव दे सके।

## AI पहले से ही आपके जीवन में हर जगह है

आइए एक छोटा सा खेल खेलते हैं। मैं कुछ रोजमर्रा के अनुभव सूचीबद्ध करूंगा, और आप शायद महसूस करेंगे कि AI पर्दे के पीछे काम कर रहा है:

**जब आप ऑनलाइन खरीदारी करते हैं:**
- Amazon आपको "इसे खरीदने वाले ग्राहकों ने यह भी खरीदा..." दिखाता है – यह AI खरीदारी पैटर्न का विश्लेषण करता है
- आपकी क्रेडिट कार्ड कंपनी असामान्य खर्च को संभावित धोखाधड़ी के रूप में फ्लैग करती है – AI आपके वर्तमान लेनदेन की तुलना आपके ऐतिहासिक व्यवहार से करता है

**जब आप अपना फोन उपयोग करते हैं:**
- आपका कीबोर्ड अनुमान लगाता है कि आप अगला कौन सा शब्द टाइप करने वाले हैं – AI ने लाखों टेक्स्ट संदेशों से सीखा है
- आपका कैमरा ऐप पोर्ट्रेट मोड में पृष्ठभूमि को धुंधला कर सकता है – AI चेहरों और पृष्ठभूमि के बीच अंतर कर सकता है
- Siri, Google Assistant, या Alexa आपके वॉयस कमांड समझते हैं – AI आपकी आवाज को टेक्स्ट में बदलता है और आपके इरादे को समझता है

**जब आप यात्रा करते हैं:**
- Google Maps सबसे तेज रास्ता निकालता है – AI लाखों फोन से रियल-टाइम ट्रैफिक डेटा प्रोसेस करता है
- फ्लाइट की कीमतें गतिशील रूप से बदलती हैं – AI एल्गोरिदम मांग, सीजन और बुकिंग पैटर्न के आधार पर कीमतें समायोजित करते हैं
- Uber आपको आस-पास के ड्राइवरों से मैच करता है – AI पूरे राइडर और ड्राइवर नेटवर्क को अनुकूलित करता है

**जब आप कंटेंट उपभोग करते हैं:**
- YouTube आपको पसंद आने वाले वीडियो सुझाता है – AI आपके देखने के इतिहास और व्यवहार का विश्लेषण करता है
- Spotify व्यक्तिगत प्लेलिस्ट बनाता है – AI आपके संगीत स्वाद और मूड पैटर्न को समझता है
- न्यूज़ ऐप्स आपके लिए लेख तैयार करते हैं – AI आपकी पढ़ने की प्राथमिकताओं के आधार पर कंटेंट का चयन करता है

## दैनिक जीवन में मिलने वाले AI के तीन प्रकार

इसे और भी स्पष्ट करने के लिए, आइए उस AI को वर्गीकृत करते हैं जिससे आप बातचीत करते हैं:

**1. सुझाव AI**
यह AI अध्ययन करता है कि आपको क्या पसंद है और उसके समान और चीजें सुझाता है। जब भी आप "आपके लिए अनुशंसित" या "लोगों ने यह भी देखा" देखते हैं, आप सुझाव AI को काम पर देख रहे हैं। यह एक व्यक्तिगत शॉपर की तरह है जो आपके स्वाद को पूरी तरह जानता है।

**2. पहचान AI**
यह AI छवियों, ध्वनियों या टेक्स्ट में चीजों की पहचान करता है। जब आपका फोन तस्वीरों में चेहरों को पहचानता है, जब Shazam किसी गाने की पहचान करता है, या जब Google Translate तस्वीर से टेक्स्ट पढ़ता है – यह पहचान AI है। यह अलौकिक इंद्रियों की तरह है जो तुरंत किसी भी चीज की पहचान कर सकती है।

**3. भविष्यवाणी AI**
यह AI पूर्वानुमान लगाता है कि आगे क्या हो सकता है। मौसम ऐप्स, स्टॉक की कीमत की भविष्यवाणी, या आपका GPS आगमन समय का अनुमान – सभी भविष्यवाणी AI द्वारा संचालित। यह एक क्रिस्टल बॉल की तरह है, लेकिन जादू के बजाय डेटा पर आधारित।

## अब AI इतना अच्छा क्यों काम करता है

आप सोच सकते हैं: "यदि AI इतना उपयोगी है, तो मैं इसके बारे में अब ही क्यों सुन रहा हूं?" बेहतरीन सवाल!

AI नया नहीं है – यह अवधारणा 1950 के दशक से मौजूद है। लेकिन हाल ही में तीन चीजें एक साथ आईं जिन्होंने AI को अविश्वसनीय रूप से शक्तिशाली बना दिया:

**1. भारी मात्रा में डेटा**
हर बार जब आप इंटरनेट का उपयोग करते हैं, आप डेटा बनाते हैं। हर खोज, क्लिक, खरीदारी, तस्वीर और संदेश AI के लिए प्रशिक्षण सामग्री बन जाता है। अब हमारे पास मानव इतिहास में पहले से कहीं अधिक डेटा है।

**2. शक्तिशाली कंप्यूटिंग**
इस सारे डेटा को प्रोसेस करने के लिए जरूरी कंप्यूटर काफी तेज़ और सस्ते हो गए। जिसके लिए 1990 के दशक में कमरे के आकार के सुपर कंप्यूटर की आवश्यकता होती थी, अब आपके लैपटॉप पर हो सकता है।

**3. बेहतर एल्गोरिदम**
वैज्ञानिकों और इंजीनियरों ने डेटा में पैटर्न खोजने के स्मार्ट तरीके विकसित किए। ये नई तकनीकें, विशेष रूप से "डीप लर्निंग" नामक कुछ, पुराने तरीकों से कहीं अधिक प्रभावी हैं।

इसे खाना पकाने की तरह समझिए: आपके पास हमेशा रेसिपी (एल्गोरिदम) थी, लेकिन अब आपके पास बेहतर सामग्री (डेटा) और बहुत बेहतर रसोई (कंप्यूटिंग पावर) है।

## चैप्टर 1.1 की मुख्य बात

AI कोई भविष्य की तकनीक नहीं है – यह पहले से ही आपके दैनिक जीवन में निर्बाध रूप से एकीकृत है, आपके अनुभवों को अधिक सुविधाजनक, व्यक्तिगत और कुशल बनाता है। AI क्रांति आने वाली नहीं है; यह पहले से ही यहां है, उन ऐप्स और सेवाओं की पृष्ठभूमि में चुपचाप काम कर रही है जिनका आप रोज़ाना उपयोग करते हैं।

**त्वरित स्व-जांच:** क्या आप पिछले 24 घंटों में उपयोग की गई तीन AI-संचालित सुविधाओं की पहचान कर सकते हैं? (संकेत: अपने फोन की हाल की गतिविधि, अपनी स्ट्रीमिंग सेवा, या अपने ऑनलाइन शॉपिंग इतिहास की जांच करें।)`
    }
  ];

  // Mock modules data with translations
  const modules = [
    {
      id: "ai-101",
      title: language === 'en' ? "AI 101 - Understanding the New World" : "AI 101 - नई दुनिया को समझना",
      description: language === 'en' ? "Your friendly introduction to AI without the technical jargon" : "तकनीकी शब्दजाल के बिना AI का आपका मित्रवत परिचय",
      chapters: 4,
      completedChapters: 0,
      estimatedTime: language === 'en' ? "60 minutes" : "60 मिनट",
      difficulty: "Beginner" as const,
      hasChapters: true
    },
    {
      id: "prompt-engineering",
      title: language === 'en' ? "Advanced Prompt Engineering" : "उन्नत प्रॉम्प्ट इंजीनियरिंग",
      description: language === 'en' ? "Deep dive into sophisticated prompting techniques" : "परिष्कृत प्रॉम्प्टिंग तकनीकों में गहरी गोता",
      chapters: 6,
      completedChapters: 0,
      estimatedTime: language === 'en' ? "1.5-2 hours" : "1.5-2 घंटे",
      difficulty: "Intermediate" as const,
      isLocked: true
    },
    {
      id: "ai-tools",
      title: language === 'en' ? "AI Tools Mastery" : "AI टूल्स महारत",
      description: language === 'en' ? "Learn to use various AI tools effectively" : "विभिन्न AI टूल्स का प्रभावी रूप से उपयोग करना सीखें",
      chapters: 10,
      completedChapters: 0,
      estimatedTime: language === 'en' ? "3-4 hours" : "3-4 घंटे",
      difficulty: "Beginner" as const,
      isLocked: true
    }
  ];

  const handleModuleClick = (moduleId: string) => {
    const module = modules.find(m => m.id === moduleId);
    if (module && !module.isLocked) {
      if (moduleId === "ai-101") {
        setSelectedModule(moduleId);
      } else {
        toast({
          title: language === 'en' ? "Coming Soon!" : "जल्द आ रहा है!",
          description: language === 'en' ? "This module will be available soon." : "यह मॉड्यूल जल्द ही उपलब्ध होगा।",
        });
      }
    }
  };

  const handleChapterClick = (chapterId: string) => {
    setSelectedChapter(chapterId);
  };

  const handleBackToModules = () => {
    setSelectedModule(null);
    setSelectedChapter(null);
  };

  const handleBackToChapters = () => {
    setSelectedChapter(null);
  };

  const selectedChapterData = module1Chapters.find(c => c.id === selectedChapter);

  // Chapter content view
  if (selectedChapter && selectedChapterData) {
    const currentChapterIndex = module1Chapters.findIndex(c => c.id === selectedChapter);
    const previousChapter = currentChapterIndex > 0 ? module1Chapters[currentChapterIndex - 1] : null;
    const nextChapter = currentChapterIndex < module1Chapters.length - 1 ? module1Chapters[currentChapterIndex + 1] : null;

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
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                  className="flex items-center gap-2"
                >
                  <Globe className="h-4 w-4" />
                  {language === 'en' ? 'हिं' : 'EN'}
                </Button>
                <Button onClick={handleBackToChapters} variant="outline">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  {content[language].backToChapters}
                </Button>
                <Button onClick={onOpenAuth} variant="outline">
                  {content[language].loginToSave}
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Chapter Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>Module 1: AI 101</span>
              <ArrowRight className="h-4 w-4" />
              <span>{selectedChapterData.title}</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">{selectedChapterData.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{selectedChapterData.estimatedTime}</span>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="prose prose-lg max-w-none">
                {selectedChapterData.content.split('\n').map((line, i) => {
                  if (line.startsWith('# ')) {
                    return <h1 key={i} className="text-2xl font-bold mb-4 mt-6">{line.slice(2)}</h1>;
                  }
                  if (line.startsWith('## ')) {
                    return <h2 key={i} className="text-xl font-semibold mb-3 mt-6">{line.slice(3)}</h2>;
                  }
                  if (line.startsWith('### ')) {
                    return <h3 key={i} className="text-lg font-medium mb-2 mt-4">{line.slice(4)}</h3>;
                  }
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return <p key={i} className="font-semibold mb-2">{line.slice(2, -2)}</p>;
                  }
                  if (line.startsWith('- ')) {
                    return <li key={i} className="mb-1 ml-4">{line.slice(2)}</li>;
                  }
                  if (line.trim() === '') {
                    return <br key={i} />;
                  }
                  return <p key={i} className="mb-2">{line}</p>;
                })}
              </div>
            </CardContent>
          </Card>

          {/* Chapter Navigation */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <div className="flex-1">
              {previousChapter && (
                <Button 
                  variant="outline" 
                  onClick={() => handleChapterClick(previousChapter.id)}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  {content[language].previous}
                </Button>
              )}
            </div>
            
            <div className="flex-1 flex justify-end">
              {nextChapter && (
                <Button 
                  onClick={() => handleChapterClick(nextChapter.id)}
                  className="flex items-center gap-2"
                >
                  {content[language].next}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Progress Save Prompt */}
          <Card className="bg-muted mt-8">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">{content[language].readyToTrack}</h3>
                <p className="text-muted-foreground mb-4">
                  {content[language].createAccount}
                </p>
                <Button onClick={onOpenAuth}>
                  {content[language].createFreeAccount}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Module chapters view
  if (selectedModule === "ai-101") {
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
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                  className="flex items-center gap-2"
                >
                  <Globe className="h-4 w-4" />
                  {language === 'en' ? 'हिं' : 'EN'}
                </Button>
                <Button onClick={handleBackToModules} variant="outline">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  {content[language].backToModules}
                </Button>
                <Button onClick={onOpenAuth} variant="outline">
                  {content[language].loginToSave}
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Module Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {language === 'en' ? "AI 101 - Understanding the New World" : "AI 101 - नई दुनिया को समझना"}
            </h1>
            <p className="text-muted-foreground mb-4">
              {language === 'en' ? "Your friendly introduction to AI without the technical jargon" : "तकनीकी शब्दजाल के बिना AI का आपका मित्रवत परिचय"}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{content[language].estimatedTime}: {language === 'en' ? '60 minutes' : '60 मिनट'}</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>4 {content[language].chapters}</span>
              </div>
            </div>
          </div>

          {/* Module Introduction */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">
                {language === 'en' ? "Welcome to Your AI Journey" : "आपकी AI यात्रा में आपका स्वागत है"}
              </h2>
              <p className="text-muted-foreground mb-4">
                {language === 'en' 
                  ? "Think of this module as your friendly introduction to a world that's already around you, but perhaps invisible until now. By the end of this hour, you'll understand what AI actually is (spoiler: it's not the scary robots from movies), how it's already helping you daily, and why everyone's talking about something called \"Generative AI.\""
                  : "इस मॉड्यूल को आपके आस-पास पहले से मौजूद, लेकिन शायद अब तक अदृश्य दुनिया के मित्रवत परिचय के रूप में सोचें। इस घंटे के अंत तक, आप समझ जाएंगे कि AI वास्तव में क्या है (स्पॉयलर: यह फिल्मों के डरावने रोबोट नहीं हैं), यह आपकी दैनिक जिंदगी में कैसे मदद कर रहा है, और क्यों हर कोई \"जेनरेटिव AI\" के बारे में बात कर रहा है।"
                }
              </p>
              <p className="text-sm font-medium text-primary">
                {language === 'en' 
                  ? "Our Promise: No technical jargon, no complex mathematics, just clear explanations with plenty of real-world examples you can relate to."
                  : "हमारा वादा: कोई तकनीकी शब्दजाल नहीं, कोई जटिल गणित नहीं, बस स्पष्ट स्पष्टीकरण और भरपूर वास्तविक दुनिया के उदाहरण जिनसे आप जुड़ सकें।"
                }
              </p>
            </CardContent>
          </Card>

          {/* Chapters Grid */}
          <div className="grid gap-6">
            {module1Chapters.map((chapter, index) => (
              <Card 
                key={chapter.id} 
                className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                onClick={() => handleChapterClick(chapter.id)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded">
                          {language === 'en' ? `Chapter ${index + 1}` : `चैप्टर ${index + 1}`}
                        </span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{chapter.estimatedTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{chapter.title}</CardTitle>
                      <CardDescription>{chapter.description}</CardDescription>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Progress Save Prompt */}
          <Card className="bg-muted mt-8">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">{content[language].readyToTrack}</h3>
                <p className="text-muted-foreground mb-4">
                  {content[language].createAccount}
                </p>
                <Button onClick={onOpenAuth}>
                  {content[language].createFreeAccount}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Landing page with modules
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
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                className="flex items-center gap-2"
              >
                <Globe className="h-4 w-4" />
                {language === 'en' ? 'हिं' : 'EN'}
              </Button>
              <Button onClick={onOpenAuth} variant="outline">
                {content[language].login}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Clean and Focused */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            {content[language].title}<br />
            <span className="text-primary">{content[language].subtitle}</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {content[language].description}
          </p>
        </div>
      </div>

      {/* Available Modules */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{content[language].startLearning}</h2>
          <p className="text-muted-foreground">{content[language].browseModules}</p>
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
            {content[language].readyToTrack}
          </h2>
          <p className="text-muted-foreground mb-8">
            {content[language].createAccount}
          </p>
          <Button 
            size="lg" 
            onClick={onOpenAuth}
          >
            {content[language].createFreeAccount}
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
              {content[language].makingAI}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
