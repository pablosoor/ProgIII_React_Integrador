
import { AppProduct } from "./components/AppProduct/AppProduct";
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
import { FromComponent } from "./components/FromComponent/FromComponent";
import { MiPrimerComponente } from "./components/MiPrimerComponente/MiPrimerComponente"

export const App = () => {

  // const [enableCounter, setEnableCounter] = useState(false)

  return (
    <div style={{display: "flex", flexDirection: "column", gap:"2vh"}}>
        {/* <MiPrimerComponente text={"Texto desde propiedades"} color='red' fontSize={3}/> */}

        {/* {enableCounter && <ComponentCounter/>} */}

        {/* <button onClick={() =>{
          setEnableCounter(!enableCounter)
        }}>Mostrar u Ocultar Counter</button> */}

        {/* <ComponentCounter/>
        <ComponentUseEffect/> */}
        {/* <FromComponent/> */}

        <AppProduct/>
    </div>
  );
};
