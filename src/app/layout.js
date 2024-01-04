
import NavBar from "../../Component/Navbar/NavBar3.jsx";
import "./global.css";
import "./colours.css";
import { monserrat, lovelo,monserratVariable } from "./fonts.js";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${lovelo.variable } ${monserrat.variable} ${monserratVariable.variable}`}>  
        {/* <NavBar/> */}
        {children}
      </body>
    </html>
  );
}
