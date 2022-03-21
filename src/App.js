import classes from "./App.module.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Random from "./components/random/Random";
import Favourites from "./components/Favourites/Favourites";
function App() {
  return (
    <div className="App">
      <nav className={classes.header}>
        <ul className={classes.header__list}>
          <li>
            <NavLink to="/">Random dish</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favourites</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Random />} />
        <Route path="/favorites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
