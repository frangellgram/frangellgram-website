import { useState } from 'react';
import './index.css';
import { translations, type Language } from './components/translations';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {

    const [menuAbierto, setMenuAbierto] = useState(false);

    const [language, setLanguage] = useState<Language>(() => {
        const guardado = localStorage.getItem('idioma');
        return (guardado === 'en' || guardado === 'es') ? (guardado as Language) : 'es';
    });

    const t = translations[language];

    const funcionAbrir = () => {
        setMenuAbierto(true);
    };

    const funcionCerrar = () => {
        setMenuAbierto(false);
    };

    const toggleIdioma = () => {
        setLanguage(prev => {
            const nuevoIdioma = prev === 'es' ? 'en' : 'es';
            localStorage.setItem('idioma', nuevoIdioma);
            return nuevoIdioma;
        });
    };
  

    return (
        <div> 
            <div className="topbar">
                <div className="logotop">
                    <a href="/">
                        <img src="/signatures/Logotop.png" alt="Logo" className="logotopimg" />
                    </a>
                </div>
                <div className="buttonidioma">
                    <button onClick={toggleIdioma}> 
                        {t.boton} 
                    </button>
                </div>
                <div>
                    <div 
                        className={`hamburger-icon ${menuAbierto ? 'open' : ''}`} 
                        onClick={menuAbierto ? funcionCerrar : funcionAbrir}>                                                      
                        <span></span>
                        <span></span>
                    </div>  
                </div>
                    <div className={`navlist ${menuAbierto ? 'visible' : ''}`}>

                    <Link to="/" onClick={funcionCerrar} style={{color: 'inherit', textDecoration: 'none'}}>
                    {t.inicio}
                    </Link>
        
                    <Link to="/portfolio" onClick={funcionCerrar} style={{color: 'inherit', textDecoration: 'none'}}>
                    {t.portafolio}
                    </Link>
        
                    <Link to="/aboutme" onClick={funcionCerrar} style={{color: 'inherit', textDecoration: 'none'}}>
                    {t.sobre_mi}
                    </Link>
        
                    <Link to="/contacts" onClick={funcionCerrar} style={{color: 'inherit', textDecoration: 'none'}}>
                    {t.contacto}
                    </Link>

                    <a href="https://www.instagram.com/frangellgram" target="_blank"> 
                    <img src="/Icons/iglogo.png" alt="Instagram" className="social-media" /> 
                    </a>
                    <a href="https://wa.me/18097207332" target="_blank"> 
                    <img src="/Icons/wslogo.webp" alt="WhatsApp" className="social-media" /> 
                    </a>
                    <a>
                    <img src="/signatures/Logotop.png" alt="Logo" className="logotopimg" />
                    </a>
                </div>
                </div>
                    <div className="main-content">
                    <Routes>
                    <Route path="/" element={<Home t={t} />} />
                    <Route path="/portfolio" element={<h1 style={{paddingTop: '100px', color: 'white'}}>Portafolio</h1>} />
                    <Route path="/aboutme" element={<h1 style={{paddingTop: '100px', color: 'white'}}>Sobre Mí</h1>} />
                    <Route path="/contacts" element={<h1 style={{paddingTop: '100px', color: 'white'}}>Contacto</h1>} />
                </Routes>
            </div>
        </div>
    )
}

export default App;