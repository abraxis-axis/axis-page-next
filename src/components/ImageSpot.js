import Image from "next/image";

/**
 * Espacio reutilizable para imágenes.
 * - Sin `src`: muestra un placeholder estilizado (icono + etiqueta).
 * - Con `src`: renderiza la imagen real con next/image (fill).
 *
 * Uso:
 *   <ImageSpot src="/imagenes/mi-foto.png" alt="..." label="Foto del equipo" ratio="16/10" dark />
 *   <ImageSpot label="Captura de tu app"><svg>...</svg></ImageSpot>
 */
export default function ImageSpot({
  src,
  alt = "",
  label = "Espacio para tu imagen",
  sub,
  ratio = "16 / 10",
  dark = false,
  banner = false,
  className = "",
  children,
}) {
  const cls = [
    "image-spot",
    dark ? "image-spot--dark" : "",
    banner ? "image-spot--banner" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const aspect = banner ? "21 / 9" : ratio;

  if (src) {
    return (
      <figure className={cls} style={{ aspectRatio: aspect }} aria-label={alt || label}>
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" />
      </figure>
    );
  }

  return (
    <figure className={cls} style={{ aspectRatio: aspect }} aria-label={label}>
      <div className="image-spot-icon">
        {children || (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        )}
      </div>
      <div className="image-spot-label">{label}</div>
      {sub && <div className="image-spot-sub">{sub}</div>}
    </figure>
  );
}
