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

export default function ContactForm() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [necesidad, setNecesidad] = useState('');
  const [errors, setErrors] = useState({});

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

    let mensaje = `Hola, me interesa conocer más sobre sus servicios.\n\n`;
    mensaje += `*Nombre:* ${nombre.trim()}\n`;
    mensaje += `*Teléfono:* ${telefono.trim()}\n`;
    if (empresa.trim()) mensaje += `*Empresa:* ${empresa.trim()}\n`;
    mensaje += `*Necesito:* ${necesidad}`;

    const url = `https://wa.me/523112794209?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
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
        <label htmlFor="contact-necesidad">¿Qué necesitas?</label>
        <select
          id="contact-necesidad"
          name="necesidad"
          value={necesidad}
          onChange={(e) => handleChange('necesidad', setNecesidad, e.target.value)}
          aria-invalid={errors.necesidad ? true : undefined}
          aria-describedby={errors.necesidad ? 'contact-necesidad-error' : undefined}
          className={errors.necesidad ? 'field-error' : ''}
        >
          <option value="">Selecciona una opción</option>
          <option value="Página informativa">Página informativa</option>
          <option value="App con AppSheet">App con AppSheet</option>
          <option value="Automatización de procesos">Automatización de procesos</option>
          <option value="Agenda de citas">Agenda de citas</option>
          <option value="Otro">Otro</option>
        </select>
        {errors.necesidad && (
          <p className="field-msg" id="contact-necesidad-error" role="alert">
            {errors.necesidad}
          </p>
        )}
      </div>
      <button type="submit" className="btn btn-primary btn-full" id="contact-submit">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M5.339 18.674l.43-1.578C4.548 15.96 4 14.067 4 12.078 4 6.523 8.523 2 14.078 2c5.556 0 10.078 4.523 10.078 10.078 0 5.556-4.522 10.078-10.078 10.078-1.74 0-3.378-.445-4.806-1.226L5.339 18.674z" />
        </svg>
        Enviar por WhatsApp
      </button>
    </form>
  );
}
