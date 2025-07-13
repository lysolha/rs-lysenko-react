import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: 'submit' | 'reset' | 'button';
  disabled?: boolean;
};

class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button
        className="btn"
        type={this.props.type}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
