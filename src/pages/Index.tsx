import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section - Mobile First */}
      <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              Tu Landing Page
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Mobile First
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Preparada para crear experiencias increíbles en cualquier dispositivo
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button 
              size="lg" 
              className="text-base md:text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-medium hover:shadow-glow transition-all"
            >
              Comenzar Ahora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base md:text-lg px-8 py-6 border-2 hover:bg-muted transition-all"
            >
              Saber Más
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="rounded-3xl bg-gradient-primary p-8 md:p-12 lg:p-16 text-center text-primary-foreground shadow-large">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Personaliza esta landing page según tus necesidades y sorprende a tus usuarios
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-base md:text-lg px-8 py-6 shadow-medium hover:shadow-large transition-all"
          >
            Personalizar Ahora
          </Button>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: "📱",
    title: "Mobile First",
    description: "Diseñado primero para móviles, perfecto en todos los dispositivos"
  },
  {
    icon: "⚡",
    title: "Rápido",
    description: "Optimizado para cargar rápido y ofrecer la mejor experiencia"
  },
  {
    icon: "🎨",
    title: "Personalizable",
    description: "Sistema de diseño completo listo para adaptar a tu marca"
  },
  {
    icon: "🚀",
    title: "Moderno",
    description: "Construido con las últimas tecnologías y mejores prácticas"
  },
  {
    icon: "💎",
    title: "Componentes",
    description: "Biblioteca completa de componentes UI listos para usar"
  },
  {
    icon: "✨",
    title: "Animaciones",
    description: "Transiciones suaves que deleitan a tus usuarios"
  }
];

export default Index;
