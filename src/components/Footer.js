import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <Link href="/" className="logo" aria-label="Axis — volver arriba">
          <img src="/imagenes/logo.png" alt="Logo Axis" className="logo-img logo-img--sm" />
        </Link>
        <span className="fine">© 2026 Axis · Tepic, Nayarit · Conectamos procesos. Impulsamos resultados.</span>
      </div>
    </footer>
  );
}
