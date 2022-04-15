import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { productos } from "../../Utils/productos.js";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export default function ItemDetailContainer({ setCart }) {
	const { id } = useParams();
	const [producto, setproducto] = useState([]);
	const [loading, setLoading] = useState(false);
	const onAdd = (items) => {
		setCart(items);
	};

	const getOneProduct = (id) => {
		return new Promise((resolve, reject) => {
			const productoElegido = productos.find((p) => p.id === Number(id));
			setTimeout(() => {
				resolve(productoElegido);
			}, 2000);
		});
	};

	useEffect(() => {
		setLoading(true);
		getOneProduct(id)
			.then((res) => setproducto(res))
			.catch((error) => console.log(error))
			.finally(() => {
				setLoading(false);
			});
	}, [id]);

	return (
		<>
			{loading ? (
				<div className="carga">
					<Spinner animation="border" role="status" variant="secondary">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				</div>
			) : (
				<ItemDetail producto={producto} onAdd={onAdd} />
			)}
		</>
	);
}
