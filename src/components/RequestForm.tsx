import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

export default function RequestForm() {
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

  return (
    <section id="request" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur">
          <CardHeader className="text-center">
            <CardTitle className="font-heading text-4xl md:text-6xl mb-4">Оставить заявку</CardTitle>
            <CardDescription className="text-lg">
              Заполните форму и наш менеджер свяжется с вами в течение 15 минут
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 text-lg"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12 text-lg"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 text-lg"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Сообщение"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-32 text-lg"
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg h-14">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
