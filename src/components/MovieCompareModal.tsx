import { useState } from 'react';
import { X, Scale, ArrowLeftRight, Check, Star } from 'lucide-react';
import { Movie } from '../types/movie';

interface MovieCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  movies: Movie[];
  initialMovieIdA?: string;
  initialMovieIdB?: string;
}

export const MovieCompareModal = ({
  isOpen,
  onClose,
  movies,
  initialMovieIdA,
  initialMovieIdB
}: MovieCompareModalProps) => {
  const [selectedIdA, setSelectedIdA] = useState<string>(
    initialMovieIdA || movies[0]?.id || ''
  );
  const [selectedIdB, setSelectedIdB] = useState<string>(
    initialMovieIdB || (movies[1]?.id ? movies[1].id : movies[0]?.id || '')
  );

  if (!isOpen) return null;

  const movieA = movies.find((m) => m.id === selectedIdA) || movies[0];
  const movieB = movies.find((m) => m.id === selectedIdB) || movies[1] || movies[0];

  const handleSwap = () => {
    setSelectedIdA(movieB.id);
    setSelectedIdB(movieA.id);
  };

  const getWinner = (valA: number, valB: number) => {
    if (valA > valB) return 'A';
    if (valB > valA) return 'B';
    return 'TIE';
  };

  const imdbWinner = getWinner(movieA.ratings.imdb, movieB.ratings.imdb);
  const metaWinner = getWinner(movieA.ratings.metascore, movieB.ratings.metascore);
  const rtWinner = getWinner(movieA.ratings.rottenTomatoes, movieB.ratings.rottenTomatoes);
  const grossWinner = getWinner(movieA.boxOffice.grossNumber, movieB.boxOffice.grossNumber);
  const awardsWinner = getWinner(movieA.awards.length, movieB.awards.length);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="compare-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-zinc-800 bg-[#0e0e12] shadow-2xl p-5 sm:p-6 my-auto text-zinc-100 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-amber-400" />
            <h2 id="compare-modal-title" className="font-display text-xl font-bold text-white">
              Film Versus Film · Comparative Analysis
            </h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close comparative modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Film Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 items-center">
          {/* Film A Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Film Alpha
            </label>
            <select
              value={selectedIdA}
              onChange={(e) => setSelectedIdA(e.target.value)}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-100 focus:border-amber-500 focus:outline-none"
            >
              {movies.map((m) => (
                <option key={m.id} value={m.id} disabled={m.id === selectedIdB}>
                  {m.title} ({m.year})
                </option>
              ))}
            </select>
          </div>

          {/* Film B Selector + Swap Button */}
          <div className="relative space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Film Beta
              </label>
              <button
                onClick={handleSwap}
                className="flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300"
                title="Swap films"
              >
                <ArrowLeftRight className="h-3 w-3" />
                <span>Swap</span>
              </button>
            </div>
            <select
              value={selectedIdB}
              onChange={(e) => setSelectedIdB(e.target.value)}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-100 focus:border-amber-500 focus:outline-none"
            >
              {movies.map((m) => (
                <option key={m.id} value={m.id} disabled={m.id === selectedIdA}>
                  {m.title} ({m.year})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Head-to-Head Visual Header */}
        <div className="grid grid-cols-2 gap-4 pb-6 border-b border-zinc-800">
          {/* Card A */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/70 border border-zinc-800">
            <img
              src={movieA.posterUrl}
              alt={movieA.title}
              referrerPolicy="no-referrer"
              className="h-20 w-14 rounded-md object-cover bg-zinc-800 shrink-0"
            />
            <div className="min-w-0">
              <h3 className="font-semibold text-zinc-100 text-sm sm:text-base truncate">
                {movieA.title}
              </h3>
              <p className="text-xs text-zinc-400 font-mono-numbers">
                {movieA.year} · {movieA.director}
              </p>
              <p className="text-[11px] text-amber-400/80 truncate font-serif italic mt-0.5">
                "{movieA.tagline}"
              </p>
            </div>
          </div>

          {/* Card B */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/70 border border-zinc-800">
            <img
              src={movieB.posterUrl}
              alt={movieB.title}
              referrerPolicy="no-referrer"
              className="h-20 w-14 rounded-md object-cover bg-zinc-800 shrink-0"
            />
            <div className="min-w-0">
              <h3 className="font-semibold text-zinc-100 text-sm sm:text-base truncate">
                {movieB.title}
              </h3>
              <p className="text-xs text-zinc-400 font-mono-numbers">
                {movieB.year} · {movieB.director}
              </p>
              <p className="text-[11px] text-amber-400/80 truncate font-serif italic mt-0.5">
                "{movieB.tagline}"
              </p>
            </div>
          </div>
        </div>

        {/* Metric Comparison Table */}
        <div className="mt-4 space-y-2 font-mono-numbers text-xs sm:text-sm">
          {/* Row: IMDb */}
          <div className="grid grid-cols-12 items-center py-2.5 px-3 rounded-lg bg-zinc-900/40">
            <div className={`col-span-4 flex items-center gap-1.5 font-bold ${imdbWinner === 'A' ? 'text-amber-400' : 'text-zinc-300'}`}>
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400 shrink-0" />
              <span>{movieA.ratings.imdb.toFixed(1)} / 10</span>
              {imdbWinner === 'A' && <span className="text-[10px] text-amber-400 font-normal ml-1">★ Higher</span>}
            </div>
            <div className="col-span-4 text-center font-sans text-xs text-zinc-400 uppercase tracking-wider font-semibold">
              IMDb Rating
            </div>
            <div className={`col-span-4 flex items-center justify-end gap-1.5 font-bold ${imdbWinner === 'B' ? 'text-amber-400' : 'text-zinc-300'}`}>
              {imdbWinner === 'B' && <span className="text-[10px] text-amber-400 font-normal mr-1">★ Higher</span>}
              <span>{movieB.ratings.imdb.toFixed(1)} / 10</span>
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400 shrink-0" />
            </div>
          </div>

          {/* Row: Metascore */}
          <div className="grid grid-cols-12 items-center py-2.5 px-3 rounded-lg bg-zinc-950/60">
            <div className={`col-span-4 font-bold ${metaWinner === 'A' ? 'text-emerald-400' : 'text-zinc-300'}`}>
              <span>{movieA.ratings.metascore}</span>
              {metaWinner === 'A' && <span className="text-[10px] text-emerald-400 font-normal ml-1">Lead</span>}
            </div>
            <div className="col-span-4 text-center font-sans text-xs text-zinc-400 uppercase tracking-wider font-semibold">
              Metacritic
            </div>
            <div className={`col-span-4 text-right font-bold ${metaWinner === 'B' ? 'text-emerald-400' : 'text-zinc-300'}`}>
              {metaWinner === 'B' && <span className="text-[10px] text-emerald-400 font-normal mr-1">Lead</span>}
              <span>{movieB.ratings.metascore}</span>
            </div>
          </div>

          {/* Row: Rotten Tomatoes */}
          <div className="grid grid-cols-12 items-center py-2.5 px-3 rounded-lg bg-zinc-900/40">
            <div className={`col-span-4 font-bold ${rtWinner === 'A' ? 'text-rose-400' : 'text-zinc-300'}`}>
              <span>{movieA.ratings.rottenTomatoes}%</span>
              {rtWinner === 'A' && <span className="text-[10px] text-rose-400 font-normal ml-1">Lead</span>}
            </div>
            <div className="col-span-4 text-center font-sans text-xs text-zinc-400 uppercase tracking-wider font-semibold">
              Rotten Tomatoes
            </div>
            <div className={`col-span-4 text-right font-bold ${rtWinner === 'B' ? 'text-rose-400' : 'text-zinc-300'}`}>
              {rtWinner === 'B' && <span className="text-[10px] text-rose-400 font-normal mr-1">Lead</span>}
              <span>{movieB.ratings.rottenTomatoes}%</span>
            </div>
          </div>

          {/* Row: Worldwide Box Office */}
          <div className="grid grid-cols-12 items-center py-2.5 px-3 rounded-lg bg-zinc-950/60">
            <div className={`col-span-4 font-bold ${grossWinner === 'A' ? 'text-amber-300' : 'text-zinc-300'}`}>
              <span>{movieA.boxOffice.worldwideGross}</span>
            </div>
            <div className="col-span-4 text-center font-sans text-xs text-zinc-400 uppercase tracking-wider font-semibold">
              Worldwide Gross
            </div>
            <div className={`col-span-4 text-right font-bold ${grossWinner === 'B' ? 'text-amber-300' : 'text-zinc-300'}`}>
              <span>{movieB.boxOffice.worldwideGross}</span>
            </div>
          </div>

          {/* Row: Production Budget */}
          <div className="grid grid-cols-12 items-center py-2.5 px-3 rounded-lg bg-zinc-900/40">
            <div className="col-span-4 text-zinc-300">
              <span>{movieA.boxOffice.budget}</span>
            </div>
            <div className="col-span-4 text-center font-sans text-xs text-zinc-400 uppercase tracking-wider font-semibold">
              Budget
            </div>
            <div className="col-span-4 text-right text-zinc-300">
              <span>{movieB.boxOffice.budget}</span>
            </div>
          </div>

          {/* Row: Runtime */}
          <div className="grid grid-cols-12 items-center py-2.5 px-3 rounded-lg bg-zinc-950/60">
            <div className="col-span-4 text-zinc-300">
              <span>{Math.floor(movieA.duration / 60)}h {movieA.duration % 60}m</span>
            </div>
            <div className="col-span-4 text-center font-sans text-xs text-zinc-400 uppercase tracking-wider font-semibold">
              Runtime
            </div>
            <div className="col-span-4 text-right text-zinc-300">
              <span>{Math.floor(movieB.duration / 60)}h {movieB.duration % 60}m</span>
            </div>
          </div>

          {/* Row: Awards count */}
          <div className="grid grid-cols-12 items-center py-2.5 px-3 rounded-lg bg-zinc-900/40">
            <div className={`col-span-4 font-bold ${awardsWinner === 'A' ? 'text-amber-400' : 'text-zinc-300'}`}>
              <span>{movieA.awards.length} Major Distinctions</span>
            </div>
            <div className="col-span-4 text-center font-sans text-xs text-zinc-400 uppercase tracking-wider font-semibold">
              Awards Record
            </div>
            <div className={`col-span-4 text-right font-bold ${awardsWinner === 'B' ? 'text-amber-400' : 'text-zinc-300'}`}>
              <span>{movieB.awards.length} Major Distinctions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
