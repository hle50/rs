import React from 'react';
import {Field, reduxForm} from 'redux-form';
import RInput from '../components/common/RInput';
import * as Validation from '../utils/validation';
import  * as Message from '../constants/messageError';


const validate = values => {
  const errors = {};

  if (!values.fname || values.fname.trim() === '') {
    errors.fname = Message.THIS_FIELD_IS_REQUIRED;
  }
  if (!values.lname || values.lname.trim() === '') {
    errors.lname = Message.THIS_FIELD_IS_REQUIRED;
  }
  if (!values.email || values.email.trim() === '') {
    errors.email = Message.THIS_FIELD_IS_REQUIRED;
  }
  if (values.email && Validation.email(values.email)) {
    errors.email = Message.THIS_EMAIL_IS_INVALID;
  }
  if (!values.uname || values.uname.trim() === '') {
    errors.uname = Message.THIS_FIELD_IS_REQUIRED;
  }
  if (!values.password || values.password === '') {
    errors.password = Message.THIS_FIELD_IS_REQUIRED;
  }
  if (values.password && values.password.length < 4) {
    errors.password = Message.MIN_LENGTH + ' 4 characters';
  }
  return errors;
};


class RegisterForm extends React.Component {


  submit(formProps) {
    this.props.submitForm(formProps);
  }

  render() {
    const {handleSubmit, dirty, invalid} = this.props;
    console.log(this.props);
    return (
      <div className="register-container full-height sm-p-t-30">
        <div className="container-sm-height full-height">
          <div className="row row-sm-height">
            <div className="col-sm-12 col-sm-height col-middle">
              <img src="assets/img/logo.png" alt="logo" width="78" height="22"/>
              <h3>Pages makes it easy to enjoy what matters the most in your life</h3>
              <p>
                <small>
                  Create a pages account. If you have a facebook account, log into it for this process. Sign in with <a
                  href="#" className="text-info">Facebook</a> or <a href="#" className="text-info">Google</a>
                </small>
              </p>
              <form onSubmit={handleSubmit(this.submit.bind(this))} id="form-register" className="p-t-15" role="form">
                <div className="row">
                  <div className="col-sm-6">
                    <Field label="First Name"
                           name="fname"
                           placeholder="First Name" component={RInput}/>
                  </div>
                  <div className="col-sm-6">
                    {/*<label>Last Names</label>*/}
                    {/*<input type="text" name="lname" placeholder="Smith" className="form-control" />*/}
                    <Field
                      label="Last Name"
                      name="lname"
                      placeholder="Last Name"
                      component={RInput}/>


                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">


                    <Field
                      label="Pages User name"
                      name="uname"
                      placeholder="User name"
                      component={RInput}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">

                    <Field
                      type="password"
                      label="Password"
                      name="password"
                      placeholder="Minimum of 4 Characters"
                      component={RInput}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">

                    <Field
                      label="Email"
                      name="email"
                      placeholder="We will send loging details to you"
                      component={RInput}/>
                  </div>
                </div>
                <div className="row m-t-10">
                  <div className="col-md-6">
                    <p>I agree to the <a href="#" className="text-info small">Pages Terms</a> and <a href="#"
                                                                                                     className="text-info small">Privacy</a>.
                    </p>
                  </div>
                  <div className="col-md-6 text-right">
                    <a href="#" className="text-info small">Help? Contact Support</a>
                  </div>
                </div>
                <button disabled={invalid}
                        className="btn btn-primary btn-cons m-t-10">Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'simple',
  validate
})(RegisterForm);
