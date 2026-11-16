import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className="banner-box">
      <img src="/images/banner.png" alt="banner" className="banner" />
      <div className="banner-text">
        <h2>Mega Electronics Sale</h2>
        <p>Upto 40% Off on Top Brands</p>
        <Link to="/shop" className="banner-btn">Shop Now</Link>
      </div>
    </div>
  )
}

export default Banner