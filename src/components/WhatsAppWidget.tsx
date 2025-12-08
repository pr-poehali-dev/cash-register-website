import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function WhatsAppWidget() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '79801421010';
  const message = 'Здравствуйте! Интересует консультация по кассовому оборудованию.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-3 group"
      aria-label="Написать в WhatsApp"
    >
      <Icon name="MessageCircle" size={28} className="flex-shrink-0" />
      <span 
        className={`font-semibold text-base whitespace-nowrap overflow-hidden transition-all duration-300 ${
          isHovered ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'
        }`}
      >
        Написать в WhatsApp
      </span>
    </button>
  );
}
