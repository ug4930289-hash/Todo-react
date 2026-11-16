import { useState } from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

function Shop({ onAdd, onOpen }) {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')

  const categories = ['All', ...new Set(products.map((p) => p.category))]

  const filtered = products.filter((p) => {
    const text = search.toLowerCase().trim()
    const matchCategory = category === 'All' || p.category === category
    const matchSearch =
      (' ' + p.name.toLowerCase()).includes(' ' + text) ||
      (' ' + p.category.toLowerCase()).includes(' ' + text)
    return matchCategory && matchSearch
  })

  return (
    <div className="app">
      <h2 className="section-title">Explore <span className='shop-t'>Collection </span></h2>

      <input
        className="search"
        placeholder="Product search karein..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filters">
        {categories.map((c) => (
          <button
            key={c}
            className={c === category ? 'active' : ''}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} onOpen={onOpen} />
        ))}
      </div>
    </div>
  )
}

export default Shop