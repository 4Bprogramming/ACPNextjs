import React from "react";
import Image from "next/image";
import logo from "Assets/presentar.png";
import line from "Assets/line.png";
import styles from "./home.module.css";

function Home() {
  return (
    <div id="home">
      <div className={styles.AboutBody}>
        <div className={styles.AboutContainer}>
          <div className={styles.fotoo}>
            <div className={styles.StyledHeading}>C O N S U L T O R A</div>

            <Image src={line} alt="linea" layout="responsive" />
          </div>

          <div className={styles.TextSection}>
            <Image className={styles.Photo2} src={logo} layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
