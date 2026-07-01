import { useState } from 'react';

const faqs = [
  {
    q: 'Что это вообще такое?',
    a: 'Chroma Patchs — это кастомная сборка Windows 11 без лишнего хлама и телеметрии + отдельный твикер для оптимизации. Всё open source, MIT лицензия.',
  },
  {
    q: 'Сборка или твикер — в чём разница?',
    a: 'Сборка — это готовый образ Windows, ставишь с нуля и всё уже настроено. Твикер — это утилита, запускаешь на текущей системе и настраиваешь что нужно.',
  },
  {
    q: 'Какие версии Windows?',
    a: 'Сборка на Windows 11. Твикер работает на Windows 10 и 11.',
  },
  {
    q: 'Это безопасно?',
    a: 'Код открытый, смотри на GitHub. Перед применением твиков сделай точку восстановления — на всякий.',
  },
  {
    q: 'Проект будет обновляться?',
    a: 'Да, активно. Новые твики, поддержка свежих версий Windows, утилиты — всё в процессе.',
  },
  {
    q: 'Как установить?',
    a: 'Скачай нужный файл из раздела "Скачать". Сборка — ставится как обычная Windows. Твикер — запускай от имени администратора.',
  },
  {
    q: 'Нашёл баг, куда писать?',
    a: 'Issues на GitHub. Опиши проблему, версию Windows, шаги — разберёмся.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      {/* top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-2xl mx-auto px-5">
        {/* header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-zinc-700" />
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">faq</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-10">Вопросы</h2>

        <div className="space-y-px rounded-lg overflow-hidden border border-zinc-800/80">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="bg-zinc-900">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left group"
                >
                  <span className={`text-sm transition-colors ${isOpen ? 'text-zinc-100' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                    {faq.q}
                  </span>
                  <span className={`font-mono text-xs transition-all flex-shrink-0 ml-4 ${isOpen ? 'text-violet-400 rotate-45' : 'text-zinc-600'}`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
                  <p className="px-5 pb-4 text-sm text-zinc-500 leading-relaxed">{faq.a}</p>
                </div>
                {i < faqs.length - 1 && <div className="h-px bg-zinc-800/60" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
