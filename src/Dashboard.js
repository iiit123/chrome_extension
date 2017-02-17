import React, { Component } from 'react';
import Mode from './Mode';
import CreateMode from './CreateMode';
import $ from "jquery";


export default class Dashboard extends Component  {

    constructor(props) {
      super(props);
      this.state = { create_mode: false, modes: [] };
      this.toggleCreateMode = this.toggleCreateMode.bind(this);
      this.getModes = this.getModes.bind(this);
      this.searchMode = this.searchMode.bind(this);
    }

    searchMode(event) {
      var _this = this;
      var term = event.target.value;
      if(term == "") {
          $.get('http://www.vamshikolanu.com/hacku5/functions/get_modes.php',{'user_id': 1}, function(response) {
            _this.setState({modes: response});
          },'json');
      }
      else {
        $.get('http://www.vamshikolanu.com/hacku5/functions/search_mode.php',{'user_id': 1, 'term': term}, function(response) {
         _this.setState({modes: response});
        },'json');
      }
    }

    toggleCreateMode() {
      this.setState({create_mode: !this.state.create_mode});
    }

    getModes() {
      var _this = this;
      $.get('http://www.vamshikolanu.com/hacku5/functions/get_modes.php',{'user_id': 1}, function(response) {
        _this.setState({modes: response});
      },'json');
    }

    componentDidMount() {
      var _this = this;
      $.get('http://www.vamshikolanu.com/hacku5/functions/get_modes.php',{'user_id': 1}, function(response) {
        _this.setState({modes: response});
      },'json');
    }

    render() {
      let work_mode = require('../img/work.png');
      var Modes = null;
      if(this.state.modes!=null) {
         Modes = this.state.modes.map(function(mode, key) {
          return <Mode data={mode} image={work_mode}/>
        });
      }

      let entertainment_mode = require('../img/entertainment.png');
      let movies_mode = require('../img/movies.png'); 
      let favourite_mode = require('../img/favourites.png');
      let displayMode = (this.state.create_mode) ? <CreateMode oncreate={this.getModes}/>: null;

    	return (
		    <section id="main-content">
          <section className="wrapper">
            <div style={{marginBottom: '30px'}} className="row search">
              <div className="col-md-4">
              <form className="form-horizontal  style-form" action="#">
                  <div className="input-group">
                      <input type="text" className="form-control" onChange={this.searchMode} placeholder="search modes" />
                        <span className="input-group-btn">
                          <button className="btn btn-theme" type="button"><i className="fa fa-search"></i></button>
                        </span>
                  </div>
              </form>
              </div>
                <button type="button" onClick={this.toggleCreateMode} className="btn btn-theme pull-right"><i className="fa fa-plus-circle"></i> Create</button>
            </div>
            
            {displayMode}

            <div  style={{marginTop: '30px'}}className="row">
              <div className="col-md-12">
                <div className="border-head">
                    <h3>USER MODES</h3>
                </div>  
                <div className="row">
                  {Modes}
                </div>
              </div>  
            </div>
          </section>
      </section>
    );
  }
}
