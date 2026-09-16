/**
 * Datos "snapshot" para las demos de proyectos reales (Dilitours y Aura Estética).
 * En producción real estos datos vienen de AppSheet / Google Sheets; aquí se
 * incrustan para que las demos de la web de Axis funcionen sin backend.
 *
 * Las fechas de las reservas se calculan relativas a HOY para que siempre haya
 * días libres y ocupados en el calendario, sin importar cuándo se visite la web.
 */

function isoDaysFromNow(days) {
  const d = new Date();
  d.setHours(12, 0, 0, 0);
  d.setDate(d.getDate() + days);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${dd}`;
}

const T = (days) => isoDaysFromNow(days);

/* ---------------- DILITOURS: flota + reservas ---------------- */

export const VEHICULOS = [
  {
    id: 'SPR',
    nombre: 'Sprinter VIP',
    marca: 'Mercedes-Benz',
    modelo: 'Sprinter 519',
    tipo: 'van',
    tipoLabel: 'Van de Lujo',
    capacidad: 14,
    rendimiento: 9,
    imagen: '/imagenes/cars_fleet.jpg',
    reservas: [
      { fechaInicio: T(2), fechaFin: T(3), tour: 'Traslado aeropuerto PVR' },
      { fechaInicio: T(9), fechaFin: T(11), tour: 'Tour Riviera Mexicana' },
      { fechaInicio: T(16), fechaFin: T(18), tour: 'Evento corporativo' },
    ],
  },
  {
    id: 'SBU',
    nombre: 'Suburban Premier',
    marca: 'Chevrolet',
    modelo: 'Suburban',
    tipo: 'suv',
    tipoLabel: 'SUV',
    capacidad: 7,
    rendimiento: 8,
    imagen: '/imagenes/suburban.avif',
    reservas: [
      { fechaInicio: T(4), fechaFin: T(6), tour: 'Traslado Puerto Vallarta' },
      { fechaInicio: T(13), fechaFin: T(13), tour: 'Traslado a Sayulita' },
    ],
  },
  {
    id: 'HIA',
    nombre: 'Hiace Comfort',
    marca: 'Toyota',
    modelo: 'Hiace',
    tipo: 'van',
    tipoLabel: 'Van',
    capacidad: 10,
    rendimiento: 10,
    imagen: '/imagenes/Toyota-hiace.jpg',
    reservas: [],
  },
  {
    id: 'SED',
    nombre: 'Camry Ejecutivo',
    marca: 'Toyota',
    modelo: 'Camry',
    tipo: 'sedan',
    tipoLabel: 'Sedán Ejecutivo',
    capacidad: 4,
    rendimiento: 12,
    imagen: '/imagenes/toyota-camry.avif',
    reservas: [
      { fechaInicio: T(1), fechaFin: T(1), tour: 'Traslado Monterrey' },
      { fechaInicio: T(7), fechaFin: T(8), tour: 'Congreso Tepic' },
      { fechaInicio: T(14), fechaFin: T(15), tour: 'Tour Bajío' },
    ],
  },
  {
    id: 'CIV',
    nombre: 'Civic Sedán',
    marca: 'Honda',
    modelo: 'Civic',
    tipo: 'sedan',
    tipoLabel: 'Sedán',
    capacidad: 5,
    rendimiento: 14,
    imagen: '/imagenes/honda-civic.jpg',
    reservas: [
      { fechaInicio: T(2), fechaFin: T(2), tour: 'Traslado centro' },
    ],
  },
  {
    id: 'LUX',
    nombre: 'Escalade VIP',
    marca: 'Cadillac',
    modelo: 'Escalade',
    tipo: 'suv',
    tipoLabel: 'SUV de Lujo',
    capacidad: 7,
    rendimiento: 7,
    imagen: '/imagenes/Escalade.jpeg',
    reservas: [
      { fechaInicio: T(3), fechaFin: T(4), tour: 'Boda en Bahía' },
      { fechaInicio: T(10), fechaFin: T(12), tour: 'Tour Islas Marías' },
    ],
  },
];

export const TIPOS_DILITOURS = [
  { id: 'todos', label: 'Todos los vehículos' },
  { id: 'sedan', label: 'Sedán' },
  { id: 'suv', label: 'SUV' },
  { id: 'van', label: 'Van / Minivan' },
];

/* ---------------- AURA ESTÉTICA: catálogo + agenda ---------------- */

export const SALON_DEMO = {
  servicios: [
    { id: 'sv-corte', nombre: 'Corte de cabello', duracion: 45, precio: 250 },
    { id: 'sv-tinte', nombre: 'Color / Tinte', duracion: 120, precio: 900 },
    { id: 'sv-manicure', nombre: 'Manicure', duracion: 45, precio: 220 },
    { id: 'sv-bride', nombre: 'Maquillaje + peinado de novia', duracion: 120, precio: 1500 },
  ],
  estilistas: [
    { id: 'mar', nombre: 'Mariana' },
    { id: 'lui', nombre: 'Luis' },
  ],
  jornadas: {
    mar: { inicio: 9 * 60, fin: 18 * 60 },
    lui: { inicio: 10 * 60, fin: 19 * 60 },
  },
  intervaloBloque: 30,
};

/**
 * Citas que ya están registradas (bloquean horarios en la demo).
 */
export function generarCitasDemo() {
  const raw = [
    { d: 0, e: 'mar', i: 9 * 60, f: 11 * 60 },
    { d: 0, e: 'lui', i: 12 * 60, f: 13 * 60 },
    { d: 1, e: 'mar', i: 13 * 60, f: 15 * 60 },
    { d: 1, e: 'lui', i: 10 * 60, f: 11 * 60 },
    { d: 2, e: 'mar', i: 10 * 60, f: 10 * 60 + 45 },
    { d: 2, e: 'lui', i: 15 * 60, f: 17 * 60 },
    { d: 3, e: 'mar', i: 9 * 60, f: 9 * 60 + 30 },
    { d: 3, e: 'mar', i: 16 * 60, f: 18 * 60 },
    { d: 3, e: 'lui', i: 11 * 60, f: 12 * 60 },
    { d: 5, e: 'mar', i: 12 * 60, f: 14 * 60 },
    { d: 5, e: 'lui', i: 13 * 60, f: 13 * 60 + 45 },
    { d: 7, e: 'mar', i: 9 * 60, f: 10 * 60 + 30 },
    { d: 7, e: 'lui', i: 16 * 60, f: 17 * 60 },
  ];
  return raw.map(({ d, e, i, f }) => ({
    fecha: isoDaysFromNow(d),
    estilistaId: e,
    inicio: i,
    fin: f,
    cliente: 'Cliente reciente',
  }));
}

/**
 * Cita que acaba de crear el usuario (id simple para la demo).
 */
export function generarIdCita() {
  return `AU-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
}