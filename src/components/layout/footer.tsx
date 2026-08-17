import Link from "next/link";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight text-foreground hover:text-accent transition-colors">
              AMR GADO
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Front-End Engineer
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Social</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/AmrGado-Prog-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/amr-mohammed-gado"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:amrgado126@gmail.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © 2026 Amr Gado. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
