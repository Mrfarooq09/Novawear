import Hero from '../components/Hero';
import Collections from '../components/Collections';
import FeaturedProducts from '../components/FeaturedProducts';
import NewArrivals from '../components/NewArrivals';
import Reviews from '../components/Reviews';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <main>
      <Hero />
      <Collections />
      <FeaturedProducts />
      <NewArrivals />
      <Reviews />
      <Newsletter />
    </main>
  );
}
