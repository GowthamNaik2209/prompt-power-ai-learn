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
      id: "module-generative-ai",
      title: "The Generative AI Revolution - Creative Machines",
      description: "In Module 1, you learned that AI is fundamentally about machines learning patterns to solve problems. Now, we're diving into the most talked-about and transformative branch of AI: Generative AI. This module will unveil how AI has evolved from analyzing existing information to actually creating brand new, original content. Get ready to explore the exciting capabilities of AI as your creative collaborator.",
      chapters: 1, // Only one chapter provided in the HTML snippet for Module 2
      completedChapters: 0,
      estimatedTime: "30-40 minutes",
      difficulty: "Beginner" as const,
      isLocked: false,
      chapterList: [
        {
          id: 1,
          title: "Generative AI - The 'Creative' Machines",
          duration: "30-40 min",
          content: `The Creative Breakthrough: AI That Creates

Now, let's talk about the specific type of AI that has captured global attention and ignited a new wave of innovation: Generative AI. You've probably seen headlines or heard terms like ChatGPT, DALL-E, Midjourney, or Sora. These tools represent a truly revolutionary category of AI. Unlike the traditional AI we discussed in Module 1 (which primarily recognizes patterns or makes recommendations based on existing data), Generative AI possesses the remarkable ability to create new content – content that has never existed before.

This isn't about copying; it's about synthesizing. Generative AI learns the underlying patterns, structures, and styles from vast amounts of existing data (text, images, audio, video) and then uses that learned understanding to generate novel outputs that are original yet consistent with the patterns it has observed.

The Artist Analogy: Learning, Then Creating

To grasp what Generative AI does, let's use a powerful analogy:

Imagine the most knowledgeable librarian you can possibly conceive. Now, amplify that knowledge exponentially. This librarian has not only read every single book, article, scientific paper, blog post, website, and digital document ever written in multiple languages – they have also memorized every conversation, every email exchange, every script, and every social media post. They possess perfect recall and can instantly retrieve, synthesize, and reformulate information on virtually any topic. Furthermore, they can write in any style, from academic papers and formal business emails to casual conversations and imaginative creative stories.

That's essentially what a Large Language Model (LLM) is – a digital super-librarian that has "read" and processed an incomprehensibly vast amount of text-based information. It uses this "reading" to assist you with almost any language-related task, acting as a highly informed and versatile textual assistant.

What Makes Generative AI Fundamentally Different?

To highlight the distinction, let's compare Generative AI to the "traditional" or "analytical" AI we covered in Module 1:

Traditional AI (Analytical AI): Understanding Existing Information
* Focus: Classification, prediction, recognition, recommendation, analysis of existing data.
* Questions it answers:
    * "Is this email spam or not spam?" (Classification)
    * "Which movie should I recommend to this user?" (Recommendation)
    * "What's the fastest route to work given current traffic?" (Prediction/Optimization)
    * "Does this image contain a cat?" (Recognition)

Generative AI: Creating New Information
* Focus: Creation, synthesis, imagination, generation of new and novel content.
* Questions it answers:
    * "Write me a compelling short story about a time-traveling chef." (Text generation)
    * "Create an image of a cat wearing sunglasses sitting on a tropical beach." (Image generation)
    * "Compose a short piece of classical music in the style of Beethoven." (Audio generation)
    * "Generate a 10-second video of ocean waves at sunset." (Video generation)

The shift is profound: from understanding to creating.

The Big Three: Text, Images, and Video - Current Frontiers of Generative AI

| Type of Generative AI | What It Does (Examples of Outputs) | Popular Tools You Might Know | Real-World Use Case Example |
|---|---|---|---|
| 1. Text Generation | Writes essays, stories, emails, marketing copy, code, poems, scripts – virtually any form of written text you can imagine. | ChatGPT, Google Gemini, Anthropic Claude, Microsoft Copilot | A marketing manager uses ChatGPT to rapidly draft 10 different email subject lines for a new product launch campaign, then selects the most effective one. |
| 2. Image Generation | Creates entirely original still images from simple text descriptions (prompts), or transforms existing images into new styles. | DALL-E, Midjourney, Stable Diffusion, Adobe Firefly, Bing Image Creator | A small business owner creates compelling social media graphics or unique product concepts by typing descriptions like "modern logo for organic coffee shop with mountain theme." |
| 3. Video Generation | Generates short video clips from text descriptions, animates still images, or extends existing video segments. This is the newest and most rapidly evolving frontier. | Sora, Runway ML, Pika Labs, HeyGen | A content creator generates a dynamic 10-second video clip of "ocean waves at sunset with a distant sailboat" for their YouTube channel intro or a social media advertisement. |

How Generative AI "Thinks": A Pattern-Matching Masterpiece

Here's a simplified way to understand the underlying mechanism of how Generative AI operates. It's not about conscious thought, but about highly sophisticated pattern recognition and reconstruction:

1. Learning Phase (Extensive Training): The AI is "trained" on unimaginably vast datasets. For text generation, this means reading billions of sentences, books, articles, and websites. For image generation, it means analyzing millions of images and their descriptions. For video, it means processing countless hours of video footage. During this phase, the AI identifies subtle and complex patterns in how words follow each other, how pixels combine to form objects and scenes, and how objects move and interact over time.
2. Pattern Recognition (Deep Understanding): It doesn't just memorize; it learns statistical relationships and structures. It identifies what makes good writing (grammar, style, coherence), compelling images (composition, lighting, color), or engaging videos (movement, transitions, continuity). It learns the "rules" and "aesthetics" inherent in the training data.
3. Generation Phase (Synthesizing New Content): When you provide it with a prompt (your instruction), the AI doesn't search for a matching piece of content to copy. Instead, it uses the patterns it learned during training to predict and synthesize something entirely new. For example, if you ask for a poem, it predicts which words are statistically most likely to follow each other to create a coherent, poetic verse based on millions of poems it has seen. For an image, it predicts how pixels should be arranged to form the described object or scene.
4. Refinement (Self-Correction): Modern Generative AIs also have internal mechanisms to refine their creations. They check their generated output against what they learned to ensure it makes sense, is coherent, and adheres to the requested style or content. This iterative internal process helps to produce high-quality, relevant results.

This process is remarkably similar to how humans learn to be creative. A musician doesn't create songs in a vacuum – they're influenced by all the music they've heard, the instruments they've practiced, and the theories they've learned throughout their life. The AI works on a parallel principle, but with access to vastly more examples and the ability to process them at speeds no human could ever achieve.

The Magic and the Limitations of Generative AI

Like any powerful technology, Generative AI comes with both incredible benefits and important limitations that users must be aware of:

| What's Magical and Powerful About It | What It Can't Do (Yet) – Important Limitations |
|---|---|
| Speed & Efficiency: Creates complex content in seconds or minutes that might take humans hours or days, dramatically accelerating workflows. | Truly Original Thought: It recombines and extrapolates from existing ideas rather than having genuine, groundbreaking original thoughts or consciousness. |
| Infinite Variety: Can produce countless variations, styles, and iterations on any given theme or instruction, aiding exploration and reducing creative blocks. | Fact-Checking & "Hallucinations": It can confidently state incorrect, nonsensical, or fabricated information. This "hallucinating" occurs because it prioritizes generating coherent text based on patterns over factual accuracy. |
| Accessibility & Democratization: Anyone can use it with simple prompts, no specialized artistic or coding training required. Lowers the barrier to sophisticated content creation. | Deep Emotional Understanding & Consciousness: It mimics emotional language and creative styles but doesn't truly feel emotions, possess self-awareness, or have genuine understanding like humans. |
| Consistency & Scalability: Works tirelessly 24/7 without getting tired, losing inspiration, or declining in quality, making it ideal for large-scale content generation. | Long-term Memory (per session): Most LLMs have limited "memory" within a single conversation thread and typically don't remember you or past conversations when you start a new chat, requiring re-contextualization. |
| Bridges Skill Gaps: Enables individuals without specific artistic, writing, or coding skills to produce high-quality outputs, acting as a powerful assistant. | Access to Real-Time External Systems: By default, LLMs cannot browse the live internet, make phone calls, send emails, or control other software unless explicitly integrated via specialized "plugins" or extensions. |

Real-World Applications You Can Use Today: Putting Generative AI to Work

Generative AI is not just a fascinating concept; it's a practical tool being adopted across virtually every sector. Here are just a few ways people are already using it in their daily lives, work, and studies:

* For Students:
    * Generate essay outlines and initial research starting points (e.g., "Give me an outline for an essay on the causes of World War I").
    * Create customized study guides or flashcards from lecture notes or textbook chapters.
    * Practice language skills by having a conversation partner that corrects grammar and offers vocabulary suggestions.
* For Professionals (Marketing, Sales, HR, etc.):
    * Rapidly draft emails, proposals, and internal communications.
    * Generate engaging social media content, blog post ideas, and website copy.
    * Overcome writer's block for presentations, reports, or business plans.
    * Create scripts for short videos or webinars.
* For Creatives (Writers, Designers, Artists, Musicians):
    * Generate story prompts, character descriptions, or plot outlines to kickstart writing projects.
    * Create concept art, mood boards, or design variations for visual projects.
    * Experiment with different artistic styles or musical genres.
    * Generate variations of song lyrics or melodies.
* For Everyday Users (Personal Life):
    * Plan meals and generate recipes based on available ingredients or dietary restrictions.
    * Create personalized workout routines or travel itineraries.
    * Draft thoughtful thank-you notes, birthday messages, or personalized invitations.
    * Summarize complex news articles or long online reviews before making a purchase decision.

The Economic Impact: A Productivity Multiplier

Generative AI is not merely a technological marvel; it's rapidly reshaping how work gets done across industries. Its primary impact is not necessarily replacing humans entirely, but rather making humans vastly more productive and efficient.

Consider these transformations:
* A graphic designer can now generate 20 diverse concept designs for a logo in the time it used to take to manually create just 3, accelerating the iteration process.
* A content writer can produce a high-quality first draft of a blog post or marketing email in minutes instead of hours, allowing them to focus on refinement and strategy.
* A programmer can generate snippets of code, debug errors, or translate code between languages instantly, dramatically speeding up development cycles.

This unparalleled boost in productivity is precisely why businesses are investing heavily in Generative AI. It's not just a "cool" new technology; it's a powerful "productivity multiplier" that enables individuals and teams to accomplish more, faster, and with higher quality, leading to significant economic advantages.

Key Takeaway for Chapter 2.1

Generative AI represents a fundamental and exciting shift from AI that merely processes information to AI that actively creates new information. It operates like a creative collaborator that never gets tired, can work in virtually any style, and can produce endless variations on any idea you provide. While it has inherent limitations (especially concerning factual accuracy and true consciousness), its ability to dramatically accelerate human creativity and amplify productivity is already transforming how we work, learn, and create in the modern world. Embrace it as a powerful tool in your toolkit.

Quick Self-Check: Generative AI
1. Describe in your own words the core difference between the "traditional AI" from Module 1 and "Generative AI."
2. Think of one creative task you do regularly (e.g., writing emails, creating presentations for work, planning social events, sketching ideas). How might Generative AI specifically help you do this task faster or better, citing one of its "magical" qualities?
3. Given Generative AI's limitations, what's one piece of advice you would give someone starting to use it for content creation?`
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
                  Pick up where you left off in Module 2: The Generative AI Revolution - Creative Machines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Chapter 2.1: Generative AI - The 'Creative' Machines</h4>
                    <p className="text-sm text-gray-600">Explore the exciting capabilities of AI as your creative collaborator</p>
                  </div>
                  <Button onClick={() => handleModuleClick("module-generative-ai")}>Continue Learning</Button>
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
