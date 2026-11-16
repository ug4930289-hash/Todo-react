import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h3 className="footer-logo">⚡ TechMart</h3>
          <p>
            Mobiles, laptops, LED TVs aur ghar ki electronics, behtareen
            quality aur munasib qeemat par.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>📞 +92 300 1234567</p>
          <p>✉️ support@techmart.com</p>
          <p>📍 Karachi, Pakistan</p>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} TechMart. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer