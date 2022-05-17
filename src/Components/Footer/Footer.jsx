import React from "react";
import "../Footer/Footer.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BiPhoneCall, BiCopyright, BiCodeBlock } from "react-icons/bi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <h3 className="footer-subtitle display-5">¡Seguinos en redes!</h3>
      <ul className="footer-media_list">
        <li>
          <a href="https://www.facebook.com">
            <FaFacebookSquare style={{ height: "35px", width: "35px" }} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <FaInstagramSquare style={{ height: "35px", width: "35px" }} />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <FaTwitterSquare style={{ height: "35px", width: "35px" }} />
          </a>
        </li>
      </ul>
      <div className="seccions">
        <div className="contact" id="contacto">
          <h4>CONTACTO</h4>
          <p>
            <SiGmail /> matienda@gmail.com
          </p>
          <p>
            {" "}
            <BiPhoneCall /> +54 9 3364524530
          </p>
        </div>
        <div className="navigation">
          <h4>NAVEGACIÓN</h4>
          <ul>
            <li>
              <Link to={"/"}>TODOS LOS PRODUCTOS</Link>
            </li>
            <li>
              <Link to={"/howtobuy"}>COMO COMPRAR</Link>
            </li>
            <li>
              <a
                href="https://forms.gle/7BBfns4SfX73jsQB8"
                target="_blank"
                rel="noreferrer"
              >
                DEJA UN COMENTARIO
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>
          <BiCopyright /> Todos los derechos reservados Marcos Mercado{" "}
          <BiCodeBlock /> 2022
        </p>
      </div>
    </footer>
  );
}

export default Footer;
