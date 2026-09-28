import { Film, Award, Heart } from 'lucide-react';
import { GENRES } from '../data/movies';

interface FooterProps {
  onSelectGenre: (genre: string) => void;
  onOpenTrivia: () => void;
  onOpenRoulette: () => void;
}

export const Footer = ({ onSelectGenre, onOpenTrivia, onOpenRoulette }: FooterProps) => {
  return (
    <footer className="border-t border-zinc-850 bg-[#07070a] text-zinc-400 mt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-zinc-800/60">
          {/* Col 1: Wordmark & Statement */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-display text-2xl font-black tracking-widest text-zinc-100">
              CINE<span className="text-amber-400">VAULT</span>
            </span>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
              An archival cinematic information portal dedicated to celebrating screenwriting, 
              visionary direction, practical craftsmanship, and film history.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono-numbers text-zinc-500 pt-1">
              <span className="flex items-center gap-1.5">
                <Film className="h-3.5 w-3.5 text-amber-400" />
                12 Curated Masterworks
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5 text-amber-400" />
                48 Academy Awards
              </span>
            </div>
          </div>

          {/* Col 2: Genres */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-3">
              Explore Genres
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs text-zinc-400">
              {GENRES.slice(1, 9).map((genre) => (
                <button
                  key={genre}
                  onClick={() => {
                    onSelectGenre(genre);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="text-left hover:text-amber-400 transition-colors py-1 cursor-pointer"
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Cinephile Utilities */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-3">
              Interactive Tools
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button
                  onClick={onOpenRoulette}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Curator Roulette & Mood Match
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTrivia}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Cinema Trivia Challenge
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectGenre('All');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Box Office & Financial Records
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} CineVault Portal. Crafted for cinema enthusiasts.</p>
          <div className="flex items-center gap-1 text-zinc-500">
            <span>Powered by React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
