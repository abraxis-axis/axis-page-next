import Link from 'next/link';
import NetworkCanvas from '@/components/NetworkCanvas';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="wrap">
          <div>
            <div className="eyebrow hero-eyebrow">Desarrollo web &amp; apps con AppSheet</div>
            <h1 id="hero-heading">Conectamos <em>procesos</em>.<br />Impulsamos resultados.</h1>
            <p className="lead">Diseñamos páginas web y aplicaciones con AppSheet para que las pymes de México dejen
              atrás el papel, las hojas de cálculo sueltas y los procesos manuales — todo en un solo lugar, hecho
              a la medida de tu negocio.</p>
            <div className="hero-actions">
              <Link className="btn btn-accent" href="/ejemplos">Ver ejemplos en vivo</Link>
              <a className="btn btn-ghost-light" href="#contacto">Cotizar mi proyecto</a>
            </div>
          </div>
          <div className="hero-canvas-wrap" aria-hidden="true">
            <NetworkCanvas />
          </div>
        </div>
      </section>

      {/* SERVICIOS SECTION */}
      <section id="servicios" aria-labelledby="servicios-heading">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Servicios</div>
            <h2 id="servicios-heading">Todo lo que tu empresa necesita para operar en digital</h2>
            <p>De la primera impresión con tu página web hasta la app que ordena tu operación diaria.</p>
          </div>
          <div className="services-grid" id="services-grid">
            <div className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L15 14H1L8 1Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="service-tag">WEB</span>
              <h3>Páginas informativas</h3>
              <p>Sitios claros y rápidos para que tus clientes conozcan tu empresa y confíen en ella.</p>
            </div>
            <div className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L15 14H1L8 1Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="service-tag">APP</span>
              <h3>Apps con AppSheet</h3>
              <p>Aplicaciones a la medida de tu operación: ventas, clientes, personal o lo que necesites.</p>
            </div>
            <div className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L15 14H1L8 1Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="service-tag">AUTO</span>
              <h3>Automatización de procesos</h3>
              <p>Menos trabajo manual, menos errores: lo repetitivo se hace solo.</p>
            </div>
            <div className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L15 14H1L8 1Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="service-tag">AGENDA</span>
              <h3>Agenda de citas</h3>
              <p>Tus clientes reservan solos, tú recibes la confirmación al instante.</p>
            </div>
            <div className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L15 14H1L8 1Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="service-tag">MEJORA</span>
              <h3>Mejora de procesos</h3>
              <p>Revisamos cómo trabaja tu negocio hoy y proponemos una forma más simple de hacerlo.</p>
            </div>
            <div className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L15 14H1L8 1Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="service-tag">WEB APP</span>
              <h3>Aplicaciones web</h3>
              <p>Herramientas propias para tu equipo, accesibles desde cualquier dispositivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO SECTION */}
      <section id="como-funciona" aria-labelledby="proceso-heading">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Proceso</div>
            <h2 id="proceso-heading">Simple, claro y sin sorpresas</h2>
            <p>Así trabajamos contigo, de la primera llamada hasta el lanzamiento.</p>
          </div>
          <div className="steps-grid">
            <div className="step-card reveal" style={{ '--d': '0ms' }}>
              <div className="step-num">01</div>
              <div className="step-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
                </svg>
              </div>
              <h3>Plática inicial</h3>
              <p>Nos cuentas de tu negocio, tus procesos y lo que quieres lograr. Sin costo ni compromiso.</p>
            </div>
            <div className="step-card reveal" style={{ '--d': '100ms' }}>
              <div className="step-num">02</div>
              <div className="step-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3>Propuesta a medida</h3>
              <p>Te enviamos un plan detallado con alcance, tiempos y costo. Sin letra chica.</p>
            </div>
            <div className="step-card reveal" style={{ '--d': '200ms' }}>
              <div className="step-num">03</div>
              <div className="step-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
                </svg>
              </div>
              <h3>Diseño y desarrollo</h3>
              <p>Construimos tu solución con revisiones en cada etapa para que quede exactamente como lo imaginas.
              </p>
            </div>
            <div className="step-card reveal" style={{ '--d': '300ms' }}>
              <div className="step-num">04</div>
              <div className="step-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </div>
              <h3>Entrega y soporte</h3>
              <p>Lanzamos juntos y te acompañamos durante los primeros meses para que todo funcione perfecto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EJEMPLOS TEASER */}
      <section id="ejemplos" className="ejemplos-section" aria-labelledby="ejemplos-heading">
        <div className="wrap">
          <div className="teaser-grid">
            <div>
              <div className="eyebrow">Ejemplos en vivo</div>
              <h2 id="ejemplos-heading">Prueba nuestras soluciones en tiempo real</h2>
              <p>Hemos preparado un espacio interactivo independiente para que experimentes de primera mano cómo
                funcionan nuestras creaciones y cómo pueden transformar la operación diaria de tu negocio.</p>
              <div style={{ marginTop: '32px' }}>
                <Link className="btn btn-accent" href="/ejemplos">Probar ejemplos interactivos →</Link>
              </div>
            </div>
            <div className="teaser-features">
              <div className="teaser-card">
                <strong>1. Página Informativa</strong>
                <span>Visualiza un diseño responsivo para móviles y escritorio con velocidad optimizada.</span>
              </div>
              <div className="teaser-card">
                <strong>2. Agenda de Citas</strong>
                <span>Prueba la reserva de horarios en vivo con confirmación simulada inmediata.</span>
              </div>
              <div className="teaser-card">
                <strong>3. App de Inventario</strong>
                <span>Simula un control de stock dinámico con alertas automáticas de bajo stock.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRECIOS TEASER */}
      <section id="precios" aria-labelledby="precios-heading">
        <div className="wrap">
          <div className="teaser-grid" style={{ gridTemplateColumns: '0.9fr 1.1fr' }}>
            <div className="teaser-features">
              <div className="teaser-card">
                <strong>Plan Esencial</strong>
                <span>Perfecto para iniciar presencia digital profesional con landing page de alta velocidad y
                  optimización SEO.</span>
              </div>
              <div className="teaser-card">
                <strong>Plan Pro</strong>
                <span>Nuestra especialidad: integra tu página web con una aplicación AppSheet a la medida de tu
                  operación.</span>
              </div>
              <div className="teaser-card">
                <strong>Proyectos Personalizados</strong>
                <span>Soluciones robustas a la medida con integraciones complejas y múltiples flujos
                  automatizados.</span>
              </div>
            </div>
            <div>
              <div className="eyebrow">Planes de Inversión</div>
              <h2 id="precios-heading">Invierte en lo que tu negocio necesita</h2>
              <p>Ofrecemos esquemas claros y sin costos sorpresa. Todo proyecto cuenta con soporte técnico
                incluido y un análisis detallado de procesos antes de iniciar.</p>
              <div style={{ marginTop: '32px' }}>
                <Link className="btn btn-accent" href="/precios">Ver planes y precios →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="nosotros" aria-labelledby="nosotros-heading">
        <div className="wrap">
          <div className="about">
            <div>
              <div className="eyebrow" style={{ color: 'var(--blue-300)' }}>Nosotros</div>
              <h2 id="nosotros-heading">Nos apasiona ayudar a otras empresas a innovar</h2>
              <p>En Axis nos mueve ayudar a otras empresas a innovar, tanto en sus procesos internos como en la
                manera en que consiguen y conservan clientes. Creemos que cada negocio merece que la gente lo
                encuentre, entienda sus servicios y confíe en él desde el primer clic.</p>
              <p>Somos una empresa responsable y formal, y trabajamos con un solo objetivo detrás de cada
                proyecto: que el cliente quede satisfecho.</p>
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
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contacto" className="contacto-section" aria-labelledby="contacto-heading">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Contacto</div>
            <h2 id="contacto-heading">Cuéntanos de tu negocio</h2>
            <p>Escríbenos y platicamos cómo se vería tu página o tu app.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-panel dark">
              <div className="contact-item">
                <div>
                  <span className="lbl">Teléfono / WhatsApp</span>
                  <span className="val">
                    <a href="https://wa.me/523112794209" target="_blank" rel="noopener noreferrer">
                      311 279 4209
                    </a>
                  </span>
                </div>
              </div>
              <div className="contact-item">
                <div>
                  <span className="lbl">Correo</span>
                  <span className="val">
                    <a href="mailto:abraxis@axis-ab.com">
                      abraxis@axis-ab.com
                    </a>
                  </span>
                </div>
              </div>
              <div className="contact-item">
                <div>
                  <span className="lbl">Ubicación</span>
                  <span className="val">Tepic, Nayarit — servicio en toda la república</span>
                </div>
              </div>
              <p className="contact-response">Respondemos por WhatsApp o correo, normalmente el mismo día hábil.</p>
            </div>
            <div className="contact-panel">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
