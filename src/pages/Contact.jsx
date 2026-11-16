import { useState } from 'react'
import { Link } from 'react-router-dom'

// Apna number likhein: 92 se shuru, bina + aur bina space ke
const WHATSAPP_NUMBER = '923001234567'

function Contact({ cart, total, onRemove }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const sendOrder = () => {
    if (cart.length === 0) return
    if (!name.trim() || !phone.trim() || !address.trim()) {
      alert('Pehle naam, phone aur address likhein.')
      return
    }

    const lines = cart
      .map((item, i) => `${i + 1}. ${item.name} - Rs. ${item.price.toLocaleString()}`)
      .join('\n')

    const message =
      `Assalam o Alaikum! Naya order:\n\n${lines}\n\n` +
      `Total: Rs. ${total.toLocaleString()}\n\n` +
      `Naam: ${name}\nPhone: ${phone}\nAddress: ${address}`

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

  return (
    <div className="app">
      <h2 className="section-title">Contact / Order</h2>

      {cart.length === 0 ? (
        <div className="cart">
          <p>Aap ka cart khali hai.</p>
          <Link to="/shop" className="cart-order">Shop par jayein</Link>
        </div>
      ) : (
        <>
          <div className="cart">
            <h2>🛒 Aap ka Order</h2>
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
          </div>

          <input
            className="search"
            placeholder="Aap ka naam"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="search"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            className="search"
            rows="3"
            placeholder="Poora address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button className="order-btn" onClick={sendOrder}>
            Order Now (WhatsApp par)
          </button>
        </>
      )}
    </div>
  )
}

export default Contact