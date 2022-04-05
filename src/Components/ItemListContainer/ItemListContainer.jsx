import React from "react";

import "../ItemListContainer/ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
function ItemListContainer({ greeting, setCartCant }) {
	const onAdd = (items) => {
		setCartCant(items);
		console.log("agregando " + items + " productos");
	};

	return (
		<div className="container">
			<div className="items-title">
				<h1>Productos Destacados</h1>
			</div>
			<div className="item">
				<p className="item--paragraph">{greeting}</p>
				<div className="item--Amount">
					<ItemCount stock={5} initial={1} onAdd={onAdd} />
				</div>
			</div>
		</div>
	);
}

export default ItemListContainer;
