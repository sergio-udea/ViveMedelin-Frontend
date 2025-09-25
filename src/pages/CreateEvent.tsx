import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const CreateEvent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Evento creado exitosamente",
        description: "El evento ha sido creado de forma exitosa",
      });
      setIsSubmitting(false);
      navigate("/eventos");
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Crear evento</h1>
        <p className="text-center text-muted-foreground mb-8">
          Cuéntanos de que se trata, dónde y cuándo se llevará a cabo y quien lo organiza. Con esta información tu actividad podrá llegar a 
          más personas y convertirse en parte de la agenda cultural de la ciudad.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Información básica */}
            <Card className="border-2 border-dashed border-primary/50">
              <CardHeader>
                <CardTitle>Información básica</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="eventName">Nombre del evento</Label>
                  <Input 
                    id="eventName" 
                    placeholder="Puedes utilizar cualquier caracter"
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="category">Categoría</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="musicales">Musicales</SelectItem>
                      <SelectItem value="baile">Baile</SelectItem>
                      <SelectItem value="pintura">Pintura</SelectItem>
                      <SelectItem value="turisticos">Turísticos</SelectItem>
                      <SelectItem value="gastronomicas">Gastronómicas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="description">Descripción del evento</Label>
                  <Textarea 
                    id="description" 
                    className="min-h-[100px]"
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="capacity">Aforo estimado</Label>
                  <Input 
                    id="capacity" 
                    type="number"
                    placeholder="0"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Ubicación */}
            <Card className="border-2 border-dashed border-primary/50">
              <CardHeader>
                <CardTitle>Ubicación</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="commune">Comuna o barrio</Label>
                  <Input 
                    id="commune" 
                    placeholder="Procura ser coherente con la ubicación"
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="mapLink">Enlace al mapa</Label>
                  <Input 
                    id="mapLink" 
                    type="url"
                  />
                </div>
                
                <div>
                  <Label htmlFor="fullAddress">Dirección completa</Label>
                  <Textarea 
                    id="fullAddress" 
                    className="min-h-[100px]"
                    required 
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Material complementario */}
            <Card className="border-2 border-dashed border-primary/50">
              <CardHeader>
                <CardTitle>Material complementario</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="eventImage">Imagen del evento</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground">En formato JPEG o PNG</p>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="videoLinks">Enlaces de video</Label>
                  <Input 
                    id="videoLinks" 
                    placeholder="URL pública"
                    type="url"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Información del organizador */}
            <Card className="border-2 border-dashed border-primary/50">
              <CardHeader>
                <CardTitle>Información del organizador</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="organizerName">Nombre del organizador</Label>
                  <Input 
                    id="organizerName" 
                    placeholder="Nombres y Apellidos"
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="organizerId">Identificación</Label>
                  <Input 
                    id="organizerId" 
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="contactNumber">Número de contacto</Label>
                  <Input 
                    id="contactNumber" 
                    type="tel"
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input 
                    id="email" 
                    type="email"
                    required 
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Datos adicionales */}
          <Card>
            <CardHeader>
              <CardTitle>Datos adicionales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="featured" />
                <Label htmlFor="featured">Evento destacado</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="free" />
                <Label htmlFor="free">Gratuito</Label>
              </div>
              
              <div>
                <Label htmlFor="ticketPrice">Valor de ingreso</Label>
                <Input 
                  id="ticketPrice" 
                  type="number"
                  placeholder="0"
                />
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="min-w-[200px]"
            >
              {isSubmitting ? "Guardando..." : "Guardar"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;