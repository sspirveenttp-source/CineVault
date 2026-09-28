import { useState } from 'react';
import { X, Trash2, CheckCircle2, Circle, Star, Clock, Film } from 'lucide-react';
import { Movie } from '../types/movie';

export interface WatchlistItem {
  movieId: string;
  addedAt: string;
  watched: boolean;
  personalRating?: number;
}

interface WatchlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  watchlist: WatchlistItem[];
  movies: Movie[];
  onToggleWatched: (movieId: string) => void;
  onSetPersonalRating: (movieId: string, rating: number) => void;
  onRemoveFromWatchlist: (movieId: string) => void;
  onSelectMovie: (movie: Movie) => void;
}

export const WatchlistDrawer = ({
  isOpen,
  onClose,
  watchlist,
  movies,
  onToggleWatched,
  onSetPersonalRating,
  onRemoveFromWatchlist,
  onSelectMovie
}: WatchlistDrawerProps) => {
  const [filter, setFilter] = useState<'all' | 'want' | 'watched'>('all');

  if (!isOpen) return null;

  const movieMap = new Map(movies.map((m) => [m.id, m]));
  const itemsWithMovies = watchlist
    .map((item) => ({
      item,
      movie: movieMap.get(item.movieId)
    }))
    .filter((entry): entry is { item: WatchlistItem; movie: Movie } => Boolean(entry.movie));

  const totalRuntimeMinutes = itemsWithMovies.reduce((acc, curr) => acc + curr.movie.duration, 0);
  const totalHours = Math.floor(totalRuntimeMinutes / 60);
  const remainingMinutes = totalRuntimeMinutes % 60;

  const watchedCount = watchlist.filter((w) => w.watched).length;
  const wantCount = watchlist.length - watchedCount;

  const filteredItems = itemsWithMovies.filter(({ item }) => {
    if (filter === 'want') return !item.watched;
    if (filter === 'watched') return item.watched;
    return true;
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="watchlist-drawer-title"
      className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md h-full bg-[#0c0c10] border-l border-zinc-800 shadow-2xl flex flex-col overflow-hidden text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 p-4 sm:p-5 bg-zinc-950">
          <div>
            <h2 id="watchlist-drawer-title" className="font-display text-lg font-bold text-white">
              Personal Watchlist
            </h2>
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono-numbers mt-0.5">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-amber-400" />
                {totalHours}h {remainingMinutes}m total time
              </span>
              <span>·</span>
              <span>{watchlist.length} {watchlist.length === 1 ? 'film' : 'films'}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close watchlist"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Filter Segmented Control */}
        <div className="p-3 border-b border-zinc-800/80 bg-zinc-900/40 flex items-center gap-1">
          <button
            onClick={() => setFilter('all')}
            className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-zinc-800 text-amber-400 font-semibold shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            All ({watchlist.length})
          </button>
          <button
            onClick={() => setFilter('want')}
            className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              filter === 'want'
                ? 'bg-zinc-800 text-amber-400 font-semibold shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            To Watch ({wantCount})
          </button>
          <button
            onClick={() => setFilter('watched')}
            className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              filter === 'watched'
                ? 'bg-zinc-800 text-amber-400 font-semibold shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Watched ({watchedCount})
          </button>
        </div>

        {/* List of Movies */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center p-6 text-zinc-500">
              <Film className="h-10 w-10 text-zinc-700 mb-3" />
              <p className="text-sm font-medium text-zinc-400">No movies in this list</p>
              <p className="text-xs text-zinc-600 mt-1 max-w-xs">
                Explore CineVault’s premiere catalogue and bookmark titles you wish to view.
              </p>
            </div>
          ) : (
            filteredItems.map(({ item, movie }) => (
              <div
                key={movie.id}
                className="group relative flex gap-3 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 transition-all"
              >
                {/* Poster thumbnail */}
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  referrerPolicy="no-referrer"
                  onClick={() => {
                    onSelectMovie(movie);
                    onClose();
                  }}
                  className="h-20 w-14 rounded-md object-cover cursor-pointer shrink-0 bg-zinc-800"
                />

                {/* Movie Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1">
                    <h4
                      onClick={() => {
                        onSelectMovie(movie);
                        onClose();
                      }}
                      className="text-sm font-semibold text-zinc-100 hover:text-amber-400 transition-colors cursor-pointer line-clamp-1"
                    >
                      {movie.title}
                    </h4>

                    <button
                      onClick={() => onRemoveFromWatchlist(movie.id)}
                      className="p-1 text-zinc-500 hover:text-rose-400 transition-colors"
                      title="Remove from list"
                      aria-label="Remove from watchlist"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <p className="text-[11px] text-zinc-400 font-mono-numbers mt-0.5">
                    {movie.year} · {Math.floor(movie.duration / 60)}h {movie.duration % 60}m · ★ {movie.ratings.imdb.toFixed(1)}
                  </p>

                  {/* Watched toggle & Rating */}
                  <div className="mt-2 flex items-center justify-between pt-1 border-t border-zinc-800/60">
                    <button
                      onClick={() => onToggleWatched(movie.id)}
                      className={`flex items-center gap-1.5 text-xs font-medium transition-colors cursor-pointer ${
                        item.watched ? 'text-emerald-400' : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {item.watched ? (
                        <CheckCircle2 className="h-3.5 w-3.5 fill-emerald-500/20 text-emerald-400" />
                      ) : (
                        <Circle className="h-3.5 w-3.5 text-zinc-600" />
                      )}
                      <span>{item.watched ? 'Watched' : 'Mark Watched'}</span>
                    </button>

                    {item.watched && (
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => onSetPersonalRating(movie.id, star * 2)}
                            className="p-0.5 text-xs transition-colors"
                            title={`Rate ${star * 2}/10`}
                          >
                            <Star
                              className={`h-3 w-3 ${
                                item.personalRating && item.personalRating >= star * 2
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-zinc-700 hover:text-zinc-500'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
