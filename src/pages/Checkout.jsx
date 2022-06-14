import React from 'react';
import ProdutoNoCheckout from '../components/ProdutoNoCheckout';
import * as cart from '../services/localStorage';
import '../index.css';

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carregando: true,
      produtos: [],
      total: 0,
    };
  }

  componentDidMount() {
    this.setState({ carregando: true }, async () => {
      const produtos = await cart.getitensFromCart();
      this.setState({ produtos, carregando: false }, () => { this.somarProdutos(); });
    });
  }

  somarProdutos() {
    const { produtos } = this.state;
    const total = produtos.reduce((stotal, produto) => stotal + produto.price, 0);
    this.setState({ total });
  }

  render() {
    const { carregando, produtos, total } = this.state;

    return (
      <div>
        <h2>Produtos</h2>
        {carregando && <p>Carregando...</p>}
        {produtos.map((produto, index) => (
          <ProdutoNoCheckout key={ index } produto={ produto } />
        ))}
        <div>
          <hr />
          <h2>Total</h2>
          <p>
            R$
            {total}
          </p>
        </div>
        <div>
          <hr />
          <h2>Dados Cadastrais</h2>
          <form className="form-horizontal">
            <input
              type="text"
              placeholder="nome completo"
              data-testid="checkout-fullname"
            />
            <input type="text" placeholder="email" data-testid="checkout-email" />
            <input type="text" placeholder="CPF" data-testid="checkout-cpf" />
            <input type="text" placeholder="telefone" data-testid="checkout-phone" />
            <input type="text" placeholder="CEP" data-testid="checkout-cep" />
            <input
              type="text"
              placeholder="endereço"
              data-testid="checkout-address"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Checkout;
