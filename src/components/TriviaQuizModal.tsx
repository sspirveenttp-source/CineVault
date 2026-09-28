import { useState } from 'react';
import { X, HelpCircle, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import { TRIVIA_QUESTIONS } from '../data/movies';

interface TriviaQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TriviaQuizModal = ({ isOpen, onClose }: TriviaQuizModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  if (!isOpen) return null;

  const currentQ = TRIVIA_QUESTIONS[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < TRIVIA_QUESTIONS.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="trivia-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl border border-zinc-800 bg-[#0e0e12] shadow-2xl p-5 sm:p-6 my-auto text-zinc-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-amber-400" />
            <h2 id="trivia-modal-title" className="font-display text-xl font-bold text-white">
              Cinephile Trivia Challenge
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close trivia quiz"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {!quizFinished ? (
          <div className="my-5 space-y-5">
            {/* Progress bar and counter */}
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono-numbers">
              <span>Question {currentIndex + 1} of {TRIVIA_QUESTIONS.length}</span>
              <span>Score: <strong className="text-amber-400">{score}</strong></span>
            </div>

            <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-400 h-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / TRIVIA_QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <h3 className="text-base sm:text-lg font-semibold text-zinc-100 leading-snug">
              {currentQ.question}
            </h3>

            {/* Options List */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, idx) => {
                let stateStyles = 'border-zinc-800 bg-zinc-950/70 text-zinc-200 hover:border-zinc-700';

                if (isAnswered) {
                  if (idx === currentQ.correctIndex) {
                    stateStyles = 'border-emerald-500/80 bg-emerald-500/15 text-emerald-200 font-semibold';
                  } else if (idx === selectedOption) {
                    stateStyles = 'border-rose-500/80 bg-rose-500/15 text-rose-200';
                  } else {
                    stateStyles = 'opacity-40 border-zinc-800 bg-zinc-950/40 text-zinc-400';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${stateStyles}`}
                  >
                    <span>{opt}</span>
                    {isAnswered && idx === currentQ.correctIndex && (
                      <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 ml-2" />
                    )}
                    {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                      <XCircle className="h-4 w-4 text-rose-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box */}
            {isAnswered && (
              <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-700/60 text-xs sm:text-sm text-zinc-300 space-y-1">
                <span className="font-semibold text-amber-400 block font-sans">
                  {selectedOption === currentQ.correctIndex ? 'Correct!' : 'Behind the Scenes Fact:'}
                </span>
                <p className="leading-relaxed">{currentQ.explanation}</p>
              </div>
            )}

            {/* Next Question CTA */}
            {isAnswered && (
              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleNext}
                  className="rounded-lg bg-amber-500 px-5 py-2 text-xs font-bold text-zinc-950 hover:bg-amber-400 transition-colors cursor-pointer"
                >
                  {currentIndex + 1 === TRIVIA_QUESTIONS.length ? 'View Final Results' : 'Next Question →'}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Finished screen */
          <div className="my-6 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400">
              <Trophy className="h-8 w-8" />
            </div>

            <h3 className="font-display text-2xl font-bold text-white">
              Quiz Completed!
            </h3>

            <p className="text-sm text-zinc-400 font-mono-numbers">
              You scored <strong className="text-amber-400 text-lg">{score}</strong> out of {TRIVIA_QUESTIONS.length}
            </p>

            <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
              {score === 5
                ? 'Outstanding! You possess the photographic memory of an archival film preservationist.'
                : score >= 3
                ? 'Impressive cinema knowledge! You clearly appreciate the artistry and production craft.'
                : 'A great cinematic journey! Explore the CineVault archive to uncover more behind-the-scenes secrets.'}
            </p>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-zinc-950 hover:bg-amber-400 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Play Again</span>
              </button>
              <button
                onClick={onClose}
                className="rounded-lg border border-zinc-700 bg-zinc-850 px-4 py-2 text-xs font-medium text-zinc-200 hover:bg-zinc-800 transition-colors"
              >
                Return to Portal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
