import * as React from 'react';

class Button extends React.Component {
  public render() {
    return (
      <div className="button">{this.props.children}</div>
    );
  }
}

export default Button;
