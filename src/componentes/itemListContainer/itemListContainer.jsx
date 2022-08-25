import estilo from './itemList.module.css'


const ItemListContainer = ({bienvenida}) =>{
    return(
   <>

   <h2 className={estilo.saludo}>{bienvenida}</h2>

   <p className={estilo.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore labore culpa fugit cupiditate doloremque debitis! Eos, cupiditate est. Maxime accusamus illo iusto dolorem reprehenderit, officia animi culpa molestiae minus.</p>
   </>
    )
}


export default ItemListContainer