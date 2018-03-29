import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './ContainPage.module.css';

import Tabbar from '../Tabbar/Tabbar';
import Banner from '../Banner/Banner';
import SubContainer from '../SubContainer/SubContainer';

const ContainPage = props => (
  <div styleName="container">
    <div styleName="sub-container">
      <Tabbar />
      <SubContainer />
    </div>
    <div styleName="banner">
      <Banner />
    </div>
  </div>
);

export default CSSModules(ContainPage, styles);
