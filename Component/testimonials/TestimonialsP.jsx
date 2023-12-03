import styles from "./testimonials.module.css";
import {testimonials} from './testimonials'


function Testimonials() {
  
  return (
    <section className={styles.Testimonialsexperience} id="testimonials">
      <h1 className={styles.TestimonialsTitle}>TESTIMONIOS</h1>
      <div className={styles.containerTest}>
        {testimonials.map((Testimonial, i) => (
          <div key={i} className={styles.cardContainerTest}>
            <div className={styles.imgSpaceTest}>
              <div className={styles.SvgContainerTest}>{Testimonial.src}</div>
            </div>
            <p className={styles.TestimonialDesciption}>{Testimonial.desc}</p>
            <div className={styles.titleCardTest}>{Testimonial.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
