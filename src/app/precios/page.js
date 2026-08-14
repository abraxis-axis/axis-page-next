import Link from 'next/link';
import ImageSpot from '@/components/ImageSpot';

export const metadata = {
  title: "Planes de Inversión — Axis",
  description: "Esquemas claros y sin costos sorpresa. Revisa nuestros planes Esencial, Pro y Proyectos Personalizados para digitalizar tu negocio.",
};

export default function Precios() {
  return (
    <main>
      <section className="page-hero" aria-labelledby="precios-hero-heading">
        <div className="wrap">
          <div className="eyebrow">Planes de inversión</div>
          <h1 id="precios-hero-heading">Invierte en lo que<br />tu negocio <em>necesita</em></h1>
          <p>Esquemas claros y sin costos sorpresa. Todo proyecto cuenta con soporte técnico incluido y un análisis
            detallado de procesos antes de iniciar.</p>
        </div>
      </section>

      <section className="pricing-page" aria-label="Planes y precios">
        <div className="wrap">
          <div className="pricing-grid">

            <div className="pricing-card reveal">
              <span className="pricing-badge">Para empezar</span>
              <div className="pricing-tier">Plan Esencial</div>
              <p className="pricing-price">
                <strong>$400</strong> <span>MXN / mes</span>
              </p>
              <p className="pricing-desc">Tu operación en una aplicación a la medida, con automatizaciones que
                trabajan por ti.</p>
              <ul className="pricing-features">
                <li>Creación de una aplicación a la medida</li>
                <li>Automatizaciones: mensajería y notificaciones</li>
                <li>Actualizaciones de la aplicación incluidas</li>
                <li>Una semana de prueba</li>
                <li>Contrato por 12 meses</li>
              </ul>
              <a className="btn btn-primary pricing-btn"
                href="https://wa.me/523112794209?text=Hola%2C%20me%20interesa%20el%20Plan%20Esencial"
                target="_blank" rel="noopener noreferrer">Elegir Esencial</a>
            </div>

            <div className="pricing-card pricing-featured reveal" style={{ '--d': '100ms' }}>
              <span className="pricing-badge">Más popular</span>
              <div className="pricing-tier">Plan Pro</div>
              <p className="pricing-price">
                <strong>$2,500</strong> <span>MXN de inicio</span>
                <span className="pricing-price-sub">+ $400 MXN / mes</span>
              </p>
              <p className="pricing-desc">Tu app a la medida más la página web de tu empresa, diseñada a tu gusto.</p>
              <ul className="pricing-features">
                <li>Todo lo que incluye el Plan Esencial</li>
                <li>Misma aplicación con automatizaciones</li>
                <li>Análisis de procesos para sistematizarlos y acortarlos</li>
                <li>Página web de la empresa a tu gusto</li>
                <li>Hasta 4 páginas internas</li>
                <li>Landing page incluida</li>
              </ul>
              <a className="btn btn-accent pricing-btn"
                href="https://wa.me/523112794209?text=Hola%2C%20me%20interesa%20el%20Plan%20Pro" target="_blank"
                rel="noopener noreferrer">Elegir Pro</a>
            </div>

            <div className="pricing-card reveal" style={{ '--d': '200ms' }}>
              <span className="pricing-badge">A la medida</span>
              <div className="pricing-tier">Proyecto Personalizado</div>
              <p className="pricing-price">
                <strong>$8,000</strong> <span>MXN desde</span>
              </p>
              <p className="pricing-desc">Soluciones robustas pensadas para tu operación completa. Tú pides, nosotros
                lo construimos.</p>
              <ul className="pricing-features">
                <li>Aplicación web a la medida</li>
                <li>Análisis de procesos para sistematizarlos y acortarlos</li>
                <li>Reservaciones y citas en línea</li>
                <li>Galerías de productos o servicios</li>
                <li>Compras dentro de la aplicación</li>
                <li>Disponibilidad en tiempo real</li>
                <li>Cotización según tu proyecto</li>
              </ul>
              <a className="btn btn-primary pricing-btn"
                href="https://wa.me/523112794209?text=Hola%2C%20me%20interesa%20cotizar%20un%20Proyecto%20Personalizado"
                target="_blank" rel="noopener noreferrer">Cotizar mi proyecto</a>
            </div>

          </div>

          <div className="compare-wrap reveal">
            <div className="compare-head">
              <div className="eyebrow">Comparativa</div>
              <h2>¿Cuál plan se adapta a ti?</h2>
              <p>Revisa de un vistazo qué incluye cada plan y elige el que mejor se ajuste a tu operación.</p>
            </div>
            <div className="compare-table">
              <table>
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>Esencial<span className="sub">$400/mes</span></th>
                    <th className="featured">Pro<span className="sub">$2,500 + $400/mes</span></th>
                    <th>Personalizado<span className="sub">desde $8,000</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Aplicación a la medida</td>
                    <td className="compare-yes">✓</td>
                    <td className="compare-yes">✓</td>
                    <td className="compare-yes">✓</td>
                  </tr>
                  <tr>
                    <td>Automatizaciones (mensajería y notificaciones)</td>
                    <td className="compare-yes">✓</td>
                    <td className="compare-yes">✓</td>
                    <td className="compare-yes">✓</td>
                  </tr>
                  <tr>
                    <td>Actualizaciones de la aplicación</td>
                    <td className="compare-yes">✓</td>
                    <td className="compare-yes">✓</td>
                    <td className="compare-yes">✓</td>
                  </tr>
                  <tr>
                    <td>Una semana de prueba</td>
                    <td className="compare-yes">✓</td>
                    <td className="compare-yes">✓</td>
                    <td className="compare-yes">✓</td>
                  </tr>
                  <tr>
                    <td>Análisis de procesos para sistematizarlos y acortarlos</td>
                    <td className="compare-no">—</td>
                    <td className="compare-yes">✓</td>
                    <td className="compare-yes">✓</td>
                  </tr>
                  <tr>
                    <td>Página web de la empresa (hasta 4 páginas)</td>
                    <td className="compare-no">—</td>
                    <td className="compare-yes">✓</td>
                    <td className="compare-no">—</td>
                  </tr>
                  <tr>
                    <td>Landing page</td>
                    <td className="compare-no">—</td>
                    <td className="compare-yes">✓</td>
                    <td className="compare-no">—</td>
                  </tr>
                  <tr>
                    <td>Reservaciones y citas en línea</td>
                    <td className="compare-no">—</td>
                    <td className="compare-no">—</td>
                    <td className="compare-yes">✓</td>
                  </tr>
                  <tr>
                    <td>Galerías de productos o servicios</td>
                    <td className="compare-no">—</td>
                    <td className="compare-no">—</td>
                    <td className="compare-yes">✓</td>
                  </tr>
                  <tr>
                    <td>Compras dentro de la aplicación</td>
                    <td className="compare-no">—</td>
                    <td className="compare-no">—</td>
                    <td className="compare-yes">✓</td>
                  </tr>
                  <tr>
                    <td>Disponibilidad en tiempo real</td>
                    <td className="compare-no">—</td>
                    <td className="compare-no">—</td>
                    <td className="compare-yes">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="pricing-note reveal">
            <strong>Sin letra chica.</strong> Precios en pesos mexicanos (MXN). Los planes de suscripción incluyen
            soporte técnico y un análisis detallado de procesos antes de iniciar. ¿Tienes dudas? <a
              href="https://wa.me/523112794209" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--blue-500)', fontWeight: 600, textDecoration: 'none' }}>Escríbenos por WhatsApp</a> y
            con gusto te asesoramos.
          </p>

          <ImageSpot banner label="Imagen: ejemplo de resultados" />

          <div className="services-cta reveal">
            <div className="eyebrow">¿Listo para empezar?</div>
            <h2>No encuentras el plan que buscas</h2>
            <p>Cuéntanos qué necesita tu empresa y armamos una cotización a tu medida. La primera plática es sin
              costo y sin compromiso.</p>
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
              <Link className="btn btn-ghost-light" href="/servicios">Ver servicios →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
