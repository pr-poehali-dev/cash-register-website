import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-5xl md:text-7xl mb-6">Часто задаваемые вопросы</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card/80 backdrop-blur border rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground whitespace-pre-line">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
