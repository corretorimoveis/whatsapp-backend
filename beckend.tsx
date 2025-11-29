import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight, CheckCircle, Smartphone, Users, BarChart3 } from 'lucide-react';

export default function Index() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard');
    }
  }, [user, loading, navigate]);

  const features = [
    {
      icon: Smartphone,
      title: 'Conexão via QR Code',
      description: 'Conecte seu WhatsApp em segundos escaneando o QR Code',
    },
    {
      icon: Users,
      title: 'Gestão de Contatos',
      description: 'Organize e gerencie todos os seus contatos em um só lugar',
    },
    {
      icon: MessageCircle,
      title: 'Mensagens em Tempo Real',
      description: 'Envie e receba mensagens diretamente do seu CRM',
    },
    {
      icon: BarChart3,
      title: 'Relatórios Detalhados',
      description: 'Acompanhe métricas e insights das suas conversas',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">WhatsApp CRM</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/auth')}>
              Entrar
            </Button>
            <Button variant="gradient" onClick={() => navigate('/auth?mode=signup')}>
              Começar Grátis
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <CheckCircle className="w-4 h-4" />
            Conecte seu WhatsApp em segundos
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Gerencie seu WhatsApp com{' '}
            <span className="gradient-text">inteligência</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Centralize suas conversas, organize contatos e acompanhe métricas.
            Tudo em uma plataforma simples e poderosa.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="gradient" 
              size="xl" 
              onClick={() => navigate('/auth?mode=signup')}
              className="w-full sm:w-auto"
            >
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              onClick={() => navigate('/auth')}
              className="w-full sm:w-auto"
            >
              Já tenho conta
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          Tudo que você precisa
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-r from-primary to-whatsapp-teal text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Crie sua conta gratuita e conecte seu WhatsApp em minutos
          </p>
          <Button 
            size="xl" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            onClick={() => navigate('/auth?mode=signup')}
          >
            Criar Conta Gratuita
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">WhatsApp CRM</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 WhatsApp CRM. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
