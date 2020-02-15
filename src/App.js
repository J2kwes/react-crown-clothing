import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
<<<<<<< Updated upstream

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};
=======
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
>>>>>>> Stashed changes

function App() {
  return (
    <div>
<<<<<<< Updated upstream
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
=======
      <Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact="true" path="/shop" component={ShopPage} />
        </Switch>
      </Header>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
