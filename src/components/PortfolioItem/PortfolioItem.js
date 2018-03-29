import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './PortfolioItem.module.css';

import ProfileIcon from '../ProfileIcon/ProfileIcon';

const PortfolioItem = props => (
  <div styleName="container">
    <div styleName="type-name">
      <div styleName="profile-icon">
        <ProfileIcon name={props.data.type} />
      </div>
      <div>{props.data.type}</div>
    </div>
    <div styleName="date">{props.data.date}</div>
    <div styleName="value">₹{props.data.value}</div>
  </div>
);

export default CSSModules(PortfolioItem, styles);
