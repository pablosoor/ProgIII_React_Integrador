import { FC } from "react"

interface IpropsMiPrimerComponente{
  text: string;
  color: string;
  fontSize?: number
}

export const MiPrimerComponente : FC<IpropsMiPrimerComponente> = ({text, color, fontSize}) => {
  return ( 
    <div style={{color: `${color}`, fontSize: `${fontSize || 1 }rem`}}>
      <p> {text}</p>
    </div> 
  )
};

