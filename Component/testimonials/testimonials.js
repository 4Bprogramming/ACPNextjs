import eco from "../../Assets/testimonials/ecocuyum.jpg"
import oliver from "../../Assets/testimonials/oliver.jpg"
import oscar from "../../Assets/testimonials/OscarNiemetz.jpg"
import rustico from "../../Assets/testimonials/rusticos_mendoza.jpg"
import Image from 'next/image'
export const testimonials = [
    {
      src: <Image src={oliver} width={200} height={100} alt="Testimonial 1"/>,
      title: "Florencia Manzanel, Grupo J B Justo",
      desc: "Tuvimos una excelente experiencia trabajando con la consultora ACP, hicieron un análisis completo de nuestra cafeteria, nos hicieron una propuesta de organización y obtuvimos excelentes resultados con ello. Estamos totalmente satisfechos con su trabajo.",
      active: false,
    },
    {
      src: <Image src={rustico} width={200} height={100} alt="Testimonial 2" />,
      title: "Martin Aguero. Rusticos Mendoza",
      desc: "Me ayudaron mucho a re organizar mi empresa desde cero, muy exhaustivo el diagnostico, lo cual me permitió enforcarme en las areas que estaban sin organización y dirección.",
      active: false,
    },
    {
      src: <Image src={oscar} width={200} height={100} alt="Testimonial 3" />,
      title: "Oscar Niemetz. @coachingconoscarniemetz",
      desc: "ACP me acompañó y me acompaña en aspectos específicos de comercialización de servicios, difusión y ampliación de mercados. Han sido particularmente innovadores en procedimientos lo que se ha evidenciado en el crecimiento de ventas en pocos meses.",
      active: false,
    },
    {
      src: <Image src={eco} width={200} height={100} alt="Testimonial 4"/>,
      title: "Armando Parlanti. Eco Cuyum",
      desc: "Actualmente estamos planificando nuestro desarrollo de imagen corporativa y desarrollo publicitario con ACP y ya estamos implementando la venta online, gracias a la colaboración de la consultora.",
      active: false,
    },
  ];