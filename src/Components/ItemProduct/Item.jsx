import React from "react";
import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

function Item({ id, nombre, precio, imagen, onAdd }) {
	return (
		<div className="item">
			<div className="itemImage">
				<img src={imagen} alt="foto" />
			</div>
			<div className="itemData">
				<h3>{nombre}</h3>
				<h4>{precio}</h4>
			</div>
			<ItemCount stock={5} initial={1} onAdd={onAdd} />
		</div>
	);
}

export default Item;
