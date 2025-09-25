import { Camera, Music, Palette, Users, UtensilsCrossed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/ui/event-card";
import { CategoryCard } from "@/components/ui/category-card";
import heroImage from "@/assets/hero-medellin-culture.jpg";
import concertImage from "@/assets/concert-event.jpg";

const Index = () => {
  const navigate = useNavigate();

  const categories = [
    { icon: Camera, label: "Turísticos", path: "/categoria/turisticos" },
    { icon: Music, label: "Baile", path: "/categoria/baile" },
    { icon: Palette, label: "Pintura", path: "/categoria/pintura" },
    { icon: Music, label: "Musicales", path: "/categoria/musicales" },
    { icon: UtensilsCrossed, label: "Gastronómicas", path: "/categoria/gastronomicas" },
  ];

  const featuredEvent = {
    title: "PABLO ALBORÁN - Global Tour - Medellín",
    date: "Junio 10 del 2026",
    time: "8:30 pm",
    location: "Estadio Atanasio Girardot",
    price: "$300.000 COP",
    category: "Música",
    organizer: "Alcaldía de Medellín",
    description: "Disfruta del gran concierto de clausura del evento más emblemático de la ciudad. Una noche llena de música colombiana con artistas internacionales.",
    image: concertImage,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={heroImage}
          alt="Cultura Medellín"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Vive Medellín
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                Descubre los mejores eventos culturales de la ciudad
              </p>
              <Button 
                size="lg" 
                onClick={() => navigate("/eventos")}
                className="bg-primary hover:bg-primary-dark text-primary-foreground"
              >
                Explorar Eventos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-medellin">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.label}
                icon={category.icon}
                label={category.label}
                onClick={() => navigate(category.path)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Últimos eventos</h2>
          
          <div className="max-w-2xl">
            <EventCard
              title={featuredEvent.title}
              date={featuredEvent.date}
              time={featuredEvent.time}
              location={featuredEvent.location}
              price={featuredEvent.price}
              category={featuredEvent.category}
              image={featuredEvent.image}
              organizer={featuredEvent.organizer}
              onViewDetails={() => navigate("/evento/1")}
            />
          </div>
          
          <div className="mt-8">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full md:w-auto"
              onClick={() => navigate("/eventos")}
            >
              Ver más
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-4">Vive Med</h3>
          <div className="flex justify-center space-x-6 text-muted-foreground">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>YouTube</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
