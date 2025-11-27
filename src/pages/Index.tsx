import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Наш специалист свяжется с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const services = [
    {
      icon: 'ShoppingCart',
      title: 'Продажа кассовых аппаратов',
      description: 'Широкий ассортимент современной контрольно-кассовой техники от ведущих производителей'
    },
    {
      icon: 'Wrench',
      title: 'Техническое обслуживание',
      description: 'Профессиональный ремонт и обслуживание любых моделей кассовых аппаратов'
    },
    {
      icon: 'Settings',
      title: 'Настройка и интеграция',
      description: 'Установка, настройка и интеграция ККТ с вашими системами учета'
    },
    {
      icon: 'Headphones',
      title: 'Круглосуточная поддержка',
      description: 'Техническая поддержка и консультации 24/7 для бесперебойной работы'
    }
  ];

  const faqItems = [
    {
      question: 'Как быстро можно получить кассовый аппарат?',
      answer: 'При наличии оборудования на складе — доставка в течение 1-2 рабочих дней. Настройка и регистрация занимают еще 1 день.'
    },
    {
      question: 'Какие документы нужны для покупки ККТ?',
      answer: 'Для юридических лиц: свидетельство о регистрации, ИНН, ОГРН. Для ИП: свидетельство ИП, ИНН, паспорт.'
    },
    {
      question: 'Предоставляете ли вы гарантию?',
      answer: 'Да, на все оборудование предоставляется официальная гарантия производителя от 12 до 36 месяцев.'
    },
    {
      question: 'Как происходит техническое обслуживание?',
      answer: 'Наши специалисты выезжают на объект в течение 4 часов после заявки. Также возможно обслуживание в нашем сервисном центре.'
    },
    {
      question: 'Можно ли подключить кассу к 1С?',
      answer: 'Да, мы настраиваем интеграцию с любыми версиями 1С, а также другими системами учета и CRM.'
    },
    {
      question: 'Продление и регистрация в сервисах ОФД',
      answer: 'Продление и регистрация в сервисах ОФД:\n\n• ТАКСКОМ\n• Платформа ОФД\n• ОФД.РУ\n• СБИС\n• 1-ОФД.ру'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-500 relative">
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/6a367fa8-b448-4057-8ed0-4d2614046ae3.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-500/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-heading font-bold text-primary flex items-center gap-2 text-6xl">
            <Icon name="ShoppingCart" size={28} />
            Мастер-Касс
          </h1>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
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
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-transparent">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
        <div className="absolute inset-0 opacity-5 -z-10" style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/caf80cde-e21f-4dec-a81b-94d54eb46ccf.png)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Кассовые решения для малого бизнеса
              </h2>
              <p className="text-xl mb-8 text-[#000000]">
                Продажа, настройка и обслуживание контрольно-кассовой техники. Работаем быстро, надежно, профессионально.
              </p>
              <div className="flex flex-wrap gap-6">
                <Button size="lg" className="text-2xl px-12 py-8">
                  <Icon name="FileText" size={30} className="mr-3" />
                  Оставить заявку
                </Button>
                <a href="tel:+79801421010">
                  <Button size="lg" variant="outline" className="text-xl px-20 py-14 flex flex-col items-center gap-3 w-auto whitespace-nowrap">
                    <span>+7 (980) 142-10-10</span>
                    <span>+7 (916) 412-09-20</span>
                    <span>+7 (916) 412-09-40</span>
                  </Button>
                </a>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-heading font-bold text-primary">500+</div>
                  <div className="text-sm text-foreground mt-1">Клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-primary">24/7</div>
                  <div className="text-sm text-foreground mt-1">Поддержка</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-primary">5 лет</div>
                  <div className="text-sm text-foreground mt-1">На рынке</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-3xl opacity-20 absolute -top-8 -right-8 w-3/4 blur-3xl" />
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <img 
                  src="https://cdn.poehali.dev/files/8e263679-67f2-4838-b01f-29692fba2b4d.png" 
                  alt="Касса АТОЛ с цветным экраном" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <img 
                  src="https://cdn.poehali.dev/files/3f2ac707-deef-41e5-85f0-48be85ee4893.png" 
                  alt="Фискальный регистратор" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <img 
                  src="https://cdn.poehali.dev/files/19578416-2487-4fc8-a3e8-c3a4dda5d122.png" 
                  alt="Принтер чеков АТОЛ" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <img 
                  src="https://cdn.poehali.dev/files/3cc8c07a-e4f7-4b43-8c72-8514a6a7f2aa.png" 
                  alt="Смарт-терминал АТОЛ" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-neutral-500">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Комплексные решения для вашего бизнеса</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="request" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Вызвать специалиста</h2>
            <p className="text-xl text-muted-foreground">Заполните форму и мы свяжемся с вами в течение 15 минут</p>
          </div>
          <Card className="border-2 shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Icon name="User" size={16} />
                      Ваше имя *
                    </label>
                    <Input 
                      required
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Icon name="Phone" size={16} />
                      Телефон *
                    </label>
                    <Input 
                      required
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Icon name="Mail" size={16} />
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Icon name="MessageSquare" size={16} />
                    Описание проблемы
                  </label>
                  <Textarea 
                    placeholder="Опишите вашу проблему или задачу..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы о наших услугах</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border-2 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-heading hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Контакты и поддержка</h2>
            <p className="text-xl text-muted-foreground">Мы всегда на связи</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-heading">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+79801421010" className="font-semibold mb-2 hover:text-primary transition-colors block text-3xl">+7 (980) 142-10-10</a>
                <p className="text-sm text-muted-foreground">Круглосуточно</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-heading">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2 text-2xl">Master-kass@list.ru</p>
                <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-heading">Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2 text-3xl">г. Подольск</p>
                <p className="text-muted-foreground text-xl">ул. Маштакова, д. 12
3 этаж, офис 17 </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                <Icon name="ShoppingCart" size={24} />
                Мастер-Касс
              </h3>
              <p className="text-sm opacity-80">
                Профессиональные решения для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Продажа ККТ</li>
                <li>Обслуживание</li>
                <li>Настройка</li>
                <li>Поддержка</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>FAQ</li>
                <li>Документация</li>
                <li>Гарантия</li>
                <li>Обучение</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-80">
            <p>© 2024 Мастер-Касс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}