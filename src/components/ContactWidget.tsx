import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 bg-background border rounded-2xl shadow-2xl p-4 w-64 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Связаться с нами</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
          <div className="space-y-2">
            <a
              href="https://max.mts.ru/contact/79801421010"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
            >
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <Icon name="Headphones" size={20} className="text-white" />
              </div>
              <span className="font-medium">Онлайн-чат Max</span>
            </a>
            <a
              href="https://wa.me/79801421010"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
            >
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Icon name="MessageCircle" size={20} className="text-white" />
              </div>
              <span className="font-medium">WhatsApp</span>
            </a>
            <a
              href="https://t.me/+79801421010"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Icon name="Send" size={20} className="text-white" />
              </div>
              <span className="font-medium">Telegram</span>
            </a>
            <a
              href="tel:+79801421010"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
            >
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Phone" size={20} className="text-primary-foreground" />
              </div>
              <span className="font-medium">Позвонить</span>
            </a>
          </div>
        </div>
      )}
      
      <Button
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className="h-16 w-16 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <Icon name={isOpen ? "X" : "MessageCircle"} size={28} />
      </Button>
    </div>
  );
};

export default ContactWidget;