import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Page_One from "./Components/Page_One";
import Page_Two from "./Components/Page_Two";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="navbar_top">
          <ul className="tab_items">
            <li className="tab_item">
              <NavLink
                className="navbar_style"
                activeClassName="navbar_active"
                exact
                to="/"
              >
                Page One
              </NavLink>
            </li>
            <li className="tab_item">
              <NavLink
                className="navbar_style"
                activeClassName="navbar_active"
                exact
                to="/page_2"
              >
                Page Two
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="main_container">
          <Switch>
            <Route exact path="/" component={Page_One} />
            <Route exact path="/page_2" component={Page_Two} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
