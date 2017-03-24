/**
 * Created by hoale on 3/23/2017.
 */
import React, {PropTypes} from 'react';
import * as Validation from '../../utils/validation';
import  * as Message from '../../constants/messageError';
import  * as ClassNames from '../../constants/ClassNames';
import  * as InputTypes from '../../constants/InputTypes';
class InputButton extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <button onClick={this.props.click} className={this.props.wrapperClass} type="button">{this.props.label}</button>
    )

  }
}
InputButton.propsType = {
  wrapperClass: PropTypes.string,
  label: PropTypes.string,
  click: PropTypes.func.isRequired

};
export default InputButton;
