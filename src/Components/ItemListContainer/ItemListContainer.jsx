import React, { useEffect, useState, useContext } from "react";
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
import { CartContext } from "../../Context/cartContext";

function ItemListContainer() {
  const { setShowcart } = useContext(CartContext);
  const [productsState, setProductsState] = useState([]);
  const [loading, setLoading] = useState();
  const { categoryId } = useParams();

  useEffect(() => {
    window.scrollTo(500, 0);
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
    setShowcart(true);
  }, [categoryId]);

  return (
    <div className="containerList">
      {loading ? (
        <div className="carga">
          <Spinner animation="border" role="status" variant="secondary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <div className="items-title">
            <h1 className="display-2">Productos Destacados</h1>
          </div>
          <ItemList productos={productsState} />
        </>
      )}
    </div>
  );
}

export default ItemListContainer;
