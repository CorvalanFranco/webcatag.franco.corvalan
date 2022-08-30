import './App.css';
import NavBar from './components/NavBar.jsx';
import React from 'react'
import ItemListContainer from './components/ItemListContainer';
import { ItemCount } from './components/ItemCount.jsx';


function App() {

  const onAdd = (count) => {
    alert("Agregaste " + count + " Remeras");
  }
  
  return (
    <div>
        <NavBar />
        <ItemListContainer Saludo={"Luego aqui va el catalogo de remeras entero"}/>
        <ItemCount inicial={1} max={10} onAdd={onAdd}/>
    </div>
  );
}

export default App;