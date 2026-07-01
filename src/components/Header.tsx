import { useState, useEffect } from 'react';
import GithubIcon from './GithubIcon';

const links = [
  { label: 'о проекте', href: '#about' },
  { label: 'скачать', href: '#download' },
  { label: 'faq', href: '#faq' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/60' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <img
            src="https://raw.githubusercontent.com/wolf111234/Win-Chroma-Patchs/main/Logo"
            alt="Logo"
            className="h-7 w-7 rounded-md"
          />
          <span className="font-mono text-sm font-bold text-zinc-100 tracking-tight group-hover:text-violet-400 transition-colors">
            chroma<span className="text-violet-500">patchs</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-zinc-500 hover:text-zinc-100 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/wolf111234/Win-Chroma-Patchs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-100 transition-colors"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-400 hover:text-zinc-100 text-xl leading-none p-1"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#09090b] border-t border-zinc-800/60 px-5 pb-4 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/wolf111234/Win-Chroma-Patchs"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-2.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
            github
          </a>
        </div>
      )}
    </header>
  );
}
