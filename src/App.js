import './App.css';
import NavBar from './components/NavBar.jsx';
import React from 'react'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
    <NavBar />
    <ItemListContainer/>
    </div>
  );
}

export default App;
