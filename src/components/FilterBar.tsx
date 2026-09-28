import { Search, X, SlidersHorizontal, LayoutGrid, ListFilter } from 'lucide-react';
import { SortOption, EraOption } from '../types/movie';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
  genres: string[];
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  selectedEra: EraOption;
  setSelectedEra: (era: EraOption) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  viewMode: 'grid' | 'table';
  setViewMode: (mode: 'grid' | 'table') => void;
  totalResults: number;
  onResetFilters: () => void;
  isFiltered: boolean;
}

export const FilterBar = ({
  searchQuery,
  setSearchQuery,
  selectedGenre,
  setSelectedGenre,
  genres,
  sortBy,
  setSortBy,
  selectedEra,
  setSelectedEra,
  minRating,
  setMinRating,
  viewMode,
  setViewMode,
  totalResults,
  onResetFilters,
  isFiltered
}: FilterBarProps) => {
  return (
    <div className="space-y-4 rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-4 sm:p-5 backdrop-blur-sm">
      {/* Top row: Search input + Sort + View switcher */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {/* Search input */}
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, director, cast, or keywords..."
            className="w-full rounded-lg border border-zinc-700/80 bg-zinc-950/80 pl-10 pr-9 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-white"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Controls row */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Minimum Rating Selector */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <span className="hidden sm:inline">Min Rating:</span>
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              aria-label="Filter by minimum IMDb rating"
              className="rounded-lg border border-zinc-700/80 bg-zinc-950/80 px-2.5 py-1.5 text-xs font-medium text-zinc-200 focus:border-amber-500 focus:outline-none cursor-pointer"
            >
              <option value={0}>Any Rating</option>
              <option value={7.5}>★ 7.5+ IMDb</option>
              <option value={8.0}>★ 8.0+ IMDb</option>
              <option value={8.5}>★ 8.5+ IMDb</option>
              <option value={8.8}>★ 8.8+ Masterpieces</option>
            </select>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <span className="hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              aria-label="Sort movies by"
              className="rounded-lg border border-zinc-700/80 bg-zinc-950/80 px-2.5 py-1.5 text-xs font-medium text-zinc-200 focus:border-amber-500 focus:outline-none cursor-pointer"
            >
              <option value="imdb-desc">Highest Rated (IMDb)</option>
              <option value="metascore-desc">Critic Score (Metascore)</option>
              <option value="year-desc">Release Year (Newest)</option>
              <option value="year-asc">Release Year (Oldest)</option>
              <option value="boxoffice-desc">Worldwide Box Office</option>
              <option value="runtime-desc">Longest Runtime</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center rounded-lg border border-zinc-700/80 bg-zinc-950/80 p-0.5">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-zinc-800 text-amber-400' : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="Poster Grid View"
              aria-label="Poster Grid View"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === 'table' ? 'bg-zinc-800 text-amber-400' : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="Compact Table View"
              aria-label="Compact Table View"
            >
              <ListFilter className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Second row: Genre Segmented Tabs + Era Filter + Active Filters Reset */}
      <div className="flex flex-col gap-3 pt-2 border-t border-zinc-800/60 lg:flex-row lg:items-center lg:justify-between">
        {/* Genre Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedGenre === genre
                  ? 'bg-amber-500 text-zinc-950 font-semibold shadow-sm'
                  : 'bg-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Era Segmented controls + Count */}
        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
          <div className="flex items-center bg-zinc-950/80 p-0.5 rounded-lg border border-zinc-800 shrink-0">
            {(['all', '2020s', '2010s', '2000s', 'classics'] as EraOption[]).map((era) => {
              const labelMap: Record<EraOption, string> = {
                all: 'All Eras',
                '2020s': '2020s',
                '2010s': '2010s',
                '2000s': '2000s',
                classics: 'Classics'
              };
              return (
                <button
                  key={era}
                  onClick={() => setSelectedEra(era)}
                  className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors ${
                    selectedEra === era
                      ? 'bg-zinc-800 text-amber-300 font-semibold shadow-xs'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {labelMap[era]}
                </button>
              );
            })}
          </div>

          {/* Results count & Clear */}
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 font-mono-numbers text-xs">
              <strong className="text-zinc-200">{totalResults}</strong> {totalResults === 1 ? 'title' : 'titles'}
            </span>
            {isFiltered && (
              <button
                onClick={onResetFilters}
                className="text-amber-400 hover:text-amber-300 text-xs underline underline-offset-2 cursor-pointer"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
