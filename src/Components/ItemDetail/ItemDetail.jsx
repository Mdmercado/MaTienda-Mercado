import React from "react";
import "../ItemDetail/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Col } from "react-bootstrap";
function ItemDetail({ producto, onAdd }) {
	return (
		<>
			<div className="itemDetail-title">
				<h1>información detallada</h1>
			</div>
			<div className="product">
				<Col className="product-image">
					<img src={producto.imagen} alt={producto.resumen} />
				</Col>
				<Col sm={12} md={6} className="product-details">
					<h2 className="mb-2">{producto.nombre}</h2>
					<h5>{producto.resumen}</h5>
					<h3>{producto.precio}</h3>
					<Col sm={12} md={8}>
						<ItemCount stock={10} initial={5} onAdd={onAdd} />
					</Col>
					<p className="fw-bold mt-3">Modelo: {producto.modelo}</p>
					<p>{producto.descripcion}</p>
				</Col>
			</div>
		</>
	);
}

export default ItemDetail;
