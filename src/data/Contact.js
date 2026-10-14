import { company, getWhatsappUrl } from "./company";

export const contactContent = {
  eyebrow: "Fale com a gente",
  title: "Vamos encontrar a melhor solução para você.",
  description:
    "Entre em contato para tirar dúvidas, solicitar um orçamento ou conhecer melhor nossos serviços.",

  whatsappLabel: "Chamar no WhatsApp",
  whatsappLink: getWhatsappUrl(),

  phone: company.phone,
  address: company.address,
  hours: company.hours,
};
