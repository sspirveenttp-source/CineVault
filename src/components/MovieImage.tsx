import { useState } from 'react';
import { Film } from 'lucide-react';

interface MovieImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatioClass?: string;
  fallbackTitle?: string;
}

export const MovieImage = ({
  src,
  alt,
  className = '',
  aspectRatioClass = 'aspect-[2/3]',
  fallbackTitle
}: MovieImageProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 p-4 text-center border border-zinc-800/80 ${aspectRatioClass} ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(217,119,6,0.12),transparent_70%)]" />
        <Film className="h-9 w-9 text-zinc-600 mb-2" />
        <span className="text-xs font-medium text-zinc-300 line-clamp-2 px-2 z-10">
          {fallbackTitle || alt}
        </span>
        <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 z-10 font-mono-numbers">
          CineVault Archive
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-zinc-900 ${aspectRatioClass} ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-zinc-850 animate-pulse flex items-center justify-center">
          <Film className="h-6 w-6 text-zinc-700 animate-pulse" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover transition-all duration-300 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      />
    </div>
  );
};
