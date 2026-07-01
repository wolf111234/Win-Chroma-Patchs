import GithubIcon from './GithubIcon';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-zinc-600">
          © {new Date().getFullYear()} chroma · mit license
        </span>

        <div className="flex items-center gap-5">
          <a href="#about" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">о проекте</a>
          <a href="#download" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">скачать</a>
          <a href="#faq" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">faq</a>
          <a
            href="https://github.com/wolf111234/Win-Chroma-Patchs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
