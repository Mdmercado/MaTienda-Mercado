
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
  const [cartNumber, setCartNumber] = useState(0)
  return (
    <>
      <NavBar cant={cartNumber} />

      <Routes>
        {/* <Route exact path="/" element={<ItemListContainer setCartCant={setCartNumber} />} /> */}
        <Route exact path="/" element={<ItemDetailContainer setCart={setCartNumber} />} />
        {/* <Route path="*" replace element={<ItemListContainer setCartCant={setCartNumber} />} /> */}
      </Routes>

    </>

  );
}

export default App;
