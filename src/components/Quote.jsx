import { useState } from "react";
import { getWhatsappUrl } from "../data/company";
import { quoteContent } from "../data/quote";
import { services } from "../data/services";
import "./Quote.css";

const initialForm = {
  name: "",
  phone: "",
  message: "",
};

function Quote({ selectedService, onSelectService }) {
  const [formData, setFormData] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const whatsappMessage = [
      quoteContent.whatsappGreeting,
      `Nome: ${formData.name}`,
      `WhatsApp: ${formData.phone}`,
      `Interesse: ${selectedService}`,
      formData.message.trim() ? `Mensagem: ${formData.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(getWhatsappUrl(whatsappMessage), "_blank", "noopener,noreferrer");

    setFormData(initialForm);
  }

  return (
    <section className="quote" id="orcamento">
      <div className="quote-inner">
        <div className="quote-copy">
          <p className="eyebrow">{quoteContent.eyebrow}</p>

          <h2>{quoteContent.title}</h2>

          <p className="quote-description">{quoteContent.description}</p>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          <label className="quote-field">
            <span>{quoteContent.nameLabel}</span>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={quoteContent.namePlaceholder}
              required
            />
          </label>

          <label className="quote-field">
            <span>{quoteContent.phoneLabel}</span>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={quoteContent.phonePlaceholder}
              required
            />
          </label>

          <label className="quote-field">
            <span>{quoteContent.serviceLabel}</span>

            <select
              name="service"
              value={selectedService}
              onChange={(event) => onSelectService(event.target.value)}
              required
            >
              <option value="">{quoteContent.servicePlaceholder}</option>

              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </label>

          <label className="quote-field">
            <span>{quoteContent.messageLabel}</span>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={quoteContent.messagePlaceholder}
              rows="4"
            />
          </label>

          <button className="quote-button" type="submit">
            {quoteContent.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Quote;
