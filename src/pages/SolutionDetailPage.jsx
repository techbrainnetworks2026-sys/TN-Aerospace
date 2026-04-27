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
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Solution not found</h2>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Return Home</button>
      </div>
    );
  }

  // Find products related to this solution (demo logic: just pick first 3 or match category if applicable)
  // For now, let's just show some relevant products.
  const relevantProducts = products.slice(0, 4);

  return (
    <div className="solution-detail">
      <section className="solution-hero">
        <div className="container">
          <div className="solution-hero-inner">
            <div className="solution-badge" style={{ color: s.accentColor, borderColor: s.accentColor }}>Solution</div>
            <h1 className="solution-title">{s.name}</h1>
            <p className="solution-tagline">{s.tagline}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="solution-grid">
            <div className="solution-main">
              <h3>Overview</h3>
              <p className="solution-desc">{s.description}</p>
              
              <div className="solution-features">
                <h3>Key Capabilities</h3>
                <div className="solution-feats-grid">
                  {s.features.map((f, i) => (
                    <div key={i} className="solution-feat-card">
                      <span className="feat-icon" style={{ color: s.accentColor }}>✦</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="solution-sidebar">
              <div className="sidebar-card">
                <h4>Related Products</h4>
                <div className="sidebar-products">
                  {relevantProducts.map((p) => (
                    <div key={p.id} className="sidebar-prod-item" onClick={() => navigate(`/product/${p.slug}`)}>
                      <img src={p.image} alt={p.name} />
                      <div>
                        <h6>{p.name}</h6>
                        <span>{p.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="btn btn-ghost" style={{ width: '100%', marginTop: 20 }} onClick={() => navigate('/products')}>
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
