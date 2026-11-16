function ProductPopup({ product, onClose, onAdd }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="product-popup" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>✕</button>

        <img src={product.image} alt={product.name} className="popup-image" />

        <div className="popup-details">
          <p>{product.category}</p>
          <h2>{product.name}</h2>
          <h3>Rs. {product.price.toLocaleString()}</h3>

          {product.brand && <p><b>Brand:</b> {product.brand}</p>}
          <p>{product.description || 'Discover this amazing product from TechMart.'}</p>

          <button
            className="popup-add-btn"
            onClick={() => {
              onAdd(product)
              onClose()
            }}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPopup