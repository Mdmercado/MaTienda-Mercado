import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setproducto] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(500, 0);
    setLoading(true);
    const db = getFirestore();
    const itemref = doc(db, "productos", `${id}`);
    getDoc(itemref).then((result) => {
      if (result.exists()) {
        setproducto({ id: result.id, ...result.data() });
        setLoading(false);
      }
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="carga" style={{ height: "800px" }}>
          <Spinner animation="border" role="status" variant="secondary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <ItemDetail producto={producto} />
      )}
    </>
  );
}
