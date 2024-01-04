import styles from "./services.module.css";
import { services } from "./service";
import Image from "next/image";

function Services() {
  return (
    <section className={`${styles.servicesSection} ${"globalWidth"}`}>
      <h2>servicios</h2>
      <div>
        {services.map((service, i) => (
          <div key={i} className={styles.serviceCard}>
            <div>
            {service.src}
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
