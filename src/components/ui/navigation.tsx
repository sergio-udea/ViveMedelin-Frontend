import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, Search, User, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import viveMedLogo from "@/assets/vive-med-logo.png";

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { icon: Plus, label: "Acciones de Administrador", path: "/admin" },
    { icon: Home, label: "Inicio", path: "/" },
    { icon: Calendar, label: "Eventos", path: "/eventos" },
    { icon: Search, label: "Buscar", path: "/buscar" },
    { icon: User, label: "Perfil", path: "/perfil" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={viveMedLogo} 
              alt="ViveMED" 
              className="w-12 h-12 rounded-full"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center space-y-1 text-sm transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-4">
            {navItems.slice(1, 4).map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center space-y-1 transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="rounded-full">
              <div className="w-5 h-5 bg-gradient-primary rounded-full" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}