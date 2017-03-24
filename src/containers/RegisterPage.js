import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RegisterForm from '../components/RegisterForm';
class RegisterPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  };


  submitForm(data){
    console.log(data);
  }

  render() {
    return (
      <RegisterForm submitForm={this.submitForm} />
    )
  }
}

export default RegisterPage;

