import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "../HowToBuy/HowToBuy.css";
import { BiBookmark, BiCaretDown } from "react-icons/bi";
function HowToBuy() {
  useEffect(() => {
    window.scrollTo(500, 0);
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-5">¿Como Comprar?</h1>
      <Row className="justify-content-center">
        <Col md={6} sm={12}>
          <p className="container-paragraph">
            <BiBookmark /> Para comprar, deberás seleccionar el producto que te
            interesa y de haber stock ya podrias iniciar tu compra dirigiendote
            al carrito, se te solicitará unos datos para luego cordinar el
            envio, una vez procesado el pedido se te dara un comprobante{" "}
            <b>importante</b> con el codigo de pedido.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center my-2">
        <Col md={6} sm={12}>
          <h4 className="text-center">
            <BiCaretDown /> Gif de ejemplo
          </h4>
          <div className="gif">
            <img src={require("../../Img/matiendaCompra-gif.gif")} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HowToBuy;
