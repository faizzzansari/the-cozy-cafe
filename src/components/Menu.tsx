import { useState } from "react";
import { menu, categories } from "@/data/menu";

export function Menu() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const items = active === "All" ? menu : menu.filter((m) => m.category === active);

  return (
    <section id="menu" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Our Menu
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-coffee-dark md:text-5xl">
            Crafted to delight
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Explore signature dishes, brewed favorites and sweet temptations.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === c
                  ? "bg-coffee text-cream shadow-card"
                  : "bg-cream-soft text-coffee-dark hover:bg-gold-soft"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-xl bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-warm animate-fade-up"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-coffee-dark">
                    {item.name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-gold/20 px-3 py-1 text-sm font-bold text-coffee-dark">
                    ₹{item.price.toFixed(2)}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-gold">
                  {item.category}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
