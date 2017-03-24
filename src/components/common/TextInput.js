import React, {PropTypes} from 'react';

class  TextInput extends React.Component{

  render(){
    return (
      <div className={wrapperClass}>
        <label htmlFor={name}>{label}</label>
        <div className="controls">
          <input
            type="text"
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}/>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    )
  }
}
// const TextInput = ({name, label, onChange, placeholder, value, error}) => {
//
//
//   // <div className="form-group form-group-default">
//   //   <label>Login</label>
//   //   <div className="controls">
//   //     <input type="text" name="username" placeholder="User Name" className="form-control"   />
//   //   </div>
//   // </div>
//
//   return (
//     <div className={wrapperClass}>
//       <label htmlFor={name}>{label}</label>
//       <div className="controls">
//         <input
//           type="text"
//           name={name}
//           className="form-control"
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}/>
//         {error && <div className="alert alert-danger">{error}</div>}
//       </div>
//     </div>
//   );
// };

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
