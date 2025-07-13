import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  className?: string;
};

class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button
        className={`btn ${this.props.className}`}
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
