import { useCallback, useMemo, useRef, useState } from 'react';
import NewsCard, { type NewsArticle } from './NewsCard';

const CARDS_PER_PAGE = 3;
const SLIDE_MS = 500;

/** Trang 1: 0,1,2 — Trang 2: 3,4,5 — Trang 3: 6,0,1 (vòng lặp) */
function buildPages(articles: NewsArticle[]): NewsArticle[][] {
  const total = articles.length;
  if (total < CARDS_PER_PAGE) return [];

  const pageCount = Math.ceil(total / CARDS_PER_PAGE);
  return Array.from({ length: pageCount }, (_, page) =>
    Array.from({ length: CARDS_PER_PAGE }, (_, slot) => articles[(page * CARDS_PER_PAGE + slot) % total]),
  );
}

interface NewsCarouselProps {
  articles: NewsArticle[];
}

export default function NewsCarousel({ articles }: NewsCarouselProps) {
  const pages = useMemo(() => buildPages(articles), [articles]);
  const pageCount = pages.length;

  const trackPages = useMemo(() => {
    if (pageCount === 0) return [];
    return [pages[pageCount - 1], ...pages, pages[0]];
  }, [pages, pageCount]);

  const [slideIndex, setSlideIndex] = useState(1);
  const [transitionOn, setTransitionOn] = useState(true);
  const slidingRef = useRef(false);

  const jumpWithoutAnimation = useCallback((index: number) => {
    setTransitionOn(false);
    setSlideIndex(index);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setTransitionOn(true));
    });
  }, []);

  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.target !== e.currentTarget || e.propertyName !== 'transform') return;

      slidingRef.current = false;

      if (slideIndex === trackPages.length - 1) {
        jumpWithoutAnimation(1);
        return;
      }
      if (slideIndex === 0) {
        jumpWithoutAnimation(pageCount);
      }
    },
    [slideIndex, trackPages.length, pageCount, jumpWithoutAnimation],
  );

  const go = useCallback(
    (direction: 1 | -1) => {
      if (slidingRef.current || pageCount === 0) return;
      slidingRef.current = true;
      setTransitionOn(true);
      setSlideIndex((current) => current + direction);
    },
    [pageCount],
  );

  if (pageCount === 0) {
    return (
      <p className="text-center text-gray-500 py-8">
        Cần ít nhất {CARDS_PER_PAGE} tin để hiển thị carousel.
      </p>
    );
  }

  return (
    <div className="flex items-stretch gap-2 sm:gap-4 md:gap-6">
      <button
        type="button"
        onClick={() => go(-1)}
        className="shrink-0 self-center w-8 sm:w-10 h-10 flex items-center justify-center text-2xl sm:text-3xl text-gray-400 hover:text-[#0979a8] transition-colors"
        aria-label="Trang tin trước"
      >
        ‹
      </button>

      <div className="flex-1 min-w-0 overflow-hidden" aria-live="polite">
        <div
          className="flex ease-in-out"
          style={{
            transform: `translate3d(-${slideIndex * 100}%, 0, 0)`,
            transition: transitionOn ? `transform ${SLIDE_MS}ms ease-in-out` : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {trackPages.map((pageArticles, pageIdx) => (
            <div
              key={pageIdx}
              className="w-full shrink-0 grid grid-cols-3 gap-3 sm:gap-6 md:gap-8"
            >
              {pageArticles.map((article) => (
                <div key={article.href} className="min-w-0">
                  <NewsCard article={article} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => go(1)}
        className="shrink-0 self-center w-8 sm:w-10 h-10 flex items-center justify-center text-2xl sm:text-3xl text-gray-400 hover:text-[#0979a8] transition-colors"
        aria-label="Trang tin tiếp theo"
      >
        ›
      </button>
    </div>
  );
}
