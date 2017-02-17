import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Analyze from './Analyze';
import BookMarkHistory from './BookMarkHistory';

export default class LeftSideBar extends Component  {
    render() {
    	return (
    		<aside>
          	<div id="sidebar" style={{left: '0px'}} className="nav-collapse">
              <ul className="sidebar-menu" id="nav-accordion">
              	  <p className="centered"><a href="profile.html"><img src={require("../img/default_profile_pic.png")}  className="img-circle" width="80" /></a></p>
              	  <h5 className="centered">Sam Soffes</h5>
                  <li className="mt">
                      <a onClick={this.props.onclick.bind(this, <Dashboard />)}>
                        <i className="fa fa-dashboard"></i>
                        <span>Dashboard</span>
                      </a>
                  </li>
                  <li className="mt">
                      <a onClick={this.props.onclick.bind(this, <BookMarkHistory />)}>
                          <i className="fa fa-desktop"></i>
                          <span>Bookmarks and History</span>
                      </a>
                  </li>
                  <li className="mt">
                      <a onClick={this.props.onclick.bind(this, <Analyze />)}>
						              <i className="fa fa-line-chart" aria-hidden="true"></i>
                          <span>Analyze</span>
                      </a>
                  </li>
                  <li className="mt">
                      <a href="index.html">
                          <i className="fa fa-cogs"></i>
                          <span>Settings</span>
                      </a>
                  </li>

                  <li className="mt">
                      <a href="index.html">
                          <i className="fa fa-comments-o"></i>
                          <span>FAQ</span>
                      </a>
                  </li>
              </ul>
          	</div>
        </aside> 
    );
  }
}
