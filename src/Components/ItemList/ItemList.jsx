import React from "react";
import Item from "../ItemProduct/Item";
import "../ItemList/ItemList.css";

function ItemList({ onAdd, productos }) {
	return (
		<div className="itemList">
			{productos.map((i) => (
				<Item
					key={i.id}
					nombre={i.nombre}
					precio={i.precio}
					imagen={i.imagen}
					onAdd={onAdd}></Item>
			))}
		</div>
	);
}

export default ItemList;
