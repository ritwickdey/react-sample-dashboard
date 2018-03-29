import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Portfolio.module.css';

import PortfolioItem from '../PortfolioItem/PortfolioItem';

const fakePortfolioData = [
  { type: 'Distribution', date: '10 Mar 2017', value: '45' },
  { type: 'Reallocate', date: '08 Mar 2017', value: '25' },
  { type: 'Other', date: '01 Mar 2017', value: '33' },
  { type: 'Distribution', date: '25 Mar 2017', value: '22' },
  { type: 'Distribution', date: '17 Mar 2017', value: '78' },
  { type: 'Reallocate', date: '02 Mar 2017', value: '22' },
  { type: 'Distribution', date: '10 Mar 2017', value: '45' },
  { type: 'Other', date: '01 Mar 2017', value: '33' }
];

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
    <div styleName="contain-body">
      {fakePortfolioData.map(protfolio => <PortfolioItem data={protfolio} />)}
    </div>
  </div>
);

export default CSSModules(Portfolio, styles);
