import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showCashRegisterMenu, setShowCashRegisterMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const cashRegisterMenuRef = useRef<HTMLDivElement>(null);
  
  // v2.0.1

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target as Node)) {
        setShowServicesMenu(false);
      }
      if (cashRegisterMenuRef.current && !cashRegisterMenuRef.current.contains(event.target as Node)) {
        setShowCashRegisterMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-500/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-heading font-bold text-primary flex items-center gap-2 text-3xl md:text-6xl">
          <Icon name="ShoppingCart" size={20} className="md:w-7 md:h-7" />
          Мастер-Касс
        </h1>
        <nav className="hidden md:flex gap-6 items-center">
          <div 
            ref={servicesMenuRef}
            className="relative"
          >
            <button
              onClick={() => setShowServicesMenu(!showServicesMenu)}
              className="text-foreground hover:text-primary transition-colors flex items-center gap-1 bg-transparent border-none cursor-pointer">
              Услуги
              <Icon name="ChevronDown" size={16} />
            </button>
            {showServicesMenu && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-background border rounded-lg shadow-lg p-4 space-y-3">
                <a href="#services" className="block hover:text-primary transition-colors">
                  <div className="font-semibold">Продажа кассовых аппаратов</div>
                  <div className="text-sm text-muted-foreground">Широкий ассортимент ККТ</div>
                </a>
                <a href="#services" className="block hover:text-primary transition-colors">
                  <div className="font-semibold">Техническое обслуживание</div>
                  <div className="text-sm text-muted-foreground">
                    Ремонт и обслуживание<br/>
                    Настройка и регистрация ККТ<br/>
                    Регулярное техобслуживание<br/>
                    Замена ФН и перерегистрация ККТ в ФНС и ОФД<br/>
                    Обновление ПО и прошивок<br/>
                    Восстановление данных и закрытие смен<br/>
                    Продажа расходных материалов
                  </div>
                </a>
                <a href="#services" className="block hover:text-primary transition-colors">
                  <div className="font-semibold">Настройка и интеграция</div>
                  <div className="text-sm text-muted-foreground">Установка и интеграция с 1С</div>
                </a>
                <a href="#services" className="block hover:text-primary transition-colors">
                  <div className="font-semibold">Круглосуточная поддержка</div>
                  <div className="text-sm text-muted-foreground">Техподдержка 24/7</div>
                </a>
              </div>
            )}
          </div>
          <div 
            ref={cashRegisterMenuRef}
            className="relative"
          >
            <button
              onClick={() => setShowCashRegisterMenu(!showCashRegisterMenu)}
              className="text-foreground hover:text-primary transition-colors flex items-center gap-1 bg-transparent border-none cursor-pointer">
              Обслуживаемые кассы
              <Icon name="ChevronDown" size={16} />
            </button>
            {showCashRegisterMenu && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-background border rounded-lg shadow-lg p-4 space-y-4">
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase mb-2">ЭВОТОР и другие онлайн кассы</div>
                  <div className="space-y-3">
                    <a href="#services" className="block hover:text-primary transition-colors">
                      <div className="font-semibold">Эвотор 7.3</div>
                      <div className="text-sm text-muted-foreground">Компактная онлайн-касса</div>
                    </a>
                    <a href="#services" className="block hover:text-primary transition-colors">
                      <div className="font-semibold">Эвотор 10</div>
                      <div className="text-sm text-muted-foreground">Профессиональная касса</div>
                    </a>
                    <a href="#services" className="block hover:text-primary transition-colors">
                      <div className="font-semibold">Эвотор 5i</div>
                      <div className="text-sm text-muted-foreground">Для малого бизнеса</div>
                    </a>
                  </div>
                </div>
                <div className="border-t pt-3">
                  <div className="text-xs font-bold text-muted-foreground uppercase mb-2">АТОЛ и другие онлайн кассы</div>
                  <div className="space-y-3">

                    <a href="#services" className="block hover:text-primary transition-colors">
                      <div className="font-semibold">АТОЛ 30Ф</div>
                      <div className="text-sm text-muted-foreground">Компактная модель</div>
                    </a>
                    <a href="#services" className="block hover:text-primary transition-colors">
                      <div className="font-semibold">АТОЛ 42ФС</div>
                      <div className="text-sm text-muted-foreground">Для автоматизации торговли</div>
                    </a>
                  </div>
                </div>
                <div className="border-t pt-3">
                  <div className="text-xs font-bold text-muted-foreground uppercase mb-2">МЕРКУРИЙ и другие онлайн кассы</div>
                  <div className="space-y-3">
                    <a href="#services" className="block hover:text-primary transition-colors">
                      <div className="font-semibold">Меркурий 185Ф</div>
                      <div className="text-sm text-muted-foreground">Универсальная модель</div>
                    </a>
                    <a href="#services" className="block hover:text-primary transition-colors">
                      <div className="font-semibold">Меркурий 115Ф</div>
                      <div className="text-sm text-muted-foreground">Для небольших магазинов</div>
                    </a>
                    <a href="#services" className="block hover:text-primary transition-colors">
                      <div className="font-semibold">Меркурий 180Ф</div>
                      <div className="text-sm text-muted-foreground">С принтером чеков</div>
                    </a>
                  </div>
                </div>
                <div className="border-t pt-3">
                  <div className="text-xs font-bold text-muted-foreground uppercase mb-2">ДРУГИЕ БРЕНДЫ</div>
                  <div className="space-y-3">
                    <a href="#services" className="block hover:text-primary transition-colors">
                      <div className="font-semibold">МТС Касса 5</div>
                      <div className="text-sm text-muted-foreground">Умная касса для бизнеса</div>
                    </a>
                    <a href="#services" className="block hover:text-primary transition-colors">
                      <div className="font-semibold">MSPOS-K</div>
                      <div className="text-sm text-muted-foreground">Мобильная касса</div>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <a href="#request" className="text-foreground hover:text-primary transition-colors">Заявка</a>
          <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
          <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
        </nav>
        <a href="tel:+79801421010">
          <Button className="hidden md:flex text-lg px-6 py-6" size="lg">
            <Icon name="Phone" size={24} className="mr-3" />
            +7 (980) 142-10-10
          </Button>
        </a>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
          aria-label="Меню"
        >
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t animate-in slide-in-from-top-2 duration-300">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <div>
              <button
                onClick={() => setShowServicesMenu(!showServicesMenu)}
                className="w-full text-left font-semibold text-foreground hover:text-primary transition-colors flex items-center justify-between bg-transparent border-none cursor-pointer py-2"
              >
                Услуги
                <Icon name="ChevronDown" size={20} className={showServicesMenu ? "rotate-180 transition-transform" : "transition-transform"} />
              </button>
              {showServicesMenu && (
                <div className="pl-4 mt-2 space-y-3 border-l-2 border-primary/20">
                  <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary transition-colors">
                    <div className="font-semibold">Продажа кассовых аппаратов</div>
                  </a>
                  <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary transition-colors">
                    <div className="font-semibold">Техническое обслуживание</div>
                  </a>
                  <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary transition-colors">
                    <div className="font-semibold">Настройка и интеграция</div>
                  </a>
                  <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary transition-colors">
                    <div className="font-semibold">Круглосуточная поддержка</div>
                  </a>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setShowCashRegisterMenu(!showCashRegisterMenu)}
                className="w-full text-left font-semibold text-foreground hover:text-primary transition-colors flex items-center justify-between bg-transparent border-none cursor-pointer py-2"
              >
                Обслуживаемые кассы
                <Icon name="ChevronDown" size={20} className={showCashRegisterMenu ? "rotate-180 transition-transform" : "transition-transform"} />
              </button>
              {showCashRegisterMenu && (
                <div className="pl-4 mt-2 space-y-3 border-l-2 border-primary/20">
                  <div>
                    <div className="text-xs font-bold text-muted-foreground uppercase mb-2">ЭВОТОР</div>
                    <div className="space-y-2">
                      <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary transition-colors">Эвотор 7.3</a>
                      <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary transition-colors">Эвотор 10</a>
                      <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary transition-colors">Эвотор 5i</a>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="text-xs font-bold text-muted-foreground uppercase mb-2">АТОЛ</div>
                    <div className="space-y-2">
                      <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary transition-colors">АТОЛ 30Ф</a>
                      <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary transition-colors">АТОЛ 42ФС</a>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="text-xs font-bold text-muted-foreground uppercase mb-2">МЕРКУРИЙ</div>
                    <div className="space-y-2">
                      <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary transition-colors">Меркурий 185Ф</a>
                      <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary transition-colors">Меркурий 115Ф</a>
                      <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary transition-colors">Меркурий 180Ф</a>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="text-xs font-bold text-muted-foreground uppercase mb-2">ДРУГИЕ</div>
                    <div className="space-y-2">
                      <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary transition-colors">МТС Касса 5</a>
                      <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block hover:text-primary transition-colors">MSPOS-K</a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#request" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-foreground hover:text-primary transition-colors font-semibold">Заявка</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-foreground hover:text-primary transition-colors font-semibold">FAQ</a>
            <a href="#contacts" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-foreground hover:text-primary transition-colors font-semibold">Контакты</a>
            
            <a href="tel:+79801421010" className="block mt-4">
              <Button className="w-full text-lg py-6" size="lg">
                <Icon name="Phone" size={24} className="mr-3" />
                +7 (980) 142-10-10
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}