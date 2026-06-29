import { useState, useEffect, useCallback, useRef, memo } from 'react';
import './ProductOverviewModal.css';
import { products } from '../data/products';

const DURATION_PER_SLIDE = 4000; // 4 seconds per slide

// Memoized modal — heavy component, only mounts when user clicks "Watch Overview"
const ProductOverviewModal = memo(function ProductOverviewModal({ onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef(Date.now());
  const rafRef = useRef(null);

  // Handle keyboard events
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => {
      if (prev < products.length - 1) {
        startTimeRef.current = Date.now();
        setProgress(0);
        return prev + 1;
      }
      onClose();
      return prev;
    });
  }, [onClose]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => {
      if (prev > 0) {
        startTimeRef.current = Date.now();
        setProgress(0);
        return prev - 1;
      }
      return prev;
    });
  }, []);

  // Use requestAnimationFrame instead of setInterval for smooth progress
  // This is more CPU-efficient and syncs with the browser's repaint cycle
  useEffect(() => {
    startTimeRef.current = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / DURATION_PER_SLIDE) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        handleNext();
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [currentIndex, handleNext]);

  const p = products[currentIndex];

  return (
    <div
      className="modal__overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Product overview: ${p.name}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal__content">
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Close product overview"
        >
          ✕
        </button>

        {/* Progress Bars (Like Instagram Stories) */}
        <div className="modal__progress-container" role="progressbar" aria-valuenow={currentIndex + 1} aria-valuemax={products.length} aria-label="Slide progress">
          {products.map((_, i) => (
            <div key={i} className="modal__progress-bar" aria-hidden="true">
              <div
                className="modal__progress-fill"
                style={{
                  width: i < currentIndex ? '100%' : i === currentIndex ? `${progress}%` : '0%',
                }}
              />
            </div>
          ))}
        </div>

        {/* Slide Content */}
        <div className="modal__slide">
          <img
            className="modal__img"
            src={p.image}
            alt={p.name}
            loading="lazy"
            decoding="async"
            width="800"
            height="600"
          />
          <div className="modal__fade" aria-hidden="true" />

          <div className="modal__info">
            <div className="modal__counter" aria-live="polite">Product {currentIndex + 1} of {products.length}</div>
            <div className="modal__badge" style={{ color: p.accentColor, borderColor: p.accentColor }}>{p.category}</div>
            <h2 className="modal__title">{p.name}</h2>
            <p className="modal__desc">{p.tagline}</p>

            <div className="modal__feats" aria-label="Key features">
              {p.features.slice(0, 3).map((f, i) => (
                <div key={i} className="modal__feat">
                  <span className="modal__feat-bullet" style={{ color: p.accentColor }} aria-hidden="true">→</span> {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="modal__controls">
          <button
            className="modal__ctrl-btn"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous product"
          >
            ← Prev
          </button>

          <button
            className="modal__explore-btn btn btn-primary"
            onClick={() => { onClose(); window.location.href = `/product/${p.slug}`; }}
            aria-label={`Explore ${p.name} in detail`}
          >
            Explore {p.name}
          </button>

          <button
            className="modal__ctrl-btn"
            onClick={handleNext}
            aria-label={currentIndex === products.length - 1 ? 'Finish overview' : 'Next product'}
          >
            {currentIndex === products.length - 1 ? 'Finish' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
});

export default ProductOverviewModal;
