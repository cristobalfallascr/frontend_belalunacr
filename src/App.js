import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Auth from "./products/pages/Auth";

import PopProducts from "./products/pages/PopProducts";
import MainNavigation from "./shared/components/navigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <PopProducts />
          </Route>
          <Route path="/acceder" exact>
            <Auth/>
          </Route>
          
        </Switch>
      </main>
    </Router>
  );
}

export default App;
