import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShopCart from './pages/ShopCart';
import Checkout from './pages/Checkout';
import PaginaProduto from './pages/PaginaProduto';

// Branch Release

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/produto/:id" component={ PaginaProduto } />
            <Route exact path="/cart" component={ ShopCart } />
            <Route exact path="/checkout" component={ Checkout } />
            <Route exact path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
