import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import * as api from '../services/api';
import * as ls from '../services/localStorage';

class PaginaProduto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carregando: true,
      rate: ['1', '2', '3', '4', '5'],
      selectedRate: '1',
      produto: {},
      email: '',
      textArea: '',
      avaliacoes: [],
    };
  }

  componentDidMount() {
    this.setState({ carregando: true }, async () => {
      const { match: { params: { id } } } = this.props;
      const produto = await api.getProducts(id);
      const avaliacoes = ls.getCommentsFromitem(id);
      this.setState({ carregando: false, produto, avaliacoes });
    });
  }

  submitReview = () => {
    const { email, selectedRate, textArea, avaliacoes } = this.state;
    const { match: { params: { id } } } = this.props;
    const avaliacao = {
      email,
      selectedRate,
      textArea,
      productId: id,
    };

    ls.newComment(avaliacao);
    this.setState({ avaliacoes: [...avaliacoes, avaliacao] });
  }

  render() {
    const { carregando, produto, rate, avaliacoes } = this.state;
    return (
      <div className="pagina-produto">
        <Header />
        {carregando
          ? (
            <h2>Carregando...</h2>
          )
          : (
            <>
              <div>
                <h1 data-testid="product-detail-name">{produto.title}</h1>
                <h2>{`R$ ${produto.price}`}</h2>
                <img src={ produto.thumbnail } alt={ produto.title } />
                <p>{produto.description}</p>
                <p>{`ID: ${produto.id}`}</p>
                <button
                  type="button"
                  data-testid="product-detail-add-to-cart"
                  onClick={ () => ls.newItemOnCart(produto) }
                >
                  Comprar
                </button>
              </div>
              <div className="formAvaliacao">
                <h2>Avalie o produto</h2>
                <form>
                  <input
                    data-testid="product-detail-email"
                    type="email"
                    placeholder="Email"
                    onChange={ ({ target }) => this.setState({ email: target.value }) }
                  />
                  {rate.map((item, index) => (
                    <label key={ index } htmlFor={ item }>
                      {item}
                      <input
                        key={ index }
                        data-testid={ `${item}-rating` }
                        type="radio"
                        id={ item }
                        name="avaliacao"
                        value={ item }
                        onChange={ ({ target }) => this.setState({
                          selectedRate: target.value }) }
                      />
                    </label>
                  ))}
                  <textarea
                    data-testid="product-detail-evaluation"
                    rows="5"
                    cols="33"
                    placeholder="Comentarios"
                    onChange={ ({ target }) => this.setState({ textArea: target.value }) }
                  />
                  <button
                    data-testid="submit-review-btn"
                    type="button"
                    onClick={ () => this.submitReview() }
                  >
                    Enviar
                  </button>
                </form>
              </div>
              <div className="avaliacoes">
                {avaliacoes.map((item, index) => (
                  <div key={ index }>
                    <h3>{item.email}</h3>
                    <p key={ index }>{item.textArea}</p>
                    <p>{`Nota: ${item.selectedRate}`}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        <Footer />
      </div>
    );
  }
}

PaginaProduto.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }),
}.isRequired;

export default PaginaProduto;
