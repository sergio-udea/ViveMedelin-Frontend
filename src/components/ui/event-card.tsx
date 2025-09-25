import { Calendar, MapPin, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  price: string;
  category?: string;
  image: string;
  organizer?: string;
  onViewDetails?: () => void;
  onActions?: () => void;
  className?: string;
}

export function EventCard({
  title,
  date,
  time,
  location,
  price,
  category,
  image,
  organizer,
  onViewDetails,
  onActions,
  className = "",
}: EventCardProps) {
  return (
    <Card className={`overflow-hidden shadow-card hover:shadow-cultural transition-all duration-300 ${className}`}>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {category && (
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
            {category}
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-3 text-foreground line-clamp-2">
          {title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{date}</span>
            <Clock className="w-4 h-4 ml-4 mr-2" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="line-clamp-1">{location}</span>
          </div>
          
          <div className="flex items-center text-muted-foreground text-sm">
            <DollarSign className="w-4 h-4 mr-2" />
            <span className="font-semibold text-primary">{price}</span>
          </div>
          
          {organizer && (
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">Organizador:</span> {organizer}
            </div>
          )}
        </div>
        
        <div className="flex gap-2">
          {onViewDetails && (
            <Button 
              onClick={onViewDetails}
              variant="default"
              className="flex-1"
            >
              Ver detalles
            </Button>
          )}
          {onActions && (
            <Button 
              onClick={onActions}
              variant="secondary"
              className="flex-1"
            >
              Acciones
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}