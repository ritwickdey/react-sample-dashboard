import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Portfolio.module.css';

const Portfolio = props => (
  <div>
    <div styleName="header">
      <div>
        TYPE
        <i className="material-icons" styleName="icon">
          keyboard_arrow_down
        </i>
      </div>
      <div>
        DATE
        <i className="material-icons" styleName="icon">
          keyboard_arrow_down
        </i>
      </div>
      <div>
        VALUE
        <i className="material-icons" styleName="icon">
          keyboard_arrow_down
        </i>
      </div>
    </div>
  </div>
);

export default CSSModules(Portfolio, styles);
