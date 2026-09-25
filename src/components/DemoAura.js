'use client';

import { useMemo, useState } from 'react';
import { SALON_DEMO, generarCitasDemo, generarIdCita } from '@/data/projects';
import { SITE } from '@/data/site';

const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const DIAS_COMPLETOS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const WA_AURA = SITE.whatsappUrl;

function toISO(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function formatoHora(min) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

function fechaLarga(str) {
  if (!str) return '';
  const d = new Date(`${str}T12:00:00`);
  return `${DIAS_COMPLETOS[d.getDay()]?.substring(0, 3)} ${d.getDate()} de ${MESES[d.getMonth()].substring(0, 3)}`;
}

function getSlots(dateStr, estilistaId, duracion, citas) {
  const { jornadas, intervaloBloque } = SALON_DEMO;
  const j = jornadas[estilistaId];
  if (!j) return [];
  const hoyStr = toISO(new Date());
  const ahoraMin = new Date().getHours() * 60 + new Date().getMinutes();
  const slots = [];
  for (let t = j.inicio; t + duracion <= j.fin; t += intervaloBloque) {
    const fin = t + duracion;
    if (dateStr === hoyStr && t <= ahoraMin) continue;
    const choca = citas.some(
      (c) => c.estilistaId === estilistaId && c.fecha === dateStr && t < c.fin && fin > c.inicio
    );
    if (!choca) slots.push({ inicio: t, fin });
  }
  return slots;
}

function EmailVistaPrevia({ cita }) {
  return (
    <div className="aura-mail">
      <div className="aura-mail-host">correocliente.com</div>
      <div className="aura-mail-panel">
        <div className="aura-mail-meta">
          <div className="aura-mail-avatar">A</div>
          <div className="aura-mail-head">
            <p className="aura-mail-to">
              <strong>{cita.email || 'tu@correo.com'}</strong> <span>(Para)</span>
            </p>
            <p className="aura-mail-subject">Tu cita en Aura Estética está confirmada</p>
          </div>
        </div>
        <div className="aura-mail-body">
          <p className="aura-mail-greet">Hola {cita.nombre},</p>
          <p className="aura-mail-lead">Tu reserva quedó registrada. Te esperamos.</p>
          <div className="aura-mail-cita">
            <div className="aura-mail-row">
              <span>Servicio</span>
              <strong>{cita.servicio.nombre}</strong>
            </div>
            <div className="aura-mail-row">
              <span>Precio</span>
              <strong>${cita.servicio.precio.toLocaleString('es-MX')}</strong>
            </div>
            <div className="aura-mail-row">
              <span>Fecha</span>
              <strong>{fechaLarga(cita.fecha)}</strong>
            </div>
            <div className="aura-mail-row">
              <span>Hora</span>
              <strong>{formatoHora(cita.hora)} — {formatoHora(cita.hora + cita.servicio.duracion)}</strong>
            </div>
            <div className="aura-mail-row">
              <span>Estilista</span>
              <strong>{cita.estilista}</strong>
            </div>
            <div className="aura-mail-row">
              <span>Folio</span>
              <strong>{cita.folio}</strong>
            </div>
          </div>
          <p className="aura-mail-note">Si esta reserva no fue tuya, ignora este correo o contáctanos al WhatsApp.</p>
          <div className="aura-mail-foot">
            <span>Aura Estética — Estilistas profesionales</span>
            <span>reservas@aura-estetica.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DemoAura() {
  const citasDemo = useMemo(() => generarCitasDemo(), []);
  const proximosDias = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      arr.push({ dateStr: toISO(d), dia: DIAS_COMPLETOS[d.getDay()].substring(0, 3), num: d.getDate(), mes: MESES[d.getMonth()].substring(0, 3) });
    }
    return arr;
  }, []);

  const [paso, setPaso] = useState(1);
  const [servicio, setServicio] = useState(null);
  const [fecha, setFecha] = useState(() => proximosDias[0]?.dateStr || '');
  const [estilista, setEstilista] = useState(SALON_DEMO.estilistas[0].id);
  const [hora, setHora] = useState(null);
  const [form, setForm] = useState({ nombre: '', telefono: '', email: '' });
  const [cita, setCita] = useState(null);

  const slots = useMemo(
    () => (servicio ? getSlots(fecha, estilista, servicio.duracion, citasDemo) : []),
    [servicio, fecha, estilista, citasDemo]
  );

  const proximoLibre = slots.length ? formatoHora(slots[0].inicio) : '';
  const btnSiguiente = {
    nombre: paso === 1 ? 'Seleccionar horario' : paso === 2 ? 'Continuar — datos de contacto' : 'Confirmar reserva',
    disabled: paso === 1 ? !servicio : paso === 2 ? !hora : !form.nombre.trim() || !form.email.trim() || !form.telefono.trim(),
  };

  const confirmar = () => {
    const folio = generarIdCita();
    const info = {
      folio,
      servicio,
      fecha,
      hora,
      estilista: SALON_DEMO.estilistas.find((e) => e.id === estilista).nombre,
      nombre: form.nombre.trim(),
      telefono: form.telefono.trim(),
      email: form.email.trim(),
    };
    setCita(info);
    setPaso(4);
  };

  const enviarWhatsApp = () => {
    if (!cita) return;
    const msj =
      `Hola Aura Estética! Confirmaste mi cita:\n` +
      `· ${cita.servicio.nombre} ($${cita.servicio.precio.toLocaleString('es-MX')})\n` +
      `· ${fechaLarga(cita.fecha)} a las ${formatoHora(cita.hora)}\n` +
      `· Estilista: ${cita.estilista}\n` +
      `· Folio: ${cita.folio}\n` +
      `\nEnviado desde el demo de Axis.`;
    window.open(`${WA_AURA}?text=${encodeURIComponent(msj)}`, '_blank', 'noopener,noreferrer');
  };

  // ---- Elección de hora ----
  const elegirHora = (h) => {
    setHora(h.inicio);
    // Siguiente de forma natural aprovechando el botón
  };

  return (
    <div className="aura-demo">
      <div className="aura-steps">
        {['Servicio', 'Horario', 'Contacto', 'Confirmación'].map((s, i) => {
          const n = i + 1;
          return (
            <div key={s} className={`aura-step ${paso === n ? 'active' : ''} ${paso > n ? 'done' : ''}`}>
              <span className="aura-step-num">{paso > n ? '✓' : n}</span>
              <span className="aura-step-label">{s}</span>
            </div>
          );
        })}
      </div>

      {paso === 1 && (
        <div className="aura-panel">
          <h4>Elige tu servicio</h4>
          <div className="aura-servicios">
            {SALON_DEMO.servicios.map((s) => (
              <button
                key={s.id}
                className={`aura-servicio ${servicio?.id === s.id ? 'active' : ''}`}
                onClick={() => setServicio(s)}
              >
                <strong>{s.nombre}</strong>
                <span className="aura-servicio-meta">
                  {s.duracion} min · ${s.precio.toLocaleString('es-MX')}
                </span>
              </button>
            ))}
          </div>
          <p className="aura-hint">Estos son los servicios del catálogo real de Aura Estética.</p>
        </div>
      )}

      {paso === 2 && servicio && (
        <div className="aura-panel">
          <h4>¿Cuándo te conviene?</h4>
          <div className="aura-dias">
            {proximosDias.map((d) => (
              <button
                key={d.dateStr}
                className={`aura-dia ${fecha === d.dateStr ? 'active' : ''}`}
                onClick={() => { setFecha(d.dateStr); setHora(null); }}
              >
                <span>{d.dia}</span>
                <strong>{d.num}</strong>
                <em>{d.mes}</em>
              </button>
            ))}
          </div>

          <div className="aura-estilistas">
            {SALON_DEMO.estilistas.map((e) => (
              <button
                key={e.id}
                className={`aura-estilista ${estilista === e.id ? 'active' : ''}`}
                onClick={() => { setEstilista(e.id); setHora(null); }}
              >
                ✂ {e.nombre}
              </button>
            ))}
          </div>

          <div className="aura-horarios">
            {slots.length ? (
              slots.map((s) => (
                <button
                  key={`${s.inicio}-${s.fin}`}
                  className={`aura-hora ${hora === s.inicio ? 'active' : ''}`}
                  onClick={() => elegirHora(s)}
                >
                  {formatoHora(s.inicio)}
                </button>
              ))
            ) : (
              <p className="aura-empty">Sin horarios libres para {fechaLarga(fecha)} con este estilista. Prueba otra fecha.</p>
            )}
          </div>
        </div>
      )}

      {paso === 3 && servicio && (
        <div className="aura-panel aura-panel--narrow">
          <h4>Tus datos</h4>
          <div className="aura-form">
            <label className="aura-input">
              <span>Nombre completo</span>
              <input value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} placeholder="Ana García" />
            </label>
            <label className="aura-input">
              <span>Teléfono (WhatsApp)</span>
              <input value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} placeholder="311 000 0000" />
            </label>
            <label className="aura-input">
              <span>Correo electrónico (para tu confirmación)</span>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="ana@correo.com" />
            </label>
          </div>
          <p className="aura-hint">En el proyecto real este correo se envía automáticamente al confirmar (Nodemailer / SMTP). Aquí lo verás en el paso siguiente.</p>
        </div>
      )}

      {paso === 4 && cita && (
        <div className="aura-confirma">
          <div className="aura-exito">
            <div className="aura-check">✓</div>
            <h4>¡Tu cita está confirmada!</h4>
            <p>
              {fechaLarga(cita.fecha)} a las {formatoHora(cita.hora)} con {cita.estilista}. Folio <strong>{cita.folio}</strong>.
            </p>
            <div className="aura-exito-actions">
              <button className="btn btn-primary btn-sm" onClick={enviarWhatsApp}>
                Compartir por WhatsApp
              </button>
              <button className="btn btn-ghost btn-sm" onClick={() => { setCita(null); setPaso(1); setServicio(null); setHora(null); }}>
                Hacer otra reserva
              </button>
            </div>
          </div>
          <div className="aura-correo-card">
            <p className="aura-correo-title">Este es el correo de confirmación que recibe tu cliente:</p>
            <EmailVistaPrevia cita={cita} />
          </div>
        </div>
      )}

      {paso < 4 && (
        <div className="aura-nav">
          {paso > 1 && paso !== 4 && (
            <button className="btn btn-ghost btn-sm" onClick={() => setPaso(paso - 1)}>Atrás</button>
          )}
          <button className="btn btn-primary btn-sm" disabled={btnSiguiente.disabled} onClick={() => (paso === 3 ? confirmar() : setPaso(paso + 1))}>
            {btnSiguiente.nombre}
          </button>
        </div>
      )}
      {paso === 2 && servicio && (
        <p className="aura-hint aura-hint--muted">
          La agenda se calcula al vuelo: los horarios bloqueados (citas existentes) no aparecen.
          {proximoLibre && ` Próximo horario libre disponible: ${proximoLibre}.`}
        </p>
      )}
    </div>
  );
}