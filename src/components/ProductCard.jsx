import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <article
      className="pcard__container"
      style={{ '--pcard-accent': product.accentColor }}
      onClick={() => navigate(`/product/${product.slug}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/product/${product.slug}`)}
    >
      <div className="pcard__img-wrapper">
        <img
          className="pcard__img"
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => { e.target.src = '/images/01_satellite_c2.png'; }}
        />
        <div className="pcard__img-fade" />
        <span className="pcard__badge">{product.category}</span>
      </div>

      <div className="pcard__body">
        <h3 className="pcard__title">{product.name}</h3>
        <p className="pcard__tag">{product.tagline}</p>
        <ul className="pcard__feats">
          {product.features.slice(0, 3).map((f, i) => (
            <li key={i} className="pcard__feat">{f}</li>
          ))}
        </ul>
      </div>

      <div className="pcard__foot">
        <span className="pcard__id">PROD-{String(product.id).padStart(3, '0')}</span>
        <span className="pcard__cta">View Details →</span>
      </div>
    </article>
  );
}
