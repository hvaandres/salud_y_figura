import React from 'react';

const Footer = () => (
  <footer className="pt-5">
    <div className="custom-container mb-5 pb-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Salud y Figura
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://saludyfigura.mx/aviso-de-privacidad/"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Avisos de Privacidad
              </a>
              <a
                href="https://saludyfigura.mx/terminos-y-condiciones/"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terminos y Conocimientos
              </a>
            </div>
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=5213321208071&app=facebook&entry_point=page_cta&fbclid=IwAR0LnuDDTtuqFEwrlNNkylskEsW6aebnuJEyJAmrLM-vx8TZ_aQgHbNDqu8"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Detalle de Envios
              </a>
              <a
                href="https://www.facebook.com/malteadas.sf/"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nuestra communidad
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Siguenos
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href=""
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/commerce.js/"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/malteadas.sf"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/channel/UCq24lWo0Z0EXIpx9RFNBPtg"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-3">
            Newsletter
          </p>
          <div className="position-relative">
            <input
              className="borderbottom border-color-gray400 h-48 w-100 px-3"
              placeholder="email address"
            />
            <button className="bg-transparent position-absolute right-0 top-50 translateY--50 pr-2 h-48">
              <img src="/icon/arrow-long-right.svg" className="w-24" alt="Arrow icon"/>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-md-5">
      <div className="bg-brand300">
        <div className="custom-container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="pt-5 pb-0 pt-md-4 pb-md-4 d-flex align-items-center flex-wrap justify-content-center">
            <a
              href="https://saludyfigura.mx/"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nuestro Website Oficial
            </a>
            <p className="px-2 font-color-brand font-size-caption">-</p>
            <a
              href="https://api.whatsapp.com/send?phone=5213321208071&app=facebook&entry_point=page_cta&fbclid=IwAR0LnuDDTtuqFEwrlNNkylskEsW6aebnuJEyJAmrLM-vx8TZ_aQgHbNDqu8"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactanos Ahora
            </a>
            <p className="px-2 font-color-brand font-size-caption">-</p>
            <a
              href="m.me/malteadas.sf"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comparte tu Experiencia
            </a>
          </div>
          <div className="font-color-brand font-size-caption py-4 text-right">
          <a
              href="https://www.instagram.com/madebyuxdev/"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              &copy; { new Date().getFullYear() } Made by UX Dev
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
