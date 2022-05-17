import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContexProvider = ({ children }) => {
  let cantidadTotal = 0;
  let precio = 0;
  const [productsAdd, setproductsAdd] = useState([]);
  const [ItemsTotales, setItemsTotales] = useState(0);
  const [preciofinal, setPreciofinal] = useState(0);
  const [showcart, setShowcart] = useState(true);

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
      const newCart = [...productsAdd];
      const prod = newCart.findIndex((p) => p.item.id === item.id);
      newCart[prod].cantidad = newCart[prod].cantidad + quantity;
      setproductsAdd(newCart);
    } else {
      setproductsAdd([...productsAdd, { item: item, cantidad: quantity }]);
    }
  };

  const removeItem = (itemId) => {
    setproductsAdd(productsAdd.filter((p) => p.item.id !== itemId));
  };

  const clear = () => {
    setproductsAdd([]);
  };

  const showTotal = () => {
    productsAdd.map((item) => {
      return (
        (cantidadTotal = cantidadTotal + item.cantidad),
        (precio = precio + item.item.price * item.cantidad)
      );
    });
    setItemsTotales(cantidadTotal);
    setPreciofinal(precio);
  };

  return (
    <CartContext.Provider
      value={{
        productsAdd,
        addItem,
        removeItem,
        clear,
        isInCart,
        showTotal,
        ItemsTotales,
        preciofinal,
        setShowcart,
        showcart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContexProvider;
