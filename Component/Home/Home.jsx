import React from "react";
import Image from "next/image";
import logo from "Assets/presentar.png";
import line from "Assets/line.png";
import styles from "./home.module.css";

function Home() {
  return (
    <section className={styles.homeSection}>
      <div>
        <h1>consultora</h1>
        <hr />
      </div>
      <div>
        <Image
          src={logo}
          alt="company logo"
          fill
          style={{
            objectFit: "contain"
          }}
        />
      </div>
    </section>
  );
}

export default Home;
