import { useState } from 'react';
import { X, Sparkles, RefreshCw, Play, Info, Star } from 'lucide-react';
import { Movie } from '../types/movie';

interface CuratorRouletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
  onWatchTrailer: (youtubeId: string, title: string) => void;
}

const MOODS = [
  'Mind-Bending',
  'Visually Stunning',
  'Dark & Gritty',
  'Philosophical',
  'Emotional Masterpiece',
  'High Octane Action'
];

export const CuratorRouletteModal = ({
  isOpen,
  onClose,
  movies,
  onSelectMovie,
  onWatchTrailer
}: CuratorRouletteModalProps) => {
  const [selectedMood, setSelectedMood] = useState('Mind-Bending');
  const [maxDuration, setMaxDuration] = useState<number>(0); // 0 = any
  const [matchedMovie, setMatchedMovie] = useState<Movie | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);

  if (!isOpen) return null;

  const handleCurate = () => {
    setIsShuffling(true);

    setTimeout(() => {
      let pool = movies.filter((m) => m.moods.includes(selectedMood));
      if (maxDuration > 0) {
        const durationPool = pool.filter((m) => m.duration <= maxDuration);
        if (durationPool.length > 0) pool = durationPool;
      }

      if (pool.length === 0) pool = movies;

      const randomPick = pool[Math.floor(Math.random() * pool.length)];
      setMatchedMovie(randomPick);
      setIsShuffling(false);
    }, 450);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="curator-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-zinc-800 bg-[#0e0e12] shadow-2xl p-5 sm:p-6 my-auto text-zinc-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-400" />
            <h2 id="curator-modal-title" className="font-display text-xl font-bold text-white">
              Curator Roulette · Mood & Vibe Match
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close curator roulette"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Step 1: Mood Selector */}
        <div className="my-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Select Your Cinematic Mood
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {MOODS.map((mood) => (
                <button
                  key={mood}
                  onClick={() => setSelectedMood(mood)}
                  className={`p-2.5 rounded-lg text-xs font-medium text-left border transition-all cursor-pointer ${
                    selectedMood === mood
                      ? 'border-amber-500 bg-amber-500/15 text-amber-300 shadow-sm'
                      : 'border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
                >
                  {mood}
                </button>
              ))}
            </div>
          </div>

          {/* Runtime preference */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Runtime Target
            </label>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                { label: 'Any Duration', val: 0 },
                { label: 'Under 2h 10m', val: 130 },
                { label: 'Under 2h 45m', val: 165 },
                { label: 'Epic Length (2h 45m+)', val: 240 }
              ].map((r) => (
                <button
                  key={r.label}
                  onClick={() => setMaxDuration(r.val)}
                  className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                    maxDuration === r.val
                      ? 'border-amber-500/60 bg-zinc-800 text-amber-300 font-semibold'
                      : 'border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleCurate}
            disabled={isShuffling}
            className="w-full mt-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-3 text-sm font-bold text-zinc-950 hover:from-amber-400 hover:to-amber-500 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
          >
            <RefreshCw className={`h-4 w-4 ${isShuffling ? 'animate-spin' : ''}`} />
            <span>{matchedMovie ? 'Spin for Another Film' : 'Curate My Next Watch'}</span>
          </button>
        </div>

        {/* Matched Movie Presentation */}
        {matchedMovie && (
          <div className="mt-5 p-4 rounded-xl bg-zinc-950 border border-amber-500/30 relative overflow-hidden animate-fade-in">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <img
                src={matchedMovie.posterUrl}
                alt={matchedMovie.title}
                referrerPolicy="no-referrer"
                className="h-36 w-24 rounded-lg object-cover bg-zinc-800 shrink-0 shadow-lg border border-zinc-800"
              />

              <div className="flex-1 min-w-0 text-center sm:text-left">
                <span className="text-[11px] font-mono-numbers uppercase tracking-wider text-amber-400 font-semibold">
                  Curator Recommended · {selectedMood}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-0.5 line-clamp-1">
                  {matchedMovie.title}
                </h3>
                <p className="text-xs text-zinc-400 font-mono-numbers mt-0.5">
                  {matchedMovie.year} · {matchedMovie.director} · {Math.floor(matchedMovie.duration / 60)}h {matchedMovie.duration % 60}m
                </p>
                <p className="text-xs text-zinc-300 mt-2 line-clamp-2 leading-relaxed">
                  {matchedMovie.synopsis}
                </p>

                <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <button
                    onClick={() => {
                      onWatchTrailer(matchedMovie.trailerYoutubeId, matchedMovie.title);
                      onClose();
                    }}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-zinc-950 hover:bg-amber-400 transition-colors"
                  >
                    <Play className="h-3 w-3 fill-zinc-950" />
                    <span>Watch Trailer</span>
                  </button>

                  <button
                    onClick={() => {
                      onSelectMovie(matchedMovie);
                      onClose();
                    }}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-800 border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:text-white hover:bg-zinc-700 transition-colors"
                  >
                    <Info className="h-3 w-3 text-zinc-400" />
                    <span>View Full Details</span>
                  </button>

                  <div className="flex items-center gap-1 text-xs font-bold text-amber-400 font-mono-numbers ml-1">
                    <Star className="h-3.5 w-3.5 fill-amber-400" />
                    <span>{matchedMovie.ratings.imdb.toFixed(1)} IMDb</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
