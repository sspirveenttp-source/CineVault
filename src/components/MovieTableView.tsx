import React from 'react';
import { Star, Play, Bookmark, ExternalLink } from 'lucide-react';
import { Movie } from '../types/movie';

interface MovieTableViewProps {
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
  onWatchTrailer: (youtubeId: string, title: string) => void;
  isWatchlisted: (movieId: string) => boolean;
  onToggleWatchlist: (movie: Movie) => void;
}

export const MovieTableView = ({
  movies,
  onSelectMovie,
  onWatchTrailer,
  isWatchlisted,
  onToggleWatchlist
}: MovieTableViewProps) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm">
      <table className="w-full text-left text-sm text-zinc-300">
        <thead className="border-b border-zinc-800 bg-zinc-950/80 text-xs uppercase tracking-wider text-zinc-400 font-mono-numbers">
          <tr>
            <th scope="col" className="py-3 px-4">Film</th>
            <th scope="col" className="py-3 px-3">Year</th>
            <th scope="col" className="py-3 px-3">Director</th>
            <th scope="col" className="py-3 px-3">Runtime</th>
            <th scope="col" className="py-3 px-3">IMDb</th>
            <th scope="col" className="py-3 px-3">Metascore</th>
            <th scope="col" className="py-3 px-3">RT %</th>
            <th scope="col" className="py-3 px-4">Box Office</th>
            <th scope="col" className="py-3 px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800/60 font-mono-numbers text-xs sm:text-sm">
          {movies.map((movie) => {
            const inWatchlist = isWatchlisted(movie.id);

            return (
              <tr
                key={movie.id}
                onClick={() => onSelectMovie(movie)}
                className="group hover:bg-zinc-800/50 transition-colors cursor-pointer"
              >
                {/* Film Title + Poster */}
                <td className="py-2.5 px-4 font-sans">
                  <div className="flex items-center gap-3">
                    <img
                      src={movie.posterUrl}
                      alt={movie.title}
                      referrerPolicy="no-referrer"
                      className="h-12 w-8 shrink-0 rounded object-cover bg-zinc-800"
                    />
                    <div>
                      <div className="font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors line-clamp-1">
                        {movie.title}
                      </div>
                      <div className="text-xs text-zinc-400 line-clamp-1">
                        {movie.genres.join(' · ')}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Year */}
                <td className="py-2.5 px-3 text-zinc-400">{movie.year}</td>

                {/* Director */}
                <td className="py-2.5 px-3 font-sans text-zinc-300 truncate max-w-[130px]">
                  {movie.director}
                </td>

                {/* Runtime */}
                <td className="py-2.5 px-3 text-zinc-400">
                  {Math.floor(movie.duration / 60)}h {movie.duration % 60}m
                </td>

                {/* IMDb */}
                <td className="py-2.5 px-3">
                  <div className="flex items-center gap-1 font-bold text-amber-400">
                    <Star className="h-3.5 w-3.5 fill-amber-400 shrink-0" />
                    <span>{movie.ratings.imdb.toFixed(1)}</span>
                  </div>
                </td>

                {/* Metascore */}
                <td className="py-2.5 px-3 font-semibold text-emerald-400">
                  {movie.ratings.metascore}
                </td>

                {/* Rotten Tomatoes */}
                <td className="py-2.5 px-3 font-semibold text-rose-400">
                  {movie.ratings.rottenTomatoes}%
                </td>

                {/* Box Office */}
                <td className="py-2.5 px-4 text-zinc-300 font-mono-numbers">
                  {movie.boxOffice.worldwideGross}
                </td>

                {/* Actions */}
                <td className="py-2.5 px-4 text-right">
                  <div className="flex items-center justify-end gap-1.5" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => onWatchTrailer(movie.trailerYoutubeId, movie.title)}
                      className="p-1.5 rounded-md text-zinc-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors"
                      title="Watch Trailer"
                      aria-label={`Watch ${movie.title} Trailer`}
                    >
                      <Play className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onToggleWatchlist(movie)}
                      className={`p-1.5 rounded-md transition-colors ${
                        inWatchlist
                          ? 'text-amber-400 bg-amber-500/10 hover:bg-amber-500/20'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                      }`}
                      title={inWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
                      aria-label={inWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
                    >
                      <Bookmark className={`h-4 w-4 ${inWatchlist ? 'fill-amber-400' : ''}`} />
                    </button>
                    <button
                      onClick={() => onSelectMovie(movie)}
                      className="p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                      title="View Details"
                      aria-label={`View ${movie.title} Details`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
