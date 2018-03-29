import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Banner.module.css';

const Banner = props => (
  <div>
    <div styleName="banner">
      <div styleName="price-details">
        <span styleName="price-sign">&#8377;</span>
        <p styleName="price">{parseInt('19956').toLocaleString('en-IN')}</p>
        <p styleName="price-up">+6.4%</p>
      </div>
      <p styleName="addtional-details">
        <label>Deposit: </label>
        <span styleName="value">
          &#8377;{parseInt('10530').toLocaleString('en-IN')}
        </span>
      </p>
      <button className="btn" styleName="btn-special">
        <span styleName="text">
          Add Funds
        </span>
        <i className="material-icons" styleName="icon">
          arrow_forward
        </i>
      </button>
    </div>
  </div>
);

export default CSSModules(Banner, styles);
