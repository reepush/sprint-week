import React from 'react';
import c from './button.css';
import classnames from 'classnames';

export default class Button extends React.Component {
  render() {
    let classes = {};
    classes[c.button] = true;
    classes[c.sizeMedium] = this.props.size == 'medium';
    classes = classnames(classes);

    return (
      <button className={classes}>
        {this.props.children}
      </button>
    )
  }
}
