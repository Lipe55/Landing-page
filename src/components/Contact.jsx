import { contactContent } from "../data/Contact";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="contact-inner">
        <div className="contact-copy">
          <p className="eyebrow">{contactContent.eyebrow}</p>

          <h2>{contactContent.title}</h2>

          <p className="contact-description">
            {contactContent.description}
          </p>

          <a
            className="contact-button"
            href={contactContent.whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            {contactContent.whatsappLabel}
          </a>
        </div>

        <div className="contact-details">
          <div className="contact-detail">
            <span>Telefone</span>
            <strong>{contactContent.phone}</strong>
          </div>

          <div className="contact-detail">
            <span>Endereço</span>
            <strong>{contactContent.address}</strong>
          </div>

          <div className="contact-detail">
            <span>Horário</span>
            <strong>{contactContent.hours}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;