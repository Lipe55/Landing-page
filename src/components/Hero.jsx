import { contactContent } from "../data/Contact";
import { heroContent } from "../data/hero";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <p className="eyebrow">{heroContent.eyebrow}</p>

        <h1>{heroContent.title}</h1>

        <p className="hero-text">{heroContent.description}</p>

        <div className="hero-actions">
          <a
            className="primary-button"
            href={contactContent.whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            {heroContent.primaryLabel}
          </a>

          <a className="secondary-link" href="#servicos">
            {heroContent.secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
