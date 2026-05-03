export function Contact() {
  const address = "123 Bean Street, Coffee District, NY 10001";
  return (
    <section id="contact" className="bg-cream-soft py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Visit
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-coffee-dark md:text-5xl">
            Come say hello
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-xl bg-card p-6 shadow-card">
              <h3 className="font-display text-xl font-semibold text-coffee-dark">
                📍 Address
              </h3>
              <p className="mt-2 text-muted-foreground">{address}</p>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-card">
              <h3 className="font-display text-xl font-semibold text-coffee-dark">
                📞 Phone
              </h3>
              <a href="tel:+919999999999" className="mt-2 block text-muted-foreground hover:text-gold">
                +91 99999 99999
              </a>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-card">
              <h3 className="font-display text-xl font-semibold text-coffee-dark">
                🕐 Hours
              </h3>
              <p className="mt-2 text-muted-foreground">Mon–Sun · 7:00am – 11:00pm</p>
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-coffee px-7 py-3 font-semibold text-cream transition-transform hover:scale-105"
            >
              Get Directions →
            </a>
          </div>

          <div className="overflow-hidden rounded-xl shadow-warm">
            <iframe
              title="Le Cafe Location"
              src="https://www.google.com/maps?q=Times+Square,New+York&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
