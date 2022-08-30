import './App.css';
import NavBar from './components/NavBar.jsx';
import React from 'react'
import ItemListContainer from './components/ItemListContainer';

function App() {

  
  return (
    <div className='App'>
      <header>
        <NavBar />
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;