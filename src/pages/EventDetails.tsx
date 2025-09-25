import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, MapPin, DollarSign, Clock, User, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import concertImage from "@/assets/concert-event.jpg";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  // Mock event data
  const event = {
    id: "1",
    title: "PABLO ALBORÁN - Global Tour - Medellín",
    date: "Jun 10, 2026",
    time: "8:30 PM",
    location: "Estadio Atanasio Girardot - Medellín",
    price: "Desde $300.000",
    category: "Música",
    organizer: "Alcaldía de Medellín",
    description: `Pablo Alborán regresa a Medellín con su Global Tour 2026/27
    
El 14 de marzo de 2026, el Atanasio Girardot vibrará con la voz de Pablo Alborán, quien regresa a la capital como parte de su ambiciosa gira Global Tour 2026/27. Este tour recorrerá más de 20 países en América y Europa, marca una nueva etapa en la carrera del artista malagueño, con una puesta en escena renovada y un repertorio que mezcla sus grandes éxitos con nuevas canciones.`,
    image: concertImage,
    reviews: [
      {
        id: "1",
        rating: 5,
        title: "Me encanta ❤️",
        body: "Review body",
        author: "Ela Montes",
        date: "18-09-2025",
        avatar: "",
      },
      {
        id: "2", 
        rating: 4,
        title: "Genial ⭐",
        body: "Review body",
        author: "María Torres",
        date: "30-08-2025",
        avatar: "",
      },
      {
        id: "3",
        rating: 3,
        title: "Me lo pierdo",
        body: "Review body", 
        author: "Juana Sepúlveda",
        date: "02-09-2025",
        avatar: "",
      },
    ],
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Event Image */}
          <div className="relative">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-96 object-cover rounded-lg shadow-cultural"
            />
            <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
              {event.category}
            </Badge>
          </div>

          {/* Event Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">
                Organizador
              </h3>
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{event.organizer}</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                Descripción
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {event.description}
              </p>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">{event.title}</h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center space-x-3">
              <Calendar className="w-6 h-6 text-primary" />
              <div>
                <p className="font-medium">{event.date}</p>
                <p className="text-sm text-muted-foreground">{event.time}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <p className="font-medium">{event.location}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <DollarSign className="w-6 h-6 text-primary" />
              <div>
                <p className="font-medium">{event.price}</p>
              </div>
            </div>
          </div>

          {/* Stadium Map */}
          <div className="flex justify-center mb-8">
            <div className="bg-muted rounded-lg p-8 text-center">
              <div className="w-64 h-32 bg-gradient-to-b from-green-400 to-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold">
                Stadium Layout
              </div>
              <p className="text-sm text-muted-foreground">
                Mapa interactivo del estadio disponible próximamente
              </p>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Comentarios</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {event.reviews.map((review) => (
              <Card key={review.id} className="h-fit">
                <CardContent className="p-4">
                  <div className="flex mb-3">
                    {renderStars(review.rating)}
                  </div>
                  
                  <h3 className="font-semibold mb-2">{review.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{review.body}</p>
                  
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={review.avatar} />
                      <AvatarFallback>
                        {review.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{review.author}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;