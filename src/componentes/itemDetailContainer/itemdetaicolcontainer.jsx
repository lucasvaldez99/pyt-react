import React,{useEffect, useState} from "react"

import { productos } from "../mock/productos"
 import ItemDetail from "../itemdetail/itemdetail"
  


const ItemDetailContainerm = ()=>{

const product = productos.find((productos)=>productos.id === 1)

const [data, setData] = useState({})

useEffect(() =>{
    const getData = new Promise((resolve, reject) => {
        setTimeout(()=>{
      resolve(product)
        },2000)
    })
    getData.then((data)=>{setData(data)})
},[])


    return(
        <div>
            <ItemDetail data={data}/>
        </div>
    )
}


export default ItemDetailContainerm