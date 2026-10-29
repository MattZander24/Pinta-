import { useState } from 'react';
import './Portfolio.css';

const categories = [
  {
    id: 'graphic-design',
    title: 'GRAPHIC DESIGN',
    description: 'Pósters, afiches e identidad visual',
    color: 'pink',
  },
  {
    id: '3d-modeling',
    title: '3D MODELING',
    description: 'Modelado y escenas en tres dimensiones',
    color: 'purple',
  },
  {
    id: 'motion-graphics',
    title: 'MOTION GRAPHICS',
    description: 'Animación y piezas en movimiento',
    color: 'cyan',
  },
  {
    id: 'clientes',
    title: 'CLIENTES',
    description: 'Proyectos realizados junto a nuestros clientes',
    color: 'yellow',
  },
];

export default function Portfolio({ id = 'portfolio' }) {
  const [hoveredCategory, setHoveredCategory] = useState('graphic-design');
  const currentPreview = categories.find(({ id: categoryId }) => categoryId === hoveredCategory)
    ?? categories[0];

  return (
    <section id={id} className="portfolio-section">
      <div className="portfolio-inner">
        <h2 className="portfolio-heading">PORTFOLIO</h2>

        <div className="portfolio-layout">
          <nav className="portfolio-categories" aria-label="Categorías del portfolio">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`/creaciones?categoria=${category.id}`}
                className={`portfolio-category portfolio-category--${category.color}`}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory('graphic-design')}
                onFocus={() => setHoveredCategory(category.id)}
              >
                <span>{category.title}</span>
                <span className="portfolio-category__arrow" aria-hidden="true">›</span>
              </a>
            ))}
          </nav>

          <div
            className={`portfolio-preview portfolio-preview--${currentPreview.color}`}
            aria-live="polite"
            aria-label={`Placeholder de ${currentPreview.title}`}
          >
            <div className="portfolio-preview__art" aria-hidden="true">
              <span className="portfolio-preview__shape portfolio-preview__shape--back" />
              <span className="portfolio-preview__shape portfolio-preview__shape--front" />
              <span className="portfolio-preview__spark portfolio-preview__spark--one">✳</span>
              <span className="portfolio-preview__spark portfolio-preview__spark--two">✦</span>
              <span className="portfolio-preview__label">VISTA PREVIA</span>
            </div>
            <div className="portfolio-preview__caption">
              <span>{currentPreview.title}</span>
              <span>{currentPreview.description}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
