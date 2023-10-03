import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import Card from './components/Cards/Card';
import Nav from './components/Navbar/Nav';
import Nosotros from './components/QuienesSomos/Nosotros';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Router>
          <header>
            <Nav />
            <Switch>
              <Route path='/Nosotros' element= {<Nosotros/>} exact/>
            </Switch>
          </header>
          <main>
            <Card />
          </main>
          <footer>
            <Footer />
          </footer>
        </Router>
    </BrowserRouter>
        
    </>
  );
}

export default App;
