import './App.css';
import Nav from './componentes/nav/nav'
import Main from './componentes/main/main';
import Footer from './componentes/footer/footer';
import ItemListContainer from './componentes/itemListContainer/itemListContainer';
import Contador from './componentes/contador/contador';



const App = () => {

  const bienvenida = 'bienvenidos a nuestra pagina web'
 
  let stock = 15
  let initial = 0
 
const onAdd = ()=>{
  alert("agregaste productos al carrito")
}
  return (
    <>
    <Nav/>
    <ItemListContainer bienvenida={bienvenida}/>
    <Contador stock={stock} initial={initial} onAdd={onAdd}/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App;