import React, { useEffect, useState } from "react";
import "../ItemListContainer/ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "../ItemListContainer/ItemListContainer.css";
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";

function ItemListContainer() {
	const [productsState, setProductsState] = useState([]);
	const [loading, setLoading] = useState();
	const { categoryId } = useParams();

	useEffect(() => {
		setLoading(true);
		const db = getFirestore();
		let itemCollection;

		if (!categoryId) {
			itemCollection = collection(db, "productos");
		} else {
			itemCollection = query(
				collection(db, "productos"),
				where("categoryId", "==", `${categoryId}`)
			);
		}
		getDocs(itemCollection).then((result) => {
			setProductsState(
				result.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
			);
			setLoading(false);
		});
	}, [categoryId]);

	return (
		<div className="container">
			{loading ? (
				<div className="carga">
					<Spinner animation="border" role="status" variant="secondary">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				</div>
			) : (
				<>
					<div className="items-title">
						<h1>Productos Destacados</h1>
					</div>
					<ItemList productos={productsState} />
				</>
			)}
		</div>
	);
}

export default ItemListContainer;
