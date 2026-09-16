'use client';

import { useState } from 'react';

const VALIDATIONS = {
  nombre: (value) => {
    if (!value.trim()) return 'Escribe tu nombre para poder saludarte.';
    if (value.trim().length < 2) return 'Tu nombre debe tener al menos 2 letras.';
    return null;
  },
  telefono: (value) => {
    if (!value.trim()) return 'Escribe un número para contactarte.';
    const digits = value.replace(/\D/g, '');
    if (digits.length < 10) return 'El teléfono debe tener al menos 10 dígitos.';
    return null;
  },
  necesidad: (value) => {
    if (!value) return 'Selecciona qué necesitas.';
    return null;
  },
};

const OPCIONES = [
  'Página informativa',
  'App con AppSheet',
  'Agenda de citas',
  'Automatización de procesos',
  'Otro',
];

export default function ContactForm() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [necesidad, setNecesidad] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validateField = (name, value) => {
    if (!VALIDATIONS[name]) return null;
    return VALIDATIONS[name](value);
  };

  const handleChange = (name, setter, value) => {
    setter(value);
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      const error = validateField(name, value);
      if (error) next[name] = error;
      else delete next[name];
      return next;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fields = {
      nombre,
      telefono,
      necesidad,
    };

    const nextErrors = {};
    Object.entries(fields).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) nextErrors[name] = error;
    });

    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      document.getElementById(`contact-${firstError}`)?.focus();
      return;
    }

    let text = `Hola, me interesa conocer más sobre sus servicios.\n\n`;
    text += `*Nombre:* ${nombre.trim()}\n`;
    text += `*Teléfono:* ${telefono.trim()}\n`;
    if (empresa.trim()) text += `*Empresa:* ${empresa.trim()}\n`;
    text += `*Necesito:* ${necesidad}\n`;
    if (mensaje.trim()) text += `\n${mensaje.trim()}`;

    const url = `https://wa.me/523112794209?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setSent(true);
    window.setTimeout(() => setSent(false), 5000);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="contact-nombre">Nombre</label>
        <input
          type="text"
          id="contact-nombre"
          name="nombre"
          placeholder="Tu nombre"
          autoComplete="name"
          value={nombre}
          onChange={(e) => handleChange('nombre', setNombre, e.target.value)}
          aria-invalid={errors.nombre ? true : undefined}
          aria-describedby={errors.nombre ? 'contact-nombre-error' : undefined}
          className={errors.nombre ? 'field-error' : ''}
        />
        {errors.nombre && (
          <p className="field-msg" id="contact-nombre-error" role="alert">
            {errors.nombre}
          </p>
        )}
      </div>
      <div className="field">
        <label htmlFor="contact-telefono">Teléfono / WhatsApp</label>
        <input
          type="tel"
          id="contact-telefono"
          name="telefono"
          placeholder="10 dígitos, ej. 3112345678"
          autoComplete="tel"
          value={telefono}
          onChange={(e) => handleChange('telefono', setTelefono, e.target.value)}
          aria-invalid={errors.telefono ? true : undefined}
          aria-describedby={errors.telefono ? 'contact-telefono-error' : undefined}
          className={errors.telefono ? 'field-error' : ''}
        />
        {errors.telefono && (
          <p className="field-msg" id="contact-telefono-error" role="alert">
            {errors.telefono}
          </p>
        )}
      </div>
      <div className="field">
        <label htmlFor="contact-empresa">Empresa <span className="field-optional">(opcional)</span></label>
        <input
          type="text"
          id="contact-empresa"
          name="empresa"
          placeholder="Nombre de tu empresa"
          autoComplete="organization"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
        />
      </div>
      <div className="field">
        <span className="field-label">¿Qué necesitas?</span>
        <div className="chip-group" role="radiogroup" aria-label="Qué necesitas">
          {OPCIONES.map((opcion) => (
            <button
              type="button"
              role="radio"
              aria-checked={necesidad === opcion}
              key={opcion}
              className={`chip ${necesidad === opcion ? 'active' : ''}`}
              onClick={() => handleChange('necesidad', setNecesidad, opcion)}
            >
              {opcion}
            </button>
          ))}
        </div>
        {errors.necesidad && (
          <p className="field-msg" id="contact-necesidad-error" role="alert">
            {errors.necesidad}
          </p>
        )}
      </div>
      <div className="field">
        <label htmlFor="contact-mensaje">Cuéntanos un poco más <span className="field-optional">(opcional)</span></label>
        <textarea
          id="contact-mensaje"
          name="mensaje"
          rows="3"
          placeholder="Ej. queremos controlar el inventario de 2 tiendas…"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-full" id="contact-submit">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M5.339 18.674l.43-1.578C4.548 15.96 4 14.067 4 12.078 4 6.523 8.523 2 14.078 2c5.556 0 10.078 4.523 10.078 10.078 0 5.556-4.522 10.078-10.078 10.078-1.74 0-3.378-.445-4.806-1.226L5.339 18.674z" />
        </svg>
        Enviar por WhatsApp
      </button>
      <p className={`form-status ${sent ? 'show' : ''}`} role="status" aria-live="polite">
        Abriendo WhatsApp… se enviará tu mensaje con los datos que completaste.
      </p>
    </form>
  );
}