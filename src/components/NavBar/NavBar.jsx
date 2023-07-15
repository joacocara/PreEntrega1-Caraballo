import './NavBar.scss'
import logo from '../../assets/react.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { CartContext } from '../../Context/CartContext'
import Buscador from '../../ejemplos/Buscador/Buscador'



const NavBar = ({variant = false}) => {
    const { cart } = useContext (CartContext)
  
    return (
        <nav className={variant ? "navbar navbar-v" : "navbar"}>
            <div className="navbar__contenedor">
                <img className="navbar__logo" src={logo} alt="logo" />
                <nav className="navbar__nav">
                    <Link className='navbar__link' to="/">inicio</Link>
                    <Link className="navbar__link" to="/productos/ryzen">Ryzen</Link>
                    <Link className="navbar__link" to="/productos/intel">Intel</Link>
                    <Link className="navbar__link" to="/contacto">Contacto</Link>
                    <Link className="navbar__link" to="/nosotros">Nosotros</Link>
                </nav>
                <div> 
                    {cart.length > 0 && <CartWidget /> }
                </div>
            </div>
        <br />
      <Buscador />  
      {/*Este commit funciona bien, seguir con firebase*/}
    </nav>
    )
}

export default NavBar