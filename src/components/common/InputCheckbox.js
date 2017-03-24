/**
 * Created by hoale on 3/23/2017.
 */
/**
 * Created by hoale on 3/23/2017.
 */
import React from 'react';

class InputCheckbox extends React.Component {
  constructor(props, context) {
    super(props, context);


  }


  render() {
    return
    (
      <div>
        <div className={this.props.wrapperClass}>
          <input type="checkbox" value={this.props.value}/>
          <label>{this.props.label}</label>
        </div>
      </div>
    );

  }
}
InputCheckbox.propsType = {
  wrapperClass: React.PropTypes.string,
  label: React.PropTypes.string,
  value: React.PropTypes.string,
};
export default InputCheckbox;

