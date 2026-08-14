import Link from 'next/link';

export const metadata = {
  title: "Nosotros — Axis",
  description: "Conoce a Axis, el equipo de Tepic, Nayarit que ayuda a pymes de México a digitalizar sus procesos con páginas web y aplicaciones con AppSheet.",
};

export default function Nosotros() {
  return (
    <main>
      <section className="page-hero" aria-labelledby="nosotros-hero-heading">
        <div className="wrap">
          <div className="eyebrow">Nosotros</div>
          <h1 id="nosotros-hero-heading">Conectamos <em>procesos</em>.<br />Impulsamos resultados.</h1>
          <p>Somos Axis: un equipo enfocado en que las empresas mexicanas dejen atrás el papel y los procesos
            manuales, con soluciones digitales simples que sí se usan.</p>
        </div>
      </section>

      <section aria-labelledby="historia-heading">
        <div className="wrap">
          <div className="about">
            <div>
              <div className="eyebrow" style={{ color: 'var(--blue-300)' }}>Nuestra historia</div>
              <h2 id="historia-heading">Nos apasiona ayudar a otras empresas a innovar</h2>
              <p>En Axis nos mueve ayudar a otras empresas a innovar, tanto en sus procesos internos como en la
                manera en que consiguen y conservan clientes. Creemos que cada negocio merece que la gente lo
                encuentre, entienda sus servicios y confíe en él desde el primer clic.</p>
              <p>Por eso combinamos dos mundos que normalmente van por separado: una página web profesional para tu
                presencia digital y una aplicación con AppSheet para ordenar tu operación diaria. Todo en un solo
                equipo, con un solo objetivo: que el cliente quede satisfecho.</p>
              <p>Somos una empresa responsable y formal. Trabajamos con transparencia, plazos reales y comunicación
                directa — hablas con quien hace el trabajo, no con un intermediario.</p>
            </div>
            <div className="about-stats">
              <div className="about-stat">
                <div className="k">Con base en Tepic, Nayarit</div>
                <div className="v">Atendemos empresas en toda la república</div>
              </div>
              <div className="about-stat">
                <div className="k">Páginas web + apps con AppSheet</div>
                <div className="v">Un solo equipo para tu presencia digital y tu operación</div>
              </div>
              <div className="about-stat">
                <div className="k">Procesos a la medida</div>
                <div className="v">Cada solución se diseña según cómo trabaja tu negocio</div>
              </div>
              <div className="about-stat">
                <div className="k">Comunicación directa</div>
                <div className="v">Respuesta el mismo día hábil, siempre</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="valores-heading">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Lo que nos mueve</div>
            <h2 id="valores-heading">Cómo trabajamos en cada proyecto</h2>
            <p>Cuatro principios que aplicamos contigo, sin excepciones.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </div>
              <span className="service-tag">CLARIDAD</span>
              <h3>Nada de letra chica</h3>
              <p>Alcance, tiempos y costos por escrito desde la propuesta. Lo que acordamos es lo que entregamos.</p>
            </div>
            <div className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <span className="service-tag">COMPROMISO</span>
              <h3>Cumplimos fechas</h3>
              <p>Nos comprometemos con plazos reales y te avisamos con anticipación si algo cambia.</p>
            </div>
            <div className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <span className="service-tag">CERCANÍA</span>
              <h3>Hablas directo</h3>
              <p>Tratas con quien construye tu solución. Sin intermediarios y con respuesta el mismo día hábil.</p>
            </div>
            <div className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <span className="service-tag">CALIDAD</span>
              <h3>Hecho a tu medida</h3>
              <p>Nada de plantillas genéricas. Cada solución se diseña según cómo trabaja tu negocio, hoy.</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Llamada a la acción">
        <div className="wrap">
          <div className="services-cta">
            <div className="eyebrow">¿Te gustaría trabajar con nosotros?</div>
            <h2>Hablemos de tu negocio</h2>
            <p>Agenda una plática inicial sin costo ni compromiso. En 30 minutos te decimos qué necesitas y cuánto
              costaría.</p>
            <div className="cta-btns">
              <a className="btn btn-accent" href="https://wa.me/523112794209" target="_blank" rel="noopener noreferrer">
                Escribir por WhatsApp
              </a>
              <Link className="btn btn-ghost-light" href="/contacto">Ir a contacto</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
