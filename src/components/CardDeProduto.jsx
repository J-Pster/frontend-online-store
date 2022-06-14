import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class CardDeProduto extends React.Component {
  render() {
    const { item, onClick } = this.props;
    const { thumbnail, price, title, id } = item;
    return (
      <div className="card" data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <div className="card-content">
          <h3>{title}</h3>
          <p>
            R$:
            {' '}
            {price}
          </p>
          <Link to={ `/produto/${id}` } data-testid="product-detail-link">Ver Mais</Link>
          <button type="button" data-testid="product-add-to-cart" onClick={ onClick }>
            Comprar
          </button>
        </div>
      </div>
    );
  }
}

CardDeProduto.propTypes = {
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
}.isRequired;

export default CardDeProduto;
