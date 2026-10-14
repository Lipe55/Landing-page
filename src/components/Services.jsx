import { services, servicesContent } from "../data/services";
import "./Services.css";

function Services({ onSelectService }) {
  return (
    <section className="services" id="servicos">
      <div className="services-inner">
        <div className="services-heading">
          <div>
            <p className="eyebrow">{servicesContent.eyebrow}</p>
            <h2>{servicesContent.title}</h2>
          </div>

          <p className="services-intro">{servicesContent.description}</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">0{index + 1}</span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a
                href="#orcamento"
                onClick={() => onSelectService(service.title)}
              >
                {servicesContent.cardLinkLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;