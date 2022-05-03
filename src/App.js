
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Cart from './Components/Cart/Cart.jsx'
import NavBar from './Components/NavBar/NavBar';
import CartContexProvider from './Context/cartContext';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CartCheckout from './Components/CartCheckout/CartCheckout';





function App() {

  return (
    <BrowserRouter>
      <CartContexProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/cart/checkout' element={<CartCheckout />} />

        </Routes>
      </CartContexProvider>
    </BrowserRouter>
  );
}

export default App;
