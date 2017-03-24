import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ReduxForm from '../components/ReduxForm'


class DashBoardPage extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <div>
        <SideBar/>
        <div className="page-container ">

          <Header/>

        </div>
      </div>

    );
  }
}
DashBoardPage.propsType = {};

export default DashBoardPage;


