import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Topbar.module.css';

const Topbar = props => (
  <div styleName="bar">
    <div styleName="bar-user-details">
      <div styleName="user-dp">
        <img src="./favicon.ico" alt="" />
      </div>
      <div>
        <span styleName="user-name">Ritwick Dey</span>
        <i className="material-icons icons-fix">keyboard_arrow_down</i>
      </div>
    </div>
  </div>
);

export default CSSModules(Topbar, styles);
