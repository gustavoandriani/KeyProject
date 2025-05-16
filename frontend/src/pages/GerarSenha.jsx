import { useState } from "react"

export default function GerarSenha() {
    const[count, setCount] = useState(0)
    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>SENHA</button>
            <button onClick={() => setCount(count + 1)}>PREFERENCIAL</button>
            <p>{count}</p>
        </div>
    )
}