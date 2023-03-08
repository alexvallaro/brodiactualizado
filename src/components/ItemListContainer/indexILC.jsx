import React from "react";
import Title from "../Title/indexT";
import "./stylesILC.css";
import { useState, useEffect } from "react";
import Itemlist from "../ItemList/indexIL";
import Products from "../Products/indexP";




export const ItemListContainer = () => {
    return (
        <div className="saludo">
        <Title greeting="Brodi, Indumentaria Masculina" />
        <Products/>
        </div>
    );
}



export default ItemListContainer;