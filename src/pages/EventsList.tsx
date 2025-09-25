import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { EventCard } from "@/components/ui/event-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import concertImage from "@/assets/concert-event.jpg";

const EventsList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState("");

  // Mock events data
  const events = Array.from({ length: 6 }, (_, index) => ({
    id: `${index + 1}`,
    title: "PABLO ALBORÁN - Global Tour - Medellín",
    date: "Jun 10, 2026",
    time: "8:30 PM",
    location: "Estadio Atanasio Girardot - Medellín",
    price: "Desde $300.000",
    category: "Música",
    organizer: "Alcaldía de Medellín",
    image: concertImage,
  }));

  const categories = [
    "Musicales",
    "Baile", 
    "Pintura",
    "Turísticos",
    "Gastronómicas"
  ];

  const services = [
    "Servicio 1",
    "Servicio 2",
    "Servicio 3"
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || event.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Lista de eventos</h1>
          <p className="text-muted-foreground">
            En este sitio están todos lo eventos creados y publicados
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Input
              placeholder="Buscar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
          <Button>Buscar</Button>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filtros de búsqueda</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Categorías" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todas las categorías</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger>
                  <SelectValue placeholder="Servicios" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todos los servicios</SelectItem>
                  {services.map((service) => (
                    <SelectItem key={service} value={service.toLowerCase()}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Events List */}
        <div className="space-y-6 mb-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="flex flex-col md:flex-row gap-6 p-6 bg-card rounded-lg shadow-card">
              <div className="md:w-48 flex-shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-32 md:h-24 object-cover rounded-lg"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <span>{event.date}</span>
                  <span className="mx-2">•</span>
                  <span>{event.time}</span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <Button
                  onClick={() => navigate(`/evento/${event.id}`)}
                  className="whitespace-nowrap"
                >
                  Ver detalles
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => navigate(`/editar/${event.id}`)}
                  className="whitespace-nowrap"
                >
                  Acciones
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="w-full max-w-md"
            onClick={() => {
              // Mock load more functionality
              console.log("Loading more events...");
            }}
          >
            Ver más
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventsList;