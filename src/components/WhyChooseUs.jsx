const items = [
  { icon: '🚚', title: 'Fast Delivery', text: 'Aap ka order jaldi aur safe aap ke ghar tak pahunchta hai.' },
  { icon: '🔒', title: 'Secure Payment', text: 'Aap ki payment 100% mehfooz aur aasan hai.' },
  { icon: '✅', title: 'Warranty', text: 'Har product par asli warranty aur bharosemand service.' },
  { icon: '🎧', title: '24/7 Support', text: 'Hamari team kisi bhi masle mein aap ki madad ke liye hazir hai.' },
]

function WhyChooseUs() {
  return (
    <section className="why">
      <h2 className="why-title">Why Choose Us</h2>
      <p className="why-sub">Behtareen service aur quality, har order par</p>

      <div className="why-grid">
        {items.map((item) => (
          <div className="why-card" key={item.title}>
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs