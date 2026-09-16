const CASES = [
  {
    metric: '100%',
    label: 'de disponibilidad de vehículos visible en línea',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 15l1 2 2-2 2-2" />
      </svg>
    ),
    quote:
      'El cliente elige sus fechas y ve qué auto está libre sin llamar. Las cotizaciones por WhatsApp llegan solas.',
    author: 'Equipo DiliTours · Renta de autos y tours',
  },
  {
    metric: '24/7',
    label: 'reservas en línea con confirmación por correo',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
    quote:
      'La clienta agenda su servicio y recibe su correo de confirmación al instante; nosotros solo preparamos la agenda.',
    author: 'Aura Estética · Salón de belleza',
  },
  {
    metric: '+40%',
    label: 'de consultas nuevas desde la página',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    quote:
      'La página nos dio presencia y confianza. Ahora la gente nos encuentra, nos consulta y llega al taller.',
    author: 'Manuel R. · Taller Mecánico Torres',
  },
];

export default function SuccessCases() {
  return (
    <section id="casos-de-exito" aria-labelledby="casos-heading">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">Casos de éxito</div>
          <h2 id="casos-heading">Empresas que confían en nosotros</h2>
          <p>No solo entregamos proyectos: entregamos resultados que se notan todos los días en la operación.</p>
        </div>

        <div className="success-grid">
          {CASES.map((item, i) => (
            <article className="success-card reveal" key={item.metric} style={{ '--d': `${i * 90}ms` }}>
              <div className="success-top">
                <div className="success-icon" aria-hidden="true">{item.icon}</div>
                <div className="success-metric">
                  <span className="k" aria-label={`${item.metric}, ${item.label}`}>{item.metric}</span>
                  <span className="v">{item.label}</span>
                </div>
              </div>
              <blockquote className="success-quote">
                <svg className="success-quote-mark" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M10 8v6c0 3.31-1.79 5.6-4.5 6.5L4.5 18c1.5-.9 2.5-2.3 2.5-4H4V8h6zm10 0v6c0 3.31-1.79 5.6-4.5 6.5l-1-2.5c1.5-.9 2.5-2.3 2.5-4h-4V8h7z" />
                </svg>
                <p>{item.quote}</p>
                <footer className="success-author">
                  <span className="success-avatar" aria-hidden="true">{(item.author[0] || 'C')}</span>
                  {item.author}
                </footer>
              </blockquote>
            </article>
          ))}
        </div>

        <p className="success-note reveal">
          Resultados ilustrativos basados en los proyectos reales DiliTours y Aura Estética, y en proyectos demo.
          ¿Tienes un caso similar en tu negocio? Platícanos y te mostramos qué se puede lograr.
        </p>
      </div>
    </section>
  );
}