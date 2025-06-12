
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

  // Module 2 chapters data with translations
  const module2Chapters = [
    {
      id: "2-1",
      title: language === 'en' ? "Getting Started with ChatGPT, Gemini, and Claude" : "ChatGPT, Gemini और Claude के साथ शुरुआत",
      description: language === 'en' ? "Your first AI hello - detailed tours of popular LLM platforms" : "आपका पहला AI हैलो - लोकप्रिय LLM प्लेटफॉर्म का विस्तृत दौरा",
      estimatedTime: "15 min",
      content: language === 'en' ? `# Chapter 2.1: Getting Started with ChatGPT, Gemini, and Claude (Quick Tours)

## Your First AI Hello

You've heard about these powerful LLMs, but how do you actually start using them? This chapter will give you a detailed quick tour of the most popular platforms, showing you how to sign up, navigate their interfaces, and send your very first prompt to begin your interactive AI journey.

## Accessing the Platforms: Your AI Login

Most LLMs are accessible through a web browser, much like using your favorite social media platform or cloud document editor. You typically need to create a free account, often using your email or a readily available Google/Microsoft account for quick sign-up. It's important to note that while free tiers are generally available, paid versions often unlock more advanced features, higher usage limits, and access to the very latest model iterations.

Here's a practical guide to accessing the leading LLM platforms:

**ChatGPT (OpenAI):** To begin your journey with one of the most widely recognized LLMs, navigate your web browser to chat.openai.com. You will be prompted to sign up. This can typically be done swiftly using an existing Google or Microsoft account, or by providing an email address and creating a new password. OpenAI's interface is generally clean and user-friendly, making it a popular starting point for many.

**Google Gemini:** For users already within the Google ecosystem, Gemini offers a seamless experience. Simply visit gemini.google.com. You will be required to sign in with your Google account. Gemini often integrates well with other Google services, which can be a significant advantage for users who rely heavily on Google Workspace.

**Anthropic Claude:** To access Claude, known for its focus on safety and robust long-context handling, visit claude.ai. The sign-up process usually involves providing an email address, after which a verification code will be sent to confirm your identity. Claude's interface emphasizes clarity and often provides helpful guidelines for responsible AI interaction.

## Navigating the Interface: The Command Center of Your AI Assistant

While each platform has its own unique visual design and subtle user experience choices, they all share a remarkably similar core interface: a dynamic chat window that serves as your primary interaction point with the AI. Understanding these common elements will empower you to quickly adapt to any LLM interface.

**Key Elements You'll Find on Almost Every LLM Platform:**

**Input Box (The "Prompt" Area):** This is your direct line of communication with the AI. Located almost universally at the bottom of the screen, this text field is where you type your instructions, questions, or creative requests – your "prompts." It's your conversational gateway to the AI's capabilities.

**Send Button:** Adjacent to the input box, you'll find a clear send button, typically represented by a paper airplane icon or a simple "Send" label. Clicking or tapping this button transmits your prompt to the AI, initiating its processing of your request.

**Conversation History (Chat Log):** This expansive area occupies the majority of the screen, displaying a chronological record of your interaction. It shows both your prompts and the AI's corresponding responses, forming a continuous and easily reviewable conversation thread.

**New Chat/New Conversation Button:** Usually positioned prominently on the left sidebar or at the top of the chat window, this button allows you to initiate a completely fresh conversation. This is a critical feature because, by default, LLMs generally maintain "memory" or "context" only within the active chat thread.

**Sidebar:** Most LLM platforms feature a sidebar, typically on the left side of the interface. This area serves as an organized repository of your past chat history, allowing you to easily browse, select, and revisit previous conversations.

## Your First "Hello World" Prompt: Breaking the Ice

Let's put theory into practice. Open your chosen LLM platform, locate the input box, and type in this simple prompt. Then, hit the send button:

"Hello AI, introduce yourself in one sentence."

Observe the AI's response. It will typically introduce itself as a large language model, specifying its developer (e.g., OpenAI, Google, Anthropic) and briefly stating its purpose, such as assisting with a wide range of tasks or generating human-like text.

## Understanding the "Memory" of a Chat: The Context Window

A crucial concept to grasp when interacting with LLMs is their "memory," which is technically referred to as their "context window." When you continue typing in the same chat window (within a single conversation thread), the AI remembers all the previous turns of that specific conversation. This "memory" allows the AI to understand the flow of your dialogue, refer back to earlier points, and build upon previous responses.

However, if you close a chat thread and then start a new chat (by clicking the "New Chat" or "New Conversation" button), the AI will not remember anything from your previous conversations. It's akin to interacting with a new customer service representative each time you call – you have to explain your situation or topic from scratch.

## Key Takeaway for Chapter 2.1

Getting started with LLMs is as simple as opening a web page and typing. While each platform has its nuances, the basic chat interface is intuitive and consistent. Remember that AI "remembers" information within the active conversation thread (its context window), but you'll need to start a new chat for completely fresh interactions without prior context.

**Quick Self-Check:** Open your chosen LLM and practice starting a new conversation. Ask it two different questions in the same chat to see how it remembers context. Then, start a new chat and ask one of those questions again to observe how it responds without the previous context.` : `# चैप्टर 2.1: ChatGPT, Gemini और Claude के साथ शुरुआत (त्वरित दौरे)

## आपका पहला AI हैलो

आपने इन शक्तिशाली LLMs के बारे में सुना है, लेकिन वास्तव में आप इनका उपयोग कैसे शुरू करते हैं? यह अध्याय आपको सबसे लोकप्रिय प्लेटफॉर्म का विस्तृत त्वरित दौरा देगा, आपको दिखाएगा कि कैसे साइन अप करें, उनके इंटरफेस को नेविगेट करें, और अपना पहला प्रॉम्प्ट भेजें।

## प्लेटफॉर्म तक पहुंच: आपका AI लॉगिन

अधिकांश LLMs वेब ब्राउज़र के माध्यम से सुलभ हैं, बिल्कुल आपके पसंदीदा सोशल मीडिया प्लेटफॉर्म या क्लाउड डॉक्यूमेंट एडिटर का उपयोग करने की तरह। आपको आमतौर पर एक मुफ्त खाता बनाना होता है, अक्सर अपने ईमेल या तुरंत उपलब्ध Google/Microsoft खाते का उपयोग करके।

**मुख्य LLM प्लेटफॉर्म तक पहुंचने के लिए व्यावहारिक गाइड:**

**ChatGPT (OpenAI):** सबसे व्यापक रूप से पहचाने जाने वाले LLMs में से एक के साथ अपनी यात्रा शुरू करने के लिए, अपने वेब ब्राउज़र पर chat.openai.com पर जाएं। आपको साइन अप करने के लिए कहा जाएगा। यह आमतौर पर मौजूदा Google या Microsoft खाते का उपयोग करके तेज़ी से किया जा सकता है।

**Google Gemini:** Google इकोसिस्टम में पहले से मौजूद उपयोगकर्ताओं के लिए, Gemini एक निर्बाध अनुभव प्रदान करता है। बस gemini.google.com पर जाएं। आपको अपने Google खाते से साइन इन करना होगा।

**Anthropic Claude:** Claude तक पहुंचने के लिए, जो सुरक्षा और मजबूत लंबे-संदर्भ हैंडलिंग के लिए जाना जाता है, claude.ai पर जाएं। साइन-अप प्रक्रिया में आमतौर पर ईमेल पता प्रदान करना शामिल है।

## इंटरफेस को नेविगेट करना: आपके AI सहायक का कमांड सेंटर

जबकि प्रत्येक प्लेटफॉर्म का अपना अनूठा दृश्य डिज़ाइन है, वे सभी एक उल्लेखनीय समान मुख्य इंटरफेस साझा करते हैं: एक गतिशील चैट विंडो जो AI के साथ आपके प्राथमिक इंटरैक्शन पॉइंट के रूप में कार्य करती है।

**लगभग हर LLM प्लेटफॉर्म पर आपको मिलने वाले मुख्य तत्व:**

**इनपुट बॉक्स ("प्रॉम्प्ट" क्षेत्र):** यह AI के साथ आपकी प्रत्यक्ष संचार लाइन है। स्क्रीन के नीचे स्थित, यह टेक्स्ट फील्ड वह जगह है जहां आप अपने निर्देश, प्रश्न या रचनात्मक अनुरोध टाइप करते हैं।

**भेजें बटन:** इनपुट बॉक्स के बगल में, आपको एक स्पष्ट भेजें बटन मिलेगा, आमतौर पर पेपर एयरप्लेन आइकन या सरल "भेजें" लेबल द्वारा दर्शाया गया।

**वार्तालाप इतिहास (चैट लॉग):** यह विस्तृत क्षेत्र स्क्रीन का अधिकांश हिस्सा घेरता है, आपकी बातचीत का कालानुक्रमिक रिकॉर्ड प्रदर्शित करता है।

## आपका पहला "हैलो वर्ल्ड" प्रॉम्प्ट: बर्फ तोड़ना

आइए सिद्धांत को व्यवहार में लाते हैं। अपना चुना गया LLM प्लेटफॉर्म खोलें, इनपुट बॉक्स ढूंढें, और इस सरल प्रॉम्प्ट को टाइप करें:

"नमस्कार AI, एक वाक्य में अपना परिचय दें।"

AI की प्रतिक्रिया का निरीक्षण करें। यह आमतौर पर खुद को एक बड़े भाषा मॉडल के रूप में पेश करेगा, अपने डेवलपर को निर्दिष्ट करेगा और संक्षेप में अपने उद्देश्य का वर्णन करेगा।

## चैट की "मेमोरी" को समझना: संदर्भ विंडो

LLMs के साथ बातचीत करते समय समझने के लिए एक महत्वपूर्ण अवधारणा उनकी "मेमोरी" है, जिसे तकनीकी रूप से उनकी "संदर्भ विंडो" कहा जाता है। जब आप एक ही चैट विंडो में टाइप करना जारी रखते हैं, AI उस विशिष्ट बातचीत के सभी पिछले मोड़ों को याद रखता है।

हालांकि, यदि आप एक चैट थ्रेड बंद करते हैं और फिर एक नया चैट शुरू करते हैं, तो AI आपकी पिछली बातचीत से कुछ भी याद नहीं रखेगा।

## चैप्टर 2.1 की मुख्य बात

LLMs के साथ शुरुआत करना वेब पेज खोलने और टाइप करने जितना सरल है। जबकि प्रत्येक प्लेटफॉर्म की अपनी बारीकियां हैं, बुनियादी चैट इंटरफेस सहज और सुसंगत है। याद रखें कि AI सक्रिय बातचीत थ्रेड के भीतर जानकारी को "याद रखता" है, लेकिन पूरी तरह से नई बातचीत के लिए आपको एक नया चैट शुरू करना होगा।

**त्वरित स्व-जांच:** अपना चुना गया LLM खोलें और एक नई बातचीत शुरू करने का अभ्यास करें। संदर्भ को याद रखने का तरीका देखने के लिए एक ही चैट में दो अलग प्रश्न पूछें।`
    },
    {
      id: "2-2", 
      title: language === 'en' ? "The Art of the Perfect Prompt - Beyond the Basics" : "परफेक्ट प्रॉम्प्ट की कला - बुनियादी बातों से आगे",
      description: language === 'en' ? "Master advanced prompting with context, format, and iterative refinement" : "संदर्भ, प्रारूप और पुनरावृत्त सुधार के साथ उन्नत प्रॉम्प्टिंग में महारत हासिल करें",
      estimatedTime: "20 min",
      content: language === 'en' ? `# Chapter 2.2: The Art of the Perfect Prompt - Beyond the Basics

## Recap: The Foundation of Good Prompting

In Module 1, we established that a prompt is your instruction to the AI. We learned that being clear, specific, and even assigning a role to the AI (e.g., "Act as a marketing expert") can dramatically improve the quality and relevance of its response. These are the bedrock principles.

Now, let's go deeper. Achieving truly amazing, tailored results from an LLM isn't about some secret trick; it's about mastering the nuances of human-AI communication.

## Adding Context: Giving the AI the Full Picture

Imagine onboarding a new human assistant. If you just say, "Write an email about the project," they'd be lost. They'd immediately ask: What project? To whom is this email going? What is the purpose of the email? Similarly, an AI needs this "background story" or context to produce a relevant and useful output.

**How to provide effective context to your AI assistant:**

**Provide Background Information:** Set the scene for the AI. Instead of a generic "Write about dogs," give it purpose: "I'm writing a blog post for pet owners about choosing the right dog breed for apartment living. My audience values animal welfare and practical advice."

**Define the Purpose/Goal:** Explicitly state why you're asking for this output. "The email is to announce a special introductory offer to our early sign-ups, aiming to convert interest into purchases."

**Specify the Audience:** Who is reading or interacting with the AI's output? "The audience for this email is young adults who care deeply about sustainability and organic products."

**Expanded Example of Adding Context:**

Vague Prompt: "Write an email." (AI might produce a generic, formal business email)

Improved Prompt (with Context): "You are a friendly customer service representative for a new organic coffee subscription service. Write a welcome email to our early sign-up list, announcing a special 20% off introductory offer. The goal is to encourage their first purchase. Keep the tone warm, inviting, and concise, targeting young adults who prioritize ethical sourcing and convenience. Include a clear call to action to visit our website and use a discount code."

## Defining Output Format: How You Want It Delivered

AI can produce information in myriad ways – from a verbose essay to a precise table. If you don't explicitly tell it how you want the information presented, it will default to its most common output style.

**Key ways to define the output format:**

**Structure:** Be explicit about the layout. "Give me bullet points," "Format as a formal business letter," "Present as a two-column table with headers," "Write a 3-paragraph summary."

**Tone:** The emotional quality or style of writing. "Use a professional and authoritative tone," "Sound enthusiastic and encouraging," "Be empathetic and understanding."

**Length:** Set clear boundaries. "Under 150 words," "Approximately 500 words," "Aim for a brief, punchy response."

## Iterative Prompting: Refining AI's Output

This is perhaps the most powerful technique for getting truly bespoke results from an LLM. Instead of trying to craft a single, perfect prompt, you engage in a conversation with the AI, progressively refining its output based on your feedback.

**Steps for Effective Iterative Prompting:**

1. **Start with a basic, foundational prompt:** Get an initial draft from the AI.
2. **Review the AI's response critically:** What aspects are good? What's missing? What needs to be changed?
3. **Provide specific, actionable feedback:** Instead of "Fix this," tell it: "That's good, but please make the second paragraph more concise" or "Add an example of X in the third section."
4. **Repeat the process:** Continue this back-and-forth until you are fully satisfied.

**Example of Iterative Prompting:**

You (Prompt 1): "Write a short poem about a cat."
AI (Response 1): (Generates a basic, generic poem about a cat's grace and purr.)

You (Prompt 2): "That's a nice start, but I'd like the poem to focus on a mischievous cat. Make it humorous, and use rhyming couplets."
AI (Response 2): (Generates a poem about a cat knocking things over, in rhyming couplets.)

You (Prompt 3): "Much better! Now, can you also include a line about its loud purr that redeems its naughtiness?"
AI (Response 3): (Generates a refined poem incorporating the loud purr element.)

## The Importance of Examples: "Show, Don't Just Tell"

Sometimes, words alone aren't enough to convey exactly what you want. Providing the AI with a small, relevant example directly in your prompt can be incredibly effective.

**Example of Using Examples in Prompts:**

"Write a product description for a new reusable coffee cup. It should follow this style:

**Example style:**
• Durable Design: Crafted from aerospace-grade aluminum
• Featherlight: Weighs less than a smartphone  
• Instant Brew: Heats water in under 60 seconds
• Get Yours Now: Visit our site to revolutionize your morning!

Now, using that style, write the description for our 'Eco-Sip Tumbler' which keeps drinks hot for 6 hours, features a leak-proof lid, and comes in vibrant colors."

## Key Takeaway for Chapter 2.2

Beyond basic instructions, truly mastering prompting involves providing ample context (the who, what, why), clearly defining the desired output format (structure, tone, length), and engaging in iterative refinement – a dynamic conversation with the AI to perfect its response. The more precise and detailed your instructions, the better the output.

**Quick Self-Check:** Choose a simple task, like writing a bio for yourself. Start with a basic prompt, then refine it step-by-step using at least three follow-up prompts, focusing on adding context, defining format, and iteratively adjusting based on the AI's previous response.` : `# चैप्टर 2.2: परफेक्ट प्रॉम्प्ट की कला - बुनियादी बातों से आगे

## सारांश: अच्छी प्रॉम्प्टिंग की नींव

मॉड्यूल 1 में, हमने स्थापित किया कि प्रॉम्प्ट AI के लिए आपका निर्देश है। हमने सीखा कि स्पष्ट, विशिष्ट होना और AI को भूमिका देना (जैसे, "मार्केटिंग विशेषज्ञ के रूप में कार्य करें") इसकी प्रतिक्रिया की गुणवत्ता और प्रासंगिकता में नाटकीय रूप से सुधार कर सकता है।

अब, आइए गहराई में जाते हैं। LLM से वास्तव में अद्भुत, अनुकूलित परिणाम प्राप्त करना किसी गुप्त ट्रिक के बारे में नहीं है; यह मानव-AI संचार की बारीकियों में महारत हासिल करने के बारे में है।

## संदर्भ जोड़ना: AI को पूरी तस्वीर देना

एक नए मानव सहायक को काम पर लगाने की कल्पना करें। यदि आप सिर्फ कहते हैं, "प्रोजेक्ट के बारे में एक ईमेल लिखें," तो वे खो जाएंगे। वे तुरंत पूछेंगे: कौन सा प्रोजेक्ट? यह ईमेल किसे जा रहा है? ईमेल का उद्देश्य क्या है? इसी तरह, AI को प्रासंगिक और उपयोगी आउटपुट तैयार करने के लिए इस "पृष्ठभूमि कहानी" या संदर्भ की आवश्यकता होती है।

**अपने AI सहायक को प्रभावी संदर्भ प्रदान करने के तरीके:**

**पृष्ठभूमि की जानकारी प्रदान करें:** AI के लिए दृश्य सेट करें। सामान्य "कुत्तों के बारे में लिखें" के बजाय, इसे उद्देश्य दें: "मैं पालतू जानवरों के मालिकों के लिए अपार्टमेंट में रहने के लिए सही कुत्ते की नस्ल चुनने के बारे में एक ब्लॉग पोस्ट लिख रहा हूं।"

**उद्देश्य/लक्ष्य परिभाषित करें:** स्पष्ट रूप से बताएं कि आप इस आउटपुट के लिए क्यों पूछ रहे हैं। "ईमेल हमारे प्रारंभिक साइन-अप्स को एक विशेष परिचयात्मक प्रस्ताव की घोषणा करने के लिए है।"

**दर्शकों को निर्दिष्ट करें:** AI के आउटपुट को कौन पढ़ रहा है या इसके साथ बातचीत कर रहा है? "इस ईमेल के दर्शक युवा वयस्क हैं जो स्थिरता और जैविक उत्पादों की गहराई से परवाह करते हैं।"

**संदर्भ जोड़ने का विस्तृत उदाहरण:**

अस्पष्ट प्रॉम्प्ट: "एक ईमेल लिखें।" (AI एक सामान्य, औपचारिक व्यावसायिक ईमेल बना सकता है)

सुधारा गया प्रॉम्प्ट (संदर्भ के साथ): "आप एक नई जैविक कॉफी सब्सक्रिप्शन सेवा के लिए एक मित्रवत ग्राहक सेवा प्रतिनिधि हैं। हमारी प्रारंभिक साइन-अप सूची को एक स्वागत ईमेल लिखें, एक विशेष 20% छूट परिचयात्मक प्रस्ताव की घोषणा करते हुए।"

## आउटपुट प्रारूप परिभाषित करना: आप इसे कैसे वितरित करना चाहते हैं

AI कई तरीकों से जानकारी तैयार कर सकता है - एक विस्तृत निबंध से लेकर एक सटीक तालिका तक। यदि आप स्पष्ट रूप से नहीं बताते कि आप जानकारी कैसे प्रस्तुत करना चाहते हैं, तो यह अपनी सबसे सामान्य आउटपुट शैली पर डिफ़ॉल्ट हो जाएगा।

**आउटपुट प्रारूप परिभाषित करने के मुख्य तरीके:**

**संरचना:** लेआउट के बारे में स्पष्ट रहें। "मुझे बुलेट पॉइंट्स दें," "औपचारिक व्यावसायिक पत्र के रूप में प्रारूपित करें," "हेडर के साथ दो-स्तंभ तालिका के रूप में प्रस्तुत करें।"

**स्वर:** लेखन की भावनात्मक गुणवत्ता या शैली। "पेशेवर और आधिकारिक स्वर का उपयोग करें," "उत्साही और प्रोत्साहनजनक लगें," "सहानुभूतिपूर्ण और समझदार बनें।"

**लंबाई:** स्पष्ट सीमाएं निर्धारित करें। "150 शब्दों के अंतर्गत," "लगभग 500 शब्द," "संक्षिप्त, प्रभावशाली प्रतिक्रिया का लक्ष्य रखें।"

## पुनरावृत्त प्रॉम्प्टिंग: AI के आउटपुट को परिष्कृत करना

यह शायद LLM से वास्तव में अनुकूलित परिणाम प्राप्त करने के लिए सबसे शक्तिशाली तकनीक है। एक एकल, पूर्ण प्रॉम्प्ट तैयार करने की कोशिश करने के बजाय, आप AI के साथ बातचीत में संलग्न होते हैं, अपनी प्रतिक्रिया के आधार पर इसके आउटपुट को प्रगतिशील रूप से परिष्कृत करते हैं।

**प्रभावी पुनरावृत्त प्रॉम्प्टिंग के चरण:**

1. **एक बुनियादी, आधारभूत प्रॉम्प्ट से शुरू करें:** AI से एक प्रारंभिक मसौदा प्राप्त करें।
2. **AI की प्रतिक्रिया की आलोचनात्मक समीक्षा करें:** कौन से पहलू अच्छे हैं? क्या गायब है? क्या बदलने की जरूरत है?
3. **विशिष्ट, कार्रवाई योग्य प्रतिक्रिया प्रदान करें:** "इसे ठीक करें" के बजाय, इसे बताएं: "यह अच्छा है, लेकिन कृपया दूसरे पैराग्राफ को अधिक संक्षिप्त बनाएं।"
4. **प्रक्रिया को दोहराएं:** जब तक आप पूरी तरह संतुष्ट नहीं हो जाते, तब तक इस आगे-पीछे को जारी रखें।

## उदाहरणों का महत्व: "दिखाएं, केवल बताएं नहीं"

कभी-कभी, केवल शब्द आपकी इच्छा को व्यक्त करने के लिए पर्याप्त नहीं होते। AI को आपके प्रॉम्प्ट में सीधे एक छोटा, प्रासंगिक उदाहरण प्रदान करना अविश्वसनीय रूप से प्रभावी हो सकता है।

## चैप्टर 2.2 की मुख्य बात

बुनियादी निर्देशों से परे, वास्तव में प्रॉम्प्टिंग में महारत हासिल करने में पर्याप्त संदर्भ प्रदान करना (कौन, क्या, क्यों), वांछित आउटपुट प्रारूप को स्पष्ट रूप से परिभाषित करना (संरचना, स्वर, लंबाई), और पुनरावृत्त परिष्करण में संलग्न होना शामिल है - AI के साथ एक गतिशील बातचीत।

**त्वरित स्व-जांच:** एक सरल कार्य चुनें, जैसे अपने लिए बायो लिखना। एक बुनियादी प्रॉम्प्ट से शुरू करें, फिर कम से कम तीन फॉलो-अप प्रॉम्प्ट का उपयोग करके इसे चरणबद्ध तरीके से परिष्कृत करें।`
    },
    {
      id: "2-3",
      title: language === 'en' ? "Use Case: Supercharging Your Email Workflow" : "उपयोग मामला: अपने ईमेल वर्कफ़्लो को सुपरचार्ज करना",
      description: language === 'en' ? "Transform your email productivity with AI drafting, summarizing, and tone adjustment" : "AI ड्राफ्टिंग, सारांशीकरण और टोन समायोजन के साथ अपनी ईमेल उत्पादकता को बदलें",
      estimatedTime: "15 min",
      content: language === 'en' ? `# Chapter 2.3: Use Case: Supercharging Your Email Workflow

## Your Email Assistant: Reclaiming Your Inbox

Emails are a universal constant in modern life, consuming significant portions of our day. From drafting new messages and summarizing lengthy threads to ensuring the right tone, email management can be a huge time-sink. This is precisely where AI shines! Think of your LLM as a highly efficient, always-on email assistant that can help you draft, summarize, and polish your messages in mere seconds.

## 1. Drafting Emails: From Scratch or from Sparse Notes

Staring at a blank email screen, trying to find the right words, can be a major source of procrastination. Instead of struggling, let AI do the heavy lifting for the first draft. You can provide it with just a few keywords, a brief outline, or even a scenario.

**Practical Prompts to Draft Emails:**

"Write a polite email declining a meeting invitation from John Doe for the project review, stating that I have a prior commitment but suggesting rescheduling for sometime next week or the week after."

"Draft a warm and encouraging thank-you email to our new client, Sarah Chen, for signing up for our premium digital marketing service. Invite her to contact our dedicated support team if she has any initial questions."

"I need to send an email to my entire team about the upcoming holiday schedule. Please mention that the office will be closed from December 24th to January 1st. Also, include a gentle reminder for everyone to submit their remaining leave requests by next Friday."

"Generate a sales follow-up email to a lead who downloaded our e-book on 'Sustainable Living Tips.' Briefly reintroduce our eco-friendly product line and offer a 10% discount on their first purchase."

## 2. Summarizing Long Email Threads: Cutting Through the Noise

Are you drowning in an overwhelming email chain? Copy and paste the entire thread into your LLM and ask for a summary. This can save you hours of reading and information extraction.

**Effective Prompts to Summarize Email Threads:**

"Summarize the key decisions, action items, and assigned owners from the following email thread:" (Paste the entire email content)

"What are the main points of disagreement or unresolved issues in this email exchange between the marketing and sales teams?" (Paste email content)

"Extract all dates, deadlines, and specific requirements mentioned in this email thread regarding the Q4 product launch plan:" (Paste email content)

"Provide a brief, neutral summary of the customer's issue and all troubleshooting steps attempted in this support ticket email chain:" (Paste email content)

## 3. Improving Tone: Striking the Right Chord Instantly

Sometimes, the content of your message is less of a concern than the tone you convey. An email that's too blunt can be misinterpreted, while one that's too verbose might be ignored. AI can instantly adjust the tone of your writing.

**Prompts to Refine Email Tone:**

"Make this email draft sound more professional and concise, removing any informal language or jargon:" (Paste your current draft)

"Rephrase this paragraph to sound more empathetic and understanding to a customer who is experiencing a recurring technical problem:" (Paste paragraph)

"Can you adjust this internal team update to sound more enthusiastic and encouraging, fostering a positive team spirit?" (Paste your draft)

"Take this formal announcement about policy changes and make it sound more accessible and friendly for our general employee population:" (Paste your draft)

## 4. Generating Subject Lines: Boosting Open Rates

The subject line is often the gatekeeper for whether your email gets opened. A compelling, clear, or intriguing subject line can significantly impact your email's effectiveness.

**Prompts to Generate Effective Subject Lines:**

"Generate 5 catchy and conversion-focused subject lines for an email announcing a new product launch for a fitness app aimed at beginners."

"Suggest 3 urgent and concise subject lines for an email about an upcoming project deadline (this Friday at 5 PM) for the 'Phase 2 Report'."

"Provide 4 professional and informative subject lines for a meeting invitation regarding the Q3 financial results presentation for stakeholders."

"Brainstorm 6 engaging and playful subject lines for a newsletter promoting a summer outdoor activities guide for families."

## Key Takeaway for Chapter 2.3

LLMs are incredibly versatile and powerful tools for email management, offering a significant boost to your productivity. From drafting initial versions and summarizing lengthy conversations to meticulously refining tone and generating highly effective subject lines, AI can dramatically reduce the time you spend on emails while simultaneously improving their clarity, professionalism, and impact.

**Quick Self-Check:** Find an email you need to send or a long email thread from your own communications. Practice using an LLM to either:
- Draft a response from scratch based on a few keywords
- Summarize the thread, extracting specific information
- Improve the tone of part of the email
- Generate 3 alternative subject lines for an important email` : `# चैप्टर 2.3: उपयोग मामला: अपने ईमेल वर्कफ़्लो को सुपरचार्ज करना

## आपका ईमेल सहायक: अपने इनबॉक्स को वापस पाना

ईमेल आधुनिक जीवन में एक सार्वभौमिक स्थिरांक हैं, जो हमारे दिन के महत्वपूर्ण हिस्से का उपभोग करते हैं। नए संदेश तैयार करने और लंबे थ्रेड्स को सारांशित करने से लेकर सही टोन सुनिश्चित करने तक, ईमेल प्रबंधन एक बड़ा समय-खराब करने वाला हो सकता है। यहीं पर AI चमकता है! अपने LLM को एक अत्यधिक कुशल, हमेशा चालू ईमेल सहायक के रूप में सोचें।

## 1. ईमेल तैयार करना: शुरुआत से या विरल नोट्स से

एक खाली ईमेल स्क्रीन को घूरना, सही शब्द ढूंढने की कोशिश करना, टालमटोल का एक प्रमुख स्रोत हो सकता है। संघर्ष करने के बजाय, AI को पहले मसौदे के लिए भारी काम करने दें। आप इसे कुछ कीवर्ड, एक संक्षिप्त रूपरेखा, या यहां तक कि एक परिदृश्य भी प्रदान कर सकते हैं।

**ईमेल तैयार करने के लिए व्यावहारिक प्रॉम्प्ट:**

"प्रोजेक्ट समीक्षा के लिए जॉन डो से मीटिंग निमंत्रण को अस्वीकार करने के लिए एक विनम्र ईमेल लिखें, यह बताते हुए कि मेरी पूर्व प्रतिबद्धता है लेकिन अगले सप्ताह या उसके बाद के सप्ताह में पुनर्निर्धारण का सुझाव दें।"

"हमारी नई ग्राहक, सारा चेन को हमारी प्रीमियम डिजिटल मार्केटिंग सेवा के लिए साइन अप करने के लिए एक गर्मजोशी और प्रोत्साहनजनक धन्यवाद ईमेल तैयार करें। उसे हमारी समर्पित सहायता टीम से संपर्क करने के लिए आमंत्रित करें।"

"मुझे आगामी छुट्टी के कार्यक्रम के बारे में अपनी पूरी टीम को एक ईमेल भेजना है। कृपया उल्लेख करें कि कार्यालय 24 दिसंबर से 1 जनवरी तक बंद रहेगा। अगले शुक्रवार तक अपने बकाया छुट्टी अनुरोध जमा करने के लिए सभी के लिए एक नम्र अनुस्मारक भी शामिल करें।"

## 2. लंबे ईमेल थ्रेड्स को सारांशित करना: शोर को काटना

क्या आप एक भारी ईमेल श्रृंखला में डूब रहे हैं? पूरे थ्रेड को अपने LLM में कॉपी और पेस्ट करें और सारांश मांगें। यह आपको घंटों पढ़ने और जानकारी निकालने की बचत कर सकता है।

**ईमेल थ्रेड्स को सारांशित करने के लिए प्रभावी प्रॉम्प्ट:**

"निम्नलिखित ईमेल थ्रेड से मुख्य निर्णयों, कार्य आइटम और नियुक्त मालिकों को सारांशित करें:" (पूरी ईमेल सामग्री पेस्ट करें)

"मार्केटिंग और सेल्स टीमों के बीच इस ईमेल एक्सचेंज में असहमति या अनसुलझे मुद्दों के मुख्य बिंदु क्या हैं?" (ईमेल सामग्री पेस्ट करें)

"Q4 उत्पाद लॉन्च योजना के संबंध में इस ईमेल थ्रेड में उल्लिखित सभी तारीखें, समय सीमा और विशिष्ट आवश्यकताओं को निकालें:" (ईमेल सामग्री पेस्ट करें)

## 3. टोन में सुधार: तुरंत सही राग बजाना

कभी-कभी, आपके संदेश की सामग्री की तुलना में आपका स्वर कम चिंता का विषय होता है। एक ईमेल जो बहुत कुंद है, गलत व्याख्या की जा सकती है, जबकि जो बहुत वर्बोस है उसे नजरअंदाज किया जा सकता है। AI तुरंत आपके लेखन के स्वर को समायोजित कर सकता है।

**ईमेल टोन को परिष्कृत करने के लिए प्रॉम्प्ट:**

"इस ईमेल ड्राफ्ट को अधिक पेशेवर और संक्षिप्त बनाएं, किसी भी अनौपचारिक भाषा या शब्दजाल को हटाकर:" (अपना वर्तमान मसौदा पेस्ट करें)

"इस पैराग्राफ को एक ग्राहक के लिए अधिक सहानुभूतिपूर्ण और समझदार बनाने के लिए फिर से लिखें जो एक आवर्ती तकनीकी समस्या का सामना कर रहा है:" (पैराग्राफ पेस्ट करें)

## 4. विषय पंक्तियां उत्पन्न करना: खुलने की दरें बढ़ाना

विषय पंक्ति अक्सर इस बात का द्वारपाल होती है कि आपका ईमेल खोला जाता है या नहीं। एक आकर्षक, स्पष्ट या दिलचस्प विषय पंक्ति आपके ईमेल की प्रभावशीलता को महत्वपूर्ण रूप से प्रभावित कर सकती है।

**प्रभावी विषय पंक्तियां उत्पन्न करने के लिए प्रॉम्प्ट:**

"शुरुआती लोगों के लिए एक फिटनेस ऐप के नए उत्पाद लॉन्च की घोषणा करने वाले ईमेल के लिए 5 आकर्षक और रूपांतरण-केंद्रित विषय पंक्तियां उत्पन्न करें।"

"'चरण 2 रिपोर्ट' के लिए आगामी प्रोजेक्ट समय सीमा (इस शुक्रवार शाम 5 बजे) के बारे में ईमेल के लिए 3 तत्काल और संक्षिप्त विषय पंक्तियों का सुझाव दें।"

## चैप्टर 2.3 की मुख्य बात

LLMs ईमेल प्रबंधन के लिए अविश्वसनीय रूप से बहुमुखी और शक्तिशाली उपकरण हैं, जो आपकी उत्पादकता में महत्वपूर्ण वृद्धि प्रदान करते हैं। प्रारंभिक संस्करणों का मसौदा तैयार करने और लंबी बातचीत को सारांशित करने से लेकर स्वर को सावधानीपूर्वक परिष्कृत करने और अत्यधिक प्रभावी विषय पंक्तियां उत्पन्न करने तक, AI ईमेल पर आपके द्वारा बिताए जाने वाले समय को नाटकीय रूप से कम कर सकता है।

**त्वरित स्व-जांच:** अपने संचार से एक ईमेल खोजें जिसे आपको भेजना है या एक लंबा ईमेल थ्रेड। LLM का उपयोग करके अभ्यास करें।`
    },
    {
      id: "2-4",
      title: language === 'en' ? "Use Case: Brainstorming and Creative Writing" : "उपयोग मामला: ब्रेनस्टॉर्मिंग और रचनात्मक लेखन",
      description: language === 'en' ? "Unlock your creative potential with AI as your brainstorming partner and co-author" : "AI को अपने ब्रेनस्टॉर्मिंग साझीदार और सह-लेखक के रूप में अपनी रचनात्मक क्षमता को अनलॉक करें",
      estimatedTime: "15 min",
      content: language === 'en' ? `# Chapter 2.4: Use Case: Brainstorming and Creative Writing

## Your Creative Partner: Unleashing Imagination

Feeling stuck? Grappling with writer's block? In desperate need of fresh ideas for a project? LLMs are not just analytical engines; they are fantastic brainstorming partners and can even help kickstart and advance your creative writing projects. With their vast training data of human creativity, they can generate an endless stream of ideas, develop characters, outline plot points, and even produce full creative pieces based on your precise instructions.

## 1. Generating Ideas: A Fountain of Inspiration

Whether you're developing a new business concept, planning content for social media, or just need inspiration for a personal hobby, AI can provide a massive head start, often offering perspectives you hadn't considered.

**Comprehensive Prompts to Generate Ideas:**

"Brainstorm 10 unique and engaging blog post topics about remote work challenges and effective solutions for maintaining team cohesion. Focus on practical, actionable advice."

"I'm launching a new sustainable clothing brand targeting Gen Z. Give me 15 creative and memorable name ideas that convey eco-friendliness, ethical production, and a modern, stylish aesthetic. Avoid generic terms."

"Suggest 8 compelling social media content ideas for a local bakery, specifically tailored for Instagram Reels and TikTok. Ideas should encourage user engagement, highlight unique products, and show behind-the-scenes processes."

"What are 5 innovative and cost-effective ways to market a new educational app designed to teach coding to middle school students? Think about reaching both students and parents."

"Provide 7 creative date night ideas for couples on a tight budget, focusing on experiences that are unique and foster connection, rather than just dining out."

"Brainstorm 12 potential plot twists for a mystery novel set in a prestigious university, involving a secret society and an ancient artifact."

## 2. Writing Short Stories, Poems, and Song Lyrics: AI as Your Co-Author

LLMs have "read" millions of creative works across countless genres and styles. This enables them to mimic different narrative voices, poetic structures, and lyrical themes, generating original content that aligns with your creative vision.

**Prompts to Kickstart Creative Writing:**

"Write a short story (under 500 words) about a talking dog who becomes a detective in a bustling city. Make the tone humorous, with elements of noir. The dog's name is 'Sherlock Bones'."

"Compose a short poem (4 stanzas, AABB rhyme scheme) about the quiet beauty of autumn leaves, focusing on their colors and the feeling of melancholy as winter approaches."

"Write the chorus and first verse for a pop song about overcoming a personal challenge and finding inner strength. The theme should be empowerment and resilience, with an uplifting melody in mind."

"Create a detailed dialogue between two friends planning a surprise birthday party. One friend (Sarah) is extremely organized and detail-oriented, while the other (Mark) is spontaneous and prone to chaos. The dialogue should reveal their personalities through their planning styles."

"Generate a descriptive paragraph (150 words) portraying a fantastical enchanted forest, complete with glowing flora, whispering trees, and hidden magical creatures. Focus on sensory details."

## 3. Overcoming Writer's Block: Your Idea Generator

Every writer, no matter how seasoned, faces writer's block. Whether you're stuck on a particular sentence, a challenging paragraph, or even the overarching direction of a whole project, describing your dilemma to the AI can often provide the necessary breakthrough or new perspective.

**Prompts to Break Through Writer's Block:**

"I'm writing an essay for a university course on 'The Impact of Social Media on Adolescent Mental Health.' I'm stuck on the introduction and can't find a compelling hook. Give me three different opening paragraph ideas, each with a unique angle (e.g., a startling statistic, a relatable anecdote, a provocative question)."

"I need to describe a mysterious old mansion in a gothic novel. I want it to feel both grand and unsettling. Give me 5 vivid descriptions of its exterior, focusing on eerie details like overgrown vines, broken windows, and a sense of forgotten history."

"My main character needs to deliver a compelling speech to rally a disheartened team before a crucial final competition. What are 3 different ways they could start the speech to immediately grab attention and inspire hope? Provide an example opening line for each approach."

"I'm writing a scene where two characters have a tense confrontation. They've been avoiding a specific topic for weeks. Suggest 3 different ways the conversation could finally erupt, including potential triggers or unspoken resentments."

## Key Takeaway for Chapter 2.4

LLMs are far more than just factual repositories; they are powerful creative collaborators that can significantly augment your brainstorming and writing processes. Use them to banish writer's block, generate a diverse flood of ideas, and even draft initial versions of stories, poems, song lyrics, or dialogue. Remember the power of iterative prompting to guide the AI towards your precise creative vision, treating it as an active partner in your artistic endeavors.

**Quick Self-Check:** Think of a creative project you've always wanted to start or one you're currently struggling with (e.g., a short story idea, a new hobby project, a social media campaign for a personal brand). Use an LLM to generate:
- 5 distinct ideas for that project
- An outline for one of those ideas  
- A short descriptive paragraph or a few lines of dialogue relevant to your project` : `# चैप्टर 2.4: उपयोग मामला: ब्रेनस्टॉर्मिंग और रचनात्मक लेखन

## आपका रचनात्मक साझीदार: कल्पना को मुक्त करना

अटका हुआ महसूस कर रहे हैं? लेखक के ब्लॉक से जूझ रहे हैं? किसी प्रोजेक्ट के लिए नए विचारों की सख्त जरूरत है? LLMs सिर्फ विश्लेषणात्मक इंजन नहीं हैं; वे शानदार ब्रेनस्टॉर्मिंग साझीदार हैं और आपकी रचनात्मक लेखन परियोजनाओं को शुरू करने और आगे बढ़ाने में भी मदद कर सकते हैं। मानव रचनात्मकता के अपने विशाल प्रशिक्षण डेटा के साथ, वे विचारों की एक अनंत धारा उत्पन्न कर सकते हैं।

## 1. विचार उत्पन्न करना: प्रेरणा का एक फव्वारा

चाहे आप एक नया व्यावसायिक विचार विकसित कर रहे हों, सोशल मीडिया के लिए सामग्री की योजना बना रहे हों, या व्यक्तिगत शौक के लिए प्रेरणा की जरूरत हो, AI एक बड़ी शुरुआत प्रदान कर सकता है, अक्सर ऐसे दृष्टिकोण प्रदान करता है जिन्हें आपने नहीं माना था।

**विचार उत्पन्न करने के लिए व्यापक प्रॉम्प्ट:**

"रिमोट वर्क चुनौतियों और टीम एकजुटता बनाए रखने के प्रभावी समाधानों के बारे में 10 अनूठे और आकर्षक ब्लॉग पोस्ट विषयों पर ब्रेनस्टॉर्म करें। व्यावहारिक, कार्यान्वित सलाह पर ध्यान दें।"

"मैं जेन Z को लक्षित करते हुए एक नया टिकाऊ कपड़ों का ब्रांड लॉन्च कर रहा हूं। मुझे 15 रचनात्मक और यादगार नाम विचार दें जो पर्यावरण-मित्रता, नैतिक उत्पादन, और एक आधुनिक, स्टाइलिश सौंदर्यशास्त्र को व्यक्त करते हैं।"

"एक स्थानीय बेकरी के लिए 8 आकर्षक सोशल मीडिया सामग्री विचार सुझाएं, विशेष रूप से Instagram Reels और TikTok के लिए तैयार। विचारों को उपयोगकर्ता सहभागिता को प्रोत्साहित करना चाहिए।"

"मध्यम स्कूली छात्रों को कोडिंग सिखाने के लिए डिज़ाइन किए गए नए शैक्षिक ऐप का विपणन करने के 5 नवाचार और लागत-प्रभावी तरीके क्या हैं?"

"तंग बजट वाले जोड़ों के लिए 7 रचनात्मक डेट नाइट विचार प्रदान करें, ऐसे अनुभवों पर ध्यान दें जो अनूठे हैं और संबंध को बढ़ावा देते हैं।"

## 2. लघु कहानियां, कविताएं और गीत के बोल लिखना: AI आपके सह-लेखक के रूप में

LLMs ने अनगिनत शैलियों और शैलियों में लाखों रचनात्मक कार्यों को "पढ़ा" है। यह उन्हें विभिन्न कथा आवाजों, काव्यात्मक संरचनाओं और गीतात्मक विषयों की नकल करने में सक्षम बनाता है, आपकी रचनात्मक दृष्टि के साथ संरेखित मूल सामग्री उत्पन्न करता है।

**रचनात्मक लेखन शुरू करने के लिए प्रॉम्प्ट:**

"एक बात करने वाले कुत्ते के बारे में एक छोटी कहानी (500 शब्दों से कम) लिखें जो एक हलचल भरे शहर में जासूस बन जाता है। स्वर को हास्यपूर्ण बनाएं, नॉयर के तत्वों के साथ। कुत्ते का नाम 'शर्लॉक बोन्स' है।"

"शरद ऋतु के पत्तों की शांत सुंदरता के बारे में एक छोटी कविता लिखें (4 छंद, AABB तुकबंदी योजना), उनके रंगों और सर्दी के करीब आने पर उदासी की भावना पर ध्यान दें।"

"व्यक्तिगत चुनौती पर काबू पाने और आंतरिक शक्ति खोजने के बारे में एक पॉप गीत के लिए कोरस और पहला श्लोक लिखें। विषय सशक्तिकरण और लचीलापन होना चाहिए।"

"दो दोस्तों के बीच एक विस्तृत बातचीत बनाएं जो एक सरप्राइज़ बर्थडे पार्टी की योजना बना रहे हैं। एक मित्र (सारा) अत्यधिक व्यवस्थित और विस्तार-उन्मुख है, जबकि दूसरा (मार्क) सहज और अराजकता के लिए प्रवण है।"

## 3. लेखक के ब्लॉक पर काबू पाना: आपका विचार जनरेटर

हर लेखक, चाहे वह कितना भी अनुभवी हो, लेखक के ब्लॉक का सामना करता है। चाहे आप किसी विशेष वाक्य पर अटके हों, एक चुनौतीपूर्ण पैराग्राफ पर, या यहां तक कि पूरी परियोजना की व्यापक दिशा पर, AI को अपनी दुविधा का वर्णन करना अक्सर आवश्यक सफलता या नया दृष्टिकोण प्रदान कर सकता है।

**लेखक के ब्लॉक को तोड़ने के लिए प्रॉम्प्ट:**

"मैं 'किशोर मानसिक स्वास्थ्य पर सोशल मीडिया का प्रभाव' पर विश्वविद्यालय पाठ्यक्रम के लिए एक निबंध लिख रहा हूं। मैं परिचय पर अटक गया हूं और एक आकर्षक हुक नहीं ढूंढ सकता। मुझे तीन अलग-अलग शुरुआती पैराग्राफ विचार दें।"

"मुझे एक गॉथिक उपन्यास में एक रहस्यमय पुराने हवेली का वर्णन करना है। मैं चाहता हूं कि यह भव्य और परेशान करने वाला दोनों लगे। मुझे इसके बाहरी हिस्से के 5 जीवंत वर्णन दें।"

"मेरे मुख्य पात्र को एक महत्वपूर्ण अंतिम प्रतियोगिता से पहले एक निराश टीम को रैली करने के लिए एक आकर्षक भाषण देना है। वे तुरंत ध्यान आकर्षित करने और आशा को प्रेरित करने के लिए भाषण कैसे शुरू कर सकते हैं?"

## चैप्टर 2.4 की मुख्य बात

LLMs केवल तथ्यात्मक भंडार से कहीं अधिक हैं; वे शक्तिशाली रचनात्मक सहयोगी हैं जो आपकी ब्रेनस्टॉर्मिंग और लेखन प्रक्रियाओं को महत्वपूर्ण रूप से बढ़ा सकते हैं। लेखक के ब्लॉक को दूर करने, विचारों की विविध बाढ़ उत्पन्न करने, और यहां तक कि कहानियों, कविताओं, गीत के बोल, या संवाद के प्रारंभिक संस्करणों का मसौदा तैयार करने के लिए उनका उपयोग करें।

**त्वरित स्व-जांच:** एक रचनात्मक परियोजना के बारे में सोचें जिसे आप हमेशा शुरू करना चाहते थे या जिसके साथ आप वर्तमान में संघर्ष कर रहे हैं। LLM का उपयोग करके उत्पन्न करें: उस परियोजना के लिए 5 अलग विचार, उन विचारों में से एक की रूपरेखा।`
    },
    {
      id: "2-5",
      title: language === 'en' ? "Use Case: Learning & Summarizing Complex Topics" : "उपयोग मामला: जटिल विषयों को सीखना और सारांशित करना",
      description: language === 'en' ? "Transform your learning with AI as your personal tutor and research assistant" : "AI को अपने व्यक्तिगत शिक्षक और अनुसंधान सहायक के रूप में अपने सीखने को बदलें",
      estimatedTime: "15 min", 
      content: language === 'en' ? `# Chapter 2.5: Use Case: Learning & Summarizing Complex Topics

## Your Personal Tutor and Research Assistant: Knowledge at Your Fingertips

In today's information-rich world, learning efficiently and synthesizing vast amounts of data are invaluable skills. LLMs are fantastic learning tools that can act as your personal tutor and research assistant. They excel at breaking down complex concepts into digestible explanations, summarizing lengthy documents to extract core information, and even helping you create personalized study materials.

## 1. Asking AI to Explain Difficult Concepts: Simplifying the Complex

Encountering a new or complex concept can be daunting. Instead of endlessly searching or getting bogged down in jargon, ask the AI to explain it in terms you do understand, using analogies or simplified language tailored to your learning level.

**Prompts to Clarify Complex Concepts:**

"Explain quantum entanglement to me like I'm 10 years old, using a simple, everyday analogy that I can easily grasp."

"What is blockchain technology, and how is it fundamentally different from traditional centralized databases? Use analogies related to shared ledgers or digital certificates to illustrate."

"Can you break down the process of photosynthesis into five easy-to-understand, sequential steps, suitable for a high school biology student?"

"I'm confused about the difference between inflation and deflation. Explain it clearly, providing a real-world example for each phenomenon."

"Describe Object-Oriented Programming (OOP) in the context of building a house, relating concepts like classes and objects to architectural blueprints and actual buildings."

"Explain the Theory of Relativity by Albert Einstein in under 100 words, focusing on its core idea without using complex physics terms."

## 2. Summarizing Long Articles, Research Papers, or Meeting Transcripts: The Information Extractor

The sheer volume of information we encounter daily can be overwhelming. Reading lengthy documents, research papers, or detailed meeting transcripts is time-consuming. Let AI efficiently extract the core information for you, saving valuable time and ensuring you grasp the essentials.

**Effective Prompts to Summarize and Extract Information:**

"Summarize the key findings, methodology, and conclusions from the following research paper on climate change impacts on biodiversity in 5 concise bullet points:" (Paste the full text of the research paper)

"Extract the main arguments presented by each speaker and any counter-arguments from this debate transcript about the future of renewable energy:" (Paste transcript content)

"What are the key takeaways and actionable recommendations from this news article about the global economic outlook? Provide a concise one-paragraph summary and list 3 specific recommendations." (Paste article text)

"I have a meeting transcript of our project planning session. Can you list all the action items assigned to specific people, along with their respective deadlines, if mentioned?" (Paste transcript)

"From this long product review, identify the top 3 pros and top 3 cons of the new smartphone model, and then give an overall sentiment rating (positive, neutral, negative)." (Paste review text)

"Condense this 10-page business proposal into a one-page executive summary, focusing on the problem, proposed solution, market opportunity, and financial projections." (Paste proposal text)

## 3. Creating Study Guides or Flashcards: Personalized Learning Aids

Transforming dense information from textbooks, lectures, or articles into digestible study aids can be a laborious process. AI can automate this, generating personalized study guides, flashcards, or even practice questions tailored to your learning style.

**Prompts to Generate Study Materials:**

"I'm studying for a history exam on the American Civil War. Generate 10 flashcard questions and answers covering key events, important figures, and significant battles from the period 1861-1865."

"Create a comprehensive study guide outline for a biology chapter on human anatomy and physiology. Focus on major organ systems (e.g., circulatory, respiratory, nervous) and include key functions and associated disorders."

"From this text about the principles of marketing, generate a concise summary of the '4 P's of Marketing' and then create 5 multiple-choice questions to test my understanding of them, with correct answers provided." (Paste marketing text)

"I'm learning Spanish vocabulary. Give me 15 common Spanish verbs and their English translations, formatted as a two-column table for easy flashcard creation."

"Generate a set of 5 short-answer questions based on the content of this lecture transcript about climate change mitigation strategies." (Paste lecture transcript)

## Key Takeaway for Chapter 2.5

LLMs are incredibly powerful educational tools that can fundamentally enhance your learning efficiency and information retention. By leveraging them to simplify complex information, summarize lengthy content, and create personalized study materials, you can make your learning process significantly more efficient, targeted, and effective, freeing up more time for critical thinking and deeper understanding.

**Quick Self-Check:** Find a complex article or topic online (e.g., a scientific explanation, a historical event summary, a new economic policy). Use an LLM to:
- Summarize the content in a format you prefer (e.g., 3 bullet points, a short paragraph)
- Ask it to explain a specific concept from the article in simpler terms, perhaps using an analogy
- Generate 2-3 study questions based on the content` : `# चैप्टर 2.5: उपयोग मामला: जटिल विषयों को सीखना और सारांशित करना

## आपका व्यक्तिगत शिक्षक और अनुसंधान सहायक: आपकी उंगलियों पर ज्ञान

आज की सूचना-समृद्ध दुनिया में, कुशलता से सीखना और डेटा की विशाल मात्रा को संश्लेषित करना अमूल्य कौशल हैं। LLMs शानदार शिक्षा उपकरण हैं जो आपके व्यक्तिगत शिक्षक और अनुसंधान सहायक के रूप में कार्य कर सकते हैं। वे जटिल अवधारणाओं को पाचन योग्य स्पष्टीकरणों में तोड़ने, मुख्य जानकारी निकालने के लिए लंबे दस्तावेजों को सारांशित करने में उत्कृष्ट हैं।

## 1. AI से कठिन अवधारणाओं को समझाने के लिए कहना: जटिल को सरल बनाना

एक नई या जटिल अवधारणा का सामना करना कठिन हो सकता है। अंतहीन खोज करने या शब्दजाल में फंसने के बजाय, AI से कहें कि वह इसे उन शब्दों में समझाए जिन्हें आप समझते हैं, आपके शिक्षा स्तर के अनुकूल सादृश्य या सरलीकृत भाषा का उपयोग करके।

**जटिल अवधारणाओं को स्पष्ट करने के लिए प्रॉम्प्ट:**

"क्वांटम एंटैंगलमेंट को मुझे 10 साल के बच्चे की तरह समझाएं, एक सरल, रोजमर्रा की सादृश्य का उपयोग करके जिसे मैं आसानी से समझ सकूं।"

"ब्लॉकचेन तकनीक क्या है, और यह पारंपरिक केंद्रीकृत डेटाबेस से मौलिक रूप से कैसे अलग है? साझा बहीखातों या डिजिटल प्रमाणपत्रों से संबंधित सादृश्यों का उपयोग करके चित्रित करें।"

"क्या आप प्रकाश संश्लेषण की प्रक्रिया को हाई स्कूल जीव विज्ञान के छात्र के लिए उपयुक्त पांच आसान-से-समझ, अनुक्रमिक चरणों में तोड़ सकते हैं?"

"मैं मुद्रास्फीति और अपस्फीति के बीच अंतर के बारे में भ्रमित हूं। इसे स्पष्ट रूप से समझाएं, प्रत्येक घटना के लिए एक वास्तविक दुनिया का उदाहरण प्रदान करें।"

"ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग (OOP) को घर बनाने के संदर्भ में वर्णित करें, कक्षाओं और ऑब्जेक्ट्स जैसी अवधारणाओं को वास्तुशिल्प ब्लूप्रिंट और वास्तविक इमारतों से जोड़ें।"

"अल्बर्ट आइंस्टाइन के सापेक्षता सिद्धांत को 100 शब्दों से कम में समझाएं, जटिल भौतिकी शब्दों का उपयोग किए बिना इसके मुख्य विचार पर ध्यान दें।"

## 2. लंबे लेख, अनुसंधान पत्र या बैठक प्रतिलेख को सारांशित करना: सूचना निकालने वाला

हमारे दैनिक सामने आने वाली जानकारी की मात्रा भारी हो सकती है। लंबे दस्तावेज, अनुसंधान पत्र, या विस्तृत बैठक प्रतिलेख पढ़ना समय-गहन है। AI को आपके लिए कुशलता से मुख्य जानकारी निकालने दें, मूल्यवान समय बचाएं और सुनिश्चित करें कि आप आवश्यक बातें समझें।

**सारांशित करने और जानकारी निकालने के लिए प्रभावी प्रॉम्प्ट:**

"जैव विविधता पर जलवायु परिवर्तन प्रभावों पर निम्नलिखित अनुसंधान पत्र से मुख्य निष्कर्षों, पद्धति और निष्कर्षों को 5 संक्षिप्त बुलेट पॉइंट्स में सारांशित करें:" (अनुसंधान पत्र का पूरा पाठ पेस्ट करें)

"नवीकरणीय ऊर्जा के भविष्य के बारे में इस बहस प्रतिलेख से प्रत्येक वक्ता द्वारा प्रस्तुत मुख्य तर्कों और किसी भी प्रति-तर्क को निकालें:" (प्रतिलेख सामग्री पेस्ट करें)

"वैश्विक आर्थिक दृष्टिकोण के बारे में इस समाचार लेख से मुख्य निष्कर्ष और कार्रवाई योग्य सिफारिशें क्या हैं? एक संक्षिप्त एक-पैराग्राफ सारांश प्रदान करें और 3 विशिष्ट सिफारिशों की सूची दें।" (लेख पाठ पेस्ट करें)

"मेरे पास हमारे प्रोजेक्ट योजना सत्र का एक बैठक प्रतिलेख है। क्या आप विशिष्ट लोगों को सौंपे गए सभी कार्य आइटमों की सूची बना सकते हैं, उनकी संबंधित समय सीमा के साथ, यदि उल्लिखित है?" (प्रतिलेख पेस्ट करें)

## 3. अध्ययन गाइड या फ्लैशकार्ड बनाना: व्यक्तिगत शिक्षा सहायक

पाठ्यपुस्तकों, व्याख्यानों या लेखों से घनी जानकारी को पाचन योग्य अध्ययन सहायकों में बदलना एक श्रमसाध्य प्रक्रिया हो सकती है। AI इसे स्वचालित कर सकता है, आपकी सीखने की शैली के अनुकूल व्यक्तिगत अध्ययन गाइड, फ्लैशकार्ड, या यहां तक कि अभ्यास प्रश्न उत्पन्न कर सकता है।

**अध्ययन सामग्री उत्पन्न करने के लिए प्रॉम्प्ट:**

"मैं अमेरिकी गृहयुद्ध पर इतिहास परीक्षा के लिए अध्ययन कर रहा हूं। 1861-1865 की अवधि से मुख्य घटनाओं, महत्वपूर्ण व्यक्तित्वों और महत्वपूर्ण लड़ाइयों को कवर करने वाले 10 फ्लैशकार्ड प्रश्न और उत्तर उत्पन्न करें।"

"मानव शरीर रचना और शरीर विज्ञान पर जीव विज्ञान अध्याय के लिए एक व्यापक अध्ययन गाइड रूपरेखा बनाएं। प्रमुख अंग प्रणालियों (जैसे, परिसंचरण, श्वसन, तंत्रिका) पर ध्यान दें और मुख्य कार्यों और संबंधित विकारों को शामिल करें।"

"मार्केटिंग के सिद्धांतों के बारे में इस पाठ से, 'मार्केटिंग के 4 P's' का एक संक्षिप्त सारांश उत्पन्न करें और फिर उनकी मेरी समझ का परीक्षण करने के लिए 5 बहुविकल्पीय प्रश्न बनाएं।" (मार्केटिंग पाठ पेस्ट करें)

"मैं स्पेनिश शब्दावली सीख रहा हूं। मुझे 15 सामान्य स्पेनिश क्रियाएं और उनके अंग्रेजी अनुवाद दें, आसान फ्लैशकार्ड निर्माण के लिए दो-स्तंभ तालिका के रूप में प्रारूपित।"

## चैप्टर 2.5 की मुख्य बात

LLMs अविश्वसनीय रूप से शक्तिशाली शैक्षणिक उपकरण हैं जो आपकी सीखने की दक्षता और जानकारी प्रतिधारण को मौलिक रूप से बढ़ा सकते हैं। जटिल जानकारी को सरल बनाने, लंबी सामग्री को सारांशित करने, और व्यक्तिगत अध्ययन सामग्री बनाने के लिए उनका लाभ उठाकर, आप अपनी सीखने की प्रक्रिया को काफी अधिक कुशल, लक्षित और प्रभावी बना सकते हैं।

**त्वरित स्व-जांच:** ऑनलाइन एक जटिल लेख या विषय खोजें (जैसे, एक वैज्ञानिक स्पष्टीकरण, एक ऐतिहासिक घटना सारांश, एक नई आर्थिक नीति)। LLM का उपयोग करके: सामग्री को अपनी पसंदीदा प्रारूप में सारांशित करें, सादृश्य का उपयोग करके सरल शब्दों में व्याख्या करने के लिए कहें।`
    },
    {
      id: "2-6",
      title: language === 'en' ? "Comparing the Chats: When to Use Which?" : "चैट्स की तुलना: कौन सा कब उपयोग करें?",
      description: language === 'en' ? "Learn to choose the right AI tool for each task - ChatGPT, Gemini, or Claude" : "प्रत्येक कार्य के लिए सही AI टूल चुनना सीखें - ChatGPT, Gemini, या Claude",
      estimatedTime: "20 min",
      content: language === 'en' ? `# Chapter 2.6: Comparing the Chats: When to Use Which?

## Choosing the Right Tool for the Job: An AI Matchmaker

In the rapidly evolving landscape of LLMs, choosing the "best" AI is less about a single superior model and more about selecting the right tool for the specific task at hand. Just like you wouldn't use a hammer to drive a screw, different LLMs are better suited for different types of queries and workflows. Understanding their unique strengths, weaknesses, and 'personalities' can significantly help you choose the most effective "AI colleague" for your needs.

## Unbiased Comparison Table: A Quick Reference Guide

Let's look at the major players and their ideal use cases, strengths, and common limitations to help you make informed decisions. This table provides a simplified overview, as models are constantly being updated and improved.

| Feature/LLM | ChatGPT (OpenAI) | Google Gemini | Claude (Anthropic) |
|-------------|------------------|---------------|-------------------|
| **Primary Focus** | General-purpose dialogue, creativity, programming assistance | Information retrieval, real-time data, multimodal understanding | Safety, long-context processing, nuanced reasoning |
| **Ideal For** | Creative writing, brainstorming, coding help, general knowledge queries, explaining complex topics in an engaging way | Research, factual queries, current events, planning, Google Workspace integration, visual data analysis | Summarizing very long documents, in-depth text analysis, sensitive topics, professional communication, ethical considerations |
| **Key Strengths** | Highly versatile and adaptable, strong creative and imaginative abilities, excellent at generating natural and conversational text, large and active community support | Strong access to current information (via Search and extensions), seamless integration with Google apps and services, often offers multiple response drafts for choice, increasingly multimodal capabilities | Exceptional context handling for extremely long texts (large context window), robust safety and ethical guidelines, strong for detailed analytical and nuanced reasoning tasks, less prone to "fluff" |
| **Common Weaknesses** | Can "hallucinate" or provide outdated information if not connected to real-time data, sometimes overly verbose, may struggle with very specific factual accuracy without external tool integration | Can sometimes be less creative or conversational than ChatGPT, may occasionally be perceived as overly cautious or less experimental in responses, still evolving its multimodal applications | Less widely known or used for general creative tasks, user interface might feel slightly less intuitive or flashy to some, may be slower for very short, rapid-fire exchanges due to its emphasis on detailed processing |
| **"Personality"** | Enthusiastic, versatile, engaging, can be quite formal or casual depending on the prompt | Factual, efficient, integrated, often provides succinct and well-structured answers | Thoughtful, careful, detail-oriented, prioritizes helpfulness and harmlessness |

## When to Choose Which LLM: Practical Scenarios

Understanding the table above translates into practical decisions:

**When you need a creative spark or a versatile dialogue partner:** ChatGPT is often your best bet. Its wide range of creative abilities makes it excellent for brainstorming content ideas, drafting imaginative stories, generating marketing copy, or even getting assistance with coding challenges. It excels at adapting its tone and style to fit various conversational needs.

**When you're doing research, need current information, or work extensively with Google products:** Google Gemini comes to the forefront. Its strong ties to Google Search mean it can often provide more up-to-date factual information. Its native integration with Google Workspace documents (like Docs and Sheets) makes it a powerful assistant for planning, summarizing meetings, or drafting emails directly within that ecosystem.

**When you're working with long documents, require in-depth analysis, or are dealing with sensitive content:** Claude is designed for these scenarios. Its exceptional "context window" allows it to process and analyze vast amounts of text (think entire books or lengthy legal contracts). Its built-in ethical guardrails make it a reliable choice for sensitive subjects, ensuring more cautious and responsible responses.

**For seamless integration with your everyday work in Microsoft Office:** While not explicitly on your list, remember that Microsoft Copilot is designed to seamlessly integrate with Word, Excel, PowerPoint, Outlook, and Teams. If your workflow is heavily reliant on Microsoft Office, Copilot offers an unparalleled productivity boost within those applications.

## Trust Building: Important Reminders for All LLM Interactions

Regardless of which LLM you choose or how advanced it becomes, always remember these fundamental principles:

**Verify Important Information:** LLMs can and do "hallucinate" – confidently stating incorrect or fabricated information. Always double-check critical facts, figures, or sensitive details with reliable, external sources, especially when the information is used for decision-making, academic work, or public dissemination.

**Understand Their Limitations:** Remember that LLMs are sophisticated pattern-matching algorithms, not conscious beings. They lack true understanding, emotions, or real-time personal memory of you outside a specific chat thread. Avoid inputting highly sensitive personal or confidential data unless explicitly assured of robust data privacy and security measures.

**Human Oversight is Key:** These tools are designed to amplify human capabilities, not replace human judgment, creativity, or ethical responsibility. Always review, refine, and critically evaluate their outputs. Think of AI as a powerful co-pilot, not the autonomous pilot. Your discerning input and final approval remain essential.

## Key Takeaway for Chapter 2.6

While all major LLMs are incredibly powerful and versatile, each possesses unique strengths and focuses. Choosing the right tool for the specific task at hand can significantly enhance your results and efficiency. Always combine the AI's speed and vast knowledge with your own critical thinking, human judgment, and a commitment to verifying crucial information. This symbiotic relationship between human and AI is where true value is created.

**Quick Self-Check:** Based on your current professional or personal needs (e.g., writing essays, conducting research for a project, pursuing creative hobbies, managing a team), which LLM (ChatGPT, Gemini, or Claude) do you think would be most useful for you, and why? Consider its specific strengths in relation to your typical tasks.` : `# चैप्टर 2.6: चैट्स की तुलना: कौन सा कब उपयोग करें?

## काम के लिए सही टूल चुनना: एक AI मैचमेकर

LLMs के तेजी से विकसित होते परिदृश्य में, "सर्वश्रेष्ठ" AI चुनना एक एकल श्रेष्ठ मॉडल के बारे में कम है और हाथ में विशिष्ट कार्य के लिए सही टूल का चयन करने के बारे में अधिक है। जैसे आप स्क्रू को चलाने के लिए हथौड़े का उपयोग नहीं करेंगे, विभिन्न LLMs विभिन्न प्रकार की क्वेरी और वर्कफ़्लो के लिए बेहतर अनुकूल हैं।

## निष्पक्ष तुलना तालिका: एक त्वरित संदर्भ गाइड

आइए मुख्य खिलाड़ियों और उनके आदर्श उपयोग मामलों, शक्तियों और सामान्य सीमाओं को देखते हैं। यह तालिका एक सरलीकृत अवलोकन प्रदान करती है, क्योंकि मॉडल लगातार अपडेट और सुधार हो रहे हैं।

| सुविधा/LLM | ChatGPT (OpenAI) | Google Gemini | Claude (Anthropic) |
|-------------|------------------|---------------|-------------------|
| **प्राथमिक फोकस** | सामान्य-उद्देश्य संवाद, रचनात्मकता, प्रोग्रामिंग सहायता | सूचना पुनर्प्राप्ति, वास्तविक-समय डेटा, मल्टीमॉडल समझ | सुरक्षा, लंबे-संदर्भ प्रसंस्करण, सूक्ष्म तर्क |
| **इसके लिए आदर्श** | रचनात्मक लेखन, ब्रेनस्टॉर्मिंग, कोडिंग सहायता, सामान्य ज्ञान प्रश्न, आकर्षक तरीके से जटिल विषयों की व्याख्या | अनुसंधान, तथ्यात्मक प्रश्न, वर्तमान घटनाएं, योजना, Google Workspace एकीकरण, दृश्य डेटा विश्लेषण | बहुत लंबे दस्तावेजों का सारांश, गहन पाठ विश्लेषण, संवेदनशील विषय, पेशेवर संचार, नैतिक विचारण |
| **मुख्य शक्तियां** | अत्यधिक बहुमुखी और अनुकूलनीय, मजबूत रचनात्मक और कल्पनाशील क्षमताएं, प्राकृतिक और संवादात्मक पाठ उत्पन्न करने में उत्कृष्ट | वर्तमान जानकारी तक मजबूत पहुंच, Google ऐप्स और सेवाओं के साथ निर्बाध एकीकरण, अक्सर विकल्प के लिए कई प्रतिक्रिया मसौदे प्रदान करता है | अत्यधिक लंबे पाठों के लिए असाधारण संदर्भ हैंडलिंग, मजबूत सुरक्षा और नैतिक दिशानिर्देश, विस्तृत विश्लेषणात्मक कार्यों के लिए मजबूत |
| **सामान्य कमजोरियां** | "भ्रम" हो सकता है या पुरानी जानकारी प्रदान कर सकता है यदि वास्तविक-समय डेटा से जुड़ा नहीं है, कभी-कभी अत्यधिक वर्बोस | ChatGPT की तुलना में कभी-कभी कम रचनात्मक या संवादात्मक हो सकता है, कभी-कभी अत्यधिक सतर्क माना जा सकता है | सामान्य रचनात्मक कार्यों के लिए कम व्यापक रूप से ज्ञात या उपयोग, उपयोगकर्ता इंटरफेस कुछ को थोड़ा कम सहज लग सकता है |
| **"व्यक्तित्व"** | उत्साही, बहुमुखी, आकर्षक, प्रॉम्प्ट के आधार पर औपचारिक या आकस्मिक हो सकता है | तथ्यात्मक, कुशल, एकीकृत, अक्सर संक्षिप्त और अच्छी तरह से संरचित उत्तर प्रदान करता है | विचारशील, सावधान, विस्तार-उन्मुख, सहायकता और हानिरहितता को प्राथमिकता देता है |

## कौन सा LLM कब चुनें: व्यावहारिक परिदृश्य

उपरोक्त तालिका को समझना व्यावहारिक निर्णयों में अनुवादित होता है:

**जब आपको रचनात्मक स्पार्क या एक बहुमुखी संवाद साझीदार की आवश्यकता हो:** ChatGPT अक्सर आपका सबसे अच्छा दांव है। इसकी रचनात्मक क्षमताओं की विस्तृत श्रृंखला इसे सामग्री विचारों का ब्रेनस्टॉर्मिंग, कल्पनाशील कहानियों का मसौदा तैयार करने, मार्केटिंग कॉपी उत्पन्न करने के लिए उत्कृष्ट बनाती है।

**जब आप अनुसंधान कर रहे हों, वर्तमान जानकारी की आवश्यकता हो, या Google उत्पादों के साथ व्यापक रूप से काम करते हों:** Google Gemini सामने आता है। Google Search के साथ इसके मजबूत संबंध का मतलब है कि यह अक्सर अधिक अप-टू-डेट तथ्यात्मक जानकारी प्रदान कर सकता है।

**जब आप लंबे दस्तावेजों के साथ काम कर रहे हों, गहन विश्लेषण की आवश्यकता हो, या संवेदनशील सामग्री से निपट रहे हों:** Claude इन परिदृश्यों के लिए डिज़ाइन किया गया है। इसकी असाधारण "संदर्भ विंडो" इसे पाठ की विशाल मात्रा को संसाधित और विश्लेषित करने की अनुमति देती है।

## विश्वास निर्माण: सभी LLM इंटरैक्शन के लिए महत्वपूर्ण अनुस्मारक

चाहे आप कोई भी LLM चुनें या यह कितना भी उन्नत हो जाए, हमेशा इन मौलिक सिद्धांतों को याद रखें:

**महत्वपूर्ण जानकारी सत्यापित करें:** LLMs "भ्रम" कर सकते हैं और करते हैं - गलत या मनगढ़ंत जानकारी को आत्मविश्वास से बताते हैं। विश्वसनीय, बाहरी स्रोतों के साथ महत्वपूर्ण तथ्यों, आंकड़ों या संवेदनशील विवरणों को हमेशा दोबारा जांचें।

**उनकी सीमाओं को समझें:** याद रखें कि LLMs परिष्कृत पैटर्न-मैचिंग एल्गोरिदम हैं, सचेत प्राणी नहीं। उनमें सच्ची समझ, भावनाएं, या विशिष्ट चैट थ्रेड के बाहर आपकी वास्तविक-समय व्यक्तिगत स्मृति नहीं है।

**मानव निरीक्षण महत्वपूर्ण है:** ये उपकरण मानव क्षमताओं को बढ़ाने के लिए डिज़ाइन किए गए हैं, मानव निर्णय, रचनात्मकता या नैतिक जिम्मेदारी को बदलने के लिए नहीं। हमेशा उनके आउटपुट की समीक्षा, परिष्करण और आलोचनात्मक मूल्यांकन करें।

## चैप्टर 2.6 की मुख्य बात

जबकि सभी मुख्य LLMs अविश्वसनीय रूप से शक्तिशाली और बहुमुखी हैं, प्रत्येक में अनूठी शक्तियां और फोकस हैं। हाथ में विशिष्ट कार्य के लिए सही टूल चुनना आपके परिणामों और दक्षता को महत्वपूर्ण रूप से बढ़ा सकता है। हमेशा AI की गति और विशाल ज्ञान को अपनी आलोचनात्मक सोच, मानव निर्णय के साथ जोड़ें।

**त्वरित स्व-जांच:** आपकी वर्तमान पेशेवर या व्यक्तिगत आवश्यकताओं के आधार पर (जैसे, निबंध लिखना, प्रोजेक्ट के लिए अनुसंधान करना, रचनात्मक शौक, टीम प्रबंधन), कौन सा LLM (ChatGPT, Gemini, या Claude) आपके लिए सबसे उपयोगी होगा, और क्यों?`
    }
  ];

  // Get current chapters based on selected module
  const getCurrentChapters = () => {
    if (selectedModule === "ai-101") return module1Chapters;
    if (selectedModule === "conversational-ai") return module2Chapters;
    return [];
  };

  // Get current module info
  const getCurrentModuleInfo = () => {
    if (selectedModule === "ai-101") {
      return {
        title: language === 'en' ? "AI 101 - Understanding the New World" : "AI 101 - नई दुनिया को समझना",
        description: language === 'en' ? "Your friendly introduction to AI without the technical jargon" : "तकनीकी शब्दजाल के बिना AI का आपका मित्रवत परिचय",
        estimatedTime: language === 'en' ? "60 minutes" : "60 मिनट",
        totalChapters: 4,
        introText: language === 'en' 
          ? "Think of this module as your friendly introduction to a world that's already around you, but perhaps invisible until now. By the end of this hour, you'll understand what AI actually is (spoiler: it's not the scary robots from movies), how it's already helping you daily, and why everyone's talking about something called \"Generative AI.\""
          : "इस मॉड्यूल को आपके आस-पास पहले से मौजूद, लेकिन शायद अब तक अदृश्य दुनिया के मित्रवत परिचय के रूप में सोचें। इस घंटे के अंत तक, आप समझ जाएंगे कि AI वास्तव में क्या है (स्पॉयलर: यह फिल्मों के डरावने रोबोट नहीं हैं), यह आपकी दैनिक जिंदगी में कैसे मदद कर रहा है, और क्यों हर कोई \"जेनरेटिव AI\" के बारे में बात कर रहा है।"
      };
    }
    if (selectedModule === "conversational-ai") {
      return {
        title: language === 'en' ? "Mastering Conversational AI" : "वार्तालाप AI में महारत",
        description: language === 'en' ? "Your LLM Chats Module - Turn AI into your productivity and creativity assistant" : "आपका LLM चैट्स मॉड्यूल - AI को अपने उत्पादकता और रचनात्मकता सहायक में बदलें",
        estimatedTime: language === 'en' ? "75-90 minutes" : "75-90 मिनट",
        totalChapters: 6,
        introText: language === 'en' 
          ? "Welcome to Module 2! Now that you understand what AI is and the magic of Generative AI, it's time to get practical. This module is all about turning those powerful Large Language Models (LLMs) into your personal productivity and creativity assistant. Think of it like having a super-smart, always-available colleague you can brainstorm with, ask questions, or delegate tasks to."
          : "मॉड्यूल 2 में आपका स्वागत है! अब जब आप समझ गए हैं कि AI क्या है और जेनरेटिव AI का जादू क्या है, तो व्यावहारिक होने का समय है। यह मॉड्यूल उन शक्तिशाली बड़े भाषा मॉडल (LLMs) को आपके व्यक्तिगत उत्पादकता और रचनात्मकता सहायक में बदलने के बारे में है।"
      };
    }
    return null;
  };

  // Mock modules data with translations - updated to include Module 2
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
      id: "conversational-ai",
      title: language === 'en' ? "Mastering Conversational AI" : "वार्तालाप AI में महारत",
      description: language === 'en' ? "Your LLM Chats Module - Turn AI into your productivity assistant" : "आपका LLM चैट्स मॉड्यूल - AI को अपने उत्पादकता सहायक में बदलें",
      chapters: 6,
      completedChapters: 0,
      estimatedTime: language === 'en' ? "75-90 minutes" : "75-90 मिनट",
      difficulty: "Beginner" as const,
      hasChapters: true
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
      if (moduleId === "ai-101" || moduleId === "conversational-ai") {
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

  const currentChapters = getCurrentChapters();
  const selectedChapterData = currentChapters.find(c => c.id === selectedChapter);

  // Chapter content view
  if (selectedChapter && selectedChapterData) {
    const currentChapterIndex = currentChapters.findIndex(c => c.id === selectedChapter);
    const previousChapter = currentChapterIndex > 0 ? currentChapters[currentChapterIndex - 1] : null;
    const nextChapter = currentChapterIndex < currentChapters.length - 1 ? currentChapters[currentChapterIndex + 1] : null;

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
              <span>Module {selectedModule === "ai-101" ? "1" : "2"}: {getCurrentModuleInfo()?.title}</span>
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
  if (selectedModule) {
    const moduleInfo = getCurrentModuleInfo();
    const currentChapters = getCurrentChapters();

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
            <h1 className="text-3xl font-bold mb-2">{moduleInfo?.title}</h1>
            <p className="text-muted-foreground mb-4">{moduleInfo?.description}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{content[language].estimatedTime}: {moduleInfo?.estimatedTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>{moduleInfo?.totalChapters} {content[language].chapters}</span>
              </div>
            </div>
          </div>

          {/* Module Introduction */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">
                {language === 'en' ? "Welcome to Your AI Journey" : "आपकी AI यात्रा में आपका स्वागत है"}
              </h2>
              <p className="text-muted-foreground mb-4">{moduleInfo?.introText}</p>
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
            {currentChapters.map((chapter, index) => (
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
