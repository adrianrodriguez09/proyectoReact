import React from 'react';
import estilo from './footer.module.css'



const Footer = ()=>{
    return(
        <footer className={estilo.estiloFooter}>
            <ul className={estilo.ul}>
                <li>
                    <a href="http://" className={estilo.link}>watssap</a>
                </li>
                <li>
                    <a href="http://facebok.com" className={estilo.link}>facebook</a>
                </li>
                <li>
                    <a href="http://" className={estilo.link}>instagram</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;