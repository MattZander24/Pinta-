import { useEffect, useState } from 'react';
import './CreationsGrid.css';

const categories = ['all', 'graphic-design', '3d-modeling', 'motion-graphics', 'clientes'];

const projects = [
  {
    id: 'switch',
    title: 'Nintendo Switch 3D',
    category: '3d-modeling',
    description: 'Modelado 3D',
    visual: 'console',
  },
  {
    id: 'camera',
    title: 'Cámara Vintage',
    category: 'graphic-design',
    description: 'Graphic Design',
    visual: 'camera',
  },
  {
    id: 'grenade',
    title: 'Granada Pinta',
    category: 'motion-graphics',
    description: 'Motion Graphics',
    visual: 'can',
  },
];

export default function CreationsGrid({ categoria = 'all' }) {
  const [selectedCategory, setSelectedCategory] = useState(categoria);

  useEffect(() => {
    const syncCategoryFromUrl = () => {
      const requestedCategory = new URLSearchParams(window.location.search).get('categoria') || 'all';
      setSelectedCategory(categories.includes(requestedCategory) ? requestedCategory : 'all');
    };

    syncCategoryFromUrl();
    window.addEventListener('popstate', syncCategoryFromUrl);
    return () => window.removeEventListener('popstate', syncCategoryFromUrl);
  }, []);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      className="creations-grid"
      aria-label={selectedCategory === 'all' ? 'Todas las creaciones' : `Creaciones: ${selectedCategory}`}
    >
      {filteredProjects.map((project) => (
        <article className={`creation-card creation-card--${project.visual}`} key={project.id}>
          <div className="creation-card__bar" aria-hidden="true" />
          <div className="creation-card__scene" aria-hidden="true">
            <div className="creation-scene__wall">
              <span className="creation-scene__graffiti">PINTA?</span>
              <span className="creation-scene__scribble">crea<br />con<br />pinta</span>
            </div>
            <div className={`creation-object creation-object--${project.visual}`}>
              {project.visual === 'console' && (
                <>
                  <span className="console-grip console-grip--left" />
                  <span className="console-grip console-grip--right" />
                  <span className="console-screen"><span>✦</span></span>
                  <span className="console-stick console-stick--left" />
                  <span className="console-stick console-stick--right" />
                  <span className="console-buttons" />
                </>
              )}
              {project.visual === 'camera' && (
                <>
                  <span className="camera-viewfinder" />
                  <span className="camera-lens camera-lens--top" />
                  <span className="camera-lens camera-lens--bottom" />
                  <span className="camera-flash" />
                </>
              )}
              {project.visual === 'can' && (
                <>
                  <span className="can-cap" />
                  <span className="can-nozzle" />
                  <span className="can-label"><span>✕</span></span>
                  <span className="can-base" />
                </>
              )}
            </div>
            <div className="creation-scene__platform" />
            <div className="creation-card__caption">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        </article>
      ))}

      {filteredProjects.length === 0 && (
        <p className="creations-empty">Todavía no hay proyectos en esta categoría.</p>
      )}
    </section>
  );
}
