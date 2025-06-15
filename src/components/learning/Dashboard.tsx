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
          content: "Artificial Intelligence (AI) is a technology that enables machines to think and learn like humans. It exists in many forms in our daily lives - from voice assistants to recommendation systems and smart cameras. AI can process information, recognize patterns, and make decisions based on data. Unlike traditional computer programs that follow pre-written instructions, AI systems can adapt and improve their performance over time by learning from experience."
        },
        { 
          id: 2, 
          title: "History of AI", 
          duration: "20 min",
          content: "AI began in the 1950s when Alan Turing proposed the 'Turing Test' to determine if a machine could exhibit intelligent behavior equivalent to a human. The field has experienced several waves of excitement and disappointment, known as 'AI winters.' Key milestones include the development of expert systems in the 1980s, the victory of IBM's Deep Blue over chess champion Garry Kasparov in 1997, and the recent breakthroughs in neural networks and deep learning that have led to modern AI applications like ChatGPT and image generators."
        },
        { 
          id: 3, 
          title: "Types of AI", 
          duration: "18 min",
          content: "AI can be categorized into three main types: Narrow AI (Artificial Narrow Intelligence) is designed for specific tasks like image recognition, language translation, or playing chess. This is the only type of AI that currently exists. General AI (Artificial General Intelligence) would have human-like intelligence and the ability to understand, learn, and apply knowledge across various domains. Super AI (Artificial Superintelligence) would surpass human intelligence in all aspects. While General and Super AI remain theoretical, Narrow AI is already transforming industries and daily life."
        },
        { 
          id: 4, 
          title: "AI Applications", 
          duration: "22 min",
          content: "AI is revolutionizing numerous industries. In healthcare, AI helps with medical diagnosis, drug discovery, and personalized treatment plans. In education, it enables personalized learning experiences and intelligent tutoring systems. Transportation benefits from autonomous vehicles and traffic optimization. Entertainment platforms use AI for content recommendations and content creation. Finance employs AI for fraud detection, algorithmic trading, and risk assessment. Other applications include smart home devices, virtual assistants, language translation, and customer service chatbots."
        }
      ]
    },
    {
      id: "module-2",
      title: "Mastering Conversational AI",
      description: "Learn to have productive conversations with AI assistants like ChatGPT",
      chapters: 6,
      completedChapters: 0,
      estimatedTime: "3 hours",
      difficulty: "Beginner" as const,
      isLocked: false,
      chapterList: [
        { 
          id: 1, 
          title: "Getting Started with ChatGPT, Gemini, and Claude", 
          duration: "25 min",
          content: "Your First AI Hello\n\nYou've heard about these powerful LLMs, but how do you actually start using them? This chapter will give you a detailed quick tour of the most popular platforms, showing you how to sign up, navigate their interfaces, and send your very first prompt to begin your interactive AI journey.\n\nAccessing the Platforms: Your AI Login\n\nMost LLMs are accessible through a web browser, much like using your favorite social media platform or cloud document editor. You typically need to create a free account, often using your email or a readily available Google/Microsoft account for quick sign-up.\n\nChatGPT (OpenAI): Navigate to chat.openai.com. You can sign up using an existing Google or Microsoft account, or by providing an email address and creating a new password. OpenAI's interface is generally clean and user-friendly.\n\nGoogle Gemini: Visit gemini.google.com. You'll need to sign in with your Google account. Gemini often integrates well with other Google services.\n\nAnthropic Claude: Visit claude.ai. The sign-up process usually involves providing an email address, after which a verification code will be sent to confirm your identity.\n\nNavigating the Interface: The Command Center of Your AI Assistant\n\nKey Elements You'll Find:\n\n• Input Box: Located at the bottom of the screen, this is where you type your prompts\n• Send Button: Adjacent to the input box, typically a paper airplane icon\n• Conversation History: Shows your prompts and AI responses chronologically\n• New Chat Button: Starts a fresh conversation, clearing the AI's memory\n• Sidebar: Repository of your past chat history\n\nYour First \"Hello World\" Prompt:\n\nTry typing: \"Hello AI, introduce yourself in one sentence.\"\n\nUnderstanding the \"Memory\" of a Chat: The Context Window\n\nWhen you continue typing in the same chat window, the AI remembers all previous turns of that conversation. However, if you start a new chat, the AI will not remember anything from previous conversations. This distinction is vital for efficient AI interaction."
        },
        { 
          id: 2, 
          title: "The Art of the Perfect Prompt - Beyond the Basics", 
          duration: "30 min",
          content: "Recap: The Foundation of Good Prompting\n\nIn Module 1, we established that a prompt is your instruction to the AI. We learned that being clear, specific, and even assigning a role to the AI can dramatically improve results. Now, let's go deeper.\n\nAdding Context: Giving the AI the Full Picture\n\nImagine onboarding a new human assistant. If you just say, \"Write an email about the project,\" they'd be lost. Similarly, an AI needs background information to produce relevant and useful output.\n\nHow to provide effective context:\n\n• Provide Background Information: Set the scene for the AI\n• Define the Purpose/Goal: Explicitly state why you're asking for this output\n• Specify the Audience: Who is reading or interacting with the AI's output?\n\nExample:\nVague Prompt: \"Write an email.\"\nImproved Prompt: \"You are a friendly customer service representative for a new organic coffee subscription service. Write a welcome email to our early sign-up list, announcing a special 20% off introductory offer. The goal is to encourage their first purchase. Keep the tone warm, inviting, and concise, targeting young adults who prioritize ethical sourcing and convenience.\"\n\nDefining Output Format: How You Want It Delivered\n\nAI can produce information in many ways. Define the format to ensure usable results:\n\n• Structure: \"Give me bullet points,\" \"Format as a formal business letter\"\n• Tone: \"Use a professional tone,\" \"Sound enthusiastic and encouraging\"\n• Length: \"Under 150 words,\" \"Approximately 500 words\"\n\nIterative Prompting: Refining AI's Output\n\nThis is perhaps the most powerful technique. Instead of crafting one perfect prompt, engage in conversation with the AI, progressively refining its output.\n\nSteps for Effective Iterative Prompting:\n1. Start with a basic, foundational prompt\n2. Review the AI's response critically\n3. Provide specific, actionable feedback\n4. Repeat the process until satisfied\n\nThe Importance of Examples: \"Show, Don't Just Tell\"\n\nProviding relevant examples in your prompt can be incredibly effective. It's a powerful way to \"show, don't just tell\" the AI your desired output style or format."
        },
        { 
          id: 3, 
          title: "Use Case: Supercharging Your Email Workflow", 
          duration: "35 min",
          content: "Your Email Assistant: Reclaiming Your Inbox\n\nEmails consume significant portions of our day. Think of your LLM as a highly efficient, always-on email assistant that can help you draft, summarize, and polish your messages in seconds.\n\n1. Drafting Emails: From Scratch or from Sparse Notes\n\nPractical Prompts:\n• \"Write a polite email declining a meeting invitation from John Doe for the project review, stating that I have a prior commitment but suggesting rescheduling for sometime next week.\"\n• \"Draft a warm thank-you email to our new client, Sarah Chen, for signing up for our premium digital marketing service. Invite her to contact our support team if she has questions.\"\n• \"Generate a sales follow-up email to a lead who downloaded our e-book on 'Sustainable Living Tips.' Offer a 10% discount with code 'ECOSTART'. Keep it friendly and concise.\"\n\n2. Summarizing Long Email Threads: Cutting Through the Noise\n\nEffective Prompts:\n• \"Summarize the key decisions, action items, and assigned owners from the following email thread:\" (Paste content)\n• \"What are the main points of disagreement in this email exchange between marketing and sales teams?\" (Paste content)\n• \"Extract all dates, deadlines, and requirements mentioned in this email thread regarding the Q4 product launch:\"\n\n3. Improving Tone: Striking the Right Chord\n\nPrompts to Refine Email Tone:\n• \"Make this email draft sound more professional and concise, removing informal language:\" (Paste draft)\n• \"Rephrase this paragraph to sound more empathetic for a customer experiencing technical problems:\" (Paste paragraph)\n• \"Adjust this team update to sound more enthusiastic and encouraging:\"\n\n4. Generating Subject Lines: Boosting Open Rates\n\nPrompts for Subject Lines:\n• \"Generate 5 catchy subject lines for an email announcing a new fitness app for beginners.\"\n• \"Suggest 3 urgent subject lines for an email about an upcoming project deadline this Friday.\"\n• \"Provide 4 professional subject lines for a Q3 financial results presentation meeting invitation.\"\n\nKey Takeaway: LLMs can dramatically reduce email time while improving clarity, professionalism, and impact."
        },
        { 
          id: 4, 
          title: "Use Case: Brainstorming and Creative Writing", 
          duration: "20 min",
          content: "Your Creative Partner: Unleashing Imagination\n\nFeeling stuck? Grappling with writer's block? LLMs are fantastic brainstorming partners and can help kickstart creative writing projects. With their vast training on human creativity, they can generate endless ideas, develop characters, and produce creative pieces.\n\n1. Generating Ideas: A Fountain of Inspiration\n\nComprehensive Prompts:\n• \"Brainstorm 10 unique blog post topics about remote work challenges for maintaining team cohesion. Focus on practical, actionable advice.\"\n• \"I'm launching a sustainable clothing brand targeting Gen Z. Give me 15 creative name ideas that convey eco-friendliness and modern style. Avoid generic terms.\"\n• \"Suggest 8 compelling social media content ideas for a local bakery, specifically for Instagram Reels and TikTok. Ideas should encourage engagement and show behind-the-scenes processes.\"\n• \"What are 5 innovative ways to market a new educational coding app for middle school students? Think about reaching both students and parents.\"\n\n2. Writing Short Stories, Poems, and Song Lyrics: AI as Your Co-Author\n\nPrompts to Kickstart Creative Writing:\n• \"Write a short story (under 500 words) about a talking dog detective named 'Sherlock Bones' in a bustling city. Make it humorous with noir elements.\"\n• \"Compose a short poem (4 stanzas, AABB rhyme scheme) about autumn leaves, focusing on colors and melancholy as winter approaches.\"\n• \"Write the chorus and first verse for a pop song about overcoming personal challenges. Theme should be empowerment and resilience.\"\n• \"Create detailed dialogue between two friends planning a surprise party. Sarah is organized, Mark is spontaneous. Show their personalities through planning styles.\"\n\n3. Overcoming Writer's Block: Your Idea Generator\n\nPrompts to Break Through Writer's Block:\n• \"I'm writing an essay on 'Social Media's Impact on Adolescent Mental Health.' I'm stuck on the introduction. Give me three opening paragraph ideas with unique angles.\"\n• \"I need to describe a mysterious old mansion in a gothic novel. Give me 5 vivid exterior descriptions focusing on eerie details like overgrown vines and broken windows.\"\n• \"My character needs to deliver a speech to rally a disheartened team before competition. What are 3 ways they could start to grab attention and inspire hope?\"\n\nKey Takeaway: LLMs are powerful creative collaborators that can banish writer's block, generate diverse ideas, and draft initial versions of creative content. Use iterative prompting to guide the AI towards your precise creative vision."
        },
        { 
          id: 5, 
          title: "Use Case: Learning & Summarizing Complex Topics", 
          duration: "40 min",
          content: "Your Personal Tutor and Research Assistant: Knowledge at Your Fingertips\n\nIn today's information-rich world, learning efficiently and synthesizing vast amounts of data are invaluable skills. LLMs excel at breaking down complex concepts, summarizing lengthy documents, and creating personalized study materials.\n\n1. Asking AI to Explain Difficult Concepts: Simplifying the Complex\n\nPrompts to Clarify Complex Concepts:\n• \"Explain quantum entanglement to me like I'm 10 years old, using a simple, everyday analogy.\"\n• \"What is blockchain technology, and how is it different from traditional databases? Use analogies related to shared ledgers.\"\n• \"Break down photosynthesis into five easy steps, suitable for a high school biology student.\"\n• \"I'm confused about inflation vs deflation. Explain clearly with real-world examples for each.\"\n• \"Describe Object-Oriented Programming using house-building analogies, relating classes and objects to blueprints and buildings.\"\n• \"Explain Einstein's Theory of Relativity in under 100 words, focusing on core ideas without complex physics terms.\"\n\n2. Summarizing Long Articles, Research Papers, or Meeting Transcripts\n\nEffective Prompts to Summarize:\n• \"Summarize the key findings, methodology, and conclusions from this climate change research paper in 5 bullet points:\" (Paste text)\n• \"Extract main arguments from each speaker in this renewable energy debate transcript:\" (Paste content)\n• \"What are key takeaways from this economic outlook article? Provide one-paragraph summary and 3 recommendations.\" (Paste article)\n• \"List all action items assigned to specific people with deadlines from this project meeting transcript:\" (Paste transcript)\n• \"From this product review, identify top 3 pros and cons, then give overall sentiment rating.\" (Paste review)\n\n3. Creating Study Guides or Flashcards: Personalized Learning Aids\n\nPrompts to Generate Study Materials:\n• \"I'm studying for an American Civil War exam. Generate 10 flashcard questions covering key events, figures, and battles from 1861-1865.\"\n• \"Create a study guide outline for human anatomy and physiology. Focus on major organ systems and include key functions and disorders.\"\n• \"From this marketing text, summarize the '4 P's of Marketing' and create 5 multiple-choice questions with answers.\" (Paste text)\n• \"Give me 15 common Spanish verbs with English translations, formatted as a two-column table for flashcards.\"\n• \"Generate 5 short-answer questions based on this climate change mitigation lecture transcript.\" (Paste transcript)\n\nKey Takeaway: LLMs can fundamentally enhance learning efficiency by simplifying complex information, summarizing lengthy content, and creating personalized study materials, freeing up time for critical thinking and deeper understanding."
        },
        { 
          id: 6, 
          title: "Comparing the Chats: When to Use Which?", 
          duration: "25 min",
          content: "Choosing the Right Tool for the Job: An AI Matchmaker\n\nChoosing the \"best\" AI is about selecting the right tool for the specific task. Different LLMs have unique strengths and 'personalities' that make them better suited for different types of queries.\n\nUnbiased Comparison:\n\nChatGPT (OpenAI):\n• Primary Focus: General-purpose dialogue, creativity, programming assistance\n• Ideal For: Creative writing, brainstorming, coding help, explaining complex topics engagingly\n• Strengths: Highly versatile, strong creative abilities, natural conversational text, large community\n• Weaknesses: Can \"hallucinate\" outdated information, sometimes verbose, may struggle with specific factual accuracy\n• Personality: Enthusiastic, versatile, engaging\n\nGoogle Gemini:\n• Primary Focus: Information retrieval, real-time data, multimodal understanding\n• Ideal For: Research, factual queries, current events, Google Workspace integration, visual analysis\n• Strengths: Access to current information, seamless Google integration, multiple response drafts, multimodal capabilities\n• Weaknesses: Can be less creative than ChatGPT, sometimes overly cautious, still evolving multimodal applications\n• Personality: Factual, efficient, integrated\n\nClaude (Anthropic):\n• Primary Focus: Safety, long-context processing, nuanced reasoning\n• Ideal For: Summarizing very long documents, in-depth analysis, sensitive topics, professional communication\n• Strengths: Exceptional context handling, robust safety guidelines, detailed analytical reasoning, less \"fluff\"\n• Weaknesses: Less known for general creative tasks, interface might feel less intuitive, slower for rapid exchanges\n• Personality: Thoughtful, careful, detail-oriented\n\nWhen to Choose Which LLM:\n\n• Need creative spark or versatile dialogue? → ChatGPT\n• Doing research or need current information? → Google Gemini\n• Working with long documents or sensitive content? → Claude\n• Heavy Microsoft Office user? → Consider Microsoft Copilot\n\nTrust Building: Important Reminders\n\nRegardless of which LLM you choose:\n\n• Verify Important Information: LLMs can \"hallucinate\" - always double-check critical facts\n• Understand Limitations: They're pattern-matching algorithms, not conscious beings\n• Human Oversight is Key: These tools amplify human capabilities, don't replace human judgment\n\nKey Takeaway: Each LLM has unique strengths. Choosing the right tool for specific tasks enhances results and efficiency. Always combine AI's speed with your critical thinking and commitment to verifying crucial information."
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
          content: "Coming soon - explore the landscape of AI tools that can enhance your daily productivity across writing, design, analysis, and automation."
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
                    <h4 className="font-medium">Chapter 2.1: Getting Started with ChatGPT, Gemini, and Claude</h4>
                    <p className="text-sm text-gray-600">Learn how to access and navigate popular AI platforms</p>
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
