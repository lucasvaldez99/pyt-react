import React from "react"
import estilo from './main.module.css'

const Main = ()=>{
    return(
        <main className={estilo.main}>
       <h2 className={estilo.h2}>Todo lo que necesites para tus dispositivos mobiles</h2>
       <p className={estilo.parrafo}>En esta tienda encontraras, fundas , templados , equipos de ultima generacion y mucho mas...</p>
       </main>
        )
}
export default Main