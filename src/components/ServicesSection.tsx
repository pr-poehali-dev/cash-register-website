import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'ShoppingCart',
    title: 'Продажа кассовых аппаратов',
    description: 'Широкий ассортимент современной контрольно-кассовой техники от ведущих производителей'
  },
  {
    icon: 'Wrench',
    title: 'Техническое обслуживание',
    description: '• Профессиональный ремонт и обслуживание любых моделей кассовых аппаратов\n• Настройка и регистрация ККТ\n• Регулярное техобслуживание\n• Замена ФН и перерегистрация ККТ в ФНС и ОФД\n• Обновление ПО и прошивок\n• Восстановление данных и закрытие смен\n• Продажа расходных материалов'
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

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-5xl md:text-7xl mb-6">Наши услуги</h2>
          <p className="text-xl max-w-2xl mx-auto text-[#000000]">
            Комплексные решения для вашего бизнеса
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow bg-card/80 backdrop-blur">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg whitespace-pre-line leading-normal text-foreground/90">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}