import React from 'react';
import './DownloadAppSection.css';

function DownloadAppSection() {
  return (
    <section className="download-app-section section">
      <div className="download-app-background"></div>
      <div className="container">
        <div className="download-app-grid">
          <div className="download-app-content">
            <h2>Tu bienestar mental, siempre contigo</h2>
            <p className="download-app-description">
              La aplicación #1 en meditación y sueño ahora al alcance de tus manos. Accede a cientos de meditaciones guiadas, historias para dormir, música relajante y clases de movimiento consciente.
            </p>
            <ul className="app-features-list">
              <li>
                <span className="feature-icon">✔</span>
                <span>Nuevos contenidos cada semana</span>
              </li>
              <li>
                <span className="feature-icon">✔</span>
                <span>Meditaciones para cualquier momento del día</span>
              </li>
              <li>
                <span className="feature-icon">✔</span>
                <span>Historias para dormir narradas por voces reconfortantes</span>
              </li>
              <li>
                <span className="feature-icon">✔</span>
                <span>Seguimiento de tu progreso y estadísticas personalizadas</span>
              </li>
            </ul>
            <div className="app-badges">
              <a href="#app-store" className="app-badge">
                <div className="badge-placeholder app-store">
                  <span>Descargar en App Store</span>
                </div>
              </a>
              <a href="#google-play" className="app-badge">
                <div className="badge-placeholder google-play">
                  <span>Disponible en Google Play</span>
                </div>
              </a>
            </div>
            <div className="app-rating">
              <div className="stars">★★★★★</div>
              <p className="rating-text">4.8 / 5.0 - Basado en más de 2 millones de reseñas</p>
            </div>
          </div>
          
          <div className="download-app-image">
            <div className="phone-mockup">
              <div className="phone-placeholder">
                <div className="phone-screen"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadAppSection;
