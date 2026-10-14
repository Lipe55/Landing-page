// Para adicionar um projeto:
// 1. Crie uma pasta em /screenshots com o nome do projeto (ex.: screenshots/meu-projeto).
// 2. Coloque os prints lá dentro. Eles aparecem em ordem alfabética,
//    então use prefixos como 01-, 02-... O primeiro vira a capa.
// 3. Adicione um item abaixo com "folder" igual ao nome da pasta.
export const projectsContent = {
  eyebrow: "Projetos",
  title: "Alguns trabalhos que já entregamos.",
  description:
    "Sistemas e sites desenvolvidos pela nossa equipe. Clique em um projeto para ver as telas.",
  galleryLabel: "Ver telas →",
};

export const projects = [
  {
    folder: "clinica-odontologica",
    title: "Sistema para clínica odontológica",
    description:
      "Gestão completa da clínica: agenda, cadastro de pacientes, atendimentos, prontuário com fotos, confirmações via WhatsApp e chat da equipe.",
    tags: ["Agenda online", "Prontuário digital", "Confirmação por WhatsApp"],
  },
];
