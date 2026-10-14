// Dados principais da empresa. Altere aqui e o site inteiro se atualiza:
// links do WhatsApp, mapa e título da página são gerados a partir destes campos.
export const company = {
  name: "Sua Empresa",
  slogan: "Atendimento de verdade",
  description: "Site institucional para empresas locais.",

  // Telefone exibido no site. O link do WhatsApp usa os mesmos dígitos.
  phone: "(53) 99999-9999",
  countryCode: "55",
  whatsappMessage: "Olá! Gostaria de mais informações.",

  city: "Bagé",
  address: "Bagé, Rio Grande do Sul",
  hours: "Segunda a sexta, das 8h às 18h",
};

export function getWhatsappUrl(message = company.whatsappMessage) {
  const number = company.countryCode + company.phone.replace(/\D/g, "");

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

const mapQuery = encodeURIComponent(company.address);

export const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
