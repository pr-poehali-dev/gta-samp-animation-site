import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const servers = [
  {
    id: 1,
    name: 'CYBER RP',
    type: 'Role Play',
    online: 847,
    maxPlayers: 1000,
    ping: 12,
    features: ['Экономика', 'Фракции', 'Бизнес', 'Гонки'],
    version: 'v2.5.1',
    status: 'online',
    description: 'Продвинутый RP сервер с уникальной экономической системой и множеством активностей'
  },
  {
    id: 2,
    name: 'NEON DRIFT',
    type: 'Free Mode',
    online: 623,
    maxPlayers: 800,
    ping: 8,
    features: ['DM', 'Дрифт', 'Кастомизация', 'Турниры'],
    version: 'v1.8.3',
    status: 'online',
    description: 'Сервер для любителей свободной игры, уличных гонок и дрифта с кастомными тачками'
  },
  {
    id: 3,
    name: 'MATRIX WARS',
    type: 'Team Death Match',
    online: 445,
    maxPlayers: 500,
    ping: 15,
    features: ['TDM', 'Оружие', 'Команды', 'Рейтинг'],
    version: 'v3.0.0',
    status: 'online',
    description: 'Интенсивные командные бои в футуристических локациях с продвинутой системой оружия'
  }
];

const Index = () => {
  const [totalOnline, setTotalOnline] = useState(0);

  useEffect(() => {
    const total = servers.reduce((sum, server) => sum + server.online, 0);
    let current = 0;
    const increment = total / 50;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= total) {
        setTotalOnline(total);
        clearInterval(timer);
      } else {
        setTotalOnline(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="grid-overlay fixed inset-0 z-0" />
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10">
        <header className="border-b border-primary/30 backdrop-blur-md bg-background/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-black text-primary text-glow tracking-wider">
                GTA SAMP
              </h1>
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Онлайн игроков</div>
                  <div className="text-3xl font-bold text-primary text-glow">{totalOnline}</div>
                </div>
                <Button className="neon-border bg-transparent hover:bg-primary/10 text-primary font-bold uppercase tracking-wider">
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          <section className="mb-24 text-center animate-fade-in">
            <div className="inline-block mb-6">
              <Badge className="neon-border-secondary bg-secondary/10 text-secondary border-0 px-6 py-2 text-lg font-bold uppercase tracking-wider">
                Футуристический мир GTA
              </Badge>
            </div>
            <h2 className="text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-pulse-glow">
              КИБЕРПАНК СЕРВЕРА
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Погрузись в мир высоких технологий и уличных гонок. Выбирай свой стиль игры:
              от серьёзной ролевой игры до безумных дрифт-батлов
            </p>
          </section>

          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {servers.map((server, index) => (
              <Card 
                key={server.id}
                className="neon-border bg-card/50 backdrop-blur-sm border-primary/30 overflow-hidden hover:scale-105 transition-transform duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-black text-primary text-glow mb-1">
                        {server.name}
                      </h3>
                      <Badge variant="outline" className="text-secondary border-secondary/50">
                        {server.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                      <span className="text-xs text-primary font-bold uppercase">Live</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {server.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-background/50 rounded-lg p-3 border border-primary/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="Users" size={16} className="text-primary" />
                        <span className="text-xs text-muted-foreground uppercase">Онлайн</span>
                      </div>
                      <div className="text-2xl font-bold text-primary text-glow">
                        {server.online}/{server.maxPlayers}
                      </div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3 border border-secondary/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="Wifi" size={16} className="text-secondary" />
                        <span className="text-xs text-muted-foreground uppercase">Пинг</span>
                      </div>
                      <div className="text-2xl font-bold text-secondary">
                        {server.ping}ms
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {server.features.map((feature, i) => (
                      <Badge 
                        key={i}
                        variant="secondary" 
                        className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    className="w-full neon-border bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 text-primary font-bold uppercase tracking-wider"
                  >
                    <Icon name="Gamepad2" className="mr-2" size={20} />
                    Подключиться
                  </Button>
                </div>
                <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              </Card>
            ))}
          </section>

          <section className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="neon-border-secondary bg-card/30 backdrop-blur-sm border-secondary/30 p-8 text-center hover:scale-105 transition-transform">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 mb-4 animate-float">
                <Icon name="Zap" size={40} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3">Высокая производительность</h3>
              <p className="text-muted-foreground">
                Оптимизированные сервера на топовом железе для плавной игры без лагов
              </p>
            </Card>

            <Card className="neon-border bg-card/30 backdrop-blur-sm border-primary/30 p-8 text-center hover:scale-105 transition-transform">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4 animate-float" style={{ animationDelay: '0.5s' }}>
                <Icon name="Shield" size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Защита от DDoS</h3>
              <p className="text-muted-foreground">
                Современная система защиты обеспечивает стабильную работу 24/7
              </p>
            </Card>

            <Card className="neon-border-secondary bg-card/30 backdrop-blur-sm border-accent/30 p-8 text-center hover:scale-105 transition-transform">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-4 animate-float" style={{ animationDelay: '1s' }}>
                <Icon name="Trophy" size={40} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-accent mb-3">Турниры и ивенты</h3>
              <p className="text-muted-foreground">
                Регулярные соревнования с крутыми призами и уникальными наградами
              </p>
            </Card>
          </section>
        </main>

        <footer className="border-t border-primary/30 backdrop-blur-md bg-background/50">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">
                © 2025 GTA SAMP CYBER. Все права защищены
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-primary hover:text-secondary transition-colors">
                  <Icon name="MessageCircle" size={24} />
                </a>
                <a href="#" className="text-primary hover:text-secondary transition-colors">
                  <Icon name="Youtube" size={24} />
                </a>
                <a href="#" className="text-primary hover:text-secondary transition-colors">
                  <Icon name="Users" size={24} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
