import { company } from "../data/company";
import { contactContent } from "../data/Contact";
import { headerCtaLabel, navLinks } from "../data/navigation";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#inicio">
          {company.name}
        </a>

        <nav className="nav" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="header-cta"
            href={contactContent.whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            {headerCtaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
