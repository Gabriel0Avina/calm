import React from 'react';
import './HeroSection.css';
// Importaremos video o imagen de fondo en la carpeta assets cuando esté disponible

function HeroSection() {
  return (
    <section className="hero-section">
      {/* Contenedor para la imagen de fondo en la parte superior */}
      <div className="hero-image-container">
        {/* 
          Para un video de fondo (recomendado):
          <video autoPlay muted loop>
            <source src="/src/assets/videos/hero-background.mp4" type="video/mp4" />
          </video>
        */}
        {/* O para una imagen de fondo: */}
        <div className="hero-image" style={{ backgroundImage: 'url(/hero-mountains.webp)' }}></div>
        {/* El overlay oscuro ya no es necesario aquí o se modificará en CSS si se requiere uno sutil */}
      </div>

      {/* Contenedor para el contenido de texto y CTA en la parte inferior */}
      <div className="hero-text-content">
        <div className="container">
          <h1>Calma la mente. Cambia tu vida.</h1>
          <p className="hero-subtitle">
            La salud mental es compleja. Buscar ayuda no tiene por qué ser igual de difícil. Nuestra aplicación te ofrece herramientas para sentirte mejor y contenido personalizado para controlar el estrés y la ansiedad, dormir mejor y estar más presente en tu vida. Relaja la mente y despierta como la persona que deseas ser.
          </p>
          <div className="hero-cta">
            <a href="#signup" className="btn btn-hero-primary">Prueba Calm Gratis</a>
            {/* El botón secundario se ha eliminado */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
