import classes from "./App.module.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Random from "./components/random/Random";
import Favourites from "./components/Favourites/Favourites";
function App() {
  return (
    <div className="App">
      <Router>
        <nav className={classes.header}>
          <ul className={classes.header__list}>
            <li>
              <Link to="./main">Random dish</Link>
            </li>
            <li>
              <Link to="/favorites">Favourites</Link>
            </li>
          </ul>
        </nav>
        <Route path="/main" component={Random} />
        <Route path="/favorites" component={Favourites} />
      </Router>
    </div>
  );
}

export default App;
