import React from "react";
import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.aboutSection} id="about">
      <br />
      <h1 className={styles.titleAbout}>ACERCA DE NOSOTROS</h1>
        <div className={styles.SpaceBody2}>
          <h3 className={styles.titleAbout1}>Visión:</h3>
          <p className={styles.textAboutPart} > Ser una consultora reconocida en toda Mendoza, 
          por brindar apoyo y solucionar de manera rápida y efectiva las necesidades de 
          nuestros clientes.
          </p>
        </div>
      <div className={styles.SpaceBody2}>
        <h3 className={styles.titleAbout1}>Misión:</h3>
        <p className={styles.textAboutPart}>Somos un equipo de profesionales 
          capacitados y con vocación de servicio, dedicados a identificar las necesidades de negocio y marketing de 
          nuestros clientes, al cual acompañamos en el proceso de gestión y desarrollo 
          de herramientas para lograr sus objetivos empresariales.
        </p>
      </div>
      <div className={styles.SpaceBody2}>
        
         <h3 className={styles.titleAbout1}>
          
              Valores de la empresa:
            
          </h3>
          {/* <div className="UlForm"> */}
            {/* <div >
              <ul>Responsabilidad</ul>
              <ul>Honestidad</ul>
              <ul>Empatía</ul>
              </div>
              <div>
              <ul>Trabajo en equipo</ul>
              <ul>Colaboración y creatividad</ul>
            <ul>Éxito</ul> */}

            {/* </div> */}
          {/* </div> */}
        <div className={styles.block2}>

            <div className={styles.TextSection2}>
                  <ul className={styles.uli}>Responsabilidad</ul>
                  <ul className={styles.uli}>Honestidad</ul>
                  <ul className={styles.uli}>Empatía</ul>
            </div>
        
            <div className={styles.textContainer2}>
                <ul className={styles.uli}>Trabajo en equipo</ul>
                <ul className={styles.uli}>Colaboración y creatividad</ul>
                <ul className={styles.uli}>Éxito</ul>
            </div>
        </div>
       
      </div>
    </div>
  );
}

export default About;
