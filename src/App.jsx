import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './components/Cards/Card';
import Nav from './components/Navbar/Nav';

import Nosotros from './components/QuienesSomos/Nosotros';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route index element={<Card />} />
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/detalles/:id' element={<PokemonDetail/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;