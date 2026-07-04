import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Collection.css';

type CollectionType = 'men' | 'women' | 'new';

export default function Collection() {
  const { type } = useParams<{ type: CollectionType }>();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const collectionType = type || 'men';

  const collectionTitle = useMemo(() => {
    switch (collectionType) {
      case 'men':
        return "Men's Collection";
      case 'women':
        return "Women's Collection";
      case 'new':
        return "New Arrivals";
      default:
        return "Collection";
    }
  }, [collectionType]);

  const collectionDescription = useMemo(() => {
    switch (collectionType) {
      case 'men':
        return "Sophisticated style for the modern gentleman";
      case 'women':
        return "Elegant fashion for the contemporary woman";
      case 'new':
        return "The latest additions to our curated collections";
      default:
        return "";
    }
  }, [collectionType]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (collectionType === 'new') {
      filtered = filtered.filter(p => p.isNew);
    } else if (collectionType === 'men' || collectionType === 'women') {
      filtered = filtered.filter(p => p.category === collectionType);
    }

    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.subcategory === activeCategory);
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    return filtered;
  }, [collectionType, activeCategory, sortBy]);

  const displayCategories = useMemo(() => {
    if (collectionType === 'new') {
      return [...new Set(products.filter(p => p.isNew).map(p => p.subcategory))];
    }
    return categories[collectionType as 'men' | 'women'] || [];
  }, [collectionType]);

  return (
    <main className="collection-page">
      <section className="collection-hero">
        <div className="container">
          <h1>{collectionTitle}</h1>
          <p>{collectionDescription}</p>
        </div>
      </section>

      <section className="container">
        <div className="collection-filters">
          <div className="filter-tabs">
            <button
              className={`filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            {displayCategories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="filter-sort">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="collection-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))
          ) : (
            <div className="collection-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
