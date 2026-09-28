import { Bookmark, Sparkles, Scale, HelpCircle } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  watchlistCount: number;
  onOpenWatchlist: () => void;
  onOpenRoulette: () => void;
  onOpenCompare: () => void;
  onOpenTrivia: () => void;
}

export const Navbar = ({
  activeTab,
  setActiveTab,
  watchlistCount,
  onOpenWatchlist,
  onOpenRoulette,
  onOpenCompare,
  onOpenTrivia
}: NavbarProps) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-[#0a0a0d]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => setActiveTab('discover')}
          className="group flex items-center text-left focus-visible:outline-none"
        >
          <span className="font-display text-2xl font-black tracking-widest text-zinc-100 transition-colors group-hover:text-amber-400">
            CINE<span className="text-amber-400 group-hover:text-white">VAULT</span>
          </span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <button
            onClick={() => setActiveTab('discover')}
            className={`transition-colors hover:text-white pb-0.5 ${
              activeTab === 'discover'
                ? 'text-amber-400 border-b-2 border-amber-400 font-semibold'
                : 'text-zinc-400'
            }`}
          >
            Discover
          </button>
          <button
            onClick={() => setActiveTab('top-rated')}
            className={`transition-colors hover:text-white pb-0.5 ${
              activeTab === 'top-rated'
                ? 'text-amber-400 border-b-2 border-amber-400 font-semibold'
                : 'text-zinc-400'
            }`}
          >
            Top Rated
          </button>
          <button
            onClick={() => setActiveTab('box-office')}
            className={`transition-colors hover:text-white pb-0.5 ${
              activeTab === 'box-office'
                ? 'text-amber-400 border-b-2 border-amber-400 font-semibold'
                : 'text-zinc-400'
            }`}
          >
            Box Office
          </button>
          <button
            onClick={onOpenCompare}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <Scale className="h-4 w-4 text-zinc-500" />
            <span>Compare</span>
          </button>
          <button
            onClick={onOpenTrivia}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <HelpCircle className="h-4 w-4 text-zinc-500" />
            <span>Cinema Trivia</span>
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenRoulette}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-300 hover:bg-amber-500/20 hover:border-amber-500/50 transition-colors whitespace-nowrap"
            title="Curator Roulette - Find what to watch based on mood"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Curator Match</span>
          </button>

          <button
            onClick={onOpenWatchlist}
            className="relative flex items-center gap-2 rounded-lg bg-zinc-800/90 border border-zinc-700/60 px-3.5 py-1.5 text-xs font-semibold text-zinc-100 hover:bg-zinc-750 hover:border-zinc-600 transition-colors whitespace-nowrap"
            aria-label="View Watchlist"
          >
            <Bookmark className="h-4 w-4 text-amber-400" />
            <span>Watchlist</span>
            {watchlistCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1.5 text-[11px] font-bold text-zinc-950 font-mono-numbers">
                {watchlistCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
