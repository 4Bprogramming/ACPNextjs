import mano from '../../Assets/coaching.jpg'
import laptop from '../../Assets/leptop.jpg' 
import inge from '../../Assets/inge.jpg'
import Image from 'next/image'
export const services =[
    {
      src: <Image  src={mano} width={300} height={200}  />,
      title: "Coach Empresarial",
      desc: "Capacitacion a equipos de trabajo y mandos medios, para lograr la profesionalización.  Aplicación de técnicas de coaching que permiten agilizar los cambios.",
      active: false,
    },
    {
      src:<Image  src={laptop} width={300} height={200}/>,
      title: "Imagen Corporativa",
      desc:  "Creación y desarrollo de imagen corporativa. Diseño y desarrollo web. Marketing digital: Creacion de contenidos para redes sociales. Asesoramiento Publicitario.",
      active: true,
    },
    {
      src: <Image  src={inge} width={300} height={200} />,
      title: "Gestión Interna",
      desc:  "Auditoria de Gestión interna: Planificación y reorganización de los objetivos de la empresa. Gestión de procedimientos internos, personal, y agenda de clientes.",
      active: false,
    },
  ];