import React from "react";
import "./Contact.css";
import Whatsapp from "../../Assets/WhatsApp.svg.webp";
import Instagram from "../../Assets/instagram.png";
import Image from 'next/image'
import Link from 'next/link'

function Contact() {
  return (
    <div className="AboutContact" id="contact">
      <div style={{marginTop:"10%"}}>
        <h1 className="StyledHeadingContact">CONTACTO</h1>

        <div className="TextSectionContact">
          {/* <p>
            Transformamos los datos en información para la toma de decisiones,
            contactate al
          </p> */}

          <p>
            
          </p>

          

          <p className="contactwh" style={{ fontWeight: "600",textAlign:"center"}}>
          
              <Image src={Whatsapp}
               href="https://api.whatsapp.com/send?phone=5492616075153"
               target="blank"
               width={50} alt="Whatsapp" style={{marginRight:"20px"}} />
           
            
              
           
              {" "}
              <Image
                src={Instagram}
                href="https://www.instagram.com/acp.gestion.marketing/?igshid=MzRlODBiNWFlZA=="
                target="blank"
                style={{ marginTop: "2px"}}
                width={50}
                alt="Instagram"
              />{" "}
            {" "}
          </p>
          <p className="contactemail" style={{ fontWeight: "600" }}>
            EMAIL:    
                <Link href='mailto:acpgestionymarketing@gmail.com'className="contactLink" style={{marginLeft:"10px", outline:"none"}}>ACPmail </Link>
            {/* <span style={{ fontWeight: "200", marginLeft: "10px" }}>
              acpgestionymarketing@gmail.com
            </span>{" "} */}
           </p>
           <p className="contactcel"  style={{ fontWeight: "600"}}>
            {` CEL:  `}
            <span style={{ fontWeight: "200", marginLeft: "5px"}}>
              {`2616075153 // 2613051523`}
            </span>{" "}
          </p>

        </div>
      </div>

      {/* <div className="photoContact"></div> */}
    </div>
  );
}

export default Contact;
