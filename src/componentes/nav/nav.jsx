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
                 <p>Mundo <b className={estilos.masco}>Repuestos</b></p>
                 </div>
                
                        <Link to="/categorias/motos110">    Motos 110</Link>
                    
                
                        <Link to="/categorias/motos150">Motos 150/125</Link>
                    
                
                        <Link to="/categorias/bicis">Bicis</Link>
                    
                
                        <Link to="/">Inicio</Link>
                       
                <Link to="/cart"><CardWidget/></Link>
                    
                </ul>
               
              
            </nav>
        </header>
    )
}

export default Nav;