import React from 'react';
import { Star, Play, Bookmark } from 'lucide-react';
import { Movie } from '../types/movie';
import { MovieImage } from './MovieImage';

interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
  onWatchTrailer: (youtubeId: string, title: string) => void;
  isWatchlisted: boolean;
  onToggleWatchlist: (movie: Movie) => void;
}

export const MovieCard = ({
  movie,
  onSelect,
  onWatchTrailer,
  isWatchlisted,
  onToggleWatchlist
}: MovieCardProps) => {
  const handleWatchlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleWatchlist(movie);
  };

  const handleTrailerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onWatchTrailer(movie.trailerYoutubeId, movie.title);
  };

  return (
    <article
      onClick={() => onSelect(movie)}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-800/90 bg-zinc-900/60 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/50 cursor-pointer"
    >
      {/* Poster Media with Hover Action Overlay */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-zinc-950">
        <MovieImage
          src={movie.posterUrl}
          alt={`${movie.title} poster`}
          aspectRatioClass="aspect-[2/3]"
          fallbackTitle={movie.title}
        />

        {/* Hover Media Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3.5">
          {/* Top actions */}
          <div className="flex justify-end">
            <button
              onClick={handleWatchlistClick}
              className={`p-2 rounded-lg backdrop-blur-md transition-colors ${
                isWatchlisted
                  ? 'bg-amber-500 text-zinc-950'
                  : 'bg-black/60 text-zinc-200 hover:text-white hover:bg-black/80'
              }`}
              title={isWatchlisted ? 'Remove from Watchlist' : 'Add to Watchlist'}
              aria-label={isWatchlisted ? 'Remove from Watchlist' : 'Add to Watchlist'}
            >
              <Bookmark className={`h-4 w-4 ${isWatchlisted ? 'fill-zinc-950' : ''}`} />
            </button>
          </div>

          {/* Center Play Trailer Button */}
          <div className="flex justify-center">
            <button
              onClick={handleTrailerClick}
              className="flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-xs font-bold text-zinc-950 shadow-lg hover:bg-amber-400 active:scale-95 transition-all"
            >
              <Play className="h-3.5 w-3.5 fill-zinc-950" />
              <span>Trailer</span>
            </button>
          </div>

          {/* Bottom Metacritic / RT scores */}
          <div className="flex items-center justify-between text-[11px] font-mono-numbers text-zinc-300">
            <span>Meta: <strong className="text-emerald-400">{movie.ratings.metascore}</strong></span>
            <span>RT: <strong className="text-rose-400">{movie.ratings.rottenTomatoes}%</strong></span>
          </div>
        </div>

        {/* Top-left IMDb Rating overlay */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1 rounded-md bg-black/80 backdrop-blur-xs px-2 py-1 text-xs font-bold text-amber-400 font-mono-numbers">
          <Star className="h-3.5 w-3.5 fill-amber-400" />
          <span>{movie.ratings.imdb.toFixed(1)}</span>
        </div>
      </div>

      {/* Card Content & Clean Unboxed Metadata */}
      <div className="flex flex-1 flex-col justify-between p-3.5">
        <div>
          {/* Unboxed Metadata line */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono-numbers mb-1">
            <span>{movie.year}</span>
            <span aria-hidden="true">·</span>
            <span>{Math.floor(movie.duration / 60)}h {movie.duration % 60}m</span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{movie.director}</span>
          </div>

          {/* Movie Title */}
          <h3 className="font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors line-clamp-1 text-sm sm:text-base">
            {movie.title}
          </h3>

          {/* Genres unboxed with typographic separator */}
          <p className="mt-1 text-xs text-zinc-400 line-clamp-1">
            {movie.genres.join(' · ')}
          </p>
        </div>

        {/* Quiet footer line */}
        <div className="mt-3 pt-2.5 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500 font-mono-numbers">
          <span>Gross: {movie.boxOffice.worldwideGross}</span>
          <span className="text-amber-400/90 font-medium group-hover:underline">Explore →</span>
        </div>
      </div>
    </article>
  );
};
