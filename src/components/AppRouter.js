import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Character from "./CharacterList";
import WelcomePage from "./WelcomePage";
import Characters from "./CharacterList";
function AppRouter() {
  return (
    <Router>
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/character">Characters</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/character" component={Characters} />
          <Route path="/" component={WelcomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
