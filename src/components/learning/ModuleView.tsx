import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown
import remarkGfm from 'remark-gfm'; // Import remarkGfm for tables and other GFM features

interface Chapter {
  id: number;
  title: string;
  duration: string;
  content: string;
}

interface Module {
  id: string;
  title: string;
  description: string;
  chapters: number;
  completedChapters: number;
  estimatedTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  isLocked?: boolean;
  chapterList: Chapter[];
}

interface ModuleViewProps {
  module: Module;
  onBack: () => void;
  currentChapter: number | null;
  onChapterClick: (chapterId: number) => void;
}

export const ModuleView = ({ module, onBack, currentChapter, onChapterClick }: ModuleViewProps) => {
  const currentChapterData = currentChapter ? module.chapterList.find(c => c.id === currentChapter) : null;
  const currentChapterIndex = currentChapter ? module.chapterList.findIndex(c => c.id === currentChapter) : -1;
  const hasNextChapter = currentChapterIndex < module.chapterList.length - 1;
  const hasPreviousChapter = currentChapterIndex > 0;

  const goToNextChapter = () => {
    if (hasNextChapter) {
      const nextChapter = module.chapterList[currentChapterIndex + 1];
      onChapterClick(nextChapter.id);
    }
  };

  const goToPreviousChapter = () => {
    if (hasPreviousChapter) {
      const previousChapter = module.chapterList[currentChapterIndex - 1];
      onChapterClick(previousChapter.id);
    }
  };

  if (currentChapter && currentChapterData) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={() => onChapterClick(0)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Module
          </Button>
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {currentChapterData.title}
          </h1>
          <div className="flex items-center space-x-4 text-gray-600 mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {module.title}
            </span>
            <span className="text-sm flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {currentChapterData.duration}
            </span>
            <span className="text-sm text-gray-500">
              Chapter {currentChapter} of {module.chapterList.length}
            </span>
          </div>
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              {/* Use ReactMarkdown to render the content */}
              <ReactMarkdown remarkPlugins={[remarkGfm]} className="text-gray-700 leading-relaxed text-lg">
                {currentChapterData.content}
              </ReactMarkdown>
            </div>
          </CardContent>
        </Card>

        {/* Chapter Navigation */}
        <div className="flex justify-between items-center pt-6">
          <div>
            {hasPreviousChapter && (
              <Button 
                variant="outline" 
                onClick={goToPreviousChapter}
                className="flex items-center space-x-2"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Previous Chapter</span>
              </Button>
            )}
          </div>
          
          <div className="text-center">
            <span className="text-sm text-gray-500">
              {currentChapterIndex + 1} of {module.chapterList.length} chapters
            </span>
          </div>
          
          <div>
            {hasNextChapter && (
              <Button 
                onClick={goToNextChapter}
                className="flex items-center space-x-2"
              >
                <span>Next Chapter</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Chapter Overview */}
        <Card className="bg-gray-50">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Chapter Overview</h3>
            <div className="grid gap-2">
              {module.chapterList.map((chapter, index) => (
                <div 
                  key={chapter.id}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                    chapter.id === currentChapter 
                      ? 'bg-blue-100 border-2 border-blue-300' 
                      : 'bg-white hover:bg-gray-100'
                  }`}
                  onClick={() => onChapterClick(chapter.id)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                      chapter.id === currentChapter 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <span className={`font-medium ${
                      chapter.id === currentChapter ? 'text-blue-900' : 'text-gray-700'
                    }`}>
                      {chapter.title}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{chapter.duration}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
      </div>

      <div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{module.title}</h1>
        <p className="text-xl text-gray-600 mb-6">{module.description}</p>
        
        <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8">
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{module.chapters} chapters</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{module.estimatedTime}</span>
          </div>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {module.difficulty}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Chapters</h2>
        <div className="grid gap-4">
          {module.chapterList.map((chapter) => (
            <Card 
              key={chapter.id}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onChapterClick(chapter.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {chapter.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{chapter.duration}</span>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
