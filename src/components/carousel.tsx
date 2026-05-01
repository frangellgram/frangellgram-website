import { useState, useEffect } from 'react';
import './carousel.css';

const slides = [
    { id: 1, image: "/carousel/porta-1.jpg", alt: "Sesión Retrato" },
    { id: 2, image: "/carousel/porta-2.jpg", alt: "Boda" }, 
    { id: 3, image: "/carousel/porta-3.jpg", alt: "Editorial" },
    { id: 4, image: "/carousel/porta-4.jpg", alt: "Paisaje" }
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
        <div className="carousel-container">
            {slides.map((slide, index) => (
                <div 
                    key={slide.id} 
                    className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                >
                    <img 
                        src={slide.image} 
                        alt={slide.alt}
                        className="carousel-image"
                    />
                    <div className="carousel-overlay"></div>
                </div>
            ))}
            <div className="carousel-text-overlay">
                <h1 className="carousel-title">
                    FRANGELLGRAM
                </h1>
                <h2 className="carousel-subtitle-1">
                    Dominican Wedding Photographer
                </h2>
                <h2 className="carousel-subtitle-2">
                    Dedicated to capturing the start of forever.
                </h2>
            </div>
        </div>
    );
}