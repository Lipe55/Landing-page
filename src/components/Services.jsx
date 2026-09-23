import { services } from "../data/services";
import "./Services.css";

function Services() {
  return (
    <section className="services" id="servicos">
      <div className="services-inner">
        <div className="services-heading">
          <div>
            <p className="eyebrow">Nossos serviços</p>
            <h2>Soluções para o seu dia a dia.</h2>
          </div>

          <p className="services-intro">
            Oferecemos soluções pensadas para atender você com praticidade,
            qualidade e um atendimento próximo.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">0{index + 1}</span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contato">Saiba mais →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;