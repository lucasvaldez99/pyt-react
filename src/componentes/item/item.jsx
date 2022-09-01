import React from "react";


const Item = ({items}) => {
    return(
        <div  key={items.id}>
         <h2>{items.nombre}</h2>
         <h3>{items.precio}</h3>
         <h4>{items.cantidad}</h4>
         <img src={items.img} alt=""/>
        </div>
    )
}

export default Item