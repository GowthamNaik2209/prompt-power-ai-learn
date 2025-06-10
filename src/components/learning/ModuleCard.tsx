
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, CheckCircle } from "lucide-react";

interface ModuleCardProps {
  id: string;
  title: string;
  description: string;
  chapters: number;
  completedChapters: number;
  estimatedTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  isLocked?: boolean;
  onClick: () => void;
}

export const ModuleCard = ({
  title,
  description,
  chapters,
  completedChapters,
  estimatedTime,
  difficulty,
  isLocked = false,
  onClick
}: ModuleCardProps) => {
  const progress = (completedChapters / chapters) * 100;
  const isCompleted = completedChapters === chapters;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
        isLocked ? 'opacity-60 cursor-not-allowed' : ''
      }`}
      onClick={!isLocked ? onClick : undefined}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <CardTitle className="text-xl flex items-center gap-2">
              {isCompleted && <CheckCircle className="h-5 w-5 text-green-600" />}
              {title}
            </CardTitle>
            <Badge className={getDifficultyColor(difficulty)}>
              {difficulty}
            </Badge>
          </div>
          <BookOpen className="h-6 w-6 text-blue-600" />
        </div>
        <CardDescription className="mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Progress</span>
              <span className="font-medium">{completedChapters}/{chapters} chapters</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{estimatedTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span>{chapters} chapters</span>
            </div>
          </div>
          
          {isLocked && (
            <div className="text-center py-2">
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
