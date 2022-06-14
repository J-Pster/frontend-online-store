import PropTypes from 'prop-types';
import React from 'react';

class ProdutoNoCarrinho extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carregando: true,
      produto: {},
      qtn: 1,
    };
  }

  componentDidMount() {
    this.setState({ carregando: true }, async () => {
      const { produto } = this.props;
      const { quantity } = produto;
      this.setState({ produto, qtn: quantity, carregando: false });
    });
  }

  plusQtn = () => {
    this.setState((prevState) => ({
      ...prevState,
      qtn: prevState.qtn + 1,
    }));
  }

  minusQtn = () => {
    const { qtn } = this.state;
    if (qtn === 0) {
      this.setState({ qtn: 0 });
    } else {
      this.setState((prevState) => ({
        ...prevState,
        qtn: prevState.qtn - 1,
      }));
    }
  }

  render() {
    const { carregando, produto, qtn } = this.state;

    return (
      <div>
        {carregando
          ? <p>Carregando...</p>
          : (
            <div>
              <p data-testid="shopping-cart-product-name">
                {`${produto.title} | R$${produto.price}`}
              </p>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => this.minusQtn() }
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">{ qtn }</p>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => this.plusQtn() }
              >
                +
              </button>
            </div>
          )}
      </div>
    );
  }
}

ProdutoNoCarrinho.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default ProdutoNoCarrinho;
