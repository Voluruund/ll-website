import { useEffect, useState } from "react"

export default function Clicker(){
    const [ count, setCount ] = useState(parseInt(localStorage.getItem('count') ?? 0))

    useEffect(() =>{

    }, [])

    const buttonClick = () =>
    {
        setCount(count+1)
    }

    return <div>
        <div>Clicks count: { count }</div>
        <button onClick={buttonClick}>Click me</button>
    </div>
}