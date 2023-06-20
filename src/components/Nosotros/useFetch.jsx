import { useEffect, useState } from "react"


export const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect (() => {
        fetch (url)
            .then((resp) => resp.json())
            .then((res) => {
                setData(apida)
            })
            .catch((e) => console.log(e))
    }, [])

    return data

}