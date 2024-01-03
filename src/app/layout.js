import { Inter } from "next/font/google";

import NavBar from "../../Component/Navbar/NavBar3.jsx";
import "./global.css";
import "./colours.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ACP | Consultoría",
  description: "Consultora Número Uno en el la región."
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* <NavBar/> */}
        {children}
      </body>
    </html>
  );
}
