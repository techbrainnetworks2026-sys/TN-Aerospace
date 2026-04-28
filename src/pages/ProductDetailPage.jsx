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
      <div className="page-hero-wrap">
        <img className="page-hero-img" src={product.image} alt={product.name} />
        <div className="page-hero-fade" />
        <div className="page-hero-content">
          <button className="back-btn" onClick={() => navigate('/')}>
            ← Back to Products
          </button>
          <div
            className="det-cat-badge"
            style={{ color: product.accentColor, borderColor: product.accentColor, background: `${product.accentColor}1A` }}
          >
            {product.category}
          </div>
          <h1 className="det-title">{product.name}</h1>
          <p className="det-tag">{product.tagline}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="det-layout">
            <div className="det-markdown">
             
                <article className="md">
                  <Markdown>{content}</Markdown>
                </article>
            
            </div>

            <aside className="det-sidebar">
              <div className="s-card">
                <div className="s-card-lbl">Key Features</div>
                <ul className="feat-list">
                  {product.features.map((f, i) => (
                    <li key={i} className="feat-row">
                      <div className="feat-check" style={{ background: `${product.accentColor}26`, color: product.accentColor }}>
                        ✓
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>


            </aside>
          </div>

          <div style={{ marginTop: 96 }}>
            <div className="eyebrow">Also Explore</div>
            <h2 style={{ marginBottom: 32, marginLeft: '50px' }}>Related Products</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24, paddingLeft: '50px' }}>
              {siblings.map((p) => (
                <div
                  key={p.id}
                  onClick={() => navigate(`/product/${p.slug}`)}
                  style={{
                    background: 'var(--c-card)',
                    border: '1px solid var(--c-border)',
                    borderRadius: 'var(--r-md)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'var(--t)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--c-a1)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--c-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ width: '100%', height: 160, objectFit: 'cover' }}
                  />
                  <div style={{ padding: 24 }}>
                    <div style={{ fontSize: '0.72rem', color: p.accentColor, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {p.category}
                    </div>
                    <div style={{ fontFamily: 'var(--f-head)', fontWeight: 600, marginBottom: 8, fontSize: '1.05rem', color: 'var(--c-t1)' }}>{p.name}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--c-t2)', lineHeight: 1.6 }}>{p.tagline}</div>
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
