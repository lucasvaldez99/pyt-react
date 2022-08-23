import logo from './logo.svg';
import './App.css';
import Nav from './componentes/nav/nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          proximamente solo en cines...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          aprenda React gratis 
        </a>
      </header>
    </div>
  );
}

export default App;
