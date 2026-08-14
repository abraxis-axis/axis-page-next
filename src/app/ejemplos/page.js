import Link from 'next/link';
import DemoTabs from '@/components/DemoTabs';

export const metadata = {
  title: "Ejemplos en Vivo — Axis",
  description: "Experimenta con demos interactivos de páginas web, apps de reserva de citas y herramientas de inventario.",
};

export default function Ejemplos() {
  return (
    <main>
      <section className="hero-ejemplos">
        <div className="wrap">
          <Link href="/" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Volver al inicio
          </Link>
          <div className="sec-head">
            <div className="eyebrow">Demos Interactivos</div>
            <h1>Así se ven — y así funcionan</h1>
            <p>Prueba tú mismo tres muestras reales de lo que podemos construir para tu empresa: una página
              informativa, una agenda de citas y una app de inventario tipo AppSheet.</p>
          </div>
        </div>
      </section>

      <section className="ejemplos-section demo-container">
        <div className="wrap">
          <DemoTabs />
        </div>
      </section>
    </main>
  );
}
