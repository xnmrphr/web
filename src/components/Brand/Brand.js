import React from 'react';
import PropTypes from 'prop-types';

import Sign from '../../assets/img/logo/sign.png';
import SignWhite from '../../assets/img/logo/sign-white.png';
import Text from '../../assets/img/logo/safesafe.png';
import TextWhite from '../../assets/img/logo/safesafe-white.png';

import './Brand.scss';

const Brand = ({ content, white }) => {
  const TextImg = white ? TextWhite : Text;
  const SignImg = white ? SignWhite : Sign;

  return (
    <div className={`brand ${white ? 'brand--white' : ''}`}>
      <img className="brand__sign" src={SignImg} alt="SafeSafe" />
      <img className="brand__text" src={TextImg} alt="SafeSafe" />
      {content && (
        <div className="brand__content">
          <h4 className="brand__text-1">
            Włącz się do wspólnej walki przeciwko Koronawirusowi.
          </h4>
          <h5 className="brand__text-2">Spersonalizuj swoją apliakcję.</h5>
        </div>
      )}
    </div>
  );
};

Brand.defaultProps = {
  content: true,
  white: false
};

Brand.propTypes = {
  content: PropTypes.bool,
  white: PropTypes.bool
};

export default Brand;