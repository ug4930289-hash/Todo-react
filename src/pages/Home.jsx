import { Link } from 'react-router-dom'
import products from '../data/products'
import ProductCard from '../components/ProductCard'
import Banner from '../components/Banner'
import WhyChooseUs from '../components/WhyChooseUs'
import Reviews from '../components/Reviews'

function Home({ onAdd, onOpen }) {
  return (
    <>
      <Banner />

      <div className="app">
        <h2 className="section-title">Featured Products</h2>
        <div className="grid">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} onOpen={onOpen} />
          ))}
        </div>
        <div className="see-all">
          <Link to="/shop" className="banner-btn">View All Product</Link>
        </div>
      </div>

      <WhyChooseUs />
      <Reviews />
    </>
  )
}

export default Home