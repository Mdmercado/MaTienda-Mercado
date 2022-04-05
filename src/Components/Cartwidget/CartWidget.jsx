import React from "react";
import { FaCartPlus } from "react-icons/fa";
import "../Cartwidget/CartWidget.css";

function CartWidget({ cant }) {
	return (
		<div className="faCart">
			<FaCartPlus className="faCart--icon" />
			<p>{cant}</p>
		</div>
	);
}

export default CartWidget;
