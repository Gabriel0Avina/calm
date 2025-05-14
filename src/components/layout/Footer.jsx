import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column footer-brand">
            <h3>Calm</h3>
            <p className="footer-description">
              Encuentra la calma en tu día a día con meditaciones guiadas, programas para dormir, música relajante y más.
            </p>
            <div className="app-download">
              <a href="#app-store" className="download-link">
                {/* Imagen de App Store */}
                <span>Descargar en App Store</span>
              </a>
              <a href="#play-store" className="download-link">
                {/* Imagen de Google Play */}
                <span>Disponible en Google Play</span>
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Compañía</h4>
            <ul className="footer-links">
              <li><a href="#about">Acerca de</a></li>
              <li><a href="#careers">Carreras</a></li>
              <li><a href="#press">Prensa</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Ofertas</h4>
            <ul className="footer-links">
              <li><a href="#meditation">Meditación</a></li>
              <li><a href="#sleep">Dormir</a></li>
              <li><a href="#music">Música</a></li>
              <li><a href="#relaxation">Relajación</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Soporte</h4>
            <ul className="footer-links">
              <li><a href="#help">Ayuda / FAQ</a></li>
              <li><a href="#contact">Contacto</a></li>
              <li><a href="#accessibility">Accesibilidad</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="social-links">
            <a href="#facebook" aria-label="Facebook">FB</a>
            <a href="#twitter" aria-label="Twitter">TW</a>
            <a href="#instagram" aria-label="Instagram">IG</a>
            <a href="#youtube" aria-label="YouTube">YT</a>
          </div>
          
          <div className="legal-links">
            <a href="#terms">Términos de Uso</a>
            <a href="#privacy">Política de Privacidad</a>
            <a href="#cookies">Cookies</a>
          </div>
          
          <p className="copyright">
            &copy; {new Date().getFullYear()} Calm. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
