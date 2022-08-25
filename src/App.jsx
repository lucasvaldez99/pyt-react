import './App.css';
import Nav from './componentes/nav/nav'
import Main from './componentes/main/main';
import Footer from './componentes/footer/footer';
import ItemListContainer from './componentes/itemListContainer/itemListContainer';

const App = () => {

  const bienvenida = 'bienvenidos a nuestra pagina web'
  return (
    <>
    <Nav/>
    <ItemListContainer bienvenida={bienvenida}/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App;