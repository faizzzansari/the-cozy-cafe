import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-coffee-dark py-12 text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
        <div>
          <img src={logo} alt="le Café" width={160} height={64} loading="lazy" className="h-16 w-auto brightness-0 invert opacity-90" />
          <p className="mt-4 text-sm">
            Where every sip tells a story. Hand-roasted coffee and comfort food since 2012.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-cream">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>123 Bean Street, NY 10001</li>
            <li>+91 99999 99999</li>
            <li>hello@lecafe.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-cream">Follow</h4>
          <div className="mt-3 flex gap-3">
            {["Instagram", "Facebook", "Twitter"].map((s) => (
              <a
                key={s}
                href="#"
                className="rounded-full border border-cream/20 px-4 py-2 text-xs transition-colors hover:bg-gold hover:text-coffee-dark hover:border-gold"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-cream/10 px-6 pt-6 text-center text-xs">
        © {new Date().getFullYear()} Le Cafe. All rights reserved.
      </div>
    </footer>
  );
}
