import { useState, useEffect } from 'react';
import { Play, Info, Bookmark, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie } from '../types/movie';

interface HeroSpotlightProps {
  featuredMovies: Movie[];
  onSelectMovie: (movie: Movie) => void;
  onWatchTrailer: (youtubeId: string, title: string) => void;
  isWatchlisted: (movieId: string) => boolean;
  onToggleWatchlist: (movie: Movie) => void;
}

export const HeroSpotlight = ({
  featuredMovies,
  onSelectMovie,
  onWatchTrailer,
  isWatchlisted,
  onToggleWatchlist
}: HeroSpotlightProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const movie = featuredMovies[currentIndex] || featuredMovies[0];

  useEffect(() => {
    if (featuredMovies.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [featuredMovies.length]);

  if (!movie) return null;

  const inWatchlist = isWatchlisted(movie.id);

  return (
    <section className="relative overflow-hidden bg-black border-b border-zinc-800/80">
      {/* Background Backdrop with Gradient Scrims */}
      <div className="absolute inset-0">
        <img
          src={movie.backdropUrl}
          alt={movie.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-40 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-[#0a0a0d]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0d] via-[#0a0a0d]/50 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-16 lg:pt-24 lg:pb-24">
        <div className="max-w-3xl">
          {/* Unboxed Metadata Line with typographic separators */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-zinc-300 mb-3">
            <span className="text-amber-400 font-semibold uppercase tracking-wider">Featured Premiere</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="font-mono-numbers">{movie.year}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>{movie.director}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="font-mono-numbers">{Math.floor(movie.duration / 60)}h {movie.duration % 60}m</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-400">{movie.genres.join(' / ')}</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance leading-[1.1]">
            {movie.title}
          </h1>

          {/* Tagline */}
          <p className="mt-2 text-base sm:text-lg italic text-amber-200/90 font-serif">
            "{movie.tagline}"
          </p>

          {/* Synopsis */}
          <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed line-clamp-3 max-w-2xl">
            {movie.synopsis}
          </p>

          {/* Ratings highlight */}
          <div className="mt-5 flex items-center gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 font-mono-numbers">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white text-base">{movie.ratings.imdb.toFixed(1)}</span>
              <span className="text-zinc-500">/ 10 IMDb</span>
            </div>
            <span aria-hidden="true" className="text-zinc-700">|</span>
            <div className="flex items-center gap-1.5 font-mono-numbers">
              <span className="font-semibold text-emerald-400">{movie.ratings.metascore}</span>
              <span className="text-zinc-500">Metascore</span>
            </div>
            <span aria-hidden="true" className="text-zinc-700">|</span>
            <div className="flex items-center gap-1.5 font-mono-numbers">
              <span className="font-semibold text-rose-400">{movie.ratings.rottenTomatoes}%</span>
              <span className="text-zinc-500">Rotten Tomatoes</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => onWatchTrailer(movie.trailerYoutubeId, movie.title)}
              className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-amber-400 active:scale-95 transition-all shadow-lg shadow-amber-500/10 cursor-pointer"
            >
              <Play className="h-4 w-4 fill-zinc-950" />
              <span>Watch Trailer</span>
            </button>

            <button
              onClick={() => onSelectMovie(movie)}
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-800/90 border border-zinc-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-750 hover:border-zinc-500 transition-colors cursor-pointer"
            >
              <Info className="h-4 w-4 text-zinc-400" />
              <span>Film Details</span>
            </button>

            <button
              onClick={() => onToggleWatchlist(movie)}
              className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer ${
                inWatchlist
                  ? 'border-amber-500/50 bg-amber-500/20 text-amber-300'
                  : 'border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-white hover:border-zinc-700'
              }`}
            >
              <Bookmark className={`h-4 w-4 ${inWatchlist ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span>{inWatchlist ? 'In Watchlist' : 'Add to Watchlist'}</span>
            </button>
          </div>
        </div>

        {/* Carousel Mini-Thumbnails selector */}
        {featuredMovies.length > 1 && (
          <div className="mt-10 pt-6 border-t border-zinc-800/60 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {featuredMovies.map((feat, idx) => (
                <button
                  key={feat.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`group relative text-left rounded-lg p-2 transition-all flex items-center gap-3 cursor-pointer shrink-0 ${
                    idx === currentIndex
                      ? 'bg-zinc-800/90 border border-amber-500/40 ring-1 ring-amber-500/20'
                      : 'bg-zinc-900/50 border border-transparent hover:bg-zinc-850'
                  }`}
                >
                  <img
                    src={feat.posterUrl}
                    alt={feat.title}
                    referrerPolicy="no-referrer"
                    className="h-12 w-8 rounded object-cover"
                  />
                  <div className="pr-2">
                    <p className={`text-xs font-semibold line-clamp-1 ${idx === currentIndex ? 'text-amber-300' : 'text-zinc-200'}`}>
                      {feat.title}
                    </p>
                    <p className="text-[11px] text-zinc-400 font-mono-numbers">
                      {feat.year} · ★ {feat.ratings.imdb.toFixed(1)}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length)}
                className="p-1.5 rounded-md bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 transition-colors"
                aria-label="Previous spotlight"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % featuredMovies.length)}
                className="p-1.5 rounded-md bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 transition-colors"
                aria-label="Next spotlight"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
