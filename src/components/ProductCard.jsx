import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <article
      className="pcard"
      style={{ '--pcard-accent': product.accentColor }}
      onClick={() => navigate(`/product/${product.slug}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/product/${product.slug}`)}
    >
      <div className="pcard-img">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => { e.target.src = '/images/01_satellite_c2.png'; }}
        />
        <div className="pcard-img-fade" />
        <span className="pcard-badge">{product.category}</span>
      </div>

      <div className="pcard-body">
        <h3 className="pcard-title">{product.name}</h3>
        <p className="pcard-tag">{product.tagline}</p>
        <ul className="pcard-feats">
          {product.features.slice(0, 3).map((f, i) => (
            <li key={i} className="pcard-feat">{f}</li>
          ))}
        </ul>
      </div>

      <div className="pcard-foot">
        <span className="pcard-id">PROD-{String(product.id).padStart(3, '0')}</span>
        <span className="pcard-cta">View Details →</span>
      </div>
    </article>
  );
}
