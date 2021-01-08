import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Auth from "./products/pages/Auth";

// Navigation elements
import MainNavigation from "./shared/components/navigation/MainNavigation";


//Web Pages
import PopProducts from "./products/pages/PopProducts";
import Catalog from "./products/pages/Catalog";



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
          <Route path="/catalogo">
            <Catalog/>
          </Route>
          
        </Switch>
      </main>
    </Router>
  );
}

export default App;
