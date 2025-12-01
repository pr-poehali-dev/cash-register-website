import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import RequestForm from '@/components/RequestForm';
import FAQSection from '@/components/FAQSection';

export default function Index() {
  return (
    <div className="min-h-screen bg-neutral-500 relative">
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/6a367fa8-b448-4057-8ed0-4d2614046ae3.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
      
      <Header />

      <main className="pt-20">
        <section className="py-32 md:py-48 relative z-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-5xl md:text-8xl mb-6 leading-tight">
              Ваш надежный партнер<br />в мире кассовой техники
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-[#000000]">
              Продажа, настройка и обслуживание ККТ для вашего бизнеса. 
              Работаем с 2015 года. Более 5000 довольных клиентов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#request">
                <Button size="lg" className="text-lg px-8 py-7">
                  <Icon name="MessageSquare" className="mr-2" size={24} />
                  Получить консультацию
                </Button>
              </a>
              <a href="tel:+79801421010">
                <Button size="lg" variant="outline" className="text-lg px-8 py-7">
                  <Icon name="Phone" className="mr-2" size={24} />
                  +7 (980) 142-10-10
                </Button>
              </a>
            </div>
          </div>
        </section>

        <ServicesSection />
        <RequestForm />
        <FAQSection />

        <section id="contacts" className="py-24 relative z-10 bg-card/50 backdrop-blur">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading font-bold text-4xl md:text-6xl mb-8">Контакты</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Phone" size={28} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Телефон</h3>
                  <a href="tel:+79801421010" className="text-lg hover:text-primary transition-colors">
                    +7 (980) 142-10-10
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Mail" size={28} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Email</h3>
                  <a href="mailto:info@master-kass.ru" className="text-lg hover:text-primary transition-colors">
                    info@master-kass.ru
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="MapPin" size={28} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Адрес</h3>
                  <p className="text-lg text-muted-foreground">
                    г. Москва, ул. Примерная, 123
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t bg-card/80 backdrop-blur py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Мастер-Касс. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}