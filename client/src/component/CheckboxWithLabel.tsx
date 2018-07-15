import * as React from 'react'

interface ICheckboxWithLabelProps {
  labelOff: string;
  labelOn: string;
}

interface ICheckboxWithLabelState {
  isChecked: boolean;
}

class CheckboxWithLabel extends React.Component<ICheckboxWithLabelProps, ICheckboxWithLabelState> {
  constructor(props: ICheckboxWithLabelProps) {
    super(props);
    this.state = { isChecked: false };
    this.handleCheck = this.handleCheck.bind(this);
  }
  public handleCheck(event: any) {
    this.setState(current => ({ isChecked: !current.isChecked }))
    
  }

  public render() {
    return (
      <label>
        <input
          type="checkbox"
          id="check"
          checked={this.state.isChecked}
          onChange={this.handleCheck}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}

export default CheckboxWithLabel;
