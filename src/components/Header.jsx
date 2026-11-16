import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header({ cartCount, onCartClick, cartRef }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header className="header">
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>

      <h1>⚡ TechMart</h1>

      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <NavLink to="/" end className="nav-link" onClick={close}>Home</NavLink>
        <NavLink to="/shop" className="nav-link" onClick={close}>Shop</NavLink>
        <NavLink to="/about" className="nav-link" onClick={close}>About</NavLink>
        <NavLink to="/contact" className="nav-link" onClick={close}>Contact</NavLink>
      </nav>

      <button ref={cartRef} className="cart-btn" onClick={onCartClick}>
        🛒 Cart ({cartCount})
      </button>
    </header>
  )
}

export default Header