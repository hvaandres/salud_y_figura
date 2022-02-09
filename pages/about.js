import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const About = () => (
  <Root>
    <Head>
      <title>Acerca de Nosotros | Salud y Figura</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
                Salud y Figura
              </h2>
              <h4 className="font-size-subheader mb-4">
              El Dr. Pablo Cruz realiza una consulta médica integral y especializada en bariatria. La consulta incluye: medicamento,  acompañamiento y seguimiento profesional, una  Malteada salud y Figura. Su eje central es la implementación de un estilo de vida saludable cambios de hábitos alimenticios y ejercicio. Contamos con consultas presenciales. Consultorio en Guadalajara, Jalisco y Virtuales á traves de  <a href="https://api.whatsapp.com/send?phone=5213321208071&app=facebook&entry_point=page_cta&fbclid=IwAR0I3ZLggBZ9NE7H3FQKPUu2J890gOuLAYEn-7PTp_2mh_sVYDwGo8iGIDY" target="_blank" className="cjs-link" rel="noopener noreferrer">Whatsapp</a>.
              </h4>
              <div className="about-cjs mt-3 d-flex flex-row">
                <a className="px-4 py-3 font-color-white about-doc" href="https://saludyfigura.mx/" target="_blank" rel="noopener noreferrer">
                  Visita Nuestra Pagina
                </a>
                <a className="px-4 py-3 about-dev" href="https://commercejs.com/docs/community/" target="_blank" rel="noopener noreferrer">
                  Contactanos Ahora
                </a>
              </div>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/cjs-illustration.svg" alt="Commerce.js illustration"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/netlify-illustration.svg" alt="Netlify illustration"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              Ponte en contacto
            </h3>
            <h4 className="font-size-subheader mb-4">
            El Dr. Pablo Cruz realiza una consulta médica integral y especializada en bariatria. La consulta incluye: medicamento, acompañamiento y seguimiento profesional, una Malteada salud y Figura.
            </h4>
            <div className="mt-3">
              <a
                className="px-4 py-3 flex-grow-1 font-color-white about-net"
                href="https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-nextjs-demo-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                Llamanos ahora mismo!
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              Platica con nosotros
            </h3>
            <h4 className="font-size-subheader mb-4">
            Si tienes dudas o preguntas especificas, tu puedes darle click al siguiente link y brindarnos todas esas dudas o preguntas que tienes acerca de nuestros productos y servicios y con gusto te ayudaremos.
            </h4>
            <div className="mt-3">
              <a
                className="px-4 py-3 flex-grow-1 font-color-white about-gb"
                href="https://github.com/chec/commercejs-nextjs-demo-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                Platica con Nosotros
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/github-illustration.svg" alt="GitHub illustration"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/blog-illustration.svg" alt="Commerce.js blog illustration"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              Comparte tu Experiencia
            </h3>
            <h4 className="font-size-subheader mb-4">
              Ahora mismo tu puedes compartirnos tu experiencia a traves de nuestro siguiente formulario
            </h4>
            <div className="mt-3">
              <a
                className="px-5 py-3 flex-grow-1 font-color-white about-blog"
                href="https://www.netlify.com/blog/2020/07/09/create-a-fully-fledged-jamstack-commerce-store-with-commerce.js-and-netlify/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tu Experiencia
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
