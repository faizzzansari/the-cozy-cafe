export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-coffee-dark/85 via-coffee-dark/60 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-6 py-20 animate-fade-up">
        <span className="inline-block rounded-full bg-gold/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold-soft backdrop-blur">
          ✦ Since 2012
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-tight text-cream md:text-7xl">
          Where every sip <span className="text-gold">tells a story.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-cream/80">
          Hand-roasted coffee, wood-fired pizzas and decadent desserts —
          crafted with love in the heart of the city.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#menu"
            className="rounded-full bg-gold px-8 py-3.5 font-semibold text-coffee-dark shadow-warm transition-transform hover:scale-105"
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="rounded-full border border-cream/40 px-8 py-3.5 font-semibold text-cream backdrop-blur transition-colors hover:bg-cream/10"
          >
            Visit Us
          </a>
        </div>
      </div>
    </section>
  );
}
