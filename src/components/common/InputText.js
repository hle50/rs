/**
 * Created by hoale on 3/23/2017.
 */
import React from 'react';
import * as Validation from '../../utils/validation';
import  * as Message from '../../constants/messageError';
import  * as ClassNames from '../../constants/ClassNames';
import  * as InputTypes from '../../constants/InputTypes';
class InputText extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      error: '',
      wrapperClass: ClassNames.INPUT_DEFAULT
    };
    this.handle = this.handle.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleError(message, className) {
    this.setState({error: message});
    this.setState({wrapperClass: className});
  }

  handle(event) {
    const inputValue = event.target.value;
    if (this.props.isRequired) {
      if (Validation.required(inputValue)) {
        this.handleError(Message.THIS_FIELD_IS_REQUIRED, ClassNames.INPUT_DEFAULT_ERROR)
      }
      else if (this.props.type === InputTypes.INPUT_EMAIL) {
        if (Validation.email(inputValue)) {
          this.handleError(Message.THIS_EMAIL_IS_INVALID, ClassNames.INPUT_DEFAULT_ERROR);
        }
        else{
          this.handleError('', ClassNames.INPUT_DEFAULT);
        }
      }
      else if (this.props.maxLength && inputValue.length > this.props.maxLength) {
        this.handleError(Message.MAX_LENGTH + ' ' + this.props.maxLength + ' characters', ClassNames.INPUT_DEFAULT_ERROR);
      }
      else if (this.props.minLength && inputValue.length < this.props.minLength) {
        this.handleError(Message.MIN_LENGTH + ' ' + this.props.minLength + ' characters', ClassNames.INPUT_DEFAULT_ERROR);
      }
      else {
        this.handleError('', ClassNames.INPUT_DEFAULT);
      }
    }
  }

  onBlurHandler(e) {
    this.handle(e);
    this.props.onBlur && this.props.onBlur(e);
  }

  onChangeHandler(e) {
    this.handle(e);
    this.props.onChange && this.props.onChange(e);
  }

  render() {
    return (
      <div>
        <div className={this.state.wrapperClass}>
          <label htmlFor={this.props.name}>{this.props.label}</label>
          <div className="controls">
            <input
              type={this.props.type == InputTypes.INPUT_PASSWORD ? 'password' : 'text'}
              name={this.props.name}
              className="form-control"
              placeholder={this.props.placeholder}
              value={this.props.value}
              onChange={this.onChangeHandler}
              onBlur={this.onBlurHandler}/>
          </div>
        </div>
        {this.state.error.length > 0 && <label className="error">{this.state.error}</label>}
      </div>
    )

  }
}
InputText.propsType = {
  wrapperClass: React.PropTypes.string,
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  type: React.PropTypes.string,
  isRequired: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  maxLength: React.PropTypes.string,
  minLength: React.PropTypes.string
};
export default InputText;
