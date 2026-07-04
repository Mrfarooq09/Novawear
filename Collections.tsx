import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './Collections.css';

export default function Collections() {
  const menProducts = products.filter(p => p.category === 'men').length;
  const womenProducts = products.filter(p => p.category === 'women').length;

  const collections = [
    {
      id: 'men',
      title: "Men's Collection",
      count: menProducts,
      image: 'https://images.pexels.com/photos/2889674/pexels-photo-2889674.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/men'
    },
    {
      id: 'women',
      title: "Women's Collection",
      count: womenProducts,
      image: 'https://images.pexels.com/photos/15923973/pexels-photo-15923973.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/women'
    }
  ];

  return (
    <section className="collections-section">
      <div className="container">
        <div className="section-header">
          <h2>Explore Collections</h2>
          <p>Curated selections for the discerning fashion enthusiast</p>
        </div>

        <div className="collections-grid">
          {collections.map(collection => (
            <Link key={collection.id} to={collection.link} className="collection-card">
              <img src={collection.image} alt={collection.title} className="collection-card-image" loading="lazy" />
              <div className="collection-card-overlay">
                <div className="collection-card-content">
                  <h3 className="collection-card-title">{collection.title}</h3>
                  <p className="collection-card-count">{collection.count} Products</p>
                  <span className="collection-card-btn">
                    Shop Collection
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
