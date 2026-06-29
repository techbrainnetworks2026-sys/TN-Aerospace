import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

// Memoized to prevent re-render when parent filter/search state changes
// but this specific card's product prop hasn't changed
const ProductCard = memo(function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/product/${product.slug}`);
  }, [navigate, product.slug]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(`/product/${product.slug}`);
    }
  }, [navigate, product.slug]);

  const handleImgError = useCallback((e) => {
    e.target.src = '/images/webp/01_satellite_c2.webp';
  }, []);

  return (
    <article
      className="pcard__container"
      style={{ '--pcard-accent': product.accentColor }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`View details for ${product.name}`}
    >
      <div className="pcard__img-wrapper">
        <img
          className="pcard__img"
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          width="800"
          height="450"
          onError={handleImgError}
        />
        <div className="pcard__img-fade" aria-hidden="true" />
        <span className="pcard__badge">{product.category}</span>
      </div>

      <div className="pcard__body">
        <h3 className="pcard__title">{product.name}</h3>
        <p className="pcard__tag">{product.tagline}</p>
        <ul className="pcard__feats" aria-label="Key features">
          {product.features.slice(0, 3).map((f, i) => (
            <li key={i} className="pcard__feat">{f}</li>
          ))}
        </ul>
      </div>

      <div className="pcard__foot">
        <span className="pcard__id">PROD-{String(product.id).padStart(3, '0')}</span>
        <span className="pcard__cta" aria-hidden="true">View Details →</span>
      </div>
    </article>
  );
});

export default ProductCard;
