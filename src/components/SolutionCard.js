import Link from 'next/link';

function MockWeb() {
  return (
    <div className="mock mock-web">
      <div className="mock-nav">
        <span className="mock-dot"></span>
        <span className="mock-bar" style={{ width: '26px' }}></span>
        <span className="mock-bar" style={{ width: '30px' }}></span>
        <span className="mock-cta"></span>
      </div>
      <div className="mock-hero">
        <span className="mock-title-bar"></span>
        <span className="mock-line"></span>
        <span className="mock-line" style={{ width: '60%' }}></span>
        <div className="mock-btns">
          <span className="mock-btn"></span>
          <span className="mock-btn ghost"></span>
        </div>
      </div>
      <div className="mock-cols">
        <div className="mock-tile"></div>
        <div className="mock-tile"></div>
        <div className="mock-tile"></div>
      </div>
    </div>
  );
}

function MockBooking() {
  return (
    <div className="mock mock-booking">
      <div className="mock-2col">
        <div className="mock-col">
          <span className="mock-field"></span>
          <span className="mock-field"></span>
          <span className="mock-lbl"></span>
          <div className="mock-slots">
            <span className="mock-slot"></span>
            <span className="mock-slot active"></span>
            <span className="mock-slot"></span>
            <span className="mock-slot"></span>
            <span className="mock-slot"></span>
          </div>
          <span className="mock-btn small"></span>
        </div>
        <div className="mock-summary">
          <span className="mock-title-bar" style={{ background: 'rgba(255,255,255,0.7)' }}></span>
          <div className="mock-check">
            <i></i>
            <b></b>
          </div>
          <div className="mock-check">
            <i></i>
            <b style={{ width: '50%' }}></b>
          </div>
          <div className="mock-check">
            <i></i>
            <b style={{ width: '62%' }}></b>
          </div>
        </div>
      </div>
      <div className="mock-okbar">
        <span className="mock-okpulse"></span>
        <span className="mock-line" style={{ width: '70%' }}></span>
      </div>
    </div>
  );
}

function MockInventory() {
  return (
    <div className="mock mock-inventory">
      <div className="mock-inv-head">
        <span className="mock-title-bar"></span>
        <span className="mock-sync"></span>
      </div>
      <div className="mock-rows">
        <div className="mock-row">
          <b></b>
          <span className="mock-pill ok"></span>
        </div>
        <div className="mock-row">
          <b style={{ width: '45%' }}></b>
          <span className="mock-pill low"></span>
        </div>
        <div className="mock-row">
          <b></b>
          <span className="mock-pill ok"></span>
        </div>
        <div className="mock-row">
          <b style={{ width: '55%' }}></b>
          <span className="mock-pill ok"></span>
        </div>
        <div className="mock-row">
          <b></b>
          <span className="mock-pill low"></span>
        </div>
      </div>
      <div className="mock-add">
        <span className="mock-bar" style={{ flex: 1 }}></span>
        <span className="mock-btn small"></span>
      </div>
    </div>
  );
}

function MockDilitours() {
  return (
    <div className="mock mock-dilitours">
      <div className="mock-dl-search">
        <span className="mock-field"></span>
        <span className="mock-field" style={{ width: '42%' }}></span>
      </div>
      <div className="mock-dl-car">
        <span className="mock-dl-photo"></span>
        <div className="mock-dl-carinfo">
          <span className="mock-title-bar"></span>
          <span className="mock-line" style={{ width: '68%' }}></span>
          <div className="mock-cal">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <span key={i} className={`mock-cal-dot ${[2, 5, 7, 9].includes(i) ? 'busy' : 'free'}`}></span>
            ))}
          </div>
          <div className="mock-bar-actions">
            <span className="mock-btn small"></span>
            <span className="mock-btn small ghost"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockAura() {
  return (
    <div className="mock mock-aura">
      <div className="mock-aura-steps">
        <span className="mock-step active"></span>
        <span className="mock-step active"></span>
        <span className="mock-step"></span>
      </div>
      <div className="mock-aura-mail">
        <span className="mock-mail-head"></span>
        <div className="mock-mail-body">
          <span className="mock-title-bar" style={{ width: '70%' }}></span>
          <span className="mock-line" style={{ width: '52%' }}></span>
          <div className="mock-mail-cita">
            <span className="mock-line"></span>
            <span className="mock-line" style={{ width: '72%' }}></span>
            <span className="mock-line" style={{ width: '48%' }}></span>
          </div>
          <div className="mock-mail-actions">
            <span className="mock-btn small"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

const MOCKS = {
  web: MockWeb,
  booking: MockBooking,
  inventory: MockInventory,
  dilitours: MockDilitours,
  aura: MockAura,
};

/**
 * Tarjeta de portafolio con maqueta visual de la pantalla y CTA "Ver Demo".
 * - `variant`: 'web' | 'booking' | 'inventory' | 'dilitours' | 'aura' (maqueta CSS incluida).
 * - `children`: opcional, contenido personalizado del preview (p. ej. un <img>/GIF).
 * - `real`: marca la tarjeta como proyecto real (distintivo + acento de color).
 */
export default function SolutionCard({
  variant = 'web',
  tag,
  title,
  url,
  description,
  features = [],
  demoHref = '/ejemplos',
  real = false,
  children,
}) {
  const MockScreen = MOCKS[variant] || MockWeb;

  return (
    <article className={`solution-card ${real ? 'solution-card--real' : ''} reveal`}>
      <div className="solution-preview" role="img" aria-label={`Maqueta de pantalla: ${title}`}>
        {children || <MockScreen />}
        <Link
          className="solution-overlay"
          href={demoHref}
          aria-label={`Ver demo de ${title}`}
          tabIndex={-1}
        >
          <span className="solution-play" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </Link>
        {tag && (
          <span className={`solution-pill mono ${real ? 'solution-pill--real' : ''}`}>
            {real && <span className="solution-real-dot" aria-hidden="true"></span>}
            {tag}
          </span>
        )}
      </div>
      <div className="solution-body">
        {url && <div className="solution-url mono">{url}</div>}
        <h3>{title}</h3>
        <p>{description}</p>
        {features.length > 0 && (
          <ul className="solution-features">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}
        <Link className="btn btn-accent btn-demo" href={demoHref}>
          Ver Demo
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </article>
  );
}