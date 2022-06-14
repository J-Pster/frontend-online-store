import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="esquerdaContainer">
          <img src="/cart.png" alt="logo" width="50px" />
        </div>
        <div className="direitaContainer">
          <Link
            data-testid="shopping-cart-button"
            to="/cart"
          >
            Meu Carrinho de Compras
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
