function ProductCard({ product, onAdd, onOpen }) {
  return (
    <div className="card" onClick={() => onOpen(product)}>
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p className="category">{product.category}</p>
      <p className="price">Rs. {product.price.toLocaleString()}</p>
      <button
       onClick={(e) => {
  e.stopPropagation()

  const productImage = e.currentTarget
    .closest('.card')
    ?.querySelector('.product-img')

  onAdd(product, productImage)
}}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard