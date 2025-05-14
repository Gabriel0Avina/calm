import React from 'react';
import './TestimonialsSection.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Desde que comencé a usar Calm, mi ansiedad ha disminuido significativamente. Las meditaciones guiadas son parte esencial de mi rutina diaria ahora.",
      author: "Ana Martínez",
      role: "Profesional de marketing",
      rating: 5
    },
    {
      id: 2,
      quote: "Me costó mucho tiempo encontrar una solución para mis problemas de sueño. Las historias para dormir de Calm me han ayudado enormemente a desconectar antes de dormir.",
      author: "Roberto Cruz",
      role: "Médico",
      rating: 5
    },
    {
      id: 3,
      quote: "Como madre ocupada, los momentos de calma son escasos. Esta aplicación me da un espacio para respirar y reconectar conmigo misma, incluso cuando solo tengo 10 minutos libres.",
      author: "Elena Vega",
      role: "Emprendedora y madre",
      rating: 5
    },
    {
      id: 4,
      quote: "Uso Calm en mi práctica terapéutica y he visto resultados notables en mis pacientes. La combinación de meditaciones y música es realmente efectiva.",
      author: "Daniel Rojas",
      role: "Psicoterapeuta",
      rating: 5
    },
    {
      id: 5,
      quote: "La función 'Daily Calm' es mi favorita. Diez minutos al día han mejorado mi enfoque y reducido mi estrés laboral. Lo recomiendo a todos mis colegas.",
      author: "Carlos Jiménez",
      role: "Desarrollador de Software",
      rating: 5
    },
    {
      id: 6,
      quote: "Como estudiante, la presión puede ser abrumadora. Calm me ofrece herramientas para manejar la ansiedad antes de los exámenes y para dormir mejor. ¡Un salvavidas!",
      author: "Laura Fernández",
      role: "Estudiante Universitaria",
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section section">
      <div className="container">
        <div className="section-header">
          <h2>Experiencias reales de nuestros usuarios</h2>
          <p className="section-subtitle">
            Descubre cómo Calm ha transformado la vida de millones de personas en todo el mundo
          </p>
        </div>

        {/* Replace existing grid with Swiper */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card">
                <div className="quote-mark">"</div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <div className="avatar-placeholder">
                      {testimonial.author.charAt(0)}
                    </div>
                  </div>
                  <div className="author-info">
                    <p className="author-name">{testimonial.author}</p>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">100M+</div>
            <div className="stat-label">Descargas</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.8</div>
            <div className="stat-label">Calificación promedio</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">140+</div>
            <div className="stat-label">Países</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
