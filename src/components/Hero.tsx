export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80')",
        }}
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-coffee-light/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft backdrop-blur">
          ✦ Since 2012 · Brewed with love
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.05] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] md:text-7xl">
          Where every sip{" "}
          <span className="bg-gradient-to-r from-gold via-gold-soft to-gold bg-clip-text text-transparent">
            tells a story.
          </span>
        </h1>
        <p className="mt-6 max-w-xl rounded-xl border border-gold/40 bg-coffee-dark/90 px-5 py-4 text-lg font-medium text-cream shadow-warm md:text-xl">
          Hand-roasted <span className="font-semibold text-gold">coffee</span>, wood-fired{" "}
          <span className="font-semibold text-gold">pizzas</span> and decadent{" "}
          <span className="font-semibold text-gold">desserts</span> — crafted with love in the heart of the city.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#menu"
            className="group relative overflow-hidden rounded-full bg-gold px-8 py-3.5 font-semibold text-coffee-dark shadow-warm transition-all hover:scale-105 hover:shadow-[0_20px_50px_-10px_rgba(212,165,90,0.6)]"
          >
            <span className="relative z-10">View Menu →</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/40 px-8 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Visit Us
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
          {[
            { n: "12+", l: "Years brewing" },
            { n: "50K", l: "Happy guests" },
            { n: "4.9★", l: "Rated locally" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl font-bold text-gold md:text-4xl">
                {s.n}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/70">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
