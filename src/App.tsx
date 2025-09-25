import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { ThemeProvider } from "@/components/theme-provider";

// Pages
import Index from "./pages/Index";
import CreateEvent from "./pages/CreateEvent";
import EventDetails from "./pages/EventDetails";
import EditEvent from "./pages/EditEvent";
import EventsList from "./pages/EventsList";
import EventsByCategory from "./pages/EventsByCategory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light" storageKey="vive-medellin-ui-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/crear-evento" element={<CreateEvent />} />
                <Route path="/evento/:id" element={<EventDetails />} />
                <Route path="/editar/:id" element={<EditEvent />} />
                <Route path="/eventos" element={<EventsList />} />
                <Route path="/categoria/:category" element={<EventsByCategory />} />
                <Route path="/admin" element={<EventsList />} />
                <Route path="/buscar" element={<EventsList />} />
                <Route path="/perfil" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
