
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { useState } from 'react';

function App() {
  const [cartNumber, setCartNumber] = useState(0)
  return (
    <>
      <div className="App">
        <div className='App-header'>
          <NavBar cant={cartNumber} />
        </div>
        <div className='App-main'>
          <ItemListContainer setCartCant={setCartNumber} />
        </div>
      </div>
    </>

  );
}

export default App;
