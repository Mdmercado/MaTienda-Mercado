import React from "react";
import { FaCartPlus } from "react-icons/fa";
import "../Cartwidget/CartWidget.css";

function CartWidget() {
	return (
		<div className="faCart">
			<FaCartPlus className="faCart--icon" />
		</div>
	);
}

export default CartWidget;
