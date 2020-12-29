import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import PopProducts from "./products/pages/PopProducts";
import MainNavigation from "./shared/navigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <PopProducts />
          </Route>
          
        </Switch>
      </main>
    </Router>
  );
}

export default App;
