import React from "react";
import Item from "../ItemProduct/Item";
import "../ItemList/ItemList.css";

function ItemList({ productos }) {
	return (
		<div className="itemList">
			{productos.map((i) => (
				<Item
					key={i.id}
					id={i.id}
					nombre={i.name}
					precio={i.price}
					imagen={i.image}></Item>
			))}
		</div>
	);
}

export default ItemList;
