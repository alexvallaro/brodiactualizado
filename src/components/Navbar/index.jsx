import React from "react";
import CartWidget from "../CartWidget/indexCW";
import "./stylesNB.css";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#">Todos nuestros productos</a>
                </div>
                <ul className="nav__list">
                <li> 
                    <a className="nav__link" href="#">Remeras Estampadas</a>
                </li>
                <li> 
                    <a className="nav__link" href="#">Bermudas</a>
                </li> 
                <li> 
                    <a className="nav__link" href="#">Accesorios</a>
                </li>
                <li> 
                    <a className="nav__link" href="#"> <CartWidget />
                    </a>                    
                </li>                
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;