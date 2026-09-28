import { useEffect, useState } from "react";
import { services } from "../data/services";
import { contactContent } from "../data/Contact";
import "./Quote.css";

const initialForm = {
  name: "",
  phone: "",
  service: "",
  message: "",
};

function Quote({ selectedService }) {
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (!selectedService) {
      return;
    }

    setFormData((currentForm) => ({
      ...currentForm,
      service: selectedService,
    }));
  }, [selectedService]);

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
      "Olá! Gostaria de solicitar um orçamento.",
      `Nome: ${formData.name}`,
      `WhatsApp: ${formData.phone}`,
      `Interesse: ${formData.service}`,
      formData.message.trim() ? `Mensagem: ${formData.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl =
      `${contactContent.whatsappLink}&text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setFormData({
      ...initialForm,
      service: selectedService,
    });
  }

  return (
    <section className="quote" id="orcamento">
      <div className="quote-inner">
        <div className="quote-copy">
          <p className="eyebrow">Orçamento rápido</p>

          <h2>Conte o que você precisa.</h2>

          <p className="quote-description">
            Preencha os dados abaixo e envie sua solicitação diretamente pelo
            WhatsApp.
          </p>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          <label className="quote-field">
            <span>Seu nome</span>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Como podemos chamar você?"
              required
            />
          </label>

          <label className="quote-field">
            <span>WhatsApp</span>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(53) 99999-9999"
              required
            />
          </label>

          <label className="quote-field">
            <span>Tenho interesse em</span>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma opção</option>

              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </label>

          <label className="quote-field">
            <span>Mensagem</span>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Conte brevemente o que você procura."
              rows="4"
            />
          </label>

          <button className="quote-button" type="submit">
            Solicitar orçamento
          </button>
        </form>
      </div>
    </section>
  );
}

export default Quote;