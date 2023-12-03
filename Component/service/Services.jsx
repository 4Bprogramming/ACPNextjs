import styles from'./services.module.css'
import { services } from "./service"; 


function Services() {

  return (
    <section className={styles.servicesexperience} id="services">
      <h1 className={styles.servicesTitle}>SERVICIOS</h1>
      <div className={styles.container}>
        
          {services.map((service, i) => (
            <div key={i} className={styles.cardContainer}>
              <div className={styles.imgSpace}>
              <div className={styles.SvgContainer}>{service.src}</div>
              </div>
              <div className={styles.titleCard}>{service.title}</div>
              <p className={styles.serviceDesciption} >{service.desc}</p>
            </div>
          ))}
        </div>
  
    </section>
  )
}

export default Services