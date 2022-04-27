import React, { useEffect, useState } from "react";
import "../ItemListContainer/ItemListContainer.css";
import { productos } from "../../Utils/productos.js";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "../ItemListContainer/ItemListContainer.css";

function ItemListContainer() {
	const [productsState, setProductsState] = useState([]);
	const [loading, setsetLoading] = useState();

	const { categoryId } = useParams();

	const getProductos = (categoryId) => {
		return new Promise((resolve, reject) => {
			const filtro = productos.filter((p) => p.category === categoryId);
			setTimeout(() => {
				categoryId ? resolve(filtro) : resolve(productos);
			}, 2000);
		});
	};

	useEffect(() => {
		setsetLoading(true);
		getProductos(categoryId)
			.then((res) => setProductsState(res))
			.catch((error) => console.log(error))
			.finally(() => {
				setsetLoading(false);
			});
	}, [categoryId]);

	return (
		<div className="container">
			{loading ? (
				<div className="carga">
					<Spinner animation="border" role="status" variant="secondary">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				</div>
			) : (
				<>
					<div className="items-title">
						<h1>Productos Destacados</h1>
					</div>
					<ItemList productos={productsState} />
				</>
			)}
		</div>
	);
}

export default ItemListContainer;
