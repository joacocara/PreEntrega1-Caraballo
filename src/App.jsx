import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "react-bootstrap"
import Compra from "./components/Boton/Botones"



function App() {

  return(
    <div>
      <NavBar />


        <ItemListContainer />

    </div>
  )
}

export default App