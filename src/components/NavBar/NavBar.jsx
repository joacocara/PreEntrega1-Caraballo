import './NavBar.scss'

const NavBar = () => {
    return (
        <header className="navbar">
            <div className="contenedor__navbar">
                <img src='vite.svg' alt='logo' />
                
                <nav className="navbar__nav">
                    <a className="navbar__link" href="#">Tienda</a>
                    <a className="navbar__link" href="#">Productos</a>
                    <a className="navbar__link" href="#">Envios</a>
                </nav>
            </div>
        </header>   
    )
}

export default NavBar