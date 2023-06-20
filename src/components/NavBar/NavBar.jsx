import './NavBar.scss'
import logo from '../../assets/react.svg'
import { Link } from 'react-router-dom'
import React from 'react'



const NavBar = ({variant = false}) => {

    return (
        <header className={variant ? "navbar navbar-v" : "navbar"}>
            <div className="contenedor__navbar">
             {/*<img src='vite.svg' alt='logo' />*/}
             <img src={logo} alt="logo" />
                
                
                <nav className="navbar__nav">
                    <Link className='navbar__link' to="/">inicio</Link>
                    <Link className="navbar__link" to="/productos/ryzen">Ryzen</Link>
                    <Link className="navbar__link" to="/productos/intel">Intel</Link>
                    <Link className="navbar__link" to="/contacto">Contacto</Link>    
                    <img className='carrito' src="/carrito.png" alt="carrito" />
                </nav>
            </div>
        </header>   
    )
}

export default NavBar