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

      <section className="home__section home__products-bg" id="products" style={{ minHeight: '100vh', paddingTop: '100px' }}>
        <div className="home__container container">
          <button className="btn btn-ghost" style={{ marginBottom: '24px' }} onClick={() => navigate('/')}>← Back to Home</button>
          
          <div className="home__sec-head">
            <div className="home__eyebrow eyebrow">Our Portfolio</div>
            <h2 className="home__sec-title">20 Mission-Critical Platforms</h2>
            <p className="home__sec-desc">
              From satellite operations to deep space exploration, our products power the most ambitious missions in aerospace.
            </p>
          </div>

          <div className="home__search-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
            <input
              type="text"
              className="home__search-box"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="home__tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`home__tab ${activeCategory === cat ? 'home__tab--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="home__no-results" style={{ textAlign: 'center', color: 'var(--c-t2)', padding: '60px 0', fontSize: '1.1rem' }}>
              No products found matching "{search}".
            </div>
          ) : (
            <div className="home__grid-products">
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
