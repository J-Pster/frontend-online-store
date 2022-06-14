import React from 'react';
import BotaoCategoria from '../components/BotaoCategoria';
import CardDeProduto from '../components/CardDeProduto';
import Footer from '../components/Footer';
import Header from '../components/Header';
import * as api from '../services/api';
import * as cart from '../services/localStorage';
import '../style/Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carregando: true,
      categorias: [],
      categoriaSelecionada: '',
      itemPesquisado: '',
      itensEncontrados: [],
    };
  }

  componentDidMount() {
    this.setState({ carregando: true }, async () => {
      const categorias = await api.getCategories();
      this.setState({ categorias, carregando: false });
    });
  }

  handleSearch = ({ target: { value } }) => {
    this.setState({
      itemPesquisado: value,
    });
  }

  selecionarCategoria = (categoriaSelecionada) => {
    this.setState({
      categoriaSelecionada,
    }, () => { this.setProductByCat(); });
  }

  searchQuery = () => {
    const { categoriaSelecionada } = this.state;
    if (categoriaSelecionada) {
      this.setProductsByCatQuery();
    } else {
      this.setProductsByQuery();
    }
  }

  setProductsByCatQuery = async () => {
    const { categoriaSelecionada: c, itemPesquisado } = this.state;
    const retorno = await api.getProductsFromCategoryAndQuery(c, itemPesquisado);
    const itensEncontrados = retorno.results;
    this.setState({ itensEncontrados });
  }

  setProductByCat = async () => {
    const { categoriaSelecionada: c } = this.state;
    const retorno = await api.getProductsFromCategory(c);
    const itensEncontrados = retorno.results;
    this.setState({ itensEncontrados });
  }

  setProductsByQuery = async () => {
    const { itemPesquisado } = this.state;
    const retorno = await api.getProductsFromQuery(itemPesquisado);
    const itensEncontrados = retorno.results;
    this.setState({ itensEncontrados });
  }

  render() {
    const { carregando, categorias, itensEncontrados } = this.state;

    return (
      <>
        <Header />
        <div className="paiHome borda">

          <div className="lateralEsquerda filtros borda">
            {!carregando && (categorias.map((categoria) => (<BotaoCategoria
              key={ categoria.id }
              categoria={ categoria }
              funk={ () => this.selecionarCategoria(categoria.id) }
            />)))}
          </div>

          <div className="centro borda">
            <div className="pesquisa">
              <input
                type="text"
                data-testid="query-input"
                onChange={ (e) => this.handleSearch(e) }
              />
              <button
                type="button"
                data-testid="query-button"
                onClick={ () => this.searchQuery() }
              >
                Pesquisar
              </button>
            </div>
            <div className="produtos">
              { itensEncontrados.length
                ? itensEncontrados.map((item, index) => (
                  <CardDeProduto
                    key={ index }
                    item={ item }
                    onClick={ () => cart.newItemOnCart(item) }
                  />
                ))
                : (
                  <p data-testid="home-initial-message">
                    Digite algum termo de pesquisa ou escolha uma categoria.
                  </p>
                )}
            </div>
          </div>

          <div className="lateralDireita borda" />

        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
