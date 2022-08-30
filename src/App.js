import './App.css';
import NavBar from './components/NavBar.jsx';
import React from 'react'
import ItemListContainer from './components/ItemListContainer';

function App() {

  const agregar = ()=>{
    console.log('vam')
  }
  
  return (
    <div className='App'>
      <header>
        <NavBar />
        <ItemListContainer agregarProducto={agregar}/>
      </header>
    </div>
  );
}

export default App;