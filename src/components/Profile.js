import React, {PropTypes} from 'react';
import Dropdown from 'react-simple-dropdown';
const DropdownTrigger = Dropdown.DropdownTrigger;
const DropdownContent = Dropdown.DropdownContent;
import {DropdownButton,MenuItem} from 'react-bootstrap';

export class Profile extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {
        return (
          <Dropdown>
            <DropdownTrigger>
              <span className="thumbnail-wrapper d32 circular inline m-t-5">
<img src="assets/img/profiles/avatar.jpg" alt="" data-src="assets/img/profiles/avatar.jpg"
     data-src-retina="assets/img/profiles/avatar_small2x.jpg" width="32" height="32"/>
</span>
            </DropdownTrigger>
            <DropdownContent>
              <img src="avatar.jpg" /> Username
              <ul className="dropdown-menu profile-dropdown" role="menu">
                <li><a href="#"><i className="pg-settings_small"></i> Settings</a>
                </li>
                <li><a href="#"><i className="pg-outdent"></i> Feedback</a>
                </li>
                <li><a href="#"><i className="pg-signals"></i> Help</a>
                </li>
                <li className="bg-master-lighter">
                  <a href="#" className="clearfix">
                    <span className="pull-left">Logout</span>
                    <span className="pull-right"><i className="pg-power"></i></span>
                  </a>
                </li>
              </ul>
            </DropdownContent>
          </Dropdown>
        );
    }
}

Profile.propTypes = {};


export default Profile;
