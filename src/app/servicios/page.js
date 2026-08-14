import Link from 'next/link';

export const metadata = {
  title: "Nuestros Servicios — Axis",
  description: "Descubre cómo digitalizar tu pyme en México. Páginas informativas, apps con AppSheet a la medida, automatización y más.",
};

export default function Servicios() {
  return (
    <main>
      <section className="page-hero" aria-labelledby="servicios-hero-heading">
        <div className="wrap">
          <div className="eyebrow">Nuestros servicios</div>
          <h1 id="servicios-hero-heading">Todo lo que tu empresa<br />necesita para operar <em>en digital</em></h1>
          <p>De la primera impresión con tu página web hasta la app que ordena tu operación diaria. Un solo equipo,
            sin intermediarios.</p>
        </div>
      </section>

      <section className="services-full" aria-label="Detalle de servicios">
        <div className="wrap">
          <div className="service-detail-grid">

            {/* 1. Páginas informativas */}
            <div className="service-detail reveal">
              <div className="service-visual">
                <div className="service-visual-inner">
                  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="var(--blue-300)"
                    strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                  <p>Diseño web profesional</p>
                </div>
              </div>
              <div>
                <div className="service-detail-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--blue-300)"
                    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <span className="service-detail-tag">WEB</span>
                <h2>Páginas informativas</h2>
                <p>Sitios web rápidos, claros y visualmente profesionales que generan confianza desde el primer
                  clic. Diseñados para que tus clientes te encuentren y entiendan lo que ofreces.</p>
                <ul className="service-features">
                  <li>Diseño responsivo para móvil y escritorio</li>
                  <li>Optimización SEO para aparecer en Google</li>
                  <li>Velocidad de carga optimizada (Core Web Vitals)</li>
                  <li>Formulario de contacto o WhatsApp integrado</li>
                  <li>Dominio y hosting a tu elección (te asesoramos)</li>
                </ul>
              </div>
            </div>

            {/* 2. Apps con AppSheet */}
            <div className="service-detail reversed reveal">
              <div className="service-visual">
                <div className="service-visual-inner">
                  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="var(--blue-300)"
                    strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                  <p>Aplicaciones a la medida</p>
                </div>
              </div>
              <div>
                <div className="service-detail-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--blue-300)"
                    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </div>
                <span className="service-detail-tag">APP</span>
                <h2>Apps con AppSheet</h2>
                <p>Aplicaciones móviles y web personalizadas para gestionar tu operación diaria: ventas,
                  inventario, clientes, personal y más. Sin código, sin complicaciones.</p>
                <ul className="service-features">
                  <li>Funciona en iOS, Android y navegadores web</li>
                  <li>Datos almacenados en Google Sheets o base de datos propia</li>
                  <li>Notificaciones automáticas por correo o SMS</li>
                  <li>Acceso por roles (admin, empleado, cliente)</li>
                  <li>Modo offline con sincronización automática</li>
                </ul>
              </div>
            </div>

            {/* 3. Automatización */}
            <div className="service-detail reveal">
              <div className="service-visual">
                <div className="service-visual-inner">
                  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="var(--blue-300)"
                    strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                  <p>Flujos automatizados</p>
                </div>
              </div>
              <div>
                <div className="service-detail-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--blue-300)"
                    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <span className="service-detail-tag">AUTO</span>
                <h2>Automatización de procesos</h2>
                <p>Reducimos el trabajo manual en tu empresa: reportes que se generan solos, alertas
                  automáticas, correos de confirmación y flujos que hacen el trabajo repetitivo por ti.</p>
                <ul className="service-features">
                  <li>Reportes automáticos por correo o WhatsApp</li>
                  <li>Alertas de inventario bajo, pagos vencidos o citas próximas</li>
                  <li>Integración con Google Workspace (Gmail, Calendar, Drive)</li>
                  <li>Flujos de aprobación digital</li>
                  <li>Reduce errores humanos en procesos críticos</li>
                </ul>
              </div>
            </div>

            {/* 4. Agenda de citas */}
            <div className="service-detail reversed reveal">
              <div className="service-visual">
                <div className="service-visual-inner">
                  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="var(--blue-300)"
                    strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <p>Reservas en tiempo real</p>
                </div>
              </div>
              <div>
                <div className="service-detail-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--blue-300)"
                    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <span className="service-detail-tag">AGENDA</span>
                <h2>Agenda de citas</h2>
                <p>Tus clientes reservan su horario en línea, tú recibes confirmación al instante. Sin llamadas,
                  sin confusiones. Ideal para clínicas, salones, talleres y cualquier negocio con citas.</p>
                <ul className="service-features">
                  <li>Reserva 24/7 desde celular o computadora</li>
                  <li>Confirmación automática por WhatsApp o correo</li>
                  <li>Recordatorios antes de la cita</li>
                  <li>Vista de calendario para tu equipo</li>
                  <li>Bloqueo de horarios no disponibles</li>
                </ul>
              </div>
            </div>

            {/* 5. Mejora de procesos */}
            <div className="service-detail reveal">
              <div className="service-visual">
                <div className="service-visual-inner">
                  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="var(--blue-300)"
                    strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
                  </svg>
                  <p>Diagnóstico y optimización</p>
                </div>
              </div>
              <div>
                <div className="service-detail-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--blue-300)"
                    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
                  </svg>
                </div>
                <span className="service-detail-tag">MEJORA</span>
                <h2>Mejora de procesos</h2>
                <p>Revisamos cómo trabaja tu negocio hoy y proponemos una forma más simple, rápida y digital de
                  hacerlo. El primer paso antes de cualquier proyecto.</p>
                <ul className="service-features">
                  <li>Diagnóstico de procesos actuales sin costo</li>
                  <li>Mapa de flujo de trabajo digitalizado</li>
                  <li>Propuesta de herramientas específicas para tu giro</li>
                  <li>Estimación de ahorro de tiempo y costos</li>
                  <li>Plan de implementación por etapas</li>
                </ul>
              </div>
            </div>

            {/* 6. Aplicaciones web */}
            <div className="service-detail reversed reveal">
              <div className="service-visual">
                <div className="service-visual-inner">
                  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="var(--blue-300)"
                    strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <p>Herramientas web propias</p>
                </div>
              </div>
              <div>
                <div className="service-detail-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--blue-300)"
                    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <span className="service-detail-tag">WEB APP</span>
                <h2>Aplicaciones web</h2>
                <p>Herramientas más complejas y personalizadas para tu equipo: dashboards, portales de clientes,
                  sistemas de gestión interna. Todo accesible desde cualquier navegador.</p>
                <ul className="service-features">
                  <li>Acceso multi-usuario con autenticación</li>
                  <li>Paneles de control con datos en tiempo real</li>
                  <li>Integración con APIs y servicios externos</li>
                  <li>Portales de clientes o proveedores</li>
                  <li>Escalable según crecimiento de tu empresa</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="services-cta">
            <div className="eyebrow">¿Listo para empezar?</div>
            <h2>Cuéntanos qué necesita tu empresa</h2>
            <p>La primera plática es sin costo y sin compromiso. En 30 minutos ya sabrás qué solución se adapta
              mejor a ti.</p>
            <div className="cta-btns">
              <a className="btn btn-accent" href="https://wa.me/523112794209" target="_blank"
                rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path
                    d="M5.339 18.674l.43-1.578C4.548 15.96 4 14.067 4 12.078 4 6.523 8.523 2 14.078 2c5.556 0 10.078 4.523 10.078 10.078 0 5.556-4.522 10.078-10.078 10.078-1.74 0-3.378-.445-4.806-1.226L5.339 18.674z" />
                </svg>
                Escribir por WhatsApp
              </a>
              <Link className="btn btn-ghost-light" href="/precios">Ver planes y precios →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
