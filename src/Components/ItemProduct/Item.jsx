import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../ItemProduct/Item.css";
function Item({ id, nombre, precio, imagen, onAdd }) {
	return (
		<div className="item m-5">
			<Card>
				<Card.Img variant="top" src={imagen} className="image" />
				<Card.Body className="body ">
					<Card.Title>{nombre}</Card.Title>
					<Card.Text className="text-center">{precio}</Card.Text>
				</Card.Body>
				<Card.Footer className="text-center">
					<Link className="footer-link" to={`/item/${id}`}>
						<Button size="lg" variant="outline-primary">
							{"Ir a Detalle "}
						</Button>
					</Link>
				</Card.Footer>
			</Card>
		</div>
	);
}

export default Item;
