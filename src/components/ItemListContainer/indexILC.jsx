import React, {useState, useEffect} from "react";
import Title from "../Title/indexT";
import "./stylesILC.css";
import Itemlist from "../ItemList/indexIL";
import Products from "../Products/indexP";
//import Products from "../Products/indexP";

function getItemsFromDatabase () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Products);
        }, 2000);
        });    
    }

// bien

const ItemListContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let promiseData = getItemsFromDatabase();

        promiseData.then((respuesta) => {
            console.log("respuesta" , respuesta);
        });
    }, []);

    return (
        <div className="saludo">
        <Title greeting="Brodi, Indumentaria Masculina" />
        <ItemList users={users} />        
        </div>
    );
}

//<ItemList users={users} /> arroja error
//products abajo de title ?

export default ItemListContainer;