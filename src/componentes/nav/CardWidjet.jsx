import { BiCartAlt } from "react-icons/bi";
import  estilos from'./nav.module.css'
  export  const CardWidjet = () =>{
    return(
    <div>
    <span className={estilos.icono}><BiCartAlt/>Carrito:0</span>
    
    </div>
    )

}