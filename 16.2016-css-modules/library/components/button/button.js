import React from 'react';
import c from './button.css';
import classnames from 'classnames';

export default class Button extends React.Component {
  render() {
    let button = {};
    button[c.button] = true;
    button[c.buttonMedium] = this.props.size == 'medium';
    button = classnames(button);

    let text = {};
    text[c.text] = true;
    text[c.textMedium] = this.props.size == 'medium';
    text = classnames(text);

    return (
      <button className={button}>
        <span className={text}>{this.props.children}</span>
      </button>
    )
  }
}
