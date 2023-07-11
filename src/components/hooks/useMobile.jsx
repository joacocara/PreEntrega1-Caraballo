import { useEffect, useState } from "react"



const useMobile = () => {
    const [isMobile, setisMobile] = useState(null)

    const calcMobile = () => {
        if (window.innerWidth <= 700) {
            setisMobile(true)
        } else{
            setisMobile(false)
        }
    }

    useEffect(() => {
        calcMobile()

        window.addEventListener('resize', calcMobile)

        return () => {
            window.removeEventListener('resize', calcMobile)
        }
    }, [])

    return isMobile
}
export default useMobile