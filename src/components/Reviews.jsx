const reviews = [
  { stars: '★★★★★', text: '"iPhone bilkul original hai aur delivery bohat jaldi hui. Highly recommended!"', name: 'Ahmed Raza', city: 'Karachi' },
  { stars: '★★★★★', text: '"Laptop ki quality shandar hai aur price bhi bilkul munasib thi."', name: 'Hassan Ali', city: 'Lahore' },
  { stars: '★★★★☆', text: '"Washing machine acha kaam kar rahi hai. Packing aur support dono behtareen."', name: 'Usman Khan', city: 'Islamabad' },
]

function Reviews() {
  return (
    <section className="reviews">
      <h2 className="reviews-title">What Our Customers Say</h2>
      <p className="reviews-sub">Hamare customers ka tajurba</p>

      <div className="reviews-grid">
        {reviews.map((r) => (
          <div className="review-card" key={r.name}>
            <div className="stars">{r.stars}</div>
            <p className="review-text">{r.text}</p>
            <h4>{r.name}</h4>
            <span>{r.city}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews