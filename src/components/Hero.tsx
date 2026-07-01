import GithubIcon from './GithubIcon';

export default function Hero() {
  return (
    <section id="hero" className="noise relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      {/* subtle bg glow */}
      <div className="absolute top-[-30%] left-[10%] w-[500px] h-[500px] bg-violet-600/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[5%] w-[400px] h-[400px] bg-indigo-600/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 pt-24 pb-20">
        {/* small label */}
        <div className="flex items-center gap-2 mb-8">
          <span className="h-px w-8 bg-violet-600" />
          <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">open source / mit</span>
        </div>

        {/* logo + title */}
        <div className="flex items-end gap-5 mb-6">
          <img
            src="https://raw.githubusercontent.com/wolf111234/Win-Chroma-Patchs/main/Logo"
            alt="Chroma Patchs"
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl"
          />
          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-black leading-[0.95] tracking-tight text-zinc-100">
            Chroma
            <br />
            Patchs<span className="text-violet-500">.</span>
          </h1>
        </div>

        {/* description — raw, no marketing */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mb-4 leading-relaxed">
          Чистая сборка Windows 11 без телеметрии.
          <br />
          Кастомный твикер — оптимизация, установка утилит типа Zen Browser, всё в одном месте.
        </p>

        <p className="font-mono text-sm text-zinc-600 mb-10">
          // проект развивается, новые штуки скоро
        </p>

        {/* buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#download"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16" />
            </svg>
            скачать
          </a>
          <a
            href="https://github.com/wolf111234/Win-Chroma-Patchs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-medium px-5 py-2.5 rounded-lg border border-zinc-700/50 transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
            github
          </a>
        </div>
      </div>

      {/* bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
}
