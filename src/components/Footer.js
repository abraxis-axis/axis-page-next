import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/data/site';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <Link href="/" className="logo" aria-label="Axis — volver arriba">
          <Image src="/imagenes/logo.png" alt="Logo Axis" width={342} height={342} className="logo-img logo-img--sm" />
        </Link>
        <span className="fine">© 2026 {SITE.name} · {SITE.city} · {SITE.tagline}</span>
      </div>
    </footer>
  );
}
