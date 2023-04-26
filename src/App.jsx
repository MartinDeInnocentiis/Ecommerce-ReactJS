import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';
import { createContext } from 'react';
import ReactSwitch from 'react-switch';
export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("light")
  const switchTheme = () => {
    setTheme((now) => (now === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <div className="App" id={theme}>
        <NavBar />
        <div className="switch"> 
        <label> {theme==="light" ? "Light Mode " : "Dark Mode "}</label>
          <ReactSwitch onChange={switchTheme} checked={theme === "dark"} />
        </div>
        <ItemListContainer greeting="Muchas gracias por visitar nuestra tienda!" />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
