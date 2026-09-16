'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { VEHICULOS, TIPOS_DILITOURS } from '@/data/projects';

const MESES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];
const DIAS_SEMANA = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const WA_DILITOURS = 'https://wa.me/5213113924482';

function toISO(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function formatFriendly(str) {
  if (!str) return '';
  const [y, m, d] = str.split('-');
  return `${d}/${m}/${y}`;
}

function formatDisplayDate(str) {
  if (!str) return '';
  const [y, m, d] = str.split('-');
  const mes = MESES[parseInt(m, 10) - 1]?.substring(0, 3);
  return `${d} ${mes} ${y}`;
}

function doRangesOverlap(aStart, aEnd, bStart, bEnd) {
  if (!aStart || !aEnd || !bStart || !bEnd) return false;
  return aStart <= bEnd && aEnd >= bStart;
}

function CalendarioAuto({ auto, onClose }) {
  const hoyStr = useMemo(() => toISO(new Date()), []);
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const año = currentDate.getFullYear();
  const mes = currentDate.getMonth();

  const diasMes = useMemo(() => {
    const primerDia = new Date(año, mes, 1).getDay();
    const totalDias = new Date(año, mes + 1, 0).getDate();
    const totalPrev = new Date(año, mes, 0).getDate();
    const dias = [];
    for (let i = primerDia - 1; i >= 0; i--) {
      const prev = new Date(año, mes - 1, totalPrev - i);
      dias.push({ numero: totalPrev - i, dateStr: toISO(prev), isCurrentMonth: false, isPast: toISO(prev) < hoyStr });
    }
    for (let d = 1; d <= totalDias; d++) {
      const cur = new Date(año, mes, d);
      dias.push({ numero: d, dateStr: toISO(cur), isCurrentMonth: true, isPast: toISO(cur) < hoyStr });
    }
    const faltantes = (7 - (dias.length % 7)) % 7;
    for (let d = 1; d <= faltantes; d++) {
      const next = new Date(año, mes + 1, d);
      dias.push({ numero: d, dateStr: toISO(next), isCurrentMonth: false, isPast: toISO(next) < hoyStr });
    }
    return dias;
  }, [año, mes, hoyStr]);

  const getReserva = (dateStr) =>
    (auto.reservas || []).find((r) => r.fechaInicio <= dateStr && r.fechaFin >= dateStr) || null;

  const handleDiaClick = (dia) => {
    if (dia.isPast || getReserva(dia.dateStr)) return;
    if (!fechaInicio || (fechaInicio && fechaFin)) {
      setFechaInicio(dia.dateStr);
      setFechaFin('');
    } else {
      if (dia.dateStr < fechaInicio) {
        setFechaInicio(dia.dateStr);
        setFechaFin('');
      } else {
        const conflicto = (auto.reservas || []).some((r) =>
          doRangesOverlap(fechaInicio, dia.dateStr, r.fechaInicio, r.fechaFin)
        );
        if (conflicto) {
          setFechaInicio(dia.dateStr);
          setFechaFin('');
        } else {
          setFechaFin(dia.dateStr);
        }
      }
    }
  };

  const rangoValido = Boolean(fechaInicio && fechaFin && fechaFin >= fechaInicio);
  const totalDias = useMemo(() => {
    if (!rangoValido) return fechaInicio ? 1 : 0;
    const diff = new Date(fechaFin) - new Date(fechaInicio);
    return Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1;
  }, [fechaInicio, fechaFin, rangoValido]);

  const cotizar = () => {
    const msj =
      `Hola DiliTours! Quiero cotizar la renta de *${auto.nombre}* (${auto.marca} ${auto.modelo}) ` +
      `Capacidad: ${auto.capacidad} personas\n` +
      (fechaInicio
        ? `Fechas: del ${formatFriendly(fechaInicio)} al ${formatFriendly(fechaFin || fechaInicio)}\n`
        : 'Fechas a definir\n') +
      `\nEnviado desde el demo de Axis.`;
    window.open(`${WA_DILITOURS}?text=${encodeURIComponent(msj)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="dl-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="dl-modal" role="dialog" aria-modal="true" aria-label={`Disponibilidad de ${auto.nombre}`}>
        <div className="dl-modal-head">
          <div>
            <h4>{auto.nombre}</h4>
            <p>{auto.marca} {auto.modelo} · Capacidad: {auto.capacidad} personas · {auto.tipoLabel}</p>
          </div>
          <button className="dl-close" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>

        <div className="dl-car-img">
          <Image src={auto.imagen} alt={auto.nombre} fill sizes="(max-width: 768px) 100vw, 560px" />
        </div>

        <div className="dl-cal-head">
          <button className="dl-cal-arrow" onClick={() => setCurrentDate(new Date(año, mes - 1, 1))} aria-label="Mes anterior">‹</button>
          <strong>{MESES[mes]} {año}</strong>
          <button className="dl-cal-arrow" onClick={() => setCurrentDate(new Date(año, mes + 1, 1))} aria-label="Mes siguiente">›</button>
        </div>

        <div className="dl-cal-grid">
          {DIAS_SEMANA.map((d, i) => (
            <div className="dl-cal-weekday" key={i}>{d}</div>
          ))}
          {diasMes.map((dia, idx) => {
            const reserva = getReserva(dia.dateStr);
            const ocupado = Boolean(reserva);
            const isStart = dia.dateStr === fechaInicio;
            const isEnd = dia.dateStr === fechaFin;
            const inRange = fechaInicio && fechaFin && dia.dateStr > fechaInicio && dia.dateStr < fechaFin;
            let cls = 'dl-cal-day';
            if (!dia.isCurrentMonth) cls += ' dl-cal-day--dim';
            if (dia.isPast) cls += ' dl-cal-day--past';
            if (ocupado) cls += ' dl-cal-day--busy';
            if (!ocupado && !dia.isPast) cls += ' dl-cal-day--free';
            if (isStart || isEnd) cls += ' dl-cal-day--selected';
            if (inRange) cls += ' dl-cal-day--range';
            return (
              <button
                key={idx}
                className={cls}
                disabled={dia.isPast || ocupado}
                onClick={() => handleDiaClick(dia)}
                title={ocupado ? `Ocupado${reserva.tour ? ` — ${reserva.tour}` : ''}` : `Disponible: ${formatFriendly(dia.dateStr)}`}
              >
                <span className="dl-cal-num">{dia.numero}</span>
                {ocupado && <span className="dl-cal-dot dl-cal-dot--busy" />}
                {!ocupado && !dia.isPast && <span className="dl-cal-dot dl-cal-dot--free" />}
              </button>
            );
          })}
        </div>

        <div className="dl-legend">
          <span className="dl-legend-item"><i className="dl-dot-free"></i>Disponible</span>
          <span className="dl-legend-item"><i className="dl-dot-busy"></i>Ocupado</span>
          <span className="dl-legend-item"><i className="dl-dot-sel"></i>Tu selección</span>
        </div>

        <div className="dl-cal-bar">
          <p className="dl-cal-status">
            {fechaInicio
              ? (rangoValido
                  ? `${totalDias} días seleccionados: ${formatDisplayDate(fechaInicio)} → ${formatDisplayDate(fechaFin)}`
                  : 'Selecciona la fecha de regreso')
              : 'Selecciona una fecha de inicio y regreso en el calendario.'}
          </p>
          <div className="dl-bar-actions">
            {fechaInicio && (
              <button className="btn btn-ghost btn-sm" onClick={() => { setFechaInicio(''); setFechaFin(''); }}>
                Limpiar
              </button>
            )}
            <button className="btn btn-primary btn-sm" onClick={cotizar}>
              {rangoValido ? 'Cotizar estas fechas' : 'Cotizar vehículo'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DemoDilitours() {
  const hoyStr = useMemo(() => toISO(new Date()), []);
  const [filtroTipo, setFiltroTipo] = useState('todos');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const [autoDetalle, setAutoDetalle] = useState(null);

  const hayFechas = Boolean(fechaInicio);
  const disponibles = useMemo(
    () =>
      VEHICULOS.map((auto) => {
        const fIni = fechaInicio || hoyStr;
        const fFin = fechaFin || fechaInicio || hoyStr;
        const conflicto = (auto.reservas || []).some((r) =>
          doRangesOverlap(fIni, fFin, r.fechaInicio, r.fechaFin)
        );
        return { ...auto, libre: !conflicto };
      }),
    [fechaInicio, fechaFin, hoyStr]
  );

  const filtrados = useMemo(
    () =>
      disponibles.filter((auto) => {
        const coincideTipo = filtroTipo === 'todos' || auto.tipo === filtroTipo;
        if (!coincideTipo) return false;
        if (hayFechas && soloDisponibles && !auto.libre) return false;
        return true;
      }),
    [disponibles, filtroTipo, hayFechas, soloDisponibles]
  );

  const totalLibres = disponibles.filter((a) => a.libre).length;

  const cotizarAuto = (auto) => {
    const msj =
      `Hola DiliTours! Quiero cotizar la renta de *${auto.nombre}* (${auto.marca} ${auto.modelo}) ` +
      `Capacidad: ${auto.capacidad} personas\nFechas a definir\n\nEnviado desde el demo de Axis.`;
    window.open(`${WA_DILITOURS}?text=${encodeURIComponent(msj)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="dl-demo">
      <div className="dl-search">
        <div className="dl-search-fields">
          <label className="dl-field">
            <span>Fecha de inicio</span>
            <input type="date" value={fechaInicio}
              onChange={(e) => {
                const v = e.target.value;
                if (!v || v < hoyStr) return;
                setFechaInicio(v);
                if (fechaFin && v > fechaFin) setFechaFin('');
              }} />
          </label>
          <label className="dl-field">
            <span>Fecha de regreso</span>
            <input type="date" value={fechaFin} onChange={(e) => {
              const v = e.target.value;
              if (!v || (fechaInicio && v < fechaInicio)) return;
              setFechaFin(v);
            }} />
          </label>
          {hayFechas && (
            <button className="btn btn-ghost btn-sm"
              onClick={() => { setFechaInicio(''); setFechaFin(''); setSoloDisponibles(false); }}>
              Limpiar fechas
            </button>
          )}
        </div>
        {hayFechas && (
          <div className="dl-search-summary">
            <p>
              <strong>{totalLibres} de {VEHICULOS.length} vehículos disponibles</strong> para{' '}
              {fechaInicio && fechaFin && fechaFin !== fechaInicio
                ? `del ${formatFriendly(fechaInicio)} al ${formatFriendly(fechaFin)}`
                : `el día ${formatFriendly(fechaInicio)}`}
            </p>
            <label className="dl-toggle">
              <input type="checkbox" checked={soloDisponibles} onChange={(e) => setSoloDisponibles(e.target.checked)} />
              <span>Solo vehículos libres</span>
            </label>
          </div>
        )}
      </div>

      <div className="dl-cats">
        {TIPOS_DILITOURS.map((t) => (
          <button
            key={t.id}
            className={`dl-cat ${filtroTipo === t.id ? 'active' : ''}`}
            onClick={() => setFiltroTipo(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="dl-grid">
        {filtrados.map((auto) => (
          <article className={`dl-card ${hayFechas && !auto.libre ? 'dl-card--busy' : ''}`} key={auto.id}>
            <div className="dl-card-img">
              <Image src={auto.imagen} alt={auto.nombre} fill sizes="(max-width: 768px) 100vw, 340px" />
              {hayFechas && (
                <span className={`dl-badge ${auto.libre ? 'dl-badge--free' : 'dl-badge--busy'}`}>
                  {auto.libre ? '✓ Disponible' : '✕ En tour / Ocupado'}
                </span>
              )}
              <span className="dl-type">{auto.tipoLabel}</span>
            </div>
            <div className="dl-card-body">
              <h5>{auto.nombre}</h5>
              <p className="dl-card-sub">{auto.marca} {auto.modelo}</p>
              <div className="dl-specs">
                <span>{auto.capacidad} personas</span>
                <span>{auto.rendimiento} km/l</span>
              </div>
              <div className="dl-card-actions">
                <button className="btn btn-ghost btn-sm" onClick={() => setAutoDetalle(auto)}>
                  Disponibilidad
                </button>
                <button className={`btn btn-sm ${hayFechas && !auto.libre ? 'btn-ghost' : 'btn-primary'}`} onClick={() => cotizarAuto(auto)}>
                  {hayFechas && !auto.libre ? 'Consultar' : 'Cotizar'}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {!filtrados.length && (
        <p className="dl-empty">No hay vehículos que coincidan con los filtros seleccionados.</p>
      )}

      {autoDetalle && (
        <CalendarioAuto auto={autoDetalle} onClose={() => setAutoDetalle(null)} />
      )}
    </div>
  );
}