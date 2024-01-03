import React from "react";
import styles from "./about.module.css";

function About() {
  return (
    <section className={`${styles.aboutSection} ${"globalWidth"}`}>
      <br />
      <h2>acerca de nosotros</h2>
      <div>
        <h3>Visión:</h3>
        <p>
          Ser una consultora reconocida en toda Mendoza, por brindar apoyo y
          solucionar de manera rápida y efectiva las necesidades de nuestros
          clientes.
        </p>
      </div>
      <div>
        <h3>Misión:</h3>
        <p>
          Somos un equipo de profesionales capacitados y con vocación de
          servicio, dedicados a identificar las necesidades de negocio y
          marketing de nuestros clientes, al cual acompañamos en el proceso de
          gestión y desarrollo de herramientas para lograr sus objetivos
          empresariales.
        </p>
      </div>
      <div className={styles.companyValues}>
        <div><h3>Valores de la Empresa:</h3></div>
        <div>
          <div className={styles.firstValue}>
            <p>Responsabilidad</p>
            <p>Honestidad</p>
            <p>Empatía</p>
          </div>
          <div className={styles.secondValue}>
            <p>Trabajo en equipo</p>
            <p>Colaboración y creatividad</p>
            <p>Éxito</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
