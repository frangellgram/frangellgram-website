import './AboutSection.css'; // <--- Conectamos los estilos

interface AboutSectionProps {
    t?: any; // Dejamos esto listo por si quieres traducir textos luego
}

export default function AboutSection({ t: _t }: AboutSectionProps) {
    return (
        <section className="about-section">
            <div className="about-container">
                
                {/* Etiqueta pequeña minimalista */}
                <span className="about-label">
                    Photography & Art
                </span>
                
                {/* Título Fancy */}
                <h2 className="about-title">
                    Hola, soy <span>Frangell.</span>
                </h2>
                
                {/* Texto de presentación */}
                <div className="about-text-content">
                    <p className="about-text">
                        Bienvenido a mi espacio. Soy fotógrafo de bodas y editorial en República Dominicana.
                        Mi enfoque no es solo capturar imágenes, sino detener el tiempo con una estética 
                        que mezcla la elegancia clásica con una visión moderna.
                    </p>
                    <p className="about-text">
                        En cada sesión busco la luz natural, la emoción genuina y esos detalles 
                        que hacen que una historia sea única.
                    </p>
                </div>

                {/* Firma */}
                <div className="about-signature">
                    Frangell R.
                </div>

            </div>
        </section>
    );
}