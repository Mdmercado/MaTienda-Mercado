import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { productoDetail } from "../../Utils/productos.js";

function ItemDetailContainer({ setCart }) {
	const [producto, setproducto] = useState({});
	const onAdd = (items) => {
		setCart(items);
		console.log("agregando " + items + " productos");
	};
	useEffect(() => {
		const getItem = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(productoDetail);
			}, 1000);
		});

		getItem.then((res) => setproducto(res));
		getItem.catch((error) => console.log(error));
	}, []);
	return <>{<ItemDetail producto={producto} onAdd={onAdd} />}</>;
}

export default ItemDetailContainer;
