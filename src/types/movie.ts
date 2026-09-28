export interface CastMember {
  name: string;
  role: string;
  avatarUrl?: string;
}

export interface Quote {
  quote: string;
  speaker: string;
}

export interface UserReview {
  id: string;
  author: string;
  date: string;
  rating: number; // 1 to 10
  title: string;
  content: string;
  likes: number;
  hasSpoilers?: boolean;
}

export interface MovieRatings {
  imdb: number;
  metascore: number;
  rottenTomatoes: number;
  userScore: number;
  votesCount: string;
}

export interface BoxOffice {
  budget: string;
  openingWeekend: string;
  worldwideGross: string;
  grossNumber: number; // in USD for comparisons
  multiplier?: string;
}

export interface Movie {
  id: string;
  title: string;
  originalTitle?: string;
  tagline: string;
  year: number;
  releaseDate: string;
  mpaaRating: 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17';
  duration: number; // minutes
  genres: string[];
  synopsis: string;
  director: string;
  screenplay: string;
  cinematography: string;
  musicComposer: string;
  cast: CastMember[];
  posterUrl: string;
  backdropUrl: string;
  trailerYoutubeId: string;
  ratings: MovieRatings;
  boxOffice: BoxOffice;
  awards: string[];
  trivia: string[];
  quotes: Quote[];
  userReviews: UserReview[];
  similarMovieIds: string[];
  featured?: boolean;
  trending?: boolean;
  moods: string[];
}

export type SortOption =
  | 'imdb-desc'
  | 'metascore-desc'
  | 'year-desc'
  | 'year-asc'
  | 'boxoffice-desc'
  | 'runtime-desc';

export type EraOption = 'all' | '2020s' | '2010s' | '2000s' | 'classics';
