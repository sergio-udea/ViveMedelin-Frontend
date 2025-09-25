import { useParams, useNavigate } from "react-router-dom";
import { EventCard } from "@/components/ui/event-card";
import concertImage from "@/assets/concert-event.jpg";

const EventsByCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();

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

  const categoryNames: Record<string, string> = {
    musicales: "Musicales",
    baile: "Baile",
    pintura: "Pintura",
    turisticos: "Turísticos",
    gastronomicas: "Gastronómicas",
  };

  const categoryName = category ? categoryNames[category] || category : "Categoría";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            Eventos &lt;&lt;{categoryName}&gt;&gt;
          </h1>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              price={event.price}
              category={event.category}
              image={event.image}
              organizer={event.organizer}
              onViewDetails={() => navigate(`/evento/${event.id}`)}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="text-primary hover:underline"
            >
              ← Volver
            </button>
            <button
              onClick={() => navigate("/eventos")}
              className="text-primary hover:underline"
            >
              Ver todos los eventos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsByCategory;