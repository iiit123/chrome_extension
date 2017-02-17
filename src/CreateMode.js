import React, { Component } from 'react';
import $ from "jquery";
import 'jquery-form';

let styles = {
  urlInputStyle: {
    marginBottom: '5px'
  }
}

class UrlInput extends Component  {
  constructor(props) {
      super(props);
  }
  render() {
    return(
      <div style={styles.urlInputStyle} className="input-group">
        <input name="urls[]" placeholder={"Enter Url"} type="text" className="form-control urls" />
        <div onClick={this.props.onclick} className="input-group-btn">
            <button type="button" className="btn btn-theme02">
              <i className="fa fa-times"></i>
            </button>
        </div>
      </div>
    )
  } 
}

export default class CreateMode extends Component  {
    constructor(props) {
      super(props);
      this.state = { input_count: 1, mode_name: null, urls: []};
      this.appendInput = this.appendInput.bind(this);
      this.deleteInput = this.deleteInput.bind(this);
      this.insertMode = this.insertMode.bind(this);
    }

    insertMode() {
       $('#myForm').ajaxSubmit();
       this.props.oncreate();
    }

    appendInput() {
      this.setState({input_count: this.state.input_count + 1});
    }

    deleteInput() {
      this.setState({input_count: this.state.input_count - 1});
    }

    render() {
      var input = [];
      for(var i=0;i<this.state.input_count;i++) {
        input.push(<UrlInput onclick={this.deleteInput} onchange={this.handleChangeUrl} key={i}/>);
      }
      return (
       <div className="row search">
          <div className="col-md-12">
              <form id="myForm" action="http://vamshikolanu.com/hacku5/functions/insert_mode.php" method="post" role="form" className="form-horizontal">
                  <div className="form-group">
                      <div className="col-md-5">
                          <input type="text" name="mode_name" placeholder="Mode name" className="form-control" />
                      </div>
                      <button type="button" onClick={this.appendInput} className="btn btn-theme"><i className="fa fa-plus-circle"></i></button>
                  </div>
                  <div className="form-group">
                     <div className="col-md-5">
                        {input}
                      </div>
                  </div>
                  <button onClick={this.insertMode} className="btn btn-theme" type="button">Submit</button>
              </form>
          </div>
        </div>
    );
  }
}
