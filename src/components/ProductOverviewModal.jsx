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
    if (currentIndex < products.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
    } else {
      onClose(); // End of video
    }
  }, [currentIndex, onClose]);

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress(0);
    }
  }, [currentIndex]);

  // Handle auto-play progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (100 / (DURATION_PER_SLIDE / UPDATE_INTERVAL));
      });
    }, UPDATE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const p = products[currentIndex];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✕</button>

        {/* Progress Bars (Like Instagram Stories) */}
        <div className="modal-progress-container">
          {products.map((_, i) => (
            <div key={i} className="modal-progress-bar">
              <div
                className="modal-progress-fill"
                style={{
                  width: i < currentIndex ? '100%' : i === currentIndex ? `${progress}%` : '0%',
                }}
              />
            </div>
          ))}
        </div>

        {/* Slide Content */}
        <div className="modal-slide">
          <img className="modal-img" src={p.image} alt={p.name} />
          <div className="modal-fade" />
          
          <div className="modal-info">
            <div className="modal-counter">Product {currentIndex + 1} of 20</div>
            <div className="modal-badge" style={{ color: p.accentColor, borderColor: p.accentColor }}>{p.category}</div>
            <h2 className="modal-title">{p.name}</h2>
            <p className="modal-desc">{p.tagline}</p>
            
            <div className="modal-feats">
              {p.features.slice(0, 3).map((f, i) => (
                <div key={i} className="modal-feat">
                  <span style={{ color: p.accentColor }}>→</span> {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="modal-controls">
          <button className="modal-ctrl-btn" onClick={prevSlide} disabled={currentIndex === 0}>← Prev</button>
          
          <button className="btn btn-primary" onClick={() => {
            onClose();
            // navigate to product (would pass navigate fn)
            window.location.href = `/product/${p.slug}`;
          }}>
            Explore {p.name}
          </button>

          <button className="modal-ctrl-btn" onClick={nextSlide}>
            {currentIndex === products.length - 1 ? 'Finish' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
}
