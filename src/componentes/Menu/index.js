import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import {Link} from 'react-router-dom';
//import ButtonLink from './componentes/ButtonLink';
import Button from 'C:/Users/Zeca_2/Desktop/my-app/src/componentes/Button'
function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
               <img className="Logo" src={Logo} alt="ZecaFlix logo"/>
            </Link>

            <Button as={Link} className = "ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>

    );
}

export default Menu;