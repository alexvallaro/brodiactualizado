import React from "react";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#">Brodi, Indumentaria Masculina</a>
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
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;