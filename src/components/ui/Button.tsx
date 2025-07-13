import React from 'react';
import '../../styles/button.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: 'submit' | 'reset' | 'button';
};

class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button
        className="btn"
        type={this.props.type}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
