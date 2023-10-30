import Formulaire from './components/Formulaire'
import './assets/css/Form.css';
import './App.css';
import logo from './assets/img/logo.webp'; // Importez votre logo


function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <nav className="navbar">
          <ul>
            <li><a href="#about">À propos</a></li>
            <li><a href="#features">Fonctionnalités</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero">
          
          <img src={logo} alt="" className="logo" />
          <form>
          <Formulaire />
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default App;
