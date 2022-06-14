import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProdutoNoCarrinho from '../components/ProdutoNoCarrinho';
import * as cart from '../services/localStorage';

class ShopCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carregando: true,
      produtos: [],
    };
  }

  componentDidMount() {
    this.setState({ carregando: true }, async () => {
      const produtos = await cart.getitensFromCart();
      this.setState({ produtos, carregando: false });
    });
  }

  render() {
    const { carregando, produtos } = this.state;

    return (
      <>
        <Header />
        <div>
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
          {
            carregando
              ? <p>Carregando...</p>
              : (
                <div>
                  {!produtos.length ? <p>Seu carrinho está vazio</p>
                    : (
                      <div>
                        <h1>Produtos</h1>
                        {produtos.map((produto, index) => (<ProdutoNoCarrinho
                          key={ index }
                          produto={ produto }
                        />))}
                      </div>
                    )}
                </div>
              )
          }
          <Link
            data-testid="checkout-products"
            to="/checkout"
          >
            Finalizar Compra
          </Link>
        </div>
        <Footer />
      </>
    );
  }
}

export default ShopCart;
