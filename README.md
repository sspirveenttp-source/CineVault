# CineVault — React Movie Information Portal

**CineVault** is an archival, editorial-grade movie information portal designed for cinema enthusiasts, film researchers, and casual moviegoers. It combines a rich, curated database of iconic cinema masterpieces with deep technical analytics, interactive viewing modes, comparative analysis tools, and personal watchlist tracking.

---

## 🎬 Key Features

### 1. Curated Masterwork Database
- **Comprehensive Metadata**: Release dates, age classifications (MPAA), runtimes, directors, screenwriters, cinematographers, and original score composers.
- **Critical & Audience Metrics**: Side-by-side aggregation of **IMDb Ratings**, **Metascores**, **Rotten Tomatoes** percentages, and **CineVault Community Scores** with voter volume.
- **Financial Analytics**: Authentic production budgets, US opening weekend figures, worldwide gross records, and box office return multipliers.
- **Behind the Scenes & Lore**: Curated production trivia, technical camera notes, and iconic memorable dialogue quotes with speaker attribution.
- **Full Ensemble Credits**: Cast listings with character roles and ensemble avatars.

### 2. Multi-Criteria Search & Filter Engine
- **Live Search**: Instant keyword querying across film titles, original foreign titles, directors, actors, characters, genres, and synopses.
- **Segmented Genre Filtering**: Filter between Sci-Fi, Drama, Crime, Action, Mystery, Thriller, Animation, Neo-Noir, and Adventure.
- **Era / Decade Filtering**: Quickly isolate cinema by era (*All Eras*, *2020s*, *2010s*, *2000s*, *Classics*).
- **Rating Floor Selector**: Filter by minimum score thresholds (e.g., ★ 7.5+, ★ 8.0+, ★ 8.5+, ★ 8.8+).
- **Flexible Sorting**: Sort by IMDb Score, Metascore, Release Year (Newest/Oldest), Worldwide Box Office, or Longest Runtime.

### 3. Dual Viewing Modes
- **Poster Grid View**: High-contrast, card-based visual presentation with hover action overlays, quick trailer triggers, and watchlist toggles.
- **Data Table View**: Dense, analytical table view designed for quick comparative scanning of technical specifications, metrics, and box office numbers with strict tabular numeral alignment (`font-mono tabular-nums`).

### 4. Interactive Film Deep Dive Modal
- **Tab 1: Overview & Plot**: In-depth story analysis, production team credits, atmospheric mood tags, and companion movie recommendations.
- **Tab 2: Cast & Crew**: Detailed grid of key characters, performers, and stylized badges.
- **Tab 3: Box Office & Awards**: Production economics, financial returns, and historic Academy Award / film festival distinctions.
- **Tab 4: Trivia & Quotes**: Behind-the-scenes production facts and styled dialogue cards.
- **Tab 5: Community Reviews & Interactive Review Submission**: Read critical appraisals and submit your own review (with 1–10 star selector, spoiler warning checkbox, and live publishing).

### 5. High-Definition Trailer Theater
- Responsive 16:9 modal video player embedding official film trailers.
- Background backdrop blur, theater ambient illumination, and keyboard `ESC` dismissal.

### 6. Personal Watchlist & Cinema Tracker
- **Persistent Storage**: Retained across browser sessions via `localStorage`.
- **Runtime Analytics**: Automatically calculates and aggregates total planned watch time in hours and minutes.
- **Watched Status & Rating**: Toggle titles between *To Watch* and *Watched*, and record personal 5-star / 10-point ratings for films you've seen.

### 7. Film Versus Film Comparative Tool
- Compare any two films head-to-head.
- Automated metric evaluation highlighting the winner in IMDb score, Metascore, Rotten Tomatoes, Box Office Gross, and Academy Award records.
- Instant film swapping and customizable selection dropdowns.

### 8. Curator Roulette (Mood & Vibe Matcher)
- Select your desired cinematic atmosphere (*Mind-Bending*, *Visually Stunning*, *Dark & Gritty*, *Philosophical*, *Emotional Masterpiece*, *High Octane Action*) and target runtime.
- Generates an instant tailored cinema recommendation.

### 9. Cinema Trivia Challenge
- Interactive 5-question cinema knowledge quiz testing historical and behind-the-scenes facts.
- Immediate answer validation, production explanations, score tracking, and restart capabilities.

---

## 🛠️ Technology Stack

- **Framework**: React 19 (Hooks, Context, Functional Components)
- **Language**: TypeScript with strict type definitions
- **Styling**: Tailwind CSS
- **Typography**: Cinzel (Display), Plus Jakarta Sans (Body), JetBrains Mono (Data & Numerals)
- **Icons**: Lucide React
- **Build System**: Vite

---

## 📂 Project Architecture

```
├── index.html                      # HTML entry point with meta tags & Google Fonts
├── metadata.json                   # App title and capabilities configuration
├── package.json                    # Project dependencies and npm scripts
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite build setup with Tailwind CSS
└── src/
    ├── main.tsx                    # React application entry point
    ├── index.css                   # Global styles & custom scrollbars
    ├── App.tsx                     # Main layout & state orchestrator
    ├── types/
    │   └── movie.ts                # TypeScript interfaces (Movie, Review, BoxOffice, etc.)
    ├── data/
    │   └── movies.ts               # Curated cinema database & trivia questions
    ├── assets/
    │   └── images/                 # Cinematic hero and poster artwork
    └── components/
        ├── Navbar.tsx              # 3-Zone Top Bar Navigation Contract
        ├── HeroSpotlight.tsx       # Featured premiere showcase banner & switcher
        ├── FilterBar.tsx           # Search, genre, era, rating, and sort toolbar
        ├── MovieCard.tsx           # Visual poster card with hover action scrim
        ├── MovieTableView.tsx      # Tabular data grid with monospace figures
        ├── MovieDetailModal.tsx    # 5-tab cinema analysis modal with review form
        ├── MovieImage.tsx          # Resilient image loader with styled SVG fallback
        ├── TrailerModal.tsx        # Responsive 16:9 trailer lightbox
        ├── WatchlistDrawer.tsx     # Slide-over saved film tracker with stats
        ├── MovieCompareModal.tsx   # Film vs Film comparative analysis
        ├── CuratorRouletteModal.tsx# Mood & runtime cinema matcher
        ├── TriviaQuizModal.tsx     # 5-question cinephile trivia mini-game
        └── Footer.tsx              # Portal statistics, genre links, and copyright
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or later recommended)
- npm or yarn

### Installation
```bash
npm install
```

### Development
Start the local development server:
```bash
npm run dev
```

### Production Build
Compile TypeScript and bundle for production:
```bash
npm run build
```

---

## 🎨 Design Philosophy & Accessibility

- **Zero-Pill Metadata Discipline**: Metadata items (years, runtimes, directors, categories) are displayed as clean unboxed text separated by typographic delimiters (`·`, `/`), avoiding visual clutter.
- **60-30-10 Color Budget**: 60% deep obsidian canvas (`#0a0a0d`), 30% structural zinc cards and hairline borders, and 10% warm amber accent (`#f59e0b`).
- **Tabular Figures (`tabular-nums`)**: All numeric values in ratings, box office figures, runtimes, and scores use tabular monospace formatting for vertical alignment.
- **Zero Broken Images**: The `MovieImage` component uses `referrerPolicy="no-referrer"` with graceful fallback states to guarantee consistent visual presentation.
