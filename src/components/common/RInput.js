/**
 * Created by hoale on 3/23/2017.
 */
import React from 'react';
import  * as ClassNames from '../../constants/ClassNames';


const RInput = ({type, label, placeholder,input, meta:{touched, error}, ...custom}) => {
  const hasError = touched && error!=undefined;
  return (
    <div>
      <div className={hasError ? ClassNames.INPUT_DEFAULT_ERROR : ClassNames.INPUT_DEFAULT}>
        <label htmlFor={input.name}>{label}</label>
        <div className="controls">
          <input type={!type ? 'text' : type} {...input} {...custom}
                 className="form-control"
                 placeholder={placeholder}/>
        </div>
      </div>
      {hasError > 0 && <label className="error">{error}</label>}
    </div>
  );
};

export default RInput;
