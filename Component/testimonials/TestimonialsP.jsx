import styles from "./testimonials.module.css";
import {testimonials} from './testimonials'


function Testimonials() {
  
  return (
    <section className={`${styles.testimonialSection} ${"globalWidth"}`}>
      <h2>testimonios</h2>
      <div>
        {testimonials.map((Testimonial, i) => (
          <div key={i} className={styles.testimonialCard}>
            <div >
              <div>{Testimonial.src}</div>
            </div>
            <p>{Testimonial.desc}</p>
            <p><strong>{Testimonial.title}</strong></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
