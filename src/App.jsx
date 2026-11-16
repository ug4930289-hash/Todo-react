import { useState, useRef, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import CartPanel from './components/CartPanel'
import ProductPopup from './components/ProductPopup'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

// Page badalte hi sab se upar le jata hai
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  // Cart localStorage se aata hai, taake refresh par ghayab na ho
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')) || []
    } catch {
      return []
    }
  })
  const [showCart, setShowCart] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const cartButtonRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, sourceImage) => {
    setCart((prevCart) => [...prevCart, product])

    const cartButton = cartButtonRef.current

    if (sourceImage && cartButton) {
      const start = sourceImage.getBoundingClientRect()
      const end = cartButton.getBoundingClientRect()

      const flyingImage = document.createElement('img')
      flyingImage.src = product.image

      Object.assign(flyingImage.style, {
        position: 'fixed',
        left: `${start.left}px`,
        top: `${start.top}px`,
        width: `${start.width}px`,
        height: `${start.height}px`,
        objectFit: 'contain',
        zIndex: '10000',
        pointerEvents: 'none',
        borderRadius: '10px',
        transition: 'transform 3s cubic-bezier(.15,.85,.25,1), opacity 3s',
      })

      document.body.appendChild(flyingImage)

      requestAnimationFrame(() => {
        const moveX = end.left + end.width / 2 - (start.left + start.width / 2)
        const moveY = end.top + end.height / 2 - (start.top + start.height / 2)

        flyingImage.style.transform = `translate(${moveX}px, ${moveY}px) scale(0.15)`
        flyingImage.style.opacity = '0.2'
      })

      setTimeout(() => {
        flyingImage.remove()
        cartButton.classList.add('cart-bounce')
        setTimeout(() => cartButton.classList.remove('cart-bounce'), 500)
      }, 3050)
    }
  }

  const removeFromCart = (index) =>
    setCart(cart.filter((_, i) => i !== index))

  const total = cart.reduce((sum, p) => sum + p.price, 0)

  return (
    <div id="top">
      <ScrollToTop />

      <Header
        cartCount={cart.length}
        onCartClick={() => setShowCart(!showCart)}
        cartRef={cartButtonRef}
      />

      {showCart && cart.length > 0 && (
        <div className="app">
          <CartPanel
            cart={cart}
            total={total}
            onRemove={removeFromCart}
            onClose={() => setShowCart(false)}
          />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home onAdd={addToCart} onOpen={setSelectedProduct} />} />
        <Route path="/shop" element={<Shop onAdd={addToCart} onOpen={setSelectedProduct} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/contact"
          element={<Contact cart={cart} total={total} onRemove={removeFromCart} />}
        />
      </Routes>

      <Footer />

      {selectedProduct && (
        <ProductPopup
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAdd={addToCart}
        />
      )}
    </div>
  )
}

export default App