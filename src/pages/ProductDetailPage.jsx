import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetailPage.css';
import Markdown from 'markdown-to-jsx';
import { products } from '../data/products';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.slug === slug);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!product) { navigate('/'); return; }
    setLoading(true);
    fetch(product.mdFile)
      .then((r) => r.text())
      .then((text) => { setContent(text); setLoading(false); })
      .catch(() => { setContent('# Content Unavailable\nPlease check your connection.'); setLoading(false); });
  }, [slug, product, navigate]);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!product) return null;

  const currentIdx = products.findIndex((p) => p.slug === slug);
  const siblings = products.filter((_, i) => i !== currentIdx).slice(0, 3);

  return (
    <>
      <div className="pdetail__hero-wrap">
        <img
          className="pdetail__hero-img"
          src={product.image}
          alt={product.name}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="600"
        />
        <div className="pdetail__hero-fade" />
        <div className="pdetail__hero-content">
          <button className="pdetail__back-btn btn btn-ghost" onClick={() => navigate('/')}>
            ← Back to Products
          </button>
          <div
            className="pdetail__cat-badge"
            style={{ color: product.accentColor, borderColor: product.accentColor, background: `${product.accentColor}1A` }}
          >
            {product.category}
          </div>
          <h1 className="pdetail__title">{product.name}</h1>
          <p className="pdetail__tagline">{product.tagline}</p>
        </div>
      </div>

      <div className="pdetail__body-section section">
        <div className="pdetail__container container">
          <div className="pdetail__layout">
            <div className="pdetail__markdown-col">
              <article className="pdetail__md-article">
                <Markdown>{content}</Markdown>
              </article>
            </div>

            <aside className="pdetail__sidebar">
              <div className="pdetail__sidebar-card">
                <div className="pdetail__sidebar-card-label">Key Features</div>
                <ul className="pdetail__feat-list">
                  {product.features.map((f, i) => (
                    <li key={i} className="pdetail__feat-row">
                      <div
                        className="pdetail__feat-check"
                        style={{ background: `${product.accentColor}26`, color: product.accentColor }}
                      >
                        ✓
                      </div>
                      <span className="pdetail__feat-text">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <div className="pdetail__related-section">
            <div className="pdetail__related-eyebrow eyebrow">Also Explore</div>
            <h2 className="pdetail__related-title">Related Products</h2>
            <div className="pdetail__related-grid">
              {siblings.map((p) => (
                <div
                  key={p.id}
                  className="pdetail__related-card"
                  onClick={() => navigate(`/product/${p.slug}`)}
                >
                  <img
                    className="pdetail__related-card-img"
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="225"
                  />
                  <div className="pdetail__related-card-body">
                    <div className="pdetail__related-card-cat" style={{ color: p.accentColor }}>
                      {p.category}
                    </div>
                    <div className="pdetail__related-card-name">{p.name}</div>
                    <div className="pdetail__related-card-tag">{p.tagline}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
