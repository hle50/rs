import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import LoginForm from '../components/LoginForm';
//
// export const LoginPage = (props) => {
//   return (
//     <div className="login-wrapper ">
//
//       <div className="bg-pic">
//
//         <img src="assets/img/demo/new-york-city-buildings-sunrise-morning-hd-wallpaper.jpg" alt="" className="lazy"/>
//
//
//         <div className="bg-caption pull-bottom sm-pull-bottom text-white p-l-20 m-b-20">
//           <h2 className="semi-bold text-white">
//             Pages make it easy to enjoy what matters the most in the life</h2>
//           <p className="small">
//             images Displayed are solely for representation purposes only, All work copyright of respective
//             owner, otherwise © 2013-2014 REVOX.
//           </p>
//         </div>
//
//       </div>
//
//
//       <LoginForm id="loginForm"/>
//
//     </div>
//   );
// };
//
// LoginPage.propTypes = {};
//
// function mapStateToProps(state) {
//   return {};
// }
//
// function mapDispatchToProps(dispatch) {
//   return {};
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginPage);
class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user:{
        username: '',
        password: ''
      },
      saving: false
    };
    this.submitLogin = this.submitLogin.bind(this);
  }
  submitLogin(event){
    event.preventDefault();
    debugger;
  }
  render() {
    return (
      <div className="login-wrapper ">

        <div className="bg-pic">

          <img src="assets/img/demo/new-york-city-buildings-sunrise-morning-hd-wallpaper.jpg" alt="" className="lazy"/>


          <div className="bg-caption pull-bottom sm-pull-bottom text-white p-l-20 m-b-20">
            <h2 className="semi-bold text-white">
              Pages make it easy to enjoy what matters the most in the life</h2>
            <p className="small">
              images Displayed are solely for representation purposes only, All work copyright of respective
              owner, otherwise © 2013-2014 REVOX.
            </p>
          </div>

        </div>


        <LoginForm submitLogin={this.submitLogin} user={this.user} id="loginForm"/>

      </div>
    );
  }
}
LoginPage.propsType = {
  user: PropTypes.object,
};

export default LoginPage;
