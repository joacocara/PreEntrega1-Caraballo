import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "react-bootstrap"
import Compra from "./components/Boton/Botones"



function App() {

  return(
    <div>
      <NavBar />
      <ItemListContainer mensaje="Lo mejor para el mejor"/>
    <div>
      <Button variant="warning">Apretá acá</Button>
      <Button>Apretá acá +</Button>
      <Button>Apretá acá -</Button>
    </div>
    </div>
  )
}

export default App