import './App.css';
import React, {useState, UseEffect} from "react";
import second, { NavBar } from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer/indexILC';
import { products } from './components/Products/indexP';


function App() {
  return (
    <>
    <ItemListContainer />
    <NavBar />  
    
    </>
  );
}

export default App;
