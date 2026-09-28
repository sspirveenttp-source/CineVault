import React, { useState, useEffect } from 'react';
import { X, Play, Bookmark, Star, Award, Film, MessageSquare, DollarSign, Clapperboard, ThumbsUp, Quote as QuoteIcon } from 'lucide-react';
import { Movie, UserReview } from '../types/movie';
import { MovieImage } from './MovieImage';

interface MovieDetailModalProps {
  movie: Movie | null;
  onClose: () => void;
  onWatchTrailer: (youtubeId: string, title: string) => void;
  isWatchlisted: boolean;
  onToggleWatchlist: (movie: Movie) => void;
  onSelectSimilarMovie: (movieId: string) => void;
  allMovies: Movie[];
  onAddUserReview: (movieId: string, review: Omit<UserReview, 'id' | 'likes' | 'date'>) => void;
}

type TabType = 'overview' | 'cast' | 'boxoffice' | 'trivia' | 'reviews';

export const MovieDetailModal = ({
  movie,
  onClose,
  onWatchTrailer,
  isWatchlisted,
  onToggleWatchlist,
  onSelectSimilarMovie,
  allMovies,
  onAddUserReview
}: MovieDetailModalProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  
  // Interactive Review Form State
  const [reviewAuthor, setReviewAuthor] = useState('');
  const [reviewRating, setReviewRating] = useState(9);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewContent, setReviewContent] = useState('');
  const [hasSpoilers, setHasSpoilers] = useState(false);
  const [showReviewSuccess, setShowReviewSuccess] = useState(false);

  useEffect(() => {
    setActiveTab('overview');
    setShowReviewSuccess(false);
  }, [movie?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!movie) return null;

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewAuthor.trim() || !reviewTitle.trim() || !reviewContent.trim()) return;

    onAddUserReview(movie.id, {
      author: reviewAuthor.trim(),
      rating: reviewRating,
      title: reviewTitle.trim(),
      content: reviewContent.trim(),
      hasSpoilers
    });

    setReviewAuthor('');
    setReviewTitle('');
    setReviewContent('');
    setShowReviewSuccess(true);
    setTimeout(() => setShowReviewSuccess(false), 4000);
  };

  const similarMovies = allMovies.filter((m) => movie.similarMovieIds.includes(m.id));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="movie-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-800 bg-[#0e0e12] shadow-2xl text-zinc-100 my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-black/70 p-2 text-zinc-300 hover:text-white hover:bg-black/95 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header: Backdrop & Basic Details */}
        <div className="relative min-h-[220px] sm:min-h-[260px] w-full shrink-0 overflow-hidden bg-zinc-950">
          <img
            src={movie.backdropUrl}
            alt={movie.title}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-[#0e0e12]/60 to-transparent" />

          {/* Header Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-end gap-5">
            {/* Small poster thumbnail */}
            <div className="hidden sm:block h-36 w-24 shrink-0 rounded-lg overflow-hidden border border-zinc-700 shadow-xl bg-zinc-900">
              <MovieImage
                src={movie.posterUrl}
                alt={movie.title}
                aspectRatioClass="aspect-[2/3]"
                fallbackTitle={movie.title}
              />
            </div>

            <div className="flex-1">
              {/* Unboxed Metadata Line */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-mono-numbers mb-1.5">
                <span>{movie.year}</span>
                <span aria-hidden="true">·</span>
                <span>{movie.mpaaRating}</span>
                <span aria-hidden="true">·</span>
                <span>{Math.floor(movie.duration / 60)}h {movie.duration % 60}m</span>
                <span aria-hidden="true">·</span>
                <span className="font-sans text-zinc-300">{movie.genres.join(' / ')}</span>
              </div>

              <h2 id="movie-modal-title" className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-balance">
                {movie.title}
              </h2>
              {movie.originalTitle && movie.originalTitle !== movie.title && (
                <p className="text-xs text-zinc-400 italic mt-0.5">{movie.originalTitle}</p>
              )}
              <p className="mt-1 text-xs sm:text-sm italic text-amber-200/80 font-serif line-clamp-1">
                "{movie.tagline}"
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={() => onWatchTrailer(movie.trailerYoutubeId, movie.title)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3.5 py-2 text-xs font-bold text-zinc-950 hover:bg-amber-400 transition-colors cursor-pointer"
              >
                <Play className="h-3.5 w-3.5 fill-zinc-950" />
                <span>Trailer</span>
              </button>

              <button
                onClick={() => onToggleWatchlist(movie)}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-medium transition-colors cursor-pointer ${
                  isWatchlisted
                    ? 'border-amber-500/50 bg-amber-500/20 text-amber-300'
                    : 'border-zinc-700 bg-zinc-850 text-zinc-200 hover:bg-zinc-800'
                }`}
              >
                <Bookmark className={`h-3.5 w-3.5 ${isWatchlisted ? 'fill-amber-400 text-amber-400' : ''}`} />
                <span>{isWatchlisted ? 'Saved' : 'Watchlist'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Ratings Metrics Row */}
        <div className="border-y border-zinc-800/80 bg-zinc-950/70 px-5 sm:px-6 py-2.5 flex items-center justify-between overflow-x-auto gap-4 text-xs font-mono-numbers">
          <div className="flex items-center gap-1.5 shrink-0">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-bold text-white text-sm">{movie.ratings.imdb.toFixed(1)}</span>
            <span className="text-zinc-500">/ 10 IMDb ({movie.ratings.votesCount})</span>
          </div>
          <span aria-hidden="true" className="text-zinc-800">|</span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="font-bold text-emerald-400 text-sm">{movie.ratings.metascore}</span>
            <span className="text-zinc-500">Metascore</span>
          </div>
          <span aria-hidden="true" className="text-zinc-800">|</span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="font-bold text-rose-400 text-sm">{movie.ratings.rottenTomatoes}%</span>
            <span className="text-zinc-500">Rotten Tomatoes</span>
          </div>
          <span aria-hidden="true" className="text-zinc-800">|</span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="font-bold text-amber-300 text-sm">{movie.ratings.userScore.toFixed(1)}</span>
            <span className="text-zinc-500">Community Score</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-zinc-800 px-5 sm:px-6 flex items-center gap-2 overflow-x-auto scrollbar-none bg-[#0e0e12]">
          {[
            { id: 'overview', label: 'Overview & Plot', icon: Film },
            { id: 'cast', label: 'Cast & Crew', icon: Clapperboard },
            { id: 'boxoffice', label: 'Box Office & Awards', icon: DollarSign },
            { id: 'trivia', label: 'Trivia & Quotes', icon: Award },
            { id: 'reviews', label: `Reviews (${movie.userReviews.length})`, icon: MessageSquare }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-1.5 py-3 px-3 text-xs font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'border-amber-400 text-amber-400 font-semibold'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels (Scrollable) */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400/90 mb-2">
                  Storyline & Analysis
                </h4>
                <p className="text-sm leading-relaxed text-zinc-300">
                  {movie.synopsis}
                </p>
              </div>

              {/* Creative Credits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">Director</span>
                  <p className="text-sm font-semibold text-zinc-200 mt-0.5">{movie.director}</p>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">Screenplay</span>
                  <p className="text-sm font-semibold text-zinc-200 mt-0.5">{movie.screenplay}</p>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">Cinematography</span>
                  <p className="text-sm font-semibold text-zinc-200 mt-0.5">{movie.cinematography}</p>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">Original Music</span>
                  <p className="text-sm font-semibold text-zinc-200 mt-0.5">{movie.musicComposer}</p>
                </div>
              </div>

              {/* Mood Tags */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Atmospheric & Thematic Profile
                </h4>
                <div className="flex flex-wrap gap-2 text-xs text-zinc-400 font-mono-numbers">
                  {movie.moods.map((m) => (
                    <span key={m} className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Similar Titles */}
              {similarMovies.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400/90 mb-3">
                    Recommended Cinema Companions
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {similarMovies.map((sim) => (
                      <button
                        key={sim.id}
                        onClick={() => onSelectSimilarMovie(sim.id)}
                        className="group flex flex-col text-left rounded-lg bg-zinc-900/60 border border-zinc-800/80 p-2 hover:border-amber-500/40 transition-colors cursor-pointer"
                      >
                        <img
                          src={sim.posterUrl}
                          alt={sim.title}
                          referrerPolicy="no-referrer"
                          className="aspect-[2/3] w-full rounded object-cover mb-2 bg-zinc-800"
                        />
                        <span className="text-xs font-semibold text-zinc-200 group-hover:text-amber-300 line-clamp-1">
                          {sim.title}
                        </span>
                        <span className="text-[11px] text-zinc-500 font-mono-numbers">
                          {sim.year} · ★ {sim.ratings.imdb.toFixed(1)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CAST & CREW */}
          {activeTab === 'cast' && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400/90 mb-3">
                Key Ensemble & Characters
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {movie.cast.map((member) => (
                  <div
                    key={member.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500/20 to-zinc-800 border border-amber-500/30 text-amber-400 font-bold text-xs">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join('')}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-zinc-100 truncate">{member.name}</p>
                      <p className="text-xs text-amber-300/80 truncate font-serif italic">as {member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: BOX OFFICE & AWARDS */}
          {activeTab === 'boxoffice' && (
            <div className="space-y-6">
              {/* Financial Box Office Metrics */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400/90 mb-3">
                  Box Office Performance
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">Production Budget</span>
                    <p className="text-lg font-bold text-zinc-100 font-mono-numbers mt-1">{movie.boxOffice.budget}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">Opening Weekend (US)</span>
                    <p className="text-lg font-bold text-zinc-100 font-mono-numbers mt-1">{movie.boxOffice.openingWeekend}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">Worldwide Gross</span>
                    <p className="text-lg font-bold text-emerald-400 font-mono-numbers mt-1">{movie.boxOffice.worldwideGross}</p>
                    {movie.boxOffice.multiplier && (
                      <span className="text-[11px] text-zinc-500 font-mono-numbers mt-0.5 block">
                        Multiplier: {movie.boxOffice.multiplier} return on budget
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Awards & Distinctions */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400/90 mb-3">
                  Awards & Honors
                </h4>
                <div className="space-y-2">
                  {movie.awards.map((award, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80"
                    >
                      <Award className="h-4 w-4 text-amber-400 shrink-0" />
                      <span className="text-xs sm:text-sm text-zinc-200 font-medium">{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: TRIVIA & QUOTES */}
          {activeTab === 'trivia' && (
            <div className="space-y-6">
              {/* Trivia facts */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400/90 mb-3">
                  Production Lore & Behind the Scenes
                </h4>
                <ul className="space-y-3">
                  {movie.trivia.map((t, idx) => (
                    <li
                      key={idx}
                      className="p-3.5 rounded-lg bg-zinc-950/60 border border-zinc-800/80 text-xs sm:text-sm text-zinc-300 leading-relaxed flex items-start gap-3"
                    >
                      <span className="font-mono-numbers text-amber-400 font-bold shrink-0">0{idx + 1}.</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Memorable Quotes */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400/90 mb-3">
                  Iconic Dialogues
                </h4>
                <div className="space-y-3">
                  {movie.quotes.map((q, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 relative"
                    >
                      <QuoteIcon className="h-4 w-4 text-amber-500/40 mb-1" />
                      <p className="text-sm italic font-serif text-zinc-100 pl-1">
                        "{q.quote}"
                      </p>
                      <p className="mt-2 text-right text-xs text-amber-400 font-medium font-sans">
                        — {q.speaker}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: REVIEWS & COMMUNITY */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {/* Existing Reviews */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400/90">
                  Critical & Audience Appraisals
                </h4>

                {movie.userReviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-zinc-200">{rev.author}</span>
                        <span className="text-zinc-600">·</span>
                        <span className="text-zinc-500 font-mono-numbers">{rev.date}</span>
                      </div>
                      <div className="flex items-center gap-1 font-mono-numbers font-bold text-amber-400">
                        <Star className="h-3.5 w-3.5 fill-amber-400" />
                        <span>{rev.rating}/10</span>
                      </div>
                    </div>

                    <h5 className="text-sm font-semibold text-zinc-100">{rev.title}</h5>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {rev.content}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-500 font-mono-numbers">
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3" /> {rev.likes} found helpful
                      </span>
                      {rev.hasSpoilers && (
                        <span className="text-amber-500 font-medium">Contains Spoilers</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Working Write a Review Form */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-5 space-y-4">
                <h4 className="text-sm font-bold text-zinc-100">
                  Write Your Review for "{movie.title}"
                </h4>

                {showReviewSuccess && (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                    Thank you! Your appraisal has been published to CineVault.
                  </div>
                )}

                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1">Your Name / Handle</label>
                      <input
                        type="text"
                        required
                        value={reviewAuthor}
                        onChange={(e) => setReviewAuthor(e.target.value)}
                        placeholder="e.g. CinemaVoyager"
                        className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-zinc-400 mb-1">
                        Your Rating (1 to 10 Stars)
                      </label>
                      <div className="flex items-center gap-1 mt-1">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <button
                            type="button"
                            key={num}
                            onClick={() => setReviewRating(num)}
                            className={`p-1 text-xs rounded font-mono-numbers transition-colors ${
                              num <= reviewRating
                                ? 'text-amber-400 font-bold'
                                : 'text-zinc-600 hover:text-zinc-400'
                            }`}
                          >
                            ★
                          </button>
                        ))}
                        <span className="text-xs font-mono-numbers font-bold text-amber-400 ml-2">
                          {reviewRating}/10
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-400 mb-1">Review Headline</label>
                    <input
                      type="text"
                      required
                      value={reviewTitle}
                      onChange={(e) => setReviewTitle(e.target.value)}
                      placeholder="e.g. A visual triumph with haunting sound design"
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-400 mb-1">Review Thoughts & Critique</label>
                    <textarea
                      required
                      rows={3}
                      value={reviewContent}
                      onChange={(e) => setReviewContent(e.target.value)}
                      placeholder="Share your perspectives on direction, performances, pacing, or cinematography..."
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-500 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 text-xs text-zinc-400 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasSpoilers}
                        onChange={(e) => setHasSpoilers(e.target.checked)}
                        className="rounded border-zinc-700 bg-zinc-900 text-amber-500 focus:ring-0"
                      />
                      <span>Mark if contains plot spoilers</span>
                    </label>

                    <button
                      type="submit"
                      className="rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-zinc-950 hover:bg-amber-400 transition-colors cursor-pointer"
                    >
                      Publish Review
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
