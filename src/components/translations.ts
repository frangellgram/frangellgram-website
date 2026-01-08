export const translations = {
  es: {
    boton: "EN",
    inicio: "Inicio",
    portafolio: "Portafolio",
    sobre_mi: "Sobre mí",
    contacto: "Contacto"
  },
  en: {
    boton: "ES",
    inicio: "Home",
    portafolio: "Portfolio",
    sobre_mi: "About me",
    contacto: "Contact us"
  }
};

export type Language = keyof typeof translations;
