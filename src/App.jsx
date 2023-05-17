import './App.css';
import NavBar from './components/NavBar/NavBar';
import Kimonos from './components/Kimonos/Kimonos';
import Guantes from './components/Guantes/Guantes';
import Indumentaria from './components/Indumentaria/Indumentaria';
import Accesorios from './components/Accesorios/Accesorios';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';
import { createContext } from 'react';
import ReactSwitch from 'react-switch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("light")
  const switchTheme = () => {
    setTheme((now) => (now === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>

      <BrowserRouter>
        <div className="App" id={theme}>
          <NavBar />
          <div className="switch">
            <label> {theme === "light" ? "Light Mode " : "Dark Mode "}</label>
            <ReactSwitch onChange={switchTheme} checked={theme === "dark"} />
          </div>
          <Routes>
            <Route path="/kimonos" element={<Kimonos />} />
            <Route path="/guantes" element={<Guantes />} />
            <Route path="/indumentaria" element={<Indumentaria />} />
            <Route path="/accesorios" element={<Accesorios />} />
          </Routes>
        </div>
      </BrowserRouter >
    </ThemeContext.Provider>
  );
}

export default App;
