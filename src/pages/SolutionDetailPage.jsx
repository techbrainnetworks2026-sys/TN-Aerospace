import { useParams, useNavigate } from 'react-router-dom';
import { solutions } from '../data/solutions';
import { products } from '../data/products';
import './SolutionDetailPage.css';

export default function SolutionDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const s = solutions.find((sol) => sol.slug === slug);

  if (!s) {
    return (
      <div className="soldetail__not-found container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2 className="soldetail__not-found-title">Solution not found</h2>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Return Home</button>
      </div>
    );
  }

  const relevantProducts = products.slice(0, 4);

  return (
    <div className="soldetail__wrapper">
      <section className="soldetail__hero">
        <div className="soldetail__container container">
          <div className="soldetail__hero-inner">
            <div
              className="soldetail__badge"
              style={{ color: s.accentColor, borderColor: s.accentColor }}
            >
              Solution
            </div>
            <h1 className="soldetail__title">{s.name}</h1>
            <p className="soldetail__tagline">{s.tagline}</p>
          </div>
        </div>
      </section>

      <section className="soldetail__body-section section">
        <div className="soldetail__container container">
          <div className="soldetail__grid">
            <div className="soldetail__main">
              <h3 className="soldetail__overview-title">Overview</h3>
              <p className="soldetail__desc">{s.description}</p>

              <div className="soldetail__features">
                <h3 className="soldetail__features-title">Key Capabilities</h3>
                <div className="soldetail__feats-grid">
                  {s.features.map((f, i) => (
                    <div key={i} className="soldetail__feat-card">
                      <span className="soldetail__feat-icon" style={{ color: s.accentColor }}>✦</span>
                      <span className="soldetail__feat-text">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="soldetail__sidebar">
              <div className="soldetail__sidebar-card">
                <h4 className="soldetail__sidebar-title">Related Products</h4>
                <div className="soldetail__sidebar-products">
                  {relevantProducts.map((p) => (
                    <div
                      key={p.id}
                      className="soldetail__sidebar-prod-item"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      <img
                        className="soldetail__sidebar-prod-img"
                        src={p.image}
                        alt={p.name}
                      />
                      <div className="soldetail__sidebar-prod-info">
                        <h6 className="soldetail__sidebar-prod-name">{p.name}</h6>
                        <span className="soldetail__sidebar-prod-cat">{p.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="btn btn-ghost soldetail__sidebar-all-btn"
                  onClick={() => navigate('/products')}
                >
                  View All Products →
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
