'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItem, setOpenItem] = useState(null); // Track the active open accordion item ID

  const categories = [
    { id: 'all', label: 'Todas', count: 20 },
    { id: 'general', label: 'General', count: 4 },
    { id: 'proceso', label: 'Proceso', count: 4 },
    { id: 'costos', label: 'Costos', count: 4 },
    { id: 'appsheet', label: 'AppSheet', count: 4 },
    { id: 'soporte', label: 'Soporte', count: 4 },
  ];

  const faqs = [
    // GENERAL
    {
      id: 'gen-1',
      category: 'general',
      question: '¿Qué hace exactamente Axis?',
      plainText: 'Axis diseña y desarrolla páginas web profesionales y aplicaciones con AppSheet para pymes de México. Nos especializamos en ayudar a negocios a digitalizar sus procesos internos y mejorar su presencia en línea. También ofrecemos automatización de procesos, agendas de citas y consultoría de mejora de procesos. En pocas palabras: conectamos tu operación diaria con herramientas digitales que realmente funcionan.',
      answer: (
        <>
          <p>
            Axis diseña y desarrolla <strong>páginas web profesionales</strong> y{' '}
            <strong>aplicaciones con AppSheet</strong> para pymes de México. Nos especializamos en ayudar a negocios a digitalizar sus procesos internos y mejorar su presencia en línea.
          </p>
          <p>
            También ofrecemos <strong>automatización de procesos</strong>,{' '}
            <strong>agendas de citas</strong> y <strong>consultoría de mejora de procesos</strong>. En pocas palabras: conectamos tu operación diaria con herramientas digitales que realmente funcionan.
          </p>
        </>
      )
    },
    {
      id: 'gen-2',
      category: 'general',
      question: '¿Solo trabajan con empresas de Tepic o atienden a toda la república?',
      plainText: 'Atendemos empresas en toda la república mexicana. Estamos ubicados en Tepic, Nayarit, pero trabajamos 100% de forma remota: reuniones por videollamada, entregas por correo y soporte por WhatsApp o correo electrónico. La distancia no es un obstáculo; de hecho, la mayoría de nuestros clientes están fuera de Nayarit.',
      answer: (
        <>
          <p>
            Atendemos empresas en <strong>toda la república mexicana</strong>. Estamos ubicados en Tepic, Nayarit, pero trabajamos 100% de forma remota: reuniones por videollamada, entregas por correo y soporte por WhatsApp o correo electrónico.
          </p>
          <p>La distancia no es un obstáculo; de hecho, la mayoría de nuestros clientes están fuera de Nayarit.</p>
        </>
      )
    },
    {
      id: 'gen-3',
      category: 'general',
      question: '¿Para qué tipo de empresas trabajan?',
      plainText: 'Nos especializamos en pymes (pequeñas y medianas empresas) de cualquier giro: clínicas, talleres, despachos, restaurantes, distribuidoras, tiendas, agencias, etcétera. Si tu empresa tiene procesos que aún se hacen en papel, Excel o de forma manual, somos el socio ideal para ayudarte a digitalizarlos.',
      answer: (
        <>
          <p>
            Nos especializamos en <strong>pymes (pequeñas y medianas empresas)</strong> de cualquier giro: clínicas, talleres, despachos, restaurantes, distribuidoras, tiendas, agencias, etcétera.
          </p>
          <p>Si tu empresa tiene procesos que aún se hacen en papel, Excel o de forma manual, somos el socio ideal para ayudarte a digitalizarlos.</p>
        </>
      )
    },
    {
      id: 'gen-4',
      category: 'general',
      question: '¿Puedo ver ejemplos de su trabajo?',
      plainText: '¡Sí! Tenemos una página de ejemplos interactivos donde puedes probar demos en vivo de los tipos de soluciones que construimos: páginas informativas, agendas de citas y apps de inventario, entre otros.',
      answer: (
        <p>
          ¡Sí! Tenemos una <Link href="/ejemplos" style={{ color: 'var(--blue-500)', fontWeight: 600, textDecoration: 'underline' }}>página de ejemplos interactivos</Link> donde puedes probar demos en vivo de los tipos de soluciones que construimos: páginas informativas, agendas de citas y apps de inventario, entre otros.
        </p>
      )
    },

    // PROCESO
    {
      id: 'proc-1',
      category: 'proceso',
      question: '¿Cómo es el proceso para iniciar un proyecto?',
      plainText: 'El proceso es simple y sin compromisos: Paso 1 — Plática inicial: Nos cuentas de tu negocio y lo que necesitas. Sin costo. Paso 2 — Propuesta a medida: Te enviamos un plan detallado con alcance, tiempos y costo. Paso 3 — Diseño y desarrollo: Construimos tu solución con revisiones en cada etapa. Paso 4 — Entrega y soporte: Lanzamos juntos y te acompañamos durante los primeros meses.',
      answer: (
        <>
          <p>El proceso es simple y sin compromisos:</p>
          <ul>
            <li><strong>Paso 1 — Plática inicial:</strong> Nos cuentas de tu negocio y lo que necesitas. Sin costo.</li>
            <li><strong>Paso 2 — Propuesta a medida:</strong> Te enviamos un plan detallado con alcance, tiempos y costo.</li>
            <li><strong>Paso 3 — Diseño y desarrollo:</strong> Construimos tu solución con revisiones en cada etapa.</li>
            <li><strong>Paso 4 — Entrega y soporte:</strong> Lanzamos juntos y te acompañamos durante los primeros meses.</li>
          </ul>
        </>
      )
    },
    {
      id: 'proc-2',
      category: 'proceso',
      question: '¿Cuánto tarda en estar lista mi página web o app?',
      plainText: 'Depende del alcance del proyecto: Página informativa (Plan Esencial): 1 a 2 semanas. Página + App AppSheet (Plan Pro): 3 a 5 semanas. Proyectos personalizados: Se define en la propuesta según la complejidad. Siempre te daremos un plazo claro por escrito antes de iniciar.',
      answer: (
        <>
          <p>Depende del alcance del proyecto:</p>
          <ul>
            <li><strong>Página informativa (Plan Esencial):</strong> 1 a 2 semanas.</li>
            <li><strong>Página + App AppSheet (Plan Pro):</strong> 3 a 5 semanas.</li>
            <li><strong>Proyectos personalizados:</strong> Se define en la propuesta según la complejidad.</li>
          </ul>
          <p>Siempre te daremos un plazo claro por escrito antes de iniciar.</p>
        </>
      )
    },
    {
      id: 'proc-3',
      category: 'proceso',
      question: '¿Qué necesito tener listo para que empecemos?',
      plainText: 'No necesitas mucho para arrancar. Lo mínimo que nos ayuda a avanzar rápido: Logo de tu empresa (si tienes). Colores o referencias visuales de tu marca. Texto o información sobre tus servicios. Fotos de tu negocio o productos (opcionales). Si no tienes algo de lo anterior, podemos ayudarte a definirlo durante el proceso.',
      answer: (
        <>
          <p>No necesitas mucho para arrancar. Lo mínimo que nos ayuda a avanzar rápido:</p>
          <ul>
            <li>Logo de tu empresa (si tienes).</li>
            <li>Colores o referencias visuales de tu marca.</li>
            <li>Texto o información sobre tus servicios.</li>
            <li>Fotos de tu negocio o productos (opcionales).</li>
          </ul>
          <p>Si no tienes algo de lo anterior, podemos ayudarte a definirlo durante el proceso.</p>
        </>
      )
    },
    {
      id: 'proc-4',
      category: 'proceso',
      question: '¿Puedo pedir cambios durante el desarrollo?',
      plainText: 'Sí. Trabajamos en etapas con revisiones incluidas para que puedas ver avances y solicitar ajustes antes de la entrega final. Cada propuesta especifica cuántas rondas de revisión están incluidas. Los cambios mayores fuera del alcance acordado se cotizan por separado, pero siempre te avisamos antes de proceder.',
      answer: (
        <>
          <p>Sí. Trabajamos en etapas con revisiones incluidas para que puedas ver avances y solicitar ajustes antes de la entrega final. Cada propuesta especifica cuántas rondas de revisión están incluidas.</p>
          <p>Los cambios mayores fuera del alcance acordado se cotizan por separado, pero siempre te avisamos antes de proceder.</p>
        </>
      )
    },

    // COSTOS
    {
      id: 'cost-1',
      category: 'costos',
      question: '¿Cuánto cuesta una página web o una app?',
      plainText: 'Los precios varían según el alcance. Manejamos tres esquemas: Plan Esencial, Plan Pro y Proyectos personalizados. Para ver los precios exactos, visita nuestra página de planes y precios.',
      answer: (
        <>
          <p>Los precios varían según el alcance. Manejamos tres esquemas:</p>
          <ul>
            <li><strong>Plan Esencial:</strong> Página informativa profesional con SEO y diseño responsivo.</li>
            <li><strong>Plan Pro:</strong> Página web + aplicación AppSheet integrada a medida.</li>
            <li><strong>Proyectos personalizados:</strong> Soluciones complejas con integraciones y automatizaciones.</li>
          </ul>
          <p>Para ver los precios exactos, visita nuestra <Link href="/precios" style={{ color: 'var(--blue-500)', fontWeight: 600, textDecoration: 'underline' }}>página de planes y precios</Link>.</p>
        </>
      )
    },
    {
      id: 'cost-2',
      category: 'costos',
      question: '¿Cómo son los esquemas de pago?',
      plainText: 'Trabajamos con un esquema dividido en etapas: 50% al inicio para arrancar el proyecto. 50% a la entrega cuando el proyecto esté aprobado. Para proyectos grandes o en fases, el esquema puede ajustarse. Todo queda especificado por escrito en la propuesta.',
      answer: (
        <>
          <p>Trabajamos con un esquema dividido en etapas:</p>
          <ul>
            <li><strong>50% al inicio</strong> para arrancar el proyecto.</li>
            <li><strong>50% a la entrega</strong> cuando el proyecto esté aprobado.</li>
          </ul>
          <p>Para proyectos grandes o en fases, el esquema puede ajustarse. Todo queda especificado por escrito en la propuesta.</p>
        </>
      )
    },
    {
      id: 'cost-3',
      category: 'costos',
      question: '¿El dominio y el hosting están incluidos?',
      plainText: 'El dominio y el hosting generalmente no están incluidos en el precio de desarrollo, ya que son servicios de terceros con renovaciones anuales. Sin embargo, podemos ayudarte a contratarlos y configurarlos sin costo adicional. El costo aproximado de un dominio (.com o .mx) es de $200–$400 MXN/año, y el hosting básico ronda los $600–$1,200 MXN/año dependiendo del proveedor.',
      answer: (
        <>
          <p>El dominio y el hosting generalmente <strong>no están incluidos</strong> en el precio de desarrollo, ya que son servicios de terceros con renovaciones anuales. Sin embargo, podemos ayudarte a contratarlos y configurarlos sin costo adicional.</p>
          <p>El costo aproximado de un dominio (.com o .mx) es de $200–$400 MXN/año, y el hosting básico ronda los $600–$1,200 MXN/año dependiendo del proveedor.</p>
        </>
      )
    },
    {
      id: 'cost-4',
      category: 'costos',
      question: '¿Emiten factura (CFDI)?',
      plainText: 'Sí, emitimos factura electrónica (CFDI) a solicitud del cliente. Solo necesitamos tus datos fiscales al momento del pago.',
      answer: (
        <>
          <p>Sí, emitimos <strong>factura electrónica (CFDI)</strong> a solicitud del cliente. Solo necesitamos tus datos fiscales al momento del pago.</p>
        </>
      )
    },

    // APPSHEET
    {
      id: 'app-1',
      category: 'appsheet',
      question: '¿Qué es AppSheet y por qué lo usan?',
      plainText: 'AppSheet es una plataforma de Google que permite crear aplicaciones móviles y web sin escribir código. Los datos se almacenan en Google Sheets, Excel o bases de datos en la nube. Lo usamos porque permite construir apps funcionales y robustas a una fracción del costo de desarrollo tradicional, con mantenimiento más sencillo y tiempos de entrega mucho menores.',
      answer: (
        <>
          <p><strong>AppSheet</strong> es una plataforma de Google que permite crear aplicaciones móviles y web sin escribir código. Los datos se almacenan en Google Sheets, Excel o bases de datos en la nube.</p>
          <p>Lo usamos porque permite construir apps funcionales y robustas a una fracción del costo de desarrollo tradicional, con mantenimiento más sencillo y tiempos de entrega mucho menores.</p>
        </>
      )
    },
    {
      id: 'app-2',
      category: 'appsheet',
      question: '¿Hay un costo mensual por usar AppSheet?',
      plainText: 'Sí. AppSheet cobra una suscripción mensual por usuario. Los planes básicos para pymes rondan entre $5 y $10 USD por usuario al mes. Si ya tienes Google Workspace, es posible que tengas acceso incluido. Te asesoramos para elegir el plan que mejor se adapte a tu número de usuarios y presupuesto.',
      answer: (
        <>
          <p>Sí. AppSheet cobra una <strong>suscripción mensual por usuario</strong>. Los planes básicos para pymes rondan entre <strong>$5 y $10 USD por usuario al mes</strong>. Si ya tienes Google Workspace, es posible que tengas acceso incluido.</p>
          <p>Te asesoramos para elegir el plan que mejor se adapte a tu número de usuarios y presupuesto.</p>
        </>
      )
    },
    {
      id: 'app-3',
      category: 'appsheet',
      question: '¿Se puede usar la app desde celular y computadora?',
      plainText: 'Sí. Las apps de AppSheet funcionan en iOS, Android y navegadores web. Tu equipo puede acceder desde cualquier dispositivo con conexión a internet, y también pueden trabajar sin conexión con sincronización automática.',
      answer: (
        <>
          <p>Sí. Las apps de AppSheet funcionan en <strong>iOS, Android y navegadores web</strong>. Tu equipo puede acceder desde cualquier dispositivo con conexión a internet, y también pueden trabajar sin conexión con sincronización automática.</p>
        </>
      )
    },
    {
      id: 'app-4',
      category: 'appsheet',
      question: '¿Qué tipo de apps pueden hacer con AppSheet?',
      plainText: 'Con AppSheet podemos construir una gran variedad de herramientas de negocio: Control de inventario y almacén, CRM de clientes y ventas, Agenda de citas y reservaciones, Registro de visitas y checklist de campo, Órdenes de trabajo y seguimiento de proyectos, Reportes automáticos y dashboards. Si tienes un proceso en mente, cuéntanos y evaluamos cómo digitalizarlo.',
      answer: (
        <>
          <p>Con AppSheet podemos construir una gran variedad de herramientas de negocio:</p>
          <ul>
            <li>Control de inventario y almacén</li>
            <li>CRM de clientes y ventas</li>
            <li>Agenda de citas y reservaciones</li>
            <li>Registro de visitas y checklist de campo</li>
            <li>Órdenes de trabajo y seguimiento de proyectos</li>
            <li>Reportes automáticos y dashboards</li>
          </ul>
          <p>Si tienes un proceso en mente, cuéntanos y evaluamos cómo digitalizarlo.</p>
        </>
      )
    },

    // SOPORTE
    {
      id: 'sop-1',
      category: 'soporte',
      question: '¿Qué pasa después de que entregan el proyecto?',
      plainText: 'Todos los proyectos incluyen un período de soporte post-entrega para resolver dudas, corregir errores o hacer ajustes menores. La duración depende del plan contratado. Pasado ese período, ofrecemos planes de mantenimiento mensuales para quienes necesitan actualizaciones frecuentes o soporte continuo.',
      answer: (
        <>
          <p>Todos los proyectos incluyen un <strong>período de soporte post-entrega</strong> para resolver dudas, corregir errores o hacer ajustes menores. La duración depende del plan contratado.</p>
          <p>Pasado ese período, ofrecemos planes de mantenimiento mensuales para quienes necesitan actualizaciones frecuentes o soporte continuo.</p>
        </>
      )
    },
    {
      id: 'sop-2',
      category: 'soporte',
      question: '¿Puedo actualizar el contenido de mi página yo mismo?',
      plainText: 'Depende del tipo de proyecto. Si tu página se construye con un CMS, sí podrás editar textos, imágenes y secciones tú mismo. Si es una página estática personalizada, los cambios los gestionamos nosotros. En todos los casos, te capacitamos para que puedas manejar lo que te corresponde de forma autónoma.',
      answer: (
        <>
          <p>Depende del tipo de proyecto. Si tu página se construye con un CMS, sí podrás editar textos, imágenes y secciones tú mismo. Si es una página estática personalizada, los cambios los gestionamos nosotros.</p>
          <p>En todos los casos, <strong>te capacitamos</strong> para que puedas manejar lo que te corresponde de forma autónoma.</p>
        </>
      )
    },
    {
      id: 'sop-3',
      category: 'soporte',
      question: '¿Con qué rapidez responden si hay un problema?',
      plainText: 'Respondemos por WhatsApp o correo el mismo día hábil, generalmente en pocas horas. Para problemas críticos que afecten el funcionamiento del sitio o la app, priorizamos la atención inmediata.',
      answer: (
        <>
          <p>Respondemos por WhatsApp o correo <strong>el mismo día hábil</strong>, generalmente en pocas horas. Para problemas críticos que afecten el funcionamiento del sitio o la app, priorizamos la atención inmediata.</p>
        </>
      )
    },
    {
      id: 'sop-4',
      category: 'soporte',
      question: '¿Qué pasa si quiero agregar funciones nuevas más adelante?',
      plainText: 'No hay problema. Las soluciones que construimos están pensadas para crecer contigo. Si en el futuro necesitas agregar módulos, secciones o integraciones nuevas, cotizamos el trabajo adicional y lo implementamos sin afectar lo que ya tienes funcionando.',
      answer: (
        <>
          <p>No hay problema. Las soluciones que construimos están pensadas para <strong>crecer contigo</strong>. Si en el futuro necesitas agregar módulos, secciones o integraciones nuevas, cotizamos el trabajo adicional y lo implementamos sin afectar lo que ya tienes funcionando.</p>
        </>
      )
    },
  ];

  // Handle Accordion toggles
  const handleToggle = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  // Handle Category Filtering
  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);
    setSearchQuery('');
    setOpenItem(null);
  };

  // Filter FAQs based on active category and search query
  const query = searchQuery.trim().toLowerCase();
  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesQuery =
      !query ||
      faq.question.toLowerCase().includes(query) ||
      faq.plainText.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  // Simple visual text highlighters
  const highlightMatches = (text) => {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="faq-hl">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <main>
      <section className="faq-hero" aria-labelledby="faq-hero-heading">
        <div className="wrap">
          <div className="eyebrow">Preguntas Frecuentes</div>
          <h1 id="faq-hero-heading">
            Resolvemos tus <em>dudas</em>
            <br />
            antes de empezar
          </h1>
          <p>
            Todo lo que necesitas saber sobre cómo trabajamos, cuánto cuesta, qué incluye y cómo logramos que tu proyecto salga bien.
          </p>
          <div className="faq-search-wrap">
            <div className="faq-search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="search"
                id="faq-search"
                placeholder="Busca una pregunta…"
                aria-label="Buscar en preguntas frecuentes"
                autoComplete="off"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setOpenItem(null);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="faq-main" aria-label="Preguntas frecuentes">
        <div className="wrap">
          <div className="faq-layout">
            <aside className="faq-sidebar" aria-label="Categorías de preguntas">
              <div className="faq-cat-label">Categorías</div>
              <div className="faq-cats" role="tablist">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`faq-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                    role="tab"
                    aria-selected={activeCategory === cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                  >
                    <span className="faq-cat-dot"></span>
                    {cat.label}
                    <span className="faq-cat-count">{cat.count}</span>
                  </button>
                ))}
              </div>
            </aside>

            <div className="faq-content">
              {filteredFaqs.length === 0 ? (
                <div className="faq-no-results" id="faq-no-results" style={{ display: 'block' }} aria-live="polite">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  <h3>Sin resultados</h3>
                  <p>Intenta con otras palabras o escríbenos directamente.</p>
                </div>
              ) : (
                <div className="faq-groups" id="faq-groups">
                  {categories
                    .filter((cat) => cat.id !== 'all')
                    .map((cat) => {
                      const groupFaqs = filteredFaqs.filter((faq) => faq.category === cat.id);
                      if (groupFaqs.length === 0) return null;

                      return (
                        <div key={cat.id} className="faq-group visible" data-group={cat.id}>
                          <h2 className="faq-group-title">
                            {cat.label} <span>{groupFaqs.length} {groupFaqs.length === 1 ? 'pregunta' : 'preguntas'}</span>
                          </h2>
                          <div className="faq-list">
                            {groupFaqs.map((faq) => {
                              const isOpen = openItem === faq.id;
                              return (
                                <div key={faq.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
                                  <button
                                    className="faq-q"
                                    aria-expanded={isOpen}
                                    onClick={() => handleToggle(faq.id)}
                                  >
                                    <span className="faq-icon" aria-hidden="true">
                                      {isOpen ? (
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                                          <line x1="5" y1="12" x2="19" y2="12" />
                                        </svg>
                                      ) : (
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                                          <line x1="12" y1="5" x2="12" y2="19" />
                                          <line x1="5" y1="12" x2="19" y2="12" />
                                        </svg>
                                      )}
                                    </span>
                                    {highlightMatches(faq.question)}
                                  </button>
                                  <div
                                    className="faq-a"
                                    role="region"
                                    style={{
                                      maxHeight: isOpen ? '1000px' : '0px',
                                      overflow: 'hidden',
                                      transition: 'max-height 0.3s ease-in-out',
                                    }}
                                  >
                                    <div className="faq-a-inner">
                                      {/* If search query matches, highlight text inside. Else show formatted JSX. */}
                                      {query ? (
                                        <p>{highlightMatches(faq.plainText)}</p>
                                      ) : (
                                        faq.answer
                                      )}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>

          <div className="services-cta" role="complementary" aria-label="Contacto">
            <div className="eyebrow">¿No encontraste tu respuesta?</div>
            <h2>Escríbenos directamente</h2>
            <p>Somos personas reales y respondemos rápido. Cuéntanos tu caso y te ayudamos sin compromiso.</p>
            <div className="cta-btns">
              <a className="btn btn-accent" href="https://wa.me/523112794209" target="_blank"
                rel="noopener noreferrer" id="faq-cta-whatsapp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path
                    d="M5.339 18.674l.43-1.578C4.548 15.96 4 14.067 4 12.078 4 6.523 8.523 2 14.078 2c5.556 0 10.078 4.523 10.078 10.078 0 5.556-4.522 10.078-10.078 10.078-1.74 0-3.378-.445-4.806-1.226L5.339 18.674z" />
                </svg>
                Escribir por WhatsApp
              </a>
              <a className="btn btn-ghost-light" href="mailto:abraxis@axis-ab.com" id="faq-cta-email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Enviar correo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
