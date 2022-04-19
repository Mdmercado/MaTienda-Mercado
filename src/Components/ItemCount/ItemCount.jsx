/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../ItemCount/ItemCount.css";
function ItemCount({ stock, onAdd, initial }) {
	const [cant, setCant] = useState(0);

	let bloquea;
	let notStock;
	let cantStock = stock;
	let zeroStock;

	useEffect(() => {
		setCant(initial);
	}, [initial]);

	const add = () => {
		setCant(cant + 1);
	};
	const sub = () => {
		setCant(cant - 1);
	};

	if (cant === 0) {
		bloquea = true;
	} else {
		bloquea = false;
	}

	if (cant === cantStock) {
		notStock = true;
	} else {
		notStock = false;
	}

	if (initial === 0 && cant === 0) {
		zeroStock = true;
	} else {
		zeroStock = false;
	}

	return (
		<>
			<div className="countArea">
				<Button onClick={() => sub()} disabled={bloquea}>
					-
				</Button>
				<div className="countArea-number">
					{`Cantidad: ${cant}`}{" "}
					<p className="text-secondary">{`  (disponibles: ${stock})`}</p>
				</div>
				<Button onClick={() => add()} disabled={notStock}>
					+
				</Button>
			</div>
			{zeroStock && <p className="text-center text-danger">Sin Stock</p>}
			{notStock && (
				<p className="text-center text-danger alerta">
					limite de stock alcanzado {stock}
				</p>
			)}
			<div className="item--button text-center">
				<Button
					onClick={() => onAdd(cant)}
					variant="primary"
					disabled={bloquea}>
					Agregar Al Carrito
				</Button>
			</div>
		</>
	);
}

export default ItemCount;
