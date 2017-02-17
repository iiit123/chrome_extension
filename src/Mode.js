import React, { Component } from 'react';
import $ from "jquery";
import ToggleButton from 'react-toggle-button'



let styles = {
  heartStyle: {
    cursor: 'pointer',
    fontSize:"20px",
    float: "left"  
  },
  heartCount: {
    marginLeft: "8px",
    color: '#797979'  
  }
}

export default class Mode extends Component  {
    constructor(props) {
      super(props);
      this.state = { highlight_heart: false, toggle_value: false, likes_count:this.props.data.mode_likes };
      this.toggleHeart = this.toggleHeart.bind(this);
      this.toggle = this.toggle.bind(this);
    }

    toggleHeart() {
      var _this = this;
      $.post('http://www.vamshikolanu.com/hacku5/functions/likes.php',{'uid': 1, 'mid': this.props.data.mid}, function(response) {
      },'json');
      var increment = (this.state.highlight_heart) ? -1 : 1; 
      this.setState({highlight_heart: !this.state.highlight_heart, likes_count: parseInt(this.state.likes_count)+parseInt(increment)});
    }

    toggle() {

    }

    render() {
      const {heartStyle, heartCount} = styles;
      let color = (this.state.highlight_heart || parseInt(this.props.data.mode_likes)) ? 'red': '#797979';
      const new_heart_style = {...heartStyle, color:color};
      return (
        <div className="col-md-3 mb">
          <div className="white-panel pn">
            <div className="white-header">
              <h5>{this.props.data.mode_name}
              <i className="fa fa-external-link pull-right" style={{cursor:"pointer", marginRight:"1px"}} aria-hidden="true"></i>
              <input type="hidden" value={this.props.data.url}/>
              </h5>
            </div>
            <p><img src={this.props.image} className="img-circle" width="80" /></p>
            <div className="row">
              <div className="col-md-6">
                <p className="small mt basecolor">UPVOTE</p>
                 <div onClick={this.toggleHeart} className="col-md-3 col-md-offset-2 text-center">
                    <i style={new_heart_style} className="fa fa-heart fa-2x" aria-hidden="true"></i>                          
                    <span style={heartCount}> {this.state.likes_count} </span>
                  </div>
                </div>
              <div className="col-md-4 cold-md-offset-1">
                <p className="small mt basecolor">SHARE</p>
                  <ToggleButton
                      value={ this.state.toggle_value || false }
                      onToggle={(value) => {
                      this.setState({
                        toggle_value: !value,
                      })
                  }} />
              </div>
            </div>
          </div>
        </div>
    );
  }
}
