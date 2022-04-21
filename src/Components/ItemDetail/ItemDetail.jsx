import React, { useState, useContext } from "react";
import "../ItemDetail/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";

function ItemDetail({ producto }) {
	const [viewCount, setViewCount] = useState(true);

	const { addItem, productsAdd } = useContext(CartContext);

	const onAdd = (cant) => {
		setViewCount(false);
		addItem(producto, cant);
	};

	console.log(productsAdd);

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
					{viewCount ? (
						<Col sm={12} md={8}>
							<ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
						</Col>
					) : (
						<>
							<Col sm={12} md={8} className="text-center">
								<Button
									className="detail-button"
									onClick={() => {
										setViewCount(true);
									}}
									size="lg"
									variant="outline-primary">
									Reanudar Compra
								</Button>
							</Col>

							<Col sm={12} md={8} className="text-center">
								<Link to={"/cart"}>
									<Button
										className="detail-button"
										size="lg"
										variant="outline-primary">
										Ir al Carrito
									</Button>
								</Link>
							</Col>
						</>
					)}

					<p className="fw-bold mt-3">Modelo: {producto.modelo}</p>
					<p>{producto.descripcion}</p>
				</Col>
			</div>
		</>
	);
}

export default ItemDetail;
