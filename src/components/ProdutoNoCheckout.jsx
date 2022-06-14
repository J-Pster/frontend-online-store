import React from 'react';
import PropTypes from 'prop-types';

class ProdutoNoCheckout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carregando: true,
      produto: {},
    };
  }

  componentDidMount() {
    this.setState({ carregando: true }, () => {
      const { produto } = this.props;
      this.setState({ produto, carregando: false });
    });
  }

  render() {
    const { carregando, produto } = this.state;

    return (
      <div key={ produto.id }>
        {carregando ? (<p>Carregando...</p>) : (
          <>
            <span><strong>{produto.title}</strong></span>
            <p>
              Valor Unitário: R$
              {produto.price}
            </p>
          </>
        )}
      </div>
    );
  }
}

ProdutoNoCheckout.propTypes = {
  produto: PropTypes.string,
}.isRequired;

export default ProdutoNoCheckout;
