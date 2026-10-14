import { useEffect, useState } from "react";
import { projects, projectsContent } from "../data/projects";
import "./Projects.css";

// Carrega todos os prints de screenshots/<pasta>/ automaticamente.
const imageModules = import.meta.glob(
  "../../screenshots/*/*.{png,jpg,jpeg,webp,gif}",
  { eager: true, import: "default" },
);

function getImages(folder) {
  return Object.keys(imageModules)
    .filter((path) => path.includes(`/screenshots/${folder}/`))
    .sort()
    .map((path) => imageModules[path]);
}

function Projects() {
  const [gallery, setGallery] = useState(null);

  const items = projects
    .map((project) => ({ ...project, images: getImages(project.folder) }))
    .filter((project) => project.images.length > 0);

  useEffect(() => {
    if (!gallery) return;

    function handleKey(event) {
      if (event.key === "Escape") setGallery(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  function step(direction) {
    setGallery((current) => {
      const total = current.project.images.length;
      return { ...current, index: (current.index + direction + total) % total };
    });
  }

  return (
    <section className="projects" id="projetos">
      <div className="projects-inner">
        <div className="projects-heading">
          <div>
            <p className="eyebrow">{projectsContent.eyebrow}</p>
            <h2>{projectsContent.title}</h2>
          </div>

          <p className="projects-intro">{projectsContent.description}</p>
        </div>

        <div className="projects-grid">
          {items.map((project) => (
            <article className="project-card" key={project.folder}>
              <button
                className="project-cover"
                type="button"
                onClick={() => setGallery({ project, index: 0 })}
              >
                <img src={project.images[0]} alt={project.title} />
                <span className="project-count">
                  {project.images.length} telas
                </span>
              </button>

              <div className="project-body">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {project.tags?.length > 0 && (
                  <ul className="project-tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}

                <button
                  className="project-link"
                  type="button"
                  onClick={() => setGallery({ project, index: 0 })}
                >
                  {projectsContent.galleryLabel}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {gallery && (
        <div
          className="gallery"
          role="dialog"
          aria-modal="true"
          aria-label={gallery.project.title}
          onClick={() => setGallery(null)}
        >
          <div className="gallery-inner" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-top">
              <strong>{gallery.project.title}</strong>
              <span>
                {gallery.index + 1} / {gallery.project.images.length}
              </span>
              <button
                type="button"
                aria-label="Fechar"
                onClick={() => setGallery(null)}
              >
                ✕
              </button>
            </div>

            <div className="gallery-stage">
              <button
                type="button"
                aria-label="Anterior"
                onClick={() => step(-1)}
              >
                ‹
              </button>
              <img
                src={gallery.project.images[gallery.index]}
                alt={`${gallery.project.title} — tela ${gallery.index + 1}`}
              />
              <button
                type="button"
                aria-label="Próxima"
                onClick={() => step(1)}
              >
                ›
              </button>
            </div>

            <div className="gallery-thumbs">
              {gallery.project.images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  className={index === gallery.index ? "active" : ""}
                  onClick={() => setGallery({ ...gallery, index })}
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
