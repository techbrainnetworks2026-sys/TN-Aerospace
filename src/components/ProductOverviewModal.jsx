import { useState, useEffect, useCallback } from 'react';
import './ProductOverviewModal.css';
import { products } from '../data/products';

export default function ProductOverviewModal({ onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const DURATION_PER_SLIDE = 4000; // 4 seconds per slide
  const UPDATE_INTERVAL = 50; // update progress every 50ms

  // Handle closing on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev < products.length - 1) {
        setProgress(0);
        return prev + 1;
      } else {
        onClose();
        return prev;
      }
    });
  }, [onClose]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev > 0) {
        setProgress(0);
        return prev - 1;
      }
      return prev;
    });
  }, []);

  // Handle auto-play progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (100 / (DURATION_PER_SLIDE / UPDATE_INTERVAL));
      });
    }, UPDATE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  // Trigger next slide when progress hits 100
  useEffect(() => {
    if (progress >= 100) {
      nextSlide();
    }
  }, [progress, nextSlide]);

  const p = products[currentIndex];

  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>✕</button>

        {/* Progress Bars (Like Instagram Stories) */}
        <div className="modal__progress-container">
          {products.map((_, i) => (
            <div key={i} className="modal__progress-bar">
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
          <img className="modal__img" src={p.image} alt={p.name} />
          <div className="modal__fade" />
          
          <div className="modal__info">
            <div className="modal__counter">Product {currentIndex + 1} of {products.length}</div>
            <div className="modal__badge" style={{ color: p.accentColor, borderColor: p.accentColor }}>{p.category}</div>
            <h2 className="modal__title">{p.name}</h2>
            <p className="modal__desc">{p.tagline}</p>
            
            <div className="modal__feats">
              {p.features.slice(0, 3).map((f, i) => (
                <div key={i} className="modal__feat">
                  <span className="modal__feat-bullet" style={{ color: p.accentColor }}>→</span> {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="modal__controls">
          <button className="modal__ctrl-btn" onClick={prevSlide} disabled={currentIndex === 0}>← Prev</button>
          
          <button className="modal__explore-btn btn btn-primary" onClick={() => {
            onClose();
            window.location.href = `/product/${p.slug}`;
          }}>
            Explore {p.name}
          </button>

          <button className="modal__ctrl-btn" onClick={nextSlide}>
            {currentIndex === products.length - 1 ? 'Finish' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
}
