import { aboutContent } from "../data/About";
import "./About.css";

function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-inner">
        <div className="about-copy">
          <p className="eyebrow">{aboutContent.eyebrow}</p>

          <h2>{aboutContent.title}</h2>

          <p className="about-description">{aboutContent.description}</p>
        </div>

        <div className="about-highlights">
          {aboutContent.highlights.map((highlight, index) => (
            <article className="about-highlight" key={highlight.title}>
              <span className="about-number">0{index + 1}</span>

              <h3>{highlight.title}</h3>

              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;