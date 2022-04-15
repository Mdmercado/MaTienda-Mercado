
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './Components/NavBar/NavBar';
import { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";



function App() {
  const [cartNumber, setCartNumber] = useState(0)
  return (
    <BrowserRouter>
      <NavBar cant={cartNumber} />

      <Routes>
        <Route exact path="/" element={<ItemListContainer setCartCant={setCartNumber} />} />
        <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer setCart={setCartNumber} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
