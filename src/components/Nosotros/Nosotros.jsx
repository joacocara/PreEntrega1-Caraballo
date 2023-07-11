import { useEffect } from "react"
import useMobile from "../hooks/useMobile"


const Nosotros = () => {
    const isMobile = useMobile()

    const cliclear = (e) => {
        console.log(e)
    }
   
    useEffect(() => {
        window.addEventListener('click', cliclear)

        return() => {
        window.removeEventListener('click', cliclear)

        }
    }, [])

    return (
        <div className="container my-5">
            <h2>Nosotros</h2>
            <hr />
            {
                isMobile ? <h3>Estamos en mobile</h3> : <p>estamos en desk</p>

            }
            
        </div>
    )
}

export default Nosotros