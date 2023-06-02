import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { useState } from 'react';
import { createContext } from 'react';
import ReactSwitch from 'react-switch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("light")
  const switchTheme = () => {
    setTheme((now) => (now === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <BrowserRouter>
        <CarritoProvider>
          <div className="App" id={theme}>
            <NavBar />
            <div className="switch">
              <label> {theme === "light" ? "Light Mode " : "Dark Mode "}</label>
              <ReactSwitch onChange={switchTheme} checked={theme === "dark"} />
            </div>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
              <Route path='/item/:idItem' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='*' element={<h2> Sitio en construcción</h2>}></Route>
              <Route path='/checkout' element={<Checkout />}></Route>
            </Routes>
            <Footer />
          </div>
        </CarritoProvider>
      </BrowserRouter >
    </ThemeContext.Provider>
  );
}

export default App;
