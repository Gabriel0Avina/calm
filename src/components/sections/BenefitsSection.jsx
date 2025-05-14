import React from 'react';
import './BenefitsSection.css';

function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      icon: '🧠',
      title: 'Reduce ansiedad y estrés',
      description: 'Nuestras meditaciones guiadas te ayudan a disminuir los niveles de estrés en tan solo unos minutos al día.'
    },
    {
      id: 2,
      icon: '😴',
      title: 'Mejora la calidad del sueño',
      description: 'Historias para dormir narradas por voces reconfortantes y paisajes sonoros que inducen al descanso profundo.'
    },
    {
      id: 3,
      icon: '🔍',
      title: 'Aumenta el enfoque mental',
      description: 'Sesiones de mindfulness diseñadas para incrementar tu productividad y capacidad de concentración.'
    },
    {
      id: 4,
      icon: '❤️',
      title: 'Bienestar emocional diario',
      description: 'Desarrolla una mayor resiliencia emocional y aprende a manejar los altibajos de la vida cotidiana.'
    }
  ];

  return (
    <section className="benefits-section section">
      <div className="container">
        <div className="section-header">
          <h2>Una mente más sana comienza aquí</h2>
          <p className="section-subtitle">
            Millones de personas han experimentado estos beneficios con solo unos minutos al día
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div className="benefit-card" key={benefit.id}>
              <div className="benefit-icon">
                {benefit.icon}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="benefits-cta">
          <a href="#signup" className="btn btn-primary">Comenzar mi viaje</a>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
