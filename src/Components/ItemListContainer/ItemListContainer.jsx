import React from "react";
import { Button } from "react-bootstrap";
import "../ItemListContainer/ItemListContainer.css";

function ItemListContainer({ greeting }) {
	return (
		<div className="container">
			<div className="items-title">
				<h1>Productos Destacados</h1>
			</div>
			<div className="item">
				<p className="item--paragraph">{greeting}</p>
				<div className="item--button">
					<Button variant="primary">Agregar Al Carrito</Button>
				</div>
			</div>
		</div>
	);
}

export default ItemListContainer;
