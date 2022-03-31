
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <>
      <div className="App">
        <div className='App-header'>
          <NavBar />
        </div>
        <div className='App-main'>
          <ItemListContainer greeting="Hola Producto" />
        </div>
      </div>
    </>

  );
}

export default App;
