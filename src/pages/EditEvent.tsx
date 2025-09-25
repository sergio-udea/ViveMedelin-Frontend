import { useParams, useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock event data
  const event = {
    id: "1",
    title: "PABLO ALBORÁN - Global Tour - Medellín",
    organizer: "Alcaldía de Medellín",
    description: `Pablo Alborán regresa a Medellín con su Global Tour 2026/27

El 14 de marzo de 2026, el Atanasio Girardot vibrará con la voz de Pablo Alborán, quien regresa a la capital como parte de su ambiciosa gira Global Tour 2026/27. Este tour recorrerá más de 20 países en América y Europa, marca una nueva etapa en la carrera del artista malagueño, con una puesta en escena renovada y un repertorio que mezcla sus grandes éxitos con nuevas canciones.`,
  };

  const handleEdit = () => {
    navigate(`/crear-evento`);
  };

  const handleCancel = () => {
    toast({
      title: "El evento fue cancelado de manera exitosa",
      description: "Fecha de cancelación: DD-MM-AAAA\nAdministrador que realizó la cancelación: Nombre del administrador",
    });
    navigate("/eventos");
  };

  const handleDelete = () => {
    toast({
      title: "Evento eliminado",
      description: "El evento ha sido eliminado exitosamente",
      variant: "destructive",
    });
    navigate("/eventos");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">{event.title}</h1>
        
        <Card className="mb-6">
          <CardContent className="p-6 space-y-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
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
          </CardContent>
        </Card>

        <div className="space-y-4">
          {/* Edit Button */}
          <Button 
            onClick={handleEdit}
            className="w-full md:w-auto"
            size="lg"
          >
            Editar
          </Button>

          {/* Cancel Event Dialog */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button 
                variant="secondary"
                className="w-full md:w-auto"
                size="lg"
              >
                Cancelar
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>¿Está seguro de que desea cancelar el evento?</AlertDialogTitle>
                <AlertDialogDescription>
                  el evento debe marcarse como "Cancelado" y dejar de estar 
                  disponible para otro proceso, pero sin borrarse de la base de datos.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Atrás</AlertDialogCancel>
                <AlertDialogAction onClick={handleCancel}>
                  Cancelar evento
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* Delete Event Dialog */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button 
                variant="destructive"
                className="w-full md:w-auto"
                size="lg"
              >
                Eliminar
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>¿Está seguro de eliminar el evento?</AlertDialogTitle>
                <AlertDialogDescription>
                  Una vez eliminado, no podrá deshacer la acción.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Atrás</AlertDialogCancel>
                <AlertDialogAction 
                  onClick={handleDelete}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Eliminar evento
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;