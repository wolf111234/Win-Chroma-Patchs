export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-5">
        {/* header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px w-8 bg-zinc-700" />
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">о проекте</span>
        </div>

        {/* blocks */}
        <div className="space-y-10">

          {/* Windows 11 */}
          <div className="group">
            <div className="flex items-start gap-4">
              <span className="font-mono text-xs text-violet-500 mt-1.5 w-6 text-right flex-shrink-0">01</span>
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">Чистая Windows 11</h3>
                <p className="text-zinc-500 leading-relaxed">
                  Сборка на базе Windows 11. Вырезано всё лишнее — никакого предустановленного мусора,
                  никаких виджетов, никакой Cortana. Чистая система, которая просто работает.
                </p>
              </div>
            </div>
            <div className="h-px bg-zinc-800/60 mt-10 ml-10" />
          </div>

          {/* Telemetry */}
          <div className="group">
            <div className="flex items-start gap-4">
              <span className="font-mono text-xs text-violet-500 mt-1.5 w-6 text-right flex-shrink-0">02</span>
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">Без телеметрии</h3>
                <p className="text-zinc-500 leading-relaxed">
                  Телеметрия Microsoft отключена полностью. Данные не собираются,
                  диагностика не отправляется. Твой компьютер — только твой.
                </p>
              </div>
            </div>
            <div className="h-px bg-zinc-800/60 mt-10 ml-10" />
          </div>

          {/* Tweaker */}
          <div className="group">
            <div className="flex items-start gap-4">
              <span className="font-mono text-xs text-violet-500 mt-1.5 w-6 text-right flex-shrink-0">03</span>
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">Кастомный твикер</h3>
                <p className="text-zinc-500 leading-relaxed">
                  Свой твикер для тонкой настройки системы. Ненужные службы, фоновые процессы,
                  оптимизация — всё делается за пару кликов, без командной строки.
                </p>
              </div>
            </div>
            <div className="h-px bg-zinc-800/60 mt-10 ml-10" />
          </div>

          {/* Utilities */}
          <div className="group">
            <div className="flex items-start gap-4">
              <span className="font-mono text-xs text-violet-500 mt-1.5 w-6 text-right flex-shrink-0">04</span>
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">Установка утилит</h3>
                <p className="text-zinc-500 leading-relaxed">
                  Прямо из твикера можно установить нужные программы.
                  Zen Browser, архиваторы, плееры — не нужно гуглить и
                  качать с левых сайтов. Всё уже собрано.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* bottom note */}
        <div className="mt-14 p-4 rounded-lg bg-zinc-900 border border-zinc-800/80">
          <p className="font-mono text-xs text-zinc-500 leading-relaxed">
            <span className="text-violet-400">$</span> статус: проект активно развивается. фичи добавляются, баги фиксятся.
            <br />
            <span className="text-violet-400">$</span> следи за апдейтами на гитхабе — дальше будет больше.
          </p>
        </div>
      </div>
    </section>
  );
}
