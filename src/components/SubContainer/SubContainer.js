import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './SubContainer.module.css';

import Portfolio from '../Portfolio/Portfolio';

const SubContainer = props => (
  <div styleName="container">
    <Portfolio />
  </div>
);

export default CSSModules(SubContainer, styles);
