import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './components/Cards/Card';
import Nav from './components/Navbar/Nav';
import PokemonCount from './components/PokemonCount/PokemonCount';
import Nosotros from './components/QuienesSomos/Nosotros';
import Footer from './components/Footer/Footer';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import Sidebar from './components/Navbar/Sidebar';
import Cart from './components/Carrito/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Sidebar />
                <Card />
              </>
            }
          />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/detalles/:name" element={<PokemonDetail />} />
          <Route path="/contador" element={<PokemonCount />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;