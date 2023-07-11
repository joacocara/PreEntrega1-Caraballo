import './NavBar.scss'
import logo from '../../assets/react.svg'
import { Link } from 'react-router-dom'
import React from 'react'
import Buscador from '../Buscador/Buscador'



const NavBar = ({variant = false}) => {
  
    return (
        <navbar className={variant ? "navbar navbar-v" : "navbar"}>
            <div className="navbar__contenedor">
                {/* <img src='/img/vite.svg' alt='logo'/> */}
                <img className="navbar__logo" src={logo} alt="logo" />


                <nav className="navbar__nav">
                <Link className='navbar__link' to="/">inicio</Link>
                <Link className="navbar__link" to="/productos/ryzen">Ryzen</Link>
                <Link className="navbar__link" to="/productos/intel">Intel</Link>
                <Link className="navbar__link" to="/contacto">Contacto</Link> 
                <Link className="navbar__link" to="/nosotros">Nosotros</Link> 
                </nav>
            
            </div>
            <br />
            <Buscador /> 
            
        </navbar>
    )
}

export default NavBar