import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import RequestForm from '@/components/RequestForm';
import FAQSection from '@/components/FAQSection';
import VisitorCounter from '@/components/VisitorCounter';
import ContactWidget from '@/components/ContactWidget';

export default function Index() {
  return (
    <div className="min-h-screen bg-neutral-500 relative">
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/6a367fa8-b448-4057-8ed0-4d2614046ae3.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
      
      <Header />
      <ContactWidget />

      <main className="pt-20">
        <section className="py-32 md:py-48 relative z-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-5xl md:text-8xl mb-6 leading-tight">
              Ваш надежный партнер<br />в мире кассовой техники
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-[#000000]">
              Продажа, настройка и обслуживание ККТ для вашего бизнеса. 
              Работаем с 2018 года. Более 5000 довольных клиентов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#request">
                <Button size="lg" className="text-lg px-8 py-7">
                  <Icon name="MessageSquare" className="mr-2" size={24} />
                  Получить консультацию
                </Button>
              </a>
              <a href="tel:+79801421010" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="text-base sm:text-lg px-4 sm:px-8 py-14 w-full">
                  <Icon name="Phone" className="mr-2 flex-shrink-0" size={24} />
                  <div className="flex flex-col text-left gap-2 font-semibold">
                    <span>+7 (980) 142-10-10</span>
                    <span>+7 (916) 412-09-20</span>
                    <span>+7 (916) 412-09-40</span>
                  </div>
                </Button>
              </a>
            </div>
          </div>
        </section>

        <ServicesSection />
        <RequestForm />
        <FAQSection />

        <section id="contacts" className="py-36 relative z-10 bg-card/50 backdrop-blur">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="font-heading font-bold text-6xl md:text-9xl mb-12">Контакты</h2>
              <div className="grid md:grid-cols-3 gap-12 mb-18">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Icon name="Phone" size={42} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-3xl mb-3">Телефон</h3>
                  <div className="flex flex-col gap-2">
                    <a href="tel:+79801421010" className="text-[27px] hover:text-primary transition-colors">
                      +7 (980) 142-10-10
                    </a>
                    <a href="tel:+79164120920" className="text-[27px] hover:text-primary transition-colors">
                      +7 (916) 412-09-20
                    </a>
                    <a href="tel:+79164120940" className="text-[27px] hover:text-primary transition-colors">
                      +7 (916) 412-09-40
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Icon name="Mail" size={42} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-3xl mb-3">Email</h3>
                  <a href="mailto:info@master-kass.ru" className="text-[27px] hover:text-primary transition-colors">Master-kass@list.ru</a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Icon name="MapPin" size={42} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-3xl mb-3">Адрес</h3>
                  <p className="text-[27px] text-[#000000]">г. Подольск
ул. Маштакова, д. 12 3 этаж, офис 17</p>
                </div>
              </div>
              
              <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?ll=37.524148%2C55.432071&z=17&l=map&pt=37.524148,55.432071,pm2rdm"
                  width="100%" 
                  height="450"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full"
                  title="Карта офиса Мастер-Касс - Подольск, ул. Маштакова, д. 12"
                />
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button 
                  onClick={() => window.open('https://yandex.ru/maps/?rtext=~55.432071,37.524148', '_blank')}
                  size="lg"
                  className="text-xl px-8 py-6 flex items-center gap-3"
                >
                  <Icon name="Navigation" size={24} />
                  Построить маршрут
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t bg-card/80 backdrop-blur py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground">© 2025 Мастер-Касс. Все права защищены.</p>
            <VisitorCounter />
          </div>
        </div>
      </footer>
    </div>
  );
}