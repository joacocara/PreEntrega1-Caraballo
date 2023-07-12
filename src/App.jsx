import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import Nosotros from "./components/Nosotros/Nosotros"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Contacto from "./components/Contacto/Contacto"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./components/Context/CartContext"


function App() {
  

  return(
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos/:categoryId" element={<ItemListContainer/>} />
            <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="*" element={ <navigate to={"/"} />}></Route>
          {/* <Route path="*" element={<Error404/>} /> */} 
        </Routes>

        <footer />

        </BrowserRouter>
      </CartProvider>
  )
}

export default App