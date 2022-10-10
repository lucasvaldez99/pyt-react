import React from 'react';
import CardWidget from '../cartWidget/CartWidget';
import  estilos from'./nav.module.css'
import { Link } from 'react-router-dom';

const Nav = () =>{
    return( 
        <header>
            <nav className={estilos.nav}>
                
                <ul>
                <div className={estilos.logo}>
                 <p>Mundo <b className={estilos.masco}>MASCOTAS</b></p>
                 </div>
                
                        <Link to="/categorias/perros">Perros</Link>
                    
                
                        <Link to="/categorias/gatos">Gatos</Link>
                    
                
                        <Link to="/categorias/peces">peces</Link>
                    
                
                        <Link to="/">Inicio</Link>
                       
                <Link to="/cart"><CardWidget/></Link>
                    
                </ul>
               
              
            </nav>
        </header>
    )
}

export default Nav;