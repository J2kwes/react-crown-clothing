import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact="true" path="/shop" component={ShopPage} />
        </Switch>
      </Header>
    </div>
  );
}

export default App;
