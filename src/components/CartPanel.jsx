import { Link } from 'react-router-dom'

function CartPanel({ cart, total, onRemove, onClose }) {
  return (
    <div className="cart">
      <div className="cart-header">
        <h2>🛒 Aapka Cart</h2>
        <button className="cart-close" onClick={onClose}>✕</button>
      </div>

      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <span>
            <img src={item.image} alt={item.name} className="cart-thumb" />
            {item.name} - Rs. {item.price.toLocaleString()}
          </span>
          <button onClick={() => onRemove(index)}>Remove</button>
        </div>
      ))}

      <h3>Total: Rs. {total.toLocaleString()}</h3>

      <Link to="/contact" className="cart-order" onClick={onClose}>
        Order Now
      </Link>
    </div>
  )
}

export default CartPanel