import React, { useState, useContext } from "react";
import "../ItemDetail/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";

function ItemDetail({ producto }) {
	const [viewCount, setViewCount] = useState(true);

	const { addItem } = useContext(CartContext);

	const onAdd = (cant) => {
		setViewCount(false);
		addItem(producto, cant);
	};

	return (
		<>
			<div className="itemDetail-title">
				<h1>información detallada</h1>
			</div>
			<div className="product">
				<Col className="product-image">
					<img src={producto.image} alt={producto.name} />
				</Col>
				<Col sm={12} md={6} className="product-details">
					<h2 className="mb-2">{producto.name}</h2>
					<h5>{producto.summary}</h5>
					<h3>${producto.price}</h3>
					{viewCount ? (
						<Col sm={12} md={8}>
							<ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
						</Col>
					) : (
						<>
							<Col sm={12} md={8} className="text-center">
								<Link to={"/"}>
									<Button
										className="detail-button"
										size="lg"
										variant="outline-primary">
										Reanudar Compra
									</Button>
								</Link>
							</Col>

							<Col sm={12} md={8} className="text-center">
								<Link to={"/cart"}>
									<Button
										className="detail-button"
										size="lg"
										variant="outline-primary">
										Terminar Compra
									</Button>
								</Link>
							</Col>
						</>
					)}

					<p className="fw-bold mt-3">Modelo: {producto.model}</p>
					<p>{producto.description}</p>
				</Col>
			</div>
		</>
	);
}

export default ItemDetail;
