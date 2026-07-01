import { useEffect, useState } from 'react';
import GithubIcon from './GithubIcon';

interface ReleaseAsset {
  name: string;
  size: number;
  browser_download_url: string;
  download_count: number;
}

interface Release {
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
  assets: ReleaseAsset[];
  prerelease: boolean;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function categorize(release: Release): 'windows' | 'tweaker' | 'unknown' {
  const n = (release.name + ' ' + release.tag_name).toLowerCase();
  if (n.includes('tweaker update') || n.includes('tweaker-update')) return 'tweaker';
  if (n.includes('windows build') || n.includes('windows-build')) return 'windows';
  return 'unknown';
}

function ReleaseCard({ release, label }: { release: Release; label: string }) {
  return (
    <div className="rounded-lg bg-zinc-900 border border-zinc-800/80 overflow-hidden">
      {/* top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/60">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-violet-400">{label}</span>
          <span className="text-zinc-700">·</span>
          <span className="font-mono text-xs text-zinc-500">{release.tag_name}</span>
        </div>
        <span className="font-mono text-[11px] text-zinc-600">{formatDate(release.published_at)}</span>
      </div>

      <div className="p-4">
        <h4 className="text-sm font-semibold text-zinc-200 mb-2">
          {release.name || release.tag_name}
          {release.prerelease && (
            <span className="ml-2 text-[10px] font-mono text-yellow-500 bg-yellow-500/10 px-1.5 py-0.5 rounded">pre</span>
          )}
        </h4>

        {release.body && (
          <pre className="text-xs text-zinc-600 font-mono whitespace-pre-wrap leading-relaxed mb-3 max-h-24 overflow-y-auto">
            {release.body.slice(0, 250)}{release.body.length > 250 ? '…' : ''}
          </pre>
        )}

        {/* assets */}
        {release.assets.length > 0 ? (
          <div className="space-y-1.5">
            {release.assets.slice(0, 4).map((a, i) => (
              <a
                key={i}
                href={a.browser_download_url}
                className="group flex items-center justify-between py-2 px-3 rounded-md bg-zinc-800/50 hover:bg-zinc-800 border border-transparent hover:border-zinc-700/60 transition-all text-sm"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <svg className="h-3.5 w-3.5 text-zinc-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16" />
                  </svg>
                  <span className="text-zinc-300 truncate group-hover:text-violet-300 transition-colors">{a.name}</span>
                </div>
                <span className="font-mono text-[11px] text-zinc-600 flex-shrink-0 ml-3">{formatBytes(a.size)}</span>
              </a>
            ))}
          </div>
        ) : (
          <a
            href={release.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
          >
            открыть на github →
          </a>
        )}
      </div>
    </div>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="rounded-lg bg-zinc-900 border border-zinc-800/80 border-dashed p-8 text-center">
      <p className="font-mono text-sm text-zinc-600 mb-1">{label}</p>
      <p className="font-mono text-xs text-zinc-700">релизов пока нет — скоро будут</p>
    </div>
  );
}

export default function DownloadSection() {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/repos/wolf111234/Win-Chroma-Patchs/releases')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setReleases(data);
        setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  const win = releases.filter((r) => categorize(r) === 'windows');
  const twk = releases.filter((r) => categorize(r) === 'tweaker');
  const unk = releases.filter((r) => categorize(r) === 'unknown');
  const fallback = win.length === 0 && twk.length === 0 && unk.length > 0;

  return (
    <section id="download" className="relative py-20 sm:py-28">
      {/* top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-5xl mx-auto px-5">
        {/* header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-zinc-700" />
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">скачать</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-2">Релизы</h2>
        <p className="text-zinc-500 mb-10 max-w-lg">
          Выбери что нужно — сборка Windows или твикер. Все версии подтягиваются с GitHub автоматически.
        </p>

        {/* loading */}
        {loading && (
          <div className="py-12 text-center font-mono text-sm text-zinc-600">
            загрузка<span className="cursor-blink" />
          </div>
        )}

        {/* error */}
        {error && (
          <div className="rounded-lg bg-zinc-900 border border-red-900/40 p-6 text-center">
            <p className="text-sm text-zinc-400 mb-3">не удалось загрузить релизы</p>
            <a
              href="https://github.com/wolf111234/Win-Chroma-Patchs/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              открыть на github
            </a>
          </div>
        )}

        {/* content */}
        {!loading && !error && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Windows column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs font-medium text-zinc-300 bg-zinc-800 px-2 py-1 rounded">💿 сборка windows</span>
              </div>
              {(fallback ? unk : win).length > 0 ? (
                <div className="space-y-3">
                  {(fallback ? unk : win).slice(0, 3).map((r, i) => (
                    <ReleaseCard key={i} release={r} label="windows build" />
                  ))}
                </div>
              ) : (
                <EmptyState label="💿 сборка windows" />
              )}
            </div>

            {/* Tweaker column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs font-medium text-zinc-300 bg-zinc-800 px-2 py-1 rounded">🔧 твикер</span>
              </div>
              {(fallback ? unk : twk).length > 0 ? (
                <div className="space-y-3">
                  {(fallback ? unk : twk).slice(0, 3).map((r, i) => (
                    <ReleaseCard key={i} release={r} label="tweaker" />
                  ))}
                </div>
              ) : (
                <EmptyState label="🔧 твикер" />
              )}
            </div>
          </div>
        )}

        {/* github link */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/wolf111234/Win-Chroma-Patchs/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-zinc-600 hover:text-zinc-300 transition-colors"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            все релизы на github →
          </a>
        </div>
      </div>
    </section>
  );
}
