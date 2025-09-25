import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  className?: string;
}

export function CategoryCard({ icon: Icon, label, onClick, className = "" }: CategoryCardProps) {
  return (
    <Card 
      className={`cursor-pointer hover:shadow-cultural transition-all duration-300 hover:scale-105 ${className}`}
      onClick={onClick}
    >
      <CardContent className="p-6 text-center">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground">
            <Icon className="w-8 h-8" />
          </div>
          <span className="font-medium text-foreground">{label}</span>
        </div>
      </CardContent>
    </Card>
  );
}