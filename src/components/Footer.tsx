import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <p className="text-lg font-bold tracking-tight">
            EIGHTEEN1 <span className="text-accent">STUDIOS</span>
          </p>
          <p className="mt-2 text-sm text-muted">
            High-quality app development for Android&nbsp;&amp;&nbsp;iOS.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="text-muted hover:text-foreground transition-colors">Start</Link></li>
            <li><Link href="/projects" className="text-muted hover:text-foreground transition-colors">Our Projects</Link></li>
            <li><Link href="/car-cult" className="text-muted hover:text-foreground transition-colors">Car Cult</Link></li>
            <li><Link href="/contact" className="text-muted hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
            Legal
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy-policy" className="text-muted hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-muted hover:text-foreground transition-colors">Terms of Service</Link></li>
            <li><Link href="/delete-data" className="text-muted hover:text-foreground transition-colors">Delete User Data</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-muted">
            <li>Tiefenthaler Stra&szlig;e 32A</li>
            <li>26810 Westoverledingen, Germany</li>
            <li>
              <a href="mailto:info@eighteen1.com" className="hover:text-foreground transition-colors">
                info@eighteen1.com
              </a>
            </li>
            <li>
              <a href="mailto:eighteen1.studios@gmail.com" className="hover:text-foreground transition-colors">
                eighteen1.studios@gmail.com
              </a>
            </li>
            <li className="pt-2">
              <a
                href="https://www.instagram.com/eighteen1_studios/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-6 py-5 text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} Eighteen1 Studios. All rights reserved.
      </div>
    </footer>
  );
}
