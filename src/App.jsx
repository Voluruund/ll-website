import { useState } from "react"
import Clicker from "./Clicker"

export default function App({ clickersCount, children }){
    const [ hasClicker, setHasClicker ] = useState(true)
    let increment = 0

    const tempArray = [...Array(clickersCount)]
    tempArray.map((value, index) =>
    {
        console.log(value, index)
    })

    const toggleClickerClick = () =>
    {
        setHasClicker(!hasClicker)
    }

    return <>
        { hasClicker && <>
            { [...Array(clickersCount)].map((value, index) =>
                <Clicker
                    key={ index }
                    increment={ increment }
                    keyName={ `count${index}` }
                    color={ `hsl(${ Math.random() * 360 }deg, 100%, 75%)` }
                />
            ) }
        </> }
    </>
}