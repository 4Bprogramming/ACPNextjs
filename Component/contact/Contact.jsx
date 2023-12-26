import React from "react";
import "./Contact.css";
import Whatsapp from "../../Assets/WhatsApp.svg.webp";
import Instagram from "../../Assets/instagram.png";
import Image from "next/image";
import Link from "next/link";

function Contact() {
  return (
    <div className="AboutContact">
      <div>CONTACTO</div>
      <div className="mediaIcons">
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
      <div>
        EMAIL: 
        <Link href="mailto:acpgestionymarketing@gmail.com"> ACPmail </Link>
      </div>
      <div>CEL: <span>2616075153 // 2613051523</span></div>
    </div>
  );
}

export default Contact;
