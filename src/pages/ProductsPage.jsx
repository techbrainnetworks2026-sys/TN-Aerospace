import { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import ProductOverviewModal from '../components/ProductOverviewModal';
import { products, categories } from '../data/products';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catMatch = activeCategory === 'All' || p.category === activeCategory;
      const searchMatch = !search || p.name.toLowerCase().includes(search.toLowerCase());
      return catMatch && searchMatch;
    });
  }, [activeCategory, search]);

  return (
    <>
      {showVideo && <ProductOverviewModal onClose={() => setShowVideo(false)} />}

      <section className="section products-bg" id="products">
        <div className="container">
          <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
          
          <div className="sec-head">
            <div className="eyebrow">Our Portfolio</div>
            <h2>20 Mission-Critical Platforms</h2>
            <p>
              From satellite operations to deep space exploration, our products power the most ambitious missions in aerospace.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input
              type="text"
              className="search-box"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--c-t2)', padding: '60px 0', fontSize: '1.1rem' }}>
              No products found matching "{search}".
            </div>
          ) : (
            <div className="grid-products">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
