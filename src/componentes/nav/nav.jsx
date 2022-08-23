import React from 'react';
import  estilos from'./nav.module.css'

const Nav = () =>{
    return( 
        <header>
            <nav className={estilos.nav}>
                <ul>
                    <li>
                        <a href="http://">nosotros</a>
                    </li>
                    <li>
                        <a href="http://">contacto</a>
                    </li>
                    <li>
                        <a href="http://">nuestros clientes</a>
                    </li>
                    <li>
                        <a href="http://">ubicacion</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;