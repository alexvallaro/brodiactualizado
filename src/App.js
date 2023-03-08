import './App.css';
import React, {useState, UseEffect} from "react";
import second, { NavBar } from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer/indexILC';
//import Item from './components/Item/Item';


function App() {
  return (
    <>
    <ItemListContainer />
    <NavBar />  
    
    </>
  );
}

export default App;

//<Item />  