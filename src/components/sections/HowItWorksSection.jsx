import React from 'react';
import './HowItWorksSection.css';

function HowItWorksSection() {
  const features = [
    {
      id: 1,
      title: 'Meditación guiada',
      description: 'Sesiones diarias de meditación estructuradas para todos los niveles, desde principiantes hasta practicantes avanzados.',
      imageClass: 'meditation-image'
    },
    {
      id: 2,
      title: 'Historias para dormir',
      description: 'Relatos tranquilizadores narrados por voces reconfortantes que te ayudarán a desconectar y conciliar el sueño rápidamente.',
      imageClass: 'sleep-image'
    },
    {
      id: 3,
      title: 'Música relajante',
      description: 'Paisajes sonoros, música ambiente y sonidos naturales diseñados científicamente para calmar tu mente.',
      imageClass: 'music-image'
    }
  ];

  return (
    <section className="how-it-works-section section">
      <div className="container">
        <div className="section-header">
          <h2>Descubre el mundo de Calm</h2>
          <p className="section-subtitle">
            Contenido de bienestar mental cuidadosamente diseñado para adaptarse a tu vida diaria
          </p>
        </div>

        <div className="features-container">
          {features.map((feature, index) => (
            <div className="feature-card" key={feature.id}>
              <div className={`feature-image ${feature.imageClass}`}></div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <a href={`#feature-${index + 1}`} className="feature-link">Explorar {feature.title.toLowerCase()} →</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="how-it-works-cta">
          <a href="#features" className="btn btn-primary">Ver todo el contenido</a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
