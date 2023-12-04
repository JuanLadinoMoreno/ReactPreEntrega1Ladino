import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  

  return (
    <div className='contenedor'>
        <NavBar/>
        <ItemListContainer greeting="Burguer Robles CarShop"/>
      </div>
  );
}

export default App
