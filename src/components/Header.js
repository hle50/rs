/**
 * Created by hoale on 3/23/2017.
 */
import React from 'react';
import Profile from './Profile'

class HeaderComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state

  }

  render() {
    return (
      <div className="header ">

        <div className="container-fluid relative">

          <div className="pull-left full-height visible-sm visible-xs">

            <div className="header-inner">
              <a href="#" className="btn-link toggle-sidebar visible-sm-inline-block visible-xs-inline-block padding-5"
                 data-toggle="sidebar">
                <span className="icon-set menu-hambuger"></span>
              </a>
            </div>

          </div>
          <div className="pull-center hidden-md hidden-lg">
            <div className="header-inner">
              <div className="brand inline">
                <img src="assets/img/logo.png" alt="logo" data-src="assets/img/logo.png"
                     data-src-retina="assets/img/logo_2x.png" width="78" height="22"/>
              </div>
            </div>
          </div>

          <div className="pull-right full-height visible-sm visible-xs">

            <div className="header-inner">
              <a href="#" className="btn-link visible-sm-inline-block visible-xs-inline-block" data-toggle="quickview"
                 data-toggle-element="#quickview">
                <span className="icon-set menu-hambuger-plus"></span>
              </a>
            </div>

          </div>
        </div>

        <div className=" pull-left sm-table hidden-xs hidden-sm">
          <div className="header-inner">
            <div className="brand inline">
              <img src="assets/img/logo.png" alt="logo" data-src="assets/img/logo.png"
                   data-src-retina="assets/img/logo_2x.png" width="78" height="22"/>
            </div>

            <ul className="notification-list no-margin hidden-sm hidden-xs b-grey b-l b-r no-style p-l-30 p-r-20">
              <li className="p-r-15 inline">
                <div className="dropdown">
                  <a href="javascript:;" id="notification-center" className="icon-set globe-fill"
                     data-toggle="dropdown">
                    <span className="bubble"></span>
                  </a>

                  <div className="dropdown-menu notification-toggle" role="menu" aria-labelledby="notification-center">

                    <div className="notification-panel">

                      <div className="scroll-wrapper notification-body scrollable" style={{position: 'relative'}}>
                        <div className="notification-body scrollable scroll-content"
                             style={{height: 'auto', marginBottom: '0px', marginRight: '0px', maxHeight: '0px'}}>

                          <div className="notification-item unread clearfix">

                            <div className="heading open">
                              <a href="#" className="text-complete pull-left">
                                <i className="pg-map fs-16 m-r-10"></i>
                                <span className="bold">Carrot Design</span>
                                <span className="fs-12 m-l-10">David Nester</span>
                              </a>
                              <div className="pull-right">
                                <div
                                  className="thumbnail-wrapper d16 circular inline m-t-15 m-r-10 toggle-more-details">
                                  <div><i className="fa fa-angle-left"></i>
                                  </div>
                                </div>
                                <span className=" time">few sec ago</span>
                              </div>
                              <div className="more-details">
                                <div className="more-details-inner">
                                  <h5 className="semi-bold fs-16">“Apple’s Motivation - Innovation <br></br>
                                    distinguishes between <br></br>
                                    A leader and a follower.”</h5>
                                  <p className="small hint-text">
                                    Commented on john Smiths wall.
                                    <br></br> via pages framework.
                                  </p>
                                </div>
                              </div>
                            </div>


                            <div className="option" data-toggle="tooltip" data-placement="left" title=""
                                 data-original-title="mark as read">
                              <a href="#" className="mark"></a>
                            </div>

                          </div>


                          <div className="notification-item  clearfix">
                            <div className="heading">
                              <a href="#" className="text-danger pull-left">
                                <i className="fa fa-exclamation-triangle m-r-10"></i>
                                <span className="bold">98% Server Load</span>
                                <span className="fs-12 m-l-10">Take Action</span>
                              </a>
                              <span className="pull-right time">2 mins ago</span>
                            </div>

                            <div className="option">
                              <a href="#" className="mark"></a>
                            </div>

                          </div>


                          <div className="notification-item  clearfix">
                            <div className="heading">
                              <a href="#" className="text-warning-dark pull-left">
                                <i className="fa fa-exclamation-triangle m-r-10"></i>
                                <span className="bold">Warning Notification</span>
                                <span className="fs-12 m-l-10">Buy Now</span>
                              </a>
                              <span className="pull-right time">yesterday</span>
                            </div>

                            <div className="option">
                              <a href="#" className="mark"></a>
                            </div>

                          </div>


                          <div className="notification-item unread clearfix">
                            <div className="heading">
                              <div className="thumbnail-wrapper d24 circular b-white m-r-5 b-a b-white m-t-10 m-r-10">
                                <img width="30" height="30" data-src-retina="assets/img/profiles/1x.jpg"
                                     data-src="assets/img/profiles/1.jpg" alt="" src="assets/img/profiles/1.jpg"/>
                              </div>
                              <a href="#" className="text-complete pull-left">
                                <span className="bold">Revox Design Labs</span>
                                <span className="fs-12 m-l-10">Owners</span>
                              </a>
                              <span className="pull-right time">11:00pm</span>
                            </div>

                            <div className="option" data-toggle="tooltip" data-placement="left" title=""
                                 data-original-title="mark as read">
                              <a href="#" className="mark"></a>
                            </div>

                          </div>

                        </div>
                        <div className="scroll-element scroll-x">
                          <div className="scroll-element_outer">
                            <div className="scroll-element_size"></div>
                            <div className="scroll-element_track"></div>
                            <div className="scroll-bar"></div>
                          </div>
                        </div>
                        <div className="scroll-element scroll-y">
                          <div className="scroll-element_outer">
                            <div className="scroll-element_size"></div>
                            <div className="scroll-element_track"></div>
                            <div className="scroll-bar"></div>
                          </div>
                        </div>
                      </div>


                      <div className="notification-footer text-center">
                        <a href="#" className="">Read all notifications</a>
                        <a data-toggle="refresh" className="portlet-refresh text-black pull-right" href="#">
                          <i className="pg-refresh_new"></i>
                        </a>
                      </div>

                    </div>

                  </div>

                </div>
              </li>
              <li className="p-r-15 inline">
                <a href="#" className="icon-set clip "></a>
              </li>
              <li className="p-r-15 inline">
                <a href="#" className="icon-set grid-box"></a>
              </li>
            </ul>

            <a href="#" className="search-link" data-toggle="search"><i className="pg-search"></i>Type anywhere to <span
              className="bold">search</span></a></div>
        </div>
        <div className=" pull-right">
          <div className="header-inner">
            <a href="#" className="btn-link icon-set menu-hambuger-plus m-l-20 sm-no-margin hidden-sm hidden-xs"
               data-toggle="quickview" data-toggle-element="#quickview"></a>
          </div>
        </div>
        <div className=" pull-right">

          <div className="visible-lg visible-md m-t-10">
            <div className="pull-left p-r-10 p-t-10 fs-16 font-heading">
              <span className="semi-bold">David</span> <span className="text-master">Nest</span>
            </div>
            <div className="dropdown pull-right">
              <button className="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"
                      aria-expanded="false">
                      <span className="thumbnail-wrapper d32 circular inline m-t-5">
                      <img src="assets/img/profiles/avatar.jpg" alt="" data-src="assets/img/profiles/avatar.jpg"
                           data-src-retina="assets/img/profiles/avatar_small2x.jpg" width="32" height="32"/>
                      </span>
              </button>
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
            </div>
          </div>

        </div>
      </div>
    );
  }
}
HeaderComponent.propsType = {};

export default HeaderComponent;
