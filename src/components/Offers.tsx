const offers = [
  {
    badge: "Weekend Special",
    title: "Flat 20% Off",
    desc: "Enjoy 20% off your entire bill every Saturday & Sunday.",
    accent: "from-gold to-gold-soft",
  },
  {
    badge: "Coffee Lovers",
    title: "Buy 1 Get 1 Free",
    desc: "Order any specialty coffee and get a second one on us.",
    accent: "from-coffee-light to-coffee",
  },
  {
    badge: "Happy Hours",
    title: "30% Off Desserts",
    desc: "Sweet deals every weekday from 4pm to 6pm. Don't miss out.",
    accent: "from-coffee-dark to-coffee",
  },
];

export function Offers() {
  return (
    <section id="offers" className="bg-coffee-dark py-24 text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Hot Deals
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Today's offers
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offers.map((o) => (
            <div
              key={o.title}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${o.accent} p-8 shadow-warm transition-transform duration-300 hover:-translate-y-2`}
            >
              <span className="inline-block rounded-full bg-coffee-dark/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream backdrop-blur">
                {o.badge}
              </span>
              <h3 className="mt-6 font-display text-3xl font-bold text-coffee-dark">
                {o.title}
              </h3>
              <p className="mt-3 text-coffee-dark/80">{o.desc}</p>
              <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-cream/10 transition-transform duration-500 group-hover:scale-125" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
