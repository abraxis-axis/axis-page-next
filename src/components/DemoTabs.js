'use client';

import { useState, lazy, Suspense } from 'react';

const DemoDilitours = lazy(() => import('@/components/DemoDilitours'));
const DemoAura = lazy(() => import('@/components/DemoAura'));

export default function DemoTabs() {
  const [activeTab, setActiveTab] = useState('d1');
  const [viewMode, setViewMode] = useState('desktop');
  const [visited, setVisited] = useState({ d4: false, d5: false });

  const handleTabChange = (tabId) => {
    if (tabId === 'd4' || tabId === 'd5') {
      setVisited((prev) => ({ ...prev, [tabId]: true }));
    }
    setActiveTab(tabId);
  };

  const urls = {
    d1: 'tallertorres.mx',
    d4: 'flota.dilitours.com',
    d5: 'reservas.aura-estetica.com',
  };

  return (
    <>
      <div className="demo-tabs" role="tablist" aria-label="Demos interactivos">
        <button
          className={`tab-btn ${activeTab === 'd1' ? 'active' : ''}`}
          role="tab"
          aria-selected={activeTab === 'd1'}
          aria-controls="d1"
          id="tab-d1"
          onClick={() => handleTabChange('d1')}
        >
          Página informativa
        </button>
        <button
          className={`tab-btn ${activeTab === 'd4' ? 'active' : ''}`}
          role="tab"
          aria-selected={activeTab === 'd4'}
          aria-controls="d4"
          id="tab-d4"
          onClick={() => handleTabChange('d4')}
        >
          Renta de autos (DiliTours)
        </button>
        <button
          className={`tab-btn ${activeTab === 'd5' ? 'active' : ''}`}
          role="tab"
          aria-selected={activeTab === 'd5'}
          aria-controls="d5"
          id="tab-d5"
          onClick={() => handleTabChange('d5')}
        >
          Reservas (Aura Estética)
        </button>
      </div>

      <div className="demo-frame">
        <div className="demo-chrome">
          <span className="dot" aria-hidden="true"></span>
          <span className="dot" aria-hidden="true"></span>
          <span className="dot" aria-hidden="true"></span>
          <span className="demo-url" id="demo-url">
            {urls[activeTab]}
          </span>
          <div className={`view-toggle ${activeTab !== 'd1' ? 'hidden' : ''}`} id="view-toggle" aria-label="Cambiar vista">
            <button
              className={viewMode === 'desktop' ? 'active' : ''}
              title="Vista escritorio"
              aria-pressed={viewMode === 'desktop'}
              onClick={() => setViewMode('desktop')}
            >
              ▭
            </button>
            <button
              className={viewMode === 'mobile' ? 'active' : ''}
              title="Vista móvil"
              aria-pressed={viewMode === 'mobile'}
              onClick={() => setViewMode('mobile')}
            >
              ▯
            </button>
          </div>
        </div>

        {/* DEMO 1 */}
        <div
          className={`demo-panel ${activeTab === 'd1' ? 'active' : ''}`}
          id="d1"
          role="tabpanel"
          aria-labelledby="tab-d1"
        >
          <div className={`d1-wrapper ${viewMode === 'mobile' ? 'mobile' : ''}`} id="d1-wrapper">
            <div className="d1-hero">
              <div>
                <p className="d1-title">Taller Mecánico Torres</p>
                <p>
                  Servicio automotriz en Tepic — más de 12 años cuidando tu vehículo. Agenda tu cita en línea.
                </p>
              </div>
            </div>
            <div className="d1-services">
              <div>
                <strong>Diagnóstico</strong>Revisión computarizada completa antes de cualquier reparación.
              </div>
              <div>
                <strong>Frenos y suspensión</strong>Cambio y ajuste con refacciones originales.
              </div>
              <div>
                <strong>Servicio mayor</strong>Afinación, aceite y filtros en menos de 2 horas.
              </div>
            </div>
          </div>
        </div>

        {/* DEMO 4: DiliTours (proyecto real) */}
        <div
          className={`demo-panel ${activeTab === 'd4' ? 'active' : ''}`}
          id="d4"
          role="tabpanel"
          aria-labelledby="tab-d4"
        >
          <div className="demo-real-note">
            <span className="demo-real-dot"></span>
            Demo basada en DiliTours — sitio real de renta de autos y tours (Tepic, Nayarit).
          </div>
          <Suspense fallback={<div className="demo-loading">Cargando demo…</div>}>
            {visited.d4 && <DemoDilitours />}
          </Suspense>
        </div>

        {/* DEMO 5: Aura Estética (proyecto real) */}
        <div
          className={`demo-panel ${activeTab === 'd5' ? 'active' : ''}`}
          id="d5"
          role="tabpanel"
          aria-labelledby="tab-d5"
        >
          <div className="demo-real-note">
            <span className="demo-real-dot"></span>
            Demo basada en Aura Estética — sistema real de reservas de citas con confirmación por correo.
          </div>
          <Suspense fallback={<div className="demo-loading">Cargando demo…</div>}>
            {visited.d5 && <DemoAura />}
          </Suspense>
        </div>
      </div>
    </>
  );
}