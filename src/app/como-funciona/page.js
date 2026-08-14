import Link from 'next/link';

export const metadata = {
  title: "Cómo Funciona — Axis",
  description: "Conoce nuestro proceso claro, simple y sin sorpresas. Desde la plática inicial hasta el lanzamiento y soporte post-entrega.",
};

export default function ComoFunciona() {
  return (
    <main>
      <section className="page-hero" aria-labelledby="proceso-hero-heading">
        <div className="wrap">
          <div className="eyebrow">Proceso</div>
          <h1 id="proceso-hero-heading">Simple, claro<br />y sin <em>sorpresas</em></h1>
          <p>Así es como trabajamos contigo, desde la primera llamada hasta el lanzamiento — y más allá.</p>
        </div>
      </section>

      <section className="proceso-section" aria-label="Pasos del proceso">
        <div className="wrap">
          <div className="timeline">

            <div className="timeline-item reveal">
              <div className="timeline-num"><span>01</span></div>
              <div className="timeline-body">
                <span className="timeline-tag">Primer contacto</span>
                <h2>Plática inicial</h2>
                <p>Nos cuentas de tu negocio, tus procesos y lo que quieres lograr. No necesitas saber de
                  tecnología ni tener todo definido — nosotros hacemos las preguntas correctas. Esta primera
                  sesión es completamente sin costo y sin compromiso.</p>
                <div className="timeline-details">
                  <span className="timeline-chip">Sin costo</span>
                  <span className="timeline-chip">30 min aprox.</span>
                  <span className="timeline-chip">Por videollamada o WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="timeline-num"><span>02</span></div>
              <div className="timeline-body">
                <span className="timeline-tag">Propuesta</span>
                <h2>Propuesta a medida</h2>
                <p>Con base en la plática, preparamos un documento con el alcance exacto del proyecto, los
                  tiempos de entrega y el costo total. Sin letra chica, sin costos ocultos. Tienes todo el
                  tiempo para revisarlo y hacernos preguntas antes de decidir.</p>
                <div className="timeline-details">
                  <span className="timeline-chip">Alcance por escrito</span>
                  <span className="timeline-chip">Costo fijo</span>
                  <span className="timeline-chip">Plazo de entrega claro</span>
                </div>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="timeline-num"><span>03</span></div>
              <div className="timeline-body">
                <span className="timeline-tag">Arranque</span>
                <h2>Inicio del proyecto</h2>
                <p>Al aprobar la propuesta, hacemos el primer pago (50%) y arrancamos. Definimos los canales de
                  comunicación, las fechas de revisión y los formatos de entrega. Tú siempre sabes en qué
                  etapa estamos.</p>
                <div className="timeline-details">
                  <span className="timeline-chip">50% anticipo</span>
                  <span className="timeline-chip">Canal de comunicación directo</span>
                  <span className="timeline-chip">Fechas claras</span>
                </div>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="timeline-num"><span>04</span></div>
              <div className="timeline-body">
                <span className="timeline-tag">Desarrollo</span>
                <h2>Diseño y construcción</h2>
                <p>Construimos tu solución por etapas con revisiones en cada una. Puedes ver el avance, hacer
                  comentarios y pedir ajustes antes de que todo esté terminado. Así garantizamos que el
                  resultado sea exactamente lo que imaginabas.</p>
                <div className="timeline-details">
                  <span className="timeline-chip">Revisiones incluidas</span>
                  <span className="timeline-chip">Actualizaciones constantes</span>
                  <span className="timeline-chip">Ajustes sin costo extra</span>
                </div>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="timeline-num"><span>05</span></div>
              <div className="timeline-body">
                <span className="timeline-tag">Entrega</span>
                <h2>Lanzamiento y entrega</h2>
                <p>Cuando todo está aprobado, publicamos tu sitio o app y te hacemos una sesión de capacitación
                  para que sepas cómo usarla. Se liquida el 50% restante y el proyecto queda oficialmente en
                  tus manos.</p>
                <div className="timeline-details">
                  <span className="timeline-chip">50% al finalizar</span>
                  <span className="timeline-chip">Capacitación incluida</span>
                  <span className="timeline-chip">Transferencia de accesos</span>
                </div>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="timeline-num"><span>06</span></div>
              <div className="timeline-body">
                <span className="timeline-tag">Post-entrega</span>
                <h2>Soporte y acompañamiento</h2>
                <p>No desaparecemos al entregar. Incluimos un período de soporte post-lanzamiento para resolver
                  dudas, corregir detalles y asegurarnos de que todo funcione perfecto en el mundo real.</p>
                <div className="timeline-details">
                  <span className="timeline-chip">Soporte incluido</span>
                  <span className="timeline-chip">Respuesta el mismo día hábil</span>
                  <span className="timeline-chip">Mantenimiento opcional</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="garantias-section" aria-label="Nuestras garantías">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Lo que nos compromete</div>
            <h2>Nuestras garantías contigo</h2>
          </div>
          <div className="garantias-grid">
            <div className="garantia-card reveal">
              <div className="garantia-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Sin costos ocultos</h3>
              <p>El precio que acordamos es el precio final. No hay cargos sorpresa ni cobros extras por funciones
                que quedaron en el alcance.</p>
            </div>
            <div className="garantia-card reveal">
              <div className="garantia-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Entregas a tiempo</h3>
              <p>Nos comprometemos con fechas reales. Si algo cambia, te avisamos con anticipación y acordamos
                juntos la solución.</p>
            </div>
            <div className="garantia-card reveal">
              <div className="garantia-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3>Comunicación directa</h3>
              <p>Hablas con quien hace el trabajo, no con un intermediario. Respuesta el mismo día hábil, siempre.
              </p>
            </div>
            <div className="garantia-card reveal">
              <div className="garantia-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Revisiones incluidas</h3>
              <p>Cada proyecto incluye rondas de revisión. No pagas extra por ajustar colores, textos o funciones
                dentro del alcance.</p>
            </div>
            <div className="garantia-card reveal">
              <div className="garantia-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3>Tus accesos son tuyos</h3>
              <p>El dominio, el hosting y todas las credenciales del proyecto te pertenecen a ti. Nunca retenemos
                accesos.</p>
            </div>
            <div className="garantia-card reveal">
              <div className="garantia-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>Soporte post-entrega</h3>
              <p>Una vez lanzado el proyecto, seguimos contigo durante el período de soporte para que todo
                funcione perfecto.</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Iniciar proyecto">
        <div className="wrap">
          <div className="services-cta">
            <div className="eyebrow">¿Listo para el primer paso?</div>
            <h2>Agenda tu plática inicial gratis</h2>
            <p>Sin costo, sin compromiso. En 30 minutos te decimos exactamente qué necesitas y cuánto costaría.</p>
            <div className="cta-btns">
              <a className="btn btn-accent" href="https://wa.me/523112794209" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path
                    d="M5.339 18.674l.43-1.578C4.548 15.96 4 14.067 4 12.078 4 6.523 8.523 2 14.078 2c5.556 0 10.078 4.523 10.078 10.078 0 5.556-4.522 10.078-10.078 10.078-1.74 0-3.378-.445-4.806-1.226L5.339 18.674z" />
                </svg>
                Escribir por WhatsApp
              </a>
              <Link className="btn btn-ghost-light" href="/servicios">Ver servicios →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
