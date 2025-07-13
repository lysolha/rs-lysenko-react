import React from 'react';

type InputProps = {
  id: string;
  text: string;
  changeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

class Input extends React.Component<InputProps> {
  render() {
    return (
      <input
        className="input"
        id={this.props.id}
        placeholder={this.props.placeholder}
        onChange={this.props.changeInput}
        type="text"
        value={this.props.text}
      />
    );
  }
}

export default Input;
