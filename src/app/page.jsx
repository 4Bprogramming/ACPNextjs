import About from "../../Component/About/About";
import Home from "../../Component/Home/Home";
import { NavBar } from "../../Component/Navbar/NavBar2";
import Contact from "../../Component/contact/Contact";
import Footer from "../../Component/footer/Footer";
import Services from "../../Component/service/Services";
import Testimonials from '../../Component/testimonials/TestimonialsP';
import styles from './globals.module.css';
import './colours.css';



export default function Complete() {
  return (
    <main >
      {/* <NavBar/> */}
      <Home className={styles.About}/>
      <About className={styles.About}/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </main>
  )
}
