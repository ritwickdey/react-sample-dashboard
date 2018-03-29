import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Tabbar.module.css';

const TabBar = props => (
  <div styleName="container">
    <h4 styleName="header">Activites</h4>
    <div styleName="tab-bar">
      <div styleName="tab" className={styles.selectedTab}>Portfolio</div>
      <div styleName="tab">Opearions</div>
      <div styleName="tab">Fees</div>
      <div styleName="tab">Others</div>
    </div>
  </div>
);

export default CSSModules(TabBar, styles);
