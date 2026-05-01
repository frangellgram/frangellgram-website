import { useState, useEffect } from 'react';

const slides = [
    { id: 1, image: "/carousel/portada1.webp", alt: "Sesión Retrato" },
    { id: 2, image: "/carousel/portada2.webp", alt: "Boda" }, 
    { id: 3, image: "/carousel/portada3.webp", alt: "Editorial" },
    { id: 4, image: "/carousel/portada4.webp", alt: "Paisaje" }
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 4000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ height: '54vh', position: 'relative', overflow: 'hidden', width: '100%' }}>
            {slides.map((slide, index) => (
                <div 
                    key={slide.id} 
                    style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        opacity: index === currentIndex ? 1 : 0,
                        transition: 'opacity 1.5s ease-in-out',
                        zIndex: 0
                    }}
                >
                    <img 
                        src={slide.image} 
                        alt={slide.alt}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
                    />
                    <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                        background: 'rgba(0,0,0,0.6)' 
                    }}></div>
                </div>
            ))}
            <div className="carousel-text-overlay">
                <h1 className="carousel-title">
                    FRANGELL VASQUEZ
                </h1>
                <h2 className="carousel-subtitle">
                    Dominican Wedding Photographer
                </h2>
                <h2 className="carousel-subtitle">
                    Dedicated to capturing the start of forever.
                </h2>
            </div>
        </div>
    );
}
