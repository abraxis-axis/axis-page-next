'use client';

import { useState } from 'react';

export default function DemoTabs() {
  const [activeTab, setActiveTab] = useState('d1');
  const [viewMode, setViewMode] = useState('desktop');

  // Demo 2: Booking state
  const [svc, setSvc] = useState('Consulta general');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingSlot, setBookingSlot] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const slots = ['9:00', '10:30', '12:00', '16:00', '17:30'];

  // Demo 3: Inventory state
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Filtro de aceite', qty: 24 },
    { id: 2, name: 'Balatas delanteras', qty: 3 },
    { id: 3, name: 'Bujías', qty: 40 },
  ]);
  const [newProd, setNewProd] = useState('');
  const [newQty, setNewQty] = useState('');

  // Handle tab switching
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  // Demo 2 handlers
  const handleServiceChange = (e) => {
    setSvc(e.target.value);
  };

  const handleDateChange = (e) => {
    setBookingDate(e.target.value);
    setBookingSlot('');
    setIsConfirmed(false);
  };

  const handleSlotSelect = (slot) => {
    setBookingSlot(slot);
    setIsConfirmed(false);
  };

  const handleConfirm = () => {
    if (!bookingDate || !bookingSlot) {
      return;
    }
    setIsConfirmed(true);
  };

  const formattedDate = bookingDate
    ? new Date(bookingDate + 'T00:00').toLocaleDateString('es-MX', { day: 'numeric', month: 'short' })
    : '—';

  // Demo 3 handlers
  const handleDeleteInv = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  const handleAddInv = () => {
    const name = newProd.trim();
    const qty = parseInt(newQty, 10);
    if (!name || isNaN(qty) || qty < 0) return;

    setInventory([
      ...inventory,
      { id: Date.now(), name, qty },
    ]);
    setNewProd('');
    setNewQty('');
  };

  const urls = {
    d1: 'tallertorres.mx',
    d2: 'agenda.tuclinica.mx',
    d3: 'inventario.axis-ab.com',
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
          className={`tab-btn ${activeTab === 'd2' ? 'active' : ''}`}
          role="tab"
          aria-selected={activeTab === 'd2'}
          aria-controls="d2"
          id="tab-d2"
          onClick={() => handleTabChange('d2')}
        >
          Agenda de citas
        </button>
        <button
          className={`tab-btn ${activeTab === 'd3' ? 'active' : ''}`}
          role="tab"
          aria-selected={activeTab === 'd3'}
          aria-controls="d3"
          id="tab-d3"
          onClick={() => handleTabChange('d3')}
        >
          App de inventario
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

        {/* DEMO 2 */}
        <div
          className={`demo-panel ${activeTab === 'd2' ? 'active' : ''}`}
          id="d2"
          role="tabpanel"
          aria-labelledby="tab-d2"
        >
          <div className="d2-body">
            <div>
              <div className="field">
                <label htmlFor="svc-select">Servicio</label>
                <select id="svc-select" value={svc} onChange={handleServiceChange}>
                  <option value="Consulta general">Consulta general</option>
                  <option value="Limpieza dental">Limpieza dental</option>
                  <option value="Valoración inicial">Valoración inicial</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="date-select">Fecha</label>
                <input type="date" id="date-select" value={bookingDate} onChange={handleDateChange} />
              </div>
              <div className="field">
                <label>Horario disponible</label>
                <div className="slots" id="slots">
                  {slots.map((slot) => (
                    <div
                      key={slot}
                      className={`slot ${bookingSlot === slot ? 'selected' : ''}`}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleSlotSelect(slot)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleSlotSelect(slot);
                        }
                      }}
                    >
                      {slot}
                    </div>
                  ))}
                </div>
              </div>
              <button className="btn btn-primary btn-sm" id="confirm-btn" onClick={handleConfirm}>
                Confirmar cita
              </button>
            </div>
            <div className="d2-summary">
              <p className="d2-summary-title">Resumen de tu cita</p>
              <div className="row">
                <span>Servicio</span>
                <b id="sum-svc">{svc}</b>
              </div>
              <div className="row">
                <span>Fecha</span>
                <b id="sum-date">{formattedDate}</b>
              </div>
              <div className="row">
                <span>Hora</span>
                <b id="sum-time">{bookingSlot || '—'}</b>
              </div>
              <div className={`d2-confirm ${isConfirmed ? 'show' : ''}`} id="d2-confirm" role="status">
                ✓ Cita confirmada. Te llegará un recordatorio automático un día antes.
              </div>
            </div>
          </div>
        </div>

        {/* DEMO 3 */}
        <div
          className={`demo-panel ${activeTab === 'd3' ? 'active' : ''}`}
          id="d3"
          role="tabpanel"
          aria-labelledby="tab-d3"
        >
          <div className="d3-body">
            <div className="d3-toolbar">
              <p className="d3-title">Inventario — Refaccionaria Axis Demo</p>
              <span className="mono d3-sync">sincronizado hace 2 min</span>
            </div>
            <table className="inv" id="inv-table">
              <thead>
                <tr>
                  <th scope="col">Producto</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Estado</th>
                  <th scope="col">
                    <span className="sr-only">Acciones</span>
                  </th>
                </tr>
              </thead>
              <tbody id="inv-body">
                {inventory.map((item) => {
                  const isLow = item.qty <= 5;
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.qty}</td>
                      <td>
                        <span className={`stock-pill ${isLow ? 'stock-low' : 'stock-ok'}`}>
                          {isLow ? 'Bajo stock' : 'Suficiente'}
                        </span>
                      </td>
                      <td>
                        <button
                          className="del-btn"
                          aria-label={`Eliminar ${item.name}`}
                          onClick={() => handleDeleteInv(item.id)}
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="add-row">
              <input
                type="text"
                name="prod"
                placeholder="Nombre del producto"
                id="new-prod"
                aria-label="Nombre del producto"
                value={newProd}
                onChange={(e) => setNewProd(e.target.value)}
              />
              <input
                type="number"
                name="qty"
                placeholder="Cant."
                id="new-qty"
                aria-label="Cantidad"
                min="0"
                value={newQty}
                onChange={(e) => setNewQty(e.target.value)}
              />
              <button className="btn btn-primary btn-sm" id="add-btn" onClick={handleAddInv}>
                + Agregar producto
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
