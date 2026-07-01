import { Zap, Shield, Settings, Trash2, Gauge, Eye, MonitorCog, Wrench, Rocket, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: MonitorCog,
    title: 'Сборки Windows',
    description: 'Оптимизированные образы Windows 10/11 с предустановленными твиками. Готовы к использованию сразу после установки.',
    color: 'from-indigo-400 to-purple-500',
    glow: 'shadow-purple-500/20',
  },
  {
    icon: Wrench,
    title: 'Твикер',
    description: 'Отдельная утилита для тонкой настройки уже установленной Windows. Применяй твики в один клик.',
    color: 'from-cyan-400 to-blue-500',
    glow: 'shadow-blue-500/20',
  },
  {
    icon: Zap,
    title: 'Оптимизация производительности',
    description: 'Ускорение системы за счёт отключения ненужных служб, планировщика задач и фоновых процессов.',
    color: 'from-yellow-400 to-orange-500',
    glow: 'shadow-orange-500/20',
  },
  {
    icon: Shield,
    title: 'Приватность',
    description: 'Отключение телеметрии Microsoft, слежки и отправки диагностических данных на сервера.',
    color: 'from-green-400 to-emerald-500',
    glow: 'shadow-emerald-500/20',
  },
  {
    icon: Trash2,
    title: 'Удаление bloatware',
    description: 'Удаление предустановленных приложений, виджетов, Cortana и других ненужных компонентов.',
    color: 'from-red-400 to-rose-500',
    glow: 'shadow-rose-500/20',
  },
  {
    icon: Settings,
    title: 'Тонкая настройка',
    description: 'Настройка реестра, политик группы, контекстного меню и визуальных эффектов системы.',
    color: 'from-purple-400 to-violet-500',
    glow: 'shadow-violet-500/20',
  },
  {
    icon: Gauge,
    title: 'Ускорение интернета',
    description: 'Оптимизация сетевых настроек, DNS, TCP/IP для максимальной скорости соединения.',
    color: 'from-teal-400 to-cyan-500',
    glow: 'shadow-cyan-500/20',
  },
  {
    icon: Eye,
    title: 'Кастомизация интерфейса',
    description: 'Изменение внешнего вида Windows: темы, панель задач, проводник и другие элементы.',
    color: 'from-pink-400 to-fuchsia-500',
    glow: 'shadow-fuchsia-500/20',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Section header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 text-sm text-purple-400 mb-4">
            Возможности
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Всё для{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              идеальной Windows
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400 text-lg">
            Chroma Patchs включает сборки Windows и твикер с десятками оптимизаций
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl glass glass-hover p-6 transition-all duration-300 hover:shadow-lg ${feature.glow} hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className={`inline-flex rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-4 shadow-lg ${feature.glow}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Development roadmap teaser */}
        <div className="mt-16 rounded-2xl glass p-8 border border-purple-500/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex-shrink-0">
              <Rocket className="h-8 w-8 text-white" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
                Проект активно развивается
                <RefreshCw className="h-5 w-5 text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
              </h3>
              <p className="text-gray-400">
                Мы постоянно работаем над новыми функциями, улучшениями и оптимизациями. 
                Следите за обновлениями на GitHub — впереди много интересного: новые твики, 
                поддержка последних версий Windows, автоматические обновления и многое другое!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
