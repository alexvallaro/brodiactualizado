import React from "react";
import remetechno from "../assets/img/Techno.jpg";
import rememtechno from "../assets/img/mtechno.jpg";
import remeprogre from "../assets/img/progressiveh.jpg";
import remepsy from "../assets/img/psy.jpg";
import remetech from "../assets/img/tech.jpg";
import remehouse from "../assets/img/house.jpg";



const Products = [
{   id:1,
    nombre: "Remera Techno" , 
    tipo: "Remera manga corta para fiestas electronicas", 
    precio: "4000", 
    img: remetechno,
},
{   id:2,
    nombre: "Remera Tech House", 
    tipo: "Remera manga corta para fiestas electronicas", 
    precio: "700", 
    img: remetech,

},
{   id:3,
    nombre: "Remera House Experience" , 
    tipo: "Remera manga corta para fiestas electronicas", 
    precio: "700", 
    img: remehouse,

},
{   id:4,
    nombre: "Remera Progressive House", 
    tipo: "Remera manga corta para fiestas electronicas", 
    precio: "700", 
    img: remeprogre,

},
{   id:5,
    nombre: "Remera Psy", 
    tipo: "Remera manga corta para fiestas electronicas", 
    precio: "700", 
    img:remepsy,

},

{   id:6,
    nombre: "Remera Melodic Techno", 
    tipo: "Remera manga corta para fiestas electronicas", 
    precio: "700", 
    img: rememtechno,

},
]

export default Products;


// aca van los arrays de los productos
// se exporta a ItemListContains
// esto es asyncmockservice
