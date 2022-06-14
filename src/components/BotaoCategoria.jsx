import PropTypes from 'prop-types';
import React from 'react';

class BotaoCategoria extends React.Component {
  render() {
    const { categoria: { name }, funk } = this.props;

    return (
      <button
        type="button"
        data-testid="category"
        onClick={ funk }
      >
        {name}
      </button>
    );
  }
}

BotaoCategoria.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default BotaoCategoria;
