import React, { useEffect, useContext } from "react";
import { CartContext } from "../../Context/cartContext";

import "../Cartwidget/CartWidget.css";

function CartWidget() {
  const { ItemsTotales, productsAdd } = useContext(CartContext);

  useEffect(() => {}, [productsAdd]);
  return (
    <div className="faCart">
      <h3>🛒</h3>
      <p>{ItemsTotales}</p>
    </div>
  );
}

export default CartWidget;
