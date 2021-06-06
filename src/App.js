import React from 'react';
import './App.css';
import About from './components/About';
import Clients from './components/Clients';
import Header from './components/Header';
import Menu from './components/Menu';
import Prices from './components/Prices';
import Shop from './components/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Shop></Shop>
      <Menu></Menu>
      <Clients></Clients>
      <Prices></Prices>
    </div>
  );
}

export default App;
