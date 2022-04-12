import React, { useEffect, useState } from "react";
import "../ItemListContainer/ItemListContainer.css";
import { productos } from "../../Utils/productos.js";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ setCartCant }) {
	const onAdd = (items) => {
		setCartCant(items);
		console.log("agregando " + items + " productos");
	};

	const [productsState, setProductsState] = useState([]);

	useEffect(() => {
		const llenar = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(productos);
			}, 2000);
		});

		llenar.then((res) => setProductsState(res));
		llenar.catch((error) => console.log(error));
	}, [productsState]);

	return (
		<div className="container">
			<div className="items-title">
				<h1>Productos Destacados</h1>
			</div>
			<ItemList onAdd={onAdd} productos={productsState} />
		</div>
	);
}

export default ItemListContainer;
