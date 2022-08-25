import React from 'react';
import { CardWidjet } from './CardWidjet';
import  estilos from'./nav.module.css'

const Nav = () =>{
    return( 
        <header>
            <nav className={estilos.nav}>
                
                <ul>
                <div className={estilos.logo}>
                 <p>Hold the <b className={estilos.masco}>Line</b></p>
                 </div>
                    <li>
                        <a href="http://">Nosotros</a>
                    </li>
                    <li>
                        <a href="http://">Contacto</a>
                    </li>
                    <li>
                        <a href="http://">Nuestros clientes</a>
                    </li>
                    <li>
                        <a href="http://">Ubicacion</a>
                    </li>
                   <li>
                    <CardWidjet/>
                   </li>
                </ul>
              
            </nav>
        </header>
    )
}

export default Nav;