import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RInput from '../components/common/RInput'
class ReduxForm extends React.Component {
  locationInput({input, meta:{touched, error}, ...custom}) {
    const hasError = touched && error!=undefined;
    return (
      <div>
        <input {...input} {...custom}/>
        {hasError && <div className="error">{error}</div>}
      </div>
    )
  }

  submit(formProps) {
    debugger;
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.submit.bind(this))}>
          {/*<Field name="location" component={this.locationInput}/>*/}
          <Field label="a" placeholder = "a" name="a" component={RInput}/>

          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}
const validate = values => {
  const errors = {};
  if(!values.location || values.location.trim() === ''){
    errors.location = "Location required";
  }
  if(!values.a || values.a.trim() === ''){
    errors.a = "test required";
  }
  return errors;
}
export default reduxForm({
  form: 'simple',
  validate
})(ReduxForm);

