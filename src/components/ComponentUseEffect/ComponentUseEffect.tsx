import { useEffect, useState } from "react"

export const ComponentUseEffect = () => {
    const [state, setState] = useState(false);
    useEffect(() => {
        console.log("Componente Montado")
        return () =>{
            console.log("Componente desmontado")
        }
    }, []);

    useEffect(() => {
        console.log(state)
    }, [state]);

  return (
    <div>
        <p>{state ? "Es true": "Es falso"}</p>
        <button onClick={() =>{
            setState(!state);
        }}>
            Cambia state
        </button>
    </div>
  )
}
