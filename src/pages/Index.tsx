import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

type TabType = 'settings' | 'bot' | 'instruction';

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>('settings');

  const menuItems = [
    {
      id: 'settings' as TabType,
      label: 'Настроить отыгровки',
      icon: 'Settings',
      color: 'primary'
    },
    {
      id: 'bot' as TabType,
      label: 'Связь с ботом',
      icon: 'Bot',
      color: 'secondary'
    },
    {
      id: 'instruction' as TabType,
      label: 'Инструкция',
      icon: 'BookOpen',
      color: 'accent'
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex">
      <div className="grid-overlay fixed inset-0 z-0" />
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      <aside className="relative z-10 w-80 border-r border-primary/30 backdrop-blur-md bg-background/50 p-8 flex flex-col gap-6">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-primary text-glow tracking-wider mb-2">
            GTA SAMP
          </h1>
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            Панель управления
          </p>
        </div>

        <nav className="flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <Button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                h-auto py-6 px-6 flex items-center gap-4 justify-start text-left
                transition-all duration-300 animate-slide-up
                ${activeTab === item.id 
                  ? 'neon-border bg-gradient-to-r from-primary/20 to-secondary/20 text-primary scale-105' 
                  : 'bg-card/30 hover:bg-card/50 text-muted-foreground hover:text-foreground border border-border'
                }
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`
                w-12 h-12 rounded-lg flex items-center justify-center
                ${activeTab === item.id 
                  ? 'bg-primary/20 animate-pulse-glow' 
                  : 'bg-background/50'
                }
              `}>
                <Icon 
                  name={item.icon as any} 
                  size={24} 
                  className={activeTab === item.id ? 'text-primary' : 'text-muted-foreground'}
                />
              </div>
              <div className="flex-1">
                <div className="font-bold uppercase tracking-wide text-sm">
                  {item.label}
                </div>
              </div>
              {activeTab === item.id && (
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              )}
            </Button>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-primary/30">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span>Система активна</span>
          </div>
        </div>
      </aside>

      <main className="flex-1 relative z-10 p-12 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {activeTab === 'settings' && (
            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  Настроить отыгровки
                </h2>
                <p className="text-xl text-muted-foreground">
                  Персонализируй свой игровой опыт и настрой автоматические действия
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="neon-border bg-card/50 backdrop-blur-sm border-primary/30 p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center neon-border">
                      <Icon name="Zap" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-3">Автоматические команды</h3>
                      <p className="text-muted-foreground mb-4">
                        Настрой последовательности команд для быстрого выполнения рутинных действий в игре
                      </p>
                      <Button className="neon-border bg-transparent hover:bg-primary/10 text-primary">
                        Настроить команды
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="neon-border-secondary bg-card/50 backdrop-blur-sm border-secondary/30 p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center neon-border-secondary">
                      <Icon name="MessageSquare" size={32} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-secondary mb-3">Шаблоны сообщений</h3>
                      <p className="text-muted-foreground mb-4">
                        Создай готовые фразы для ролевых ситуаций и быстрого общения
                      </p>
                      <Button className="neon-border-secondary bg-transparent hover:bg-secondary/10 text-secondary">
                        Управление шаблонами
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="neon-border bg-card/50 backdrop-blur-sm border-accent/30 p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center animate-pulse-glow">
                      <Icon name="Sparkles" size={32} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-accent mb-3">Макросы действий</h3>
                      <p className="text-muted-foreground mb-4">
                        Комбинируй несколько действий в одну кнопку для эффективной игры
                      </p>
                      <Button className="bg-transparent hover:bg-accent/10 text-accent border border-accent/50">
                        Создать макрос
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'bot' && (
            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mb-4">
                  Связь с ботом
                </h2>
                <p className="text-xl text-muted-foreground">
                  Управляй игровыми функциями через Telegram бот
                </p>
              </div>

              <Card className="neon-border-secondary bg-card/50 backdrop-blur-sm border-secondary/30 p-12 text-center mb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-secondary/20 mb-6 animate-float neon-border-secondary">
                  <Icon name="Bot" size={64} className="text-secondary" />
                </div>
                <h3 className="text-3xl font-bold text-secondary mb-4">GTA SAMP Bot</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                  Получай уведомления о событиях на сервере, управляй настройками и следи за статистикой прямо из Telegram
                </p>
                <Button className="neon-border-secondary bg-gradient-to-r from-secondary/20 to-accent/20 hover:from-secondary/30 hover:to-accent/30 text-secondary font-bold uppercase tracking-wider text-lg px-8 py-6">
                  <Icon name="Send" className="mr-2" size={24} />
                  Подключить бота
                </Button>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-card/30 backdrop-blur-sm border border-secondary/20 p-6 hover:scale-105 transition-transform">
                  <Icon name="Bell" size={32} className="text-secondary mb-4" />
                  <h4 className="text-lg font-bold text-secondary mb-2">Уведомления</h4>
                  <p className="text-sm text-muted-foreground">
                    Получай оповещения о важных игровых событиях
                  </p>
                </Card>
                <Card className="bg-card/30 backdrop-blur-sm border border-secondary/20 p-6 hover:scale-105 transition-transform">
                  <Icon name="BarChart3" size={32} className="text-secondary mb-4" />
                  <h4 className="text-lg font-bold text-secondary mb-2">Статистика</h4>
                  <p className="text-sm text-muted-foreground">
                    Отслеживай свой прогресс и достижения
                  </p>
                </Card>
                <Card className="bg-card/30 backdrop-blur-sm border border-secondary/20 p-6 hover:scale-105 transition-transform">
                  <Icon name="Users" size={32} className="text-secondary mb-4" />
                  <h4 className="text-lg font-bold text-secondary mb-2">Друзья</h4>
                  <p className="text-sm text-muted-foreground">
                    Узнавай когда друзья заходят на сервер
                  </p>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'instruction' && (
            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary mb-4">
                  Инструкция
                </h2>
                <p className="text-xl text-muted-foreground">
                  Пошаговое руководство по использованию панели
                </p>
              </div>

              <div className="space-y-6">
                <Card className="neon-border bg-card/50 backdrop-blur-sm border-primary/30 p-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-black text-primary neon-border">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Регистрация и авторизация</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Создай аккаунт на сервере и привяжи его к панели управления. После этого ты получишь доступ ко всем функциям системы.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="neon-border-secondary bg-card/50 backdrop-blur-sm border-secondary/30 p-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-2xl font-black text-secondary neon-border-secondary">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary mb-3">Настройка отыгровок</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Перейди в раздел "Настроить отыгровки" и создай свои автоматические команды. Можно использовать переменные и условия для гибкой настройки.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border border-accent/30 p-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-2xl font-black text-accent animate-pulse-glow">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-accent mb-3">Подключение Telegram бота</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Найди бота в Telegram, отправь команду /start и следуй инструкциям. После привязки ты будешь получать уведомления о всех важных событиях.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="neon-border bg-card/50 backdrop-blur-sm border-primary/30 p-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-black text-primary neon-border">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Начни играть</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Теперь все готово! Заходи на сервер и пользуйся всеми преимуществами автоматизации. Твоя игра станет намного эффективнее.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
