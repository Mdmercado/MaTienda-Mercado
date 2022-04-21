import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContexProvider = ({ children }) => {
	const [productsAdd, setproductsAdd] = useState([]);

	const isInCart = (id) => {
		const exist = productsAdd.findIndex((item) => item.item.id === id);
		if (exist !== -1) {
			return true;
		} else {
			return false;
		}
	};

	const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			console.log(
				"el producto ya se encuentra en el carrito, sumo cantidades nuevamente"
			);
			const newCart = [...productsAdd];
			const prod = newCart.findIndex((p) => p.item.id === item.id);
			newCart[prod].cantidad = newCart[prod].cantidad + quantity;
			setproductsAdd(newCart);
		} else {
			setproductsAdd([...productsAdd, { item: item, cantidad: quantity }]);
			console.log("se agrega producto nuevo");
		}
	};

	const removeItem = (itemId) => {
		console.log(`Se eliminara producto con id ${itemId}`);

		setproductsAdd(productsAdd.filter((p) => p.item.id !== itemId));
	};

	const clear = () => {
		console.log(`Esta function limpia/elimina todos los productos`);
		setproductsAdd([]);
	};

	return (
		<CartContext.Provider
			value={{
				productsAdd,
				addItem,
				removeItem,
				clear,
				isInCart,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContexProvider;
