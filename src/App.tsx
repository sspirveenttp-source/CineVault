/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { MOVIES, GENRES } from './data/movies';
import { Movie, SortOption, EraOption, UserReview } from './types/movie';
import { Navbar } from './components/Navbar';
import { HeroSpotlight } from './components/HeroSpotlight';
import { FilterBar } from './components/FilterBar';
import { MovieCard } from './components/MovieCard';
import { MovieTableView } from './components/MovieTableView';
import { MovieDetailModal } from './components/MovieDetailModal';
import { TrailerModal } from './components/TrailerModal';
import { WatchlistDrawer, WatchlistItem } from './components/WatchlistDrawer';
import { MovieCompareModal } from './components/MovieCompareModal';
import { CuratorRouletteModal } from './components/CuratorRouletteModal';
import { TriviaQuizModal } from './components/TriviaQuizModal';
import { Footer } from './components/Footer';
import { Film, Flame, Trophy, TrendingUp, Sparkles, Filter } from 'lucide-react';

const WATCHLIST_STORAGE_KEY = 'cinevault_watchlist_v1';

export default function App() {
  const [moviesList, setMoviesList] = useState<Movie[]>(MOVIES);
  const [activeTab, setActiveTab] = useState<string>('discover');

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState<SortOption>('imdb-desc');
  const [selectedEra, setSelectedEra] = useState<EraOption>('all');
  const [minRating, setMinRating] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Modal states
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [trailerData, setTrailerData] = useState<{ youtubeId: string; title: string } | null>(null);
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isRouletteOpen, setIsRouletteOpen] = useState(false);
  const [isTriviaOpen, setIsTriviaOpen] = useState(false);

  // Watchlist persistence
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>(() => {
    try {
      const saved = localStorage.getItem(WATCHLIST_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [
      { movieId: 'blade-runner-2049', addedAt: new Date().toISOString(), watched: true, personalRating: 10 },
      { movieId: 'interstellar', addedAt: new Date().toISOString(), watched: false }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem(WATCHLIST_STORAGE_KEY, JSON.stringify(watchlist));
    } catch {
      // ignore
    }
  }, [watchlist]);

  // Watchlist operations
  const isWatchlisted = (movieId: string) => watchlist.some((item) => item.movieId === movieId);

  const handleToggleWatchlist = (movie: Movie) => {
    setWatchlist((prev) => {
      const exists = prev.some((item) => item.movieId === movie.id);
      if (exists) {
        return prev.filter((item) => item.movieId !== movie.id);
      } else {
        return [
          ...prev,
          {
            movieId: movie.id,
            addedAt: new Date().toISOString(),
            watched: false
          }
        ];
      }
    });
  };

  const handleToggleWatched = (movieId: string) => {
    setWatchlist((prev) =>
      prev.map((item) =>
        item.movieId === movieId ? { ...item, watched: !item.watched } : item
      )
    );
  };

  const handleSetPersonalRating = (movieId: string, rating: number) => {
    setWatchlist((prev) =>
      prev.map((item) =>
        item.movieId === movieId ? { ...item, personalRating: rating, watched: true } : item
      )
    );
  };

  const handleRemoveFromWatchlist = (movieId: string) => {
    setWatchlist((prev) => prev.filter((item) => item.movieId !== movieId));
  };

  // Add user review dynamically
  const handleAddUserReview = (
    movieId: string,
    newReview: Omit<UserReview, 'id' | 'likes' | 'date'>
  ) => {
    const reviewWithMeta: UserReview = {
      ...newReview,
      id: `rev-custom-${Date.now()}`,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      likes: 1
    };

    setMoviesList((prev) =>
      prev.map((m) => {
        if (m.id === movieId) {
          const updatedReviews = [reviewWithMeta, ...m.userReviews];
          return { ...m, userReviews: updatedReviews };
        }
        return m;
      })
    );

    // Also update selectedMovie if currently open
    if (selectedMovie && selectedMovie.id === movieId) {
      setSelectedMovie((prev) =>
        prev
          ? {
              ...prev,
              userReviews: [reviewWithMeta, ...prev.userReviews]
            }
          : null
      );
    }
  };

  // Filter & Sort calculation
  const filteredAndSortedMovies = useMemo(() => {
    let result = [...moviesList];

    // Tab-level presets
    if (activeTab === 'top-rated') {
      result = result.filter((m) => m.ratings.imdb >= 8.4);
    } else if (activeTab === 'box-office') {
      result.sort((a, b) => b.boxOffice.grossNumber - a.boxOffice.grossNumber);
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((m) => {
        const titleMatch = m.title.toLowerCase().includes(q);
        const directorMatch = m.director.toLowerCase().includes(q);
        const castMatch = m.cast.some((c) => c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q));
        const genreMatch = m.genres.some((g) => g.toLowerCase().includes(q));
        const synopsisMatch = m.synopsis.toLowerCase().includes(q);
        return titleMatch || directorMatch || castMatch || genreMatch || synopsisMatch;
      });
    }

    // Genre filter
    if (selectedGenre !== 'All') {
      result = result.filter((m) => m.genres.includes(selectedGenre));
    }

    // Era filter
    if (selectedEra === '2020s') {
      result = result.filter((m) => m.year >= 2020);
    } else if (selectedEra === '2010s') {
      result = result.filter((m) => m.year >= 2010 && m.year < 2020);
    } else if (selectedEra === '2000s') {
      result = result.filter((m) => m.year >= 2000 && m.year < 2010);
    } else if (selectedEra === 'classics') {
      result = result.filter((m) => m.year < 2000);
    }

    // Minimum rating
    if (minRating > 0) {
      result = result.filter((m) => m.ratings.imdb >= minRating);
    }

    // Sorting (if not already strictly tab-sorted)
    if (activeTab !== 'box-office') {
      result.sort((a, b) => {
        switch (sortBy) {
          case 'imdb-desc':
            return b.ratings.imdb - a.ratings.imdb;
          case 'metascore-desc':
            return b.ratings.metascore - a.ratings.metascore;
          case 'year-desc':
            return b.year - a.year;
          case 'year-asc':
            return a.year - b.year;
          case 'boxoffice-desc':
            return b.boxOffice.grossNumber - a.boxOffice.grossNumber;
          case 'runtime-desc':
            return b.duration - a.duration;
          default:
            return 0;
        }
      });
    }

    return result;
  }, [moviesList, activeTab, searchQuery, selectedGenre, selectedEra, minRating, sortBy]);

  const featuredPremiereMovies = useMemo(() => {
    return moviesList.filter((m) => m.featured);
  }, [moviesList]);

  const trendingMovies = useMemo(() => {
    return moviesList.filter((m) => m.trending);
  }, [moviesList]);

  const isFiltered =
    Boolean(searchQuery.trim()) ||
    selectedGenre !== 'All' ||
    selectedEra !== 'all' ||
    minRating > 0;

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedGenre('All');
    setSelectedEra('all');
    setMinRating(0);
    setSortBy('imdb-desc');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0d] text-zinc-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-200">
      {/* Top Bar Navigation (3-Zone Contract) */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        watchlistCount={watchlist.length}
        onOpenWatchlist={() => setIsWatchlistOpen(true)}
        onOpenRoulette={() => setIsRouletteOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenTrivia={() => setIsTriviaOpen(true)}
      />

      <main className="flex-1">
        {/* Spotlight Hero Section (Shown on Discover) */}
        {activeTab === 'discover' && !searchQuery && selectedGenre === 'All' && (
          <HeroSpotlight
            featuredMovies={featuredPremiereMovies}
            onSelectMovie={setSelectedMovie}
            onWatchTrailer={(youtubeId, title) => setTrailerData({ youtubeId, title })}
            isWatchlisted={isWatchlisted}
            onToggleWatchlist={handleToggleWatchlist}
          />
        )}

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          {/* Header Title based on Active Tab */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-zinc-850 pb-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                {activeTab === 'discover' && (
                  <>
                    <Film className="h-3.5 w-3.5" />
                    <span>Curated Cinema Database</span>
                  </>
                )}
                {activeTab === 'top-rated' && (
                  <>
                    <Trophy className="h-3.5 w-3.5" />
                    <span>All-Time Pantheon (IMDb ≥ 8.4)</span>
                  </>
                )}
                {activeTab === 'box-office' && (
                  <>
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>Worldwide Box Office Champions</span>
                  </>
                )}
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white text-balance">
                {activeTab === 'discover' && 'Explore the Film Archive'}
                {activeTab === 'top-rated' && 'Highest Rated Masterpieces'}
                {activeTab === 'box-office' && 'Historical Box Office Leaders'}
              </h2>
            </div>

            {/* Quick Quick-Action Links */}
            <div className="flex items-center gap-2 text-xs font-medium">
              <button
                onClick={() => setIsRouletteOpen(true)}
                className="flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-850 px-3 py-1.5 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors cursor-pointer"
              >
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>Curator Roulette</span>
              </button>

              <button
                onClick={() => setIsCompareOpen(true)}
                className="flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-850 px-3 py-1.5 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors cursor-pointer"
              >
                <span>Compare Films</span>
              </button>
            </div>
          </div>

          {/* Filtering & Sorting Toolbar */}
          <FilterBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            genres={GENRES}
            sortBy={sortBy}
            setSortBy={setSortBy}
            selectedEra={selectedEra}
            setSelectedEra={setSelectedEra}
            minRating={minRating}
            setMinRating={setMinRating}
            viewMode={viewMode}
            setViewMode={setViewMode}
            totalResults={filteredAndSortedMovies.length}
            onResetFilters={handleResetFilters}
            isFiltered={isFiltered}
          />

          {/* Movies Grid or Table View */}
          {filteredAndSortedMovies.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-12 text-center">
              <Filter className="h-10 w-10 text-zinc-600 mb-3" />
              <h3 className="font-display text-lg font-semibold text-zinc-200">
                No matching films located
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-zinc-500 max-w-sm">
                Try loosening your genre, era, or minimum rating filters, or clear your search term.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-4 rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-zinc-950 hover:bg-amber-400 transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredAndSortedMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onSelect={setSelectedMovie}
                  onWatchTrailer={(youtubeId, title) => setTrailerData({ youtubeId, title })}
                  isWatchlisted={isWatchlisted(movie.id)}
                  onToggleWatchlist={handleToggleWatchlist}
                />
              ))}
            </div>
          ) : (
            <MovieTableView
              movies={filteredAndSortedMovies}
              onSelectMovie={setSelectedMovie}
              onWatchTrailer={(youtubeId, title) => setTrailerData({ youtubeId, title })}
              isWatchlisted={isWatchlisted}
              onToggleWatchlist={handleToggleWatchlist}
            />
          )}

          {/* Trending Spotlight Banner on Discover tab if not filtered */}
          {activeTab === 'discover' && !isFiltered && trendingMovies.length > 0 && (
            <div className="pt-8 border-t border-zinc-850 space-y-4">
              <div className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-amber-500" />
                <h3 className="font-display text-lg font-bold text-white">
                  Trending in Cinephile Circles
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {trendingMovies.slice(0, 3).map((trend) => (
                  <div
                    key={trend.id}
                    onClick={() => setSelectedMovie(trend)}
                    className="group relative flex gap-4 p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-900/50 hover:border-amber-500/40 hover:bg-zinc-850/60 transition-all cursor-pointer"
                  >
                    <img
                      src={trend.posterUrl}
                      alt={trend.title}
                      referrerPolicy="no-referrer"
                      className="h-24 w-16 rounded-md object-cover bg-zinc-800 shrink-0"
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono-numbers">
                          <span>{trend.year}</span>
                          <span>·</span>
                          <span>{trend.director}</span>
                        </div>
                        <h4 className="text-sm font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors line-clamp-1 mt-0.5">
                          {trend.title}
                        </h4>
                        <p className="text-xs text-zinc-400 line-clamp-2 mt-1">
                          {trend.synopsis}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono-numbers pt-2 border-t border-zinc-800/50">
                        <span className="text-amber-400 font-bold">★ {trend.ratings.imdb.toFixed(1)} IMDb</span>
                        <span className="text-zinc-500">{trend.boxOffice.worldwideGross}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer
        onSelectGenre={(g) => {
          setActiveTab('discover');
          setSelectedGenre(g);
        }}
        onOpenTrivia={() => setIsTriviaOpen(true)}
        onOpenRoulette={() => setIsRouletteOpen(true)}
      />

      {/* Modals & Drawers */}
      <MovieDetailModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        onWatchTrailer={(youtubeId, title) => setTrailerData({ youtubeId, title })}
        isWatchlisted={selectedMovie ? isWatchlisted(selectedMovie.id) : false}
        onToggleWatchlist={handleToggleWatchlist}
        onSelectSimilarMovie={(simId) => {
          const match = moviesList.find((m) => m.id === simId);
          if (match) setSelectedMovie(match);
        }}
        allMovies={moviesList}
        onAddUserReview={handleAddUserReview}
      />

      <TrailerModal
        isOpen={Boolean(trailerData)}
        onClose={() => setTrailerData(null)}
        youtubeId={trailerData?.youtubeId || ''}
        movieTitle={trailerData?.title || ''}
      />

      <WatchlistDrawer
        isOpen={isWatchlistOpen}
        onClose={() => setIsWatchlistOpen(false)}
        watchlist={watchlist}
        movies={moviesList}
        onToggleWatched={handleToggleWatched}
        onSetPersonalRating={handleSetPersonalRating}
        onRemoveFromWatchlist={handleRemoveFromWatchlist}
        onSelectMovie={setSelectedMovie}
      />

      <MovieCompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        movies={moviesList}
      />

      <CuratorRouletteModal
        isOpen={isRouletteOpen}
        onClose={() => setIsRouletteOpen(false)}
        movies={moviesList}
        onSelectMovie={setSelectedMovie}
        onWatchTrailer={(youtubeId, title) => setTrailerData({ youtubeId, title })}
      />

      <TriviaQuizModal
        isOpen={isTriviaOpen}
        onClose={() => setIsTriviaOpen(false)}
      />
    </div>
  );
}
