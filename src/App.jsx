import './App.css';
import Nav from './componentes/nav/nav'
import Footer from './componentes/footer/footer';
import ItemListContainer from './componentes/itemListContainer/itemListContainer';
import Contador from './componentes/contador/contador';
import ItemDetailContainerm from './componentes/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './componentes/cart/cart';


const App = () => {

  const bienvenida = 'bienvenidos a nuestra pagina web'
 
  let stock = 15
  let initial = 0
 
const onAdd = ()=>{
  alert("agregaste productos al carrito")
}
  return (
   
    <BrowserRouter>
    <Nav/>
    

    <Routes>
     
     <Route path="/" element={ <ItemListContainer bienvenida={bienvenida}/>}/>
     
     <Route path='/itemdetail/:idProd' element={<ItemDetailContainerm/>}/>
  
      <Route path='/categorias/:categoriasName'element={<ItemListContainer/>}/>

     <Route path='/cart' element={<Cart/>}/> 
   </Routes>


    <Footer/>
    
    </BrowserRouter>
  )
}

export default App;