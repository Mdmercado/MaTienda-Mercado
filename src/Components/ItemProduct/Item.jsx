import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../ItemProduct/item.css";
function Item({ id, nombre, precio, imagen, onAdd }) {
	const navigate = useNavigate();

	return (
		<div className="item m-5">
			<Card>
				<Card.Img variant="top" src={imagen} className="image" />
				<Card.Body className="body ">
					<Card.Title>{nombre}</Card.Title>
					<Card.Text className="text-center">{precio}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button
						onClick={() => {
							navigate(`item/${id}`);
						}}>
						{" "}
						Ir a Detalle
					</Button>
				</Card.Footer>
			</Card>
		</div>
	);
}

export default Item;
