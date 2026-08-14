import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: "Contacto — Axis",
  description: "Cuéntanos de tu negocio y platicamos cómo se vería tu página o tu app. La primera sesión es gratis.",
};

export default function Contacto() {
  return (
    <main>
      <section className="page-hero" aria-labelledby="contacto-hero-heading">
        <div className="wrap">
          <div className="eyebrow">Contacto</div>
          <h1 id="contacto-hero-heading">Cuéntanos de <em>tu negocio</em></h1>
          <p>Escríbenos y platicamos cómo se vería tu página o tu app. Respondemos normalmente el mismo día hábil.</p>
        </div>
      </section>

      <section className="contact-page" aria-label="Formas de contacto">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="eyebrow">Hablemos</div>
            <h2>La primera plática es sin costo y sin compromiso</h2>
            <p>Cuéntanos qué necesitas y en 30 minutos ya sabrás qué solución se adapta mejor a tu negocio.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-panel dark">
              <div className="contact-item">
                <div>
                  <span className="lbl">Teléfono / WhatsApp</span>
                  <span className="val">
                    <a href="https://wa.me/523112794209" target="_blank" rel="noopener noreferrer">
                      311 279 4209
                    </a>
                  </span>
                </div>
              </div>
              <div className="contact-item">
                <div>
                  <span className="lbl">Correo</span>
                  <span className="val">
                    <a href="mailto:abraxis@axis-ab.com">abraxis@axis-ab.com</a>
                  </span>
                </div>
              </div>
              <div className="contact-item">
                <div>
                  <span className="lbl">Ubicación</span>
                  <span className="val">Tepic, Nayarit — servicio en toda la república</span>
                </div>
              </div>
              <p className="contact-response">Respondemos por WhatsApp o correo, normalmente el mismo día hábil.</p>
            </div>
            <div className="contact-panel">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
