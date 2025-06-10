
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, ArrowRight, Check, Clock, ChevronLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ModuleCard } from "@/components/learning/ModuleCard";

interface IndexProps {
  onOpenAuth: () => void;
}

const Index = ({ onOpenAuth }: IndexProps) => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const { toast } = useToast();

  // Module 1 chapters data
  const module1Chapters = [
    {
      id: "1-1",
      title: "What is AI? (The Big Picture)",
      description: "Understanding AI through everyday examples like Netflix and Google Maps",
      estimatedTime: "15 min",
      content: `# Chapter 1.1: What is AI? (The Big Picture)

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

**Quick Self-Check:** Can you identify three AI-powered features you've used in the last 24 hours? (Hint: Check your phone's recent activity, your streaming service, or your online shopping history.)`
    },
    {
      id: "1-2",
      title: "Generative AI - The 'Creative' Machines",
      description: "Discover ChatGPT, DALL-E, and how AI creates new content",
      estimatedTime: "15 min",
      content: `# Chapter 1.2: Generative AI - The "Creative" Machines

## The Creative Breakthrough

Now, let's talk about the AI that's got everyone excited lately. You've probably heard terms like ChatGPT, DALL-E, or Midjourney in the news. These represent a special category of AI called **Generative AI** – AI that doesn't just recognize patterns or make recommendations, but actually creates new content.

## The Artist Analogy

Imagine you have a friend who's an incredibly talented artist. This friend has studied every painting in every major museum, read every book in the library, and watched every movie ever made. Now, when you ask them to create something – a story, a painting, a song – they don't copy any single work, but instead create something entirely new inspired by everything they've learned.

That's essentially what Generative AI does. It learns from massive amounts of existing content and then creates new content that's original but informed by all its training.

## What Makes Generative AI Different?

Traditional AI (what we discussed in Chapter 1.1) is mostly about **understanding and categorizing** existing information:
- "Is this email spam or not spam?"
- "Which movie should I recommend?"
- "What's the fastest route to work?"

Generative AI, on the other hand, is about **creating** new information:
- "Write me a story about a time-traveling chef"
- "Create an image of a cat wearing sunglasses on a beach"
- "Compose a song in the style of The Beatles but about modern technology"

## The Big Three: Text, Images, and Video

Generative AI currently excels in three main areas:

**1. Text Generation (Large Language Models)**
- **What it does:** Writes essays, stories, emails, code, poems, scripts – basically any kind of text you can imagine
- **Popular tools:** ChatGPT, Google Bard/Gemini, Claude, Microsoft Copilot
- **Real-world example:** A marketing manager uses ChatGPT to draft 10 different email subject lines for a campaign, then picks the best one

**2. Image Generation**
- **What it does:** Creates original images from text descriptions
- **Popular tools:** DALL-E, Midjourney, Stable Diffusion, Adobe Firefly
- **Real-world example:** A small business owner creates social media graphics by typing "modern logo for organic coffee shop with mountain theme"

**3. Video Generation (The Newest Frontier)**
- **What it does:** Creates short video clips from text descriptions or still images
- **Emerging tools:** Sora, Runway ML, Pika Labs
- **Real-world example:** A content creator generates a 10-second video of "ocean waves at sunset" for their YouTube intro

## How Generative AI "Thinks"

Here's a simplified way to understand how Generative AI works:

1. **Learning Phase:** The AI studies millions of examples (texts, images, videos)
2. **Pattern Recognition:** It identifies what makes good writing, compelling images, or engaging videos
3. **Generation Phase:** When you give it a prompt, it uses these patterns to create something new
4. **Refinement:** It checks its creation against what it learned to make sure it makes sense

It's similar to how humans learn to be creative. A musician doesn't create songs in a vacuum – they're influenced by all the music they've heard throughout their life. The AI works the same way, just with access to vastly more examples than any human could ever study.

## The Magic and the Limitations

**What's Magical About It:**
- **Speed:** Creates in seconds what might take humans hours or days
- **Variety:** Can produce countless variations on any theme
- **Accessibility:** Anyone can use it, no special training required
- **Consistency:** Works 24/7 without getting tired or losing creativity

**What It Can't Do (Yet):**
- **Original Thinking:** It recombines existing ideas rather than having truly original thoughts
- **Fact-Checking:** It can confidently state incorrect information (we call this "hallucinating")
- **Emotional Understanding:** It mimics emotional language but doesn't truly feel emotions
- **Long-term Memory:** Each conversation is independent; it doesn't remember you between sessions

## Key Takeaway for Chapter 1.2

Generative AI represents a fundamental shift from AI that just processes information to AI that creates new information. It's like having a creative collaborator that never gets tired, can work in any style, and can produce endless variations on any idea. While it has limitations, its ability to accelerate human creativity and productivity is already transforming how we work and create.

**Quick Self-Check:** Think of one creative task you do regularly (writing emails, creating presentations, planning events). How might Generative AI help you do this task faster or better?`
    },
    {
      id: "1-3", 
      title: "Large Language Models (LLMs) - Your New AI Colleagues",
      description: "Meet ChatGPT, Claude, Gemini and understand how they work",
      estimatedTime: "15 min",
      content: `# Chapter 1.3: Large Language Models (LLMs) - Your New AI Colleagues

## The Super-Librarian Analogy

Imagine the most knowledgeable librarian you can think of. Now imagine this librarian has read every book, article, website, and document ever written in multiple languages. They have perfect memory and can instantly recall information on any topic. They can also write in any style, from academic papers to casual emails to creative stories.

That's essentially what a Large Language Model (LLM) is – a digital super-librarian that has "read" vast amounts of text and can help you with almost any language-related task.

## What Does "Large Language Model" Actually Mean?

Let's break down the name:

**Large:** These models are trained on enormous amounts of text – we're talking about most of the publicly available internet, millions of books, articles, and documents. The datasets are so large that if you printed them out, the paper would stack higher than Mount Everest.

**Language:** They understand and generate human language. Not just English, but dozens of languages, and they can even translate between them.

**Model:** In AI terms, a "model" is like a complex mathematical recipe that has learned patterns from data. Think of it as a very sophisticated pattern-matching system.

## Meet the Major Players

Just like you have different brands of cars (Toyota, Ford, BMW), you have different "brands" of LLMs. Each has its own strengths and characteristics:

**ChatGPT (by OpenAI)**
- **Personality:** The friendly, creative conversationalist
- **Strengths:** Great at creative writing, brainstorming, explaining complex topics
- **Best for:** General conversation, creative projects, learning new subjects
- **Think of it as:** The enthusiastic teacher who makes everything interesting

**Google Gemini (formerly Bard)**
- **Personality:** The research-focused, factual assistant
- **Strengths:** Strong integration with Google services, good at finding current information
- **Best for:** Research tasks, factual questions, working with Google Workspace
- **Think of it as:** The efficient research assistant with access to Google's resources

**Claude (by Anthropic)**
- **Personality:** The thoughtful, careful, and ethical assistant
- **Strengths:** Handling long documents, nuanced conversations, avoiding harmful content
- **Best for:** Analyzing documents, sensitive topics, professional communication
- **Think of it as:** The wise counselor who thinks before speaking

**Microsoft Copilot**
- **Personality:** The productivity-focused work assistant
- **Strengths:** Integration with Microsoft Office, business-focused tasks
- **Best for:** Office work, email management, business documents
- **Think of it as:** The efficient personal assistant for professional tasks

## What LLMs Can Do Right Now

Let's get specific about the practical capabilities:

**Writing and Communication:**
- Draft emails, letters, and messages in any tone (formal, casual, persuasive)
- Create outlines for presentations, essays, or reports
- Improve existing text by making it clearer, shorter, or more engaging
- Translate between languages (though not perfect for nuanced content)

**Learning and Explanation:**
- Explain complex topics in simple terms
- Create study guides and flashcards
- Answer questions on virtually any subject
- Provide step-by-step instructions for tasks

**Creative Tasks:**
- Write stories, poems, and scripts
- Generate ideas for projects, businesses, or content
- Create dialogue for characters or practice conversations
- Brainstorm solutions to problems

**Analysis and Reasoning:**
- Summarize long documents or articles
- Compare pros and cons of different options
- Break down complex problems into manageable steps
- Provide different perspectives on issues

## Key Takeaway for Chapter 1.3

Large Language Models are sophisticated pattern-recognition systems that can assist with almost any language-related task. They're like having a knowledgeable colleague available 24/7, but one that needs supervision and fact-checking. Understanding their capabilities and limitations is crucial for using them effectively and responsibly.

**Quick Self-Check:** Think about your typical workday or study routine. Identify three specific tasks where an LLM could save you time or help you think through problems more effectively.`
    },
    {
      id: "1-4",
      title: "The Most Important Skill - Prompting (Talking to AI)",
      description: "Master the art of communicating with AI for better results",
      estimatedTime: "15 min",
      content: `# Chapter 1.4: The Most Important Skill - Prompting (Talking to AI)

## The Superpower You Didn't Know You Needed

Here's something that might surprise you: The most valuable skill in the AI age isn't coding, data science, or engineering. It's knowing how to communicate effectively with AI – something called "prompting." Think of it as learning to speak a new language, but instead of talking to humans, you're talking to machines.

The difference between someone who gets amazing results from AI and someone who gets mediocre results often comes down to how well they can craft prompts. It's like the difference between a skilled chef and someone who just throws ingredients together – same tools, dramatically different results.

## What is a Prompt, Really?

A **prompt** is simply your instruction to an AI. It's what you type into ChatGPT, Claude, or any other AI tool to tell it what you want. But here's the key insight: AI is incredibly literal and doesn't have the context that humans naturally share.

**Human Communication vs. AI Communication:**

When you ask a friend, "Can you help me with dinner?" your friend understands:
- You're probably talking about cooking
- It's likely for tonight
- You might want recipe suggestions or cooking help
- The complexity should match your cooking skills

When you ask an AI, "Can you help me with dinner?" it might respond with anything from restaurant recommendations to the history of dining etiquette, because it doesn't have context about your situation, skills, or specific needs.

## The Anatomy of a Great Prompt

Let's break down what makes a prompt effective:

**1. Context (The Setup)**
Give the AI background information. Instead of "Write about dogs," try "I'm writing a blog post for pet owners about choosing the right dog breed for apartment living."

**2. Role (Who Should the AI Be?)**
Tell the AI what expert persona to adopt. "Act as a veterinarian," "Respond as a marketing professional," or "You are a patient teacher explaining to a beginner."

**3. Task (What Exactly Do You Want?)**
Be specific about the output. "Write a 500-word article," "Create a bullet-point list," "Generate 5 creative ideas."

**4. Format (How Should It Look?)**
Specify the structure. "Format as an email," "Use a casual, friendly tone," "Include pros and cons sections."

**5. Constraints (What Limitations Apply?)**
Set boundaries. "Keep it under 200 words," "Use simple language," "Don't include technical jargon."

## Before and After: The Transformation

Let's see prompting in action with real examples:

**Bad Prompt:**
"Write something about productivity."

**Good Prompt:**
"You are a time management expert writing for busy professionals. Create a practical guide titled '5 Morning Habits That Double Your Daily Productivity.' Write in a conversational tone, include specific actionable steps for each habit, and keep each section under 100 words. Focus on habits that take less than 10 minutes each."

## Common Prompting Mistakes (And How to Fix Them)

**Mistake 1: Being Too Vague**
❌ "Help me with my presentation"
✅ "Help me create an outline for a 10-minute presentation about sustainable energy for college students"

**Mistake 2: Asking for Everything at Once**
❌ "Write a business plan, marketing strategy, and financial projections for my food truck"
✅ "Let's start with a one-page business concept summary for a gourmet taco food truck"

**Mistake 3: Not Specifying Tone or Audience**
❌ "Write about the benefits of exercise"
✅ "Write a motivational article about exercise benefits for busy parents, using an encouraging and practical tone"

## Building Your Prompting Toolkit

**Start a Prompt Library:**
Keep a document with effective prompts you've created. Organize by category:
- Email templates
- Writing assistance
- Problem-solving
- Creative brainstorming
- Learning and explanation

**Practice Daily:**
Try to use AI for at least one task each day, focusing on improving your prompts rather than just getting quick answers.

## Key Takeaway for Chapter 1.4

Prompting is the bridge between your needs and AI's capabilities. Like any communication skill, it improves with practice and intention. The better you become at articulating exactly what you want from AI, the more valuable AI becomes as a tool for work, learning, and creativity.

**Quick Self-Check:** Take a task you do regularly (writing emails, planning projects, solving problems) and craft a detailed prompt that would help an AI assist you with this task. Include context, role, specific requirements, and format preferences.`
    }
  ];

  // Mock modules data
  const modules = [
    {
      id: "ai-101",
      title: "AI 101 - Understanding the New World",
      description: "Your friendly introduction to AI without the technical jargon",
      chapters: 4,
      completedChapters: 0,
      estimatedTime: "60 minutes",
      difficulty: "Beginner" as const,
      hasChapters: true
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
      if (moduleId === "ai-101") {
        setSelectedModule(moduleId);
      } else {
        // For other modules, show coming soon message
        toast({
          title: "Coming Soon!",
          description: "This module will be available soon.",
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
                <Button onClick={handleBackToChapters} variant="outline">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Chapters
                </Button>
                <Button onClick={onOpenAuth} variant="outline">
                  Login to Save Progress
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

          {/* Progress Save Prompt */}
          <Card className="bg-muted mt-8">
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
              <div className="flex gap-2">
                <Button onClick={handleBackToModules} variant="outline">
                  <ChevronLeft className="h-4 w-4 mr-2" />
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
            <h1 className="text-3xl font-bold mb-2">AI 101 - Understanding the New World</h1>
            <p className="text-muted-foreground mb-4">Your friendly introduction to AI without the technical jargon</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>Estimated Reading Time: 60 minutes</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>4 chapters</span>
              </div>
            </div>
          </div>

          {/* Module Introduction */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Welcome to Your AI Journey</h2>
              <p className="text-muted-foreground mb-4">
                Think of this module as your friendly introduction to a world that's already around you, but perhaps invisible until now. By the end of this hour, you'll understand what AI actually is (spoiler: it's not the scary robots from movies), how it's already helping you daily, and why everyone's talking about something called "Generative AI."
              </p>
              <p className="text-sm font-medium text-primary">
                Our Promise: No technical jargon, no complex mathematics, just clear explanations with plenty of real-world examples you can relate to.
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
                          Chapter {index + 1}
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
