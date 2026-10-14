import { company, directionsUrl, mapEmbedUrl } from "./company";

export const locationContent = {
  eyebrow: "Onde estamos",
  title: "Perto de você, quando precisar.",
  description: `Estamos em ${company.city}, prontos para receber você e oferecer um atendimento próximo.`,

  address: company.address,
  mapEmbedUrl,
  directionsUrl,
  directionsLabel: "Abrir no Google Maps",
};
