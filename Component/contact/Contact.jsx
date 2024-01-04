import React from "react";
import styles from "./contact.module.css"
import Whatsapp from "../../Assets/WhatsApp.svg.webp";
import Instagram from "../../Assets/instagram.png";
import Image from "next/image";
import Link from "next/link";

function Contact() {
  return (
    <div className={`${styles.AboutContact} ${"globalWidth"}`} >
      <h2>contacto</h2>
      <div className={styles.mediaIcons}>
        <div>
          <Image
            src={Whatsapp}
            href="https://api.whatsapp.com/send?phone=5492616075153"
            target="blank"
            width={50}
            alt="Whatsapp"
            style={{ marginRight: "20px" }}
          />{" "}
        </div>
        <div>
          <Image
            src={Instagram}
            href="https://www.instagram.com/acp.gestion.marketing/?igshid=MzRlODBiNWFlZA=="
            target="blank"
            style={{ marginTop: "2px" }}
            width={50}
            alt="Instagram"
          />{" "}
        </div>
      </div>
      <p>
        EMAIL: 
        <Link href="mailto:acpgestionymarketing@gmail.com"> ACPmail </Link>
      </p>
      <p>CEL: <span>2616075153 // 2613051523</span></p>
    </div>
  );
}

export default Contact;
