import React, { Component } from 'react';
import $ from "jquery";
import ReactHighcharts from 'react-highcharts';

export default class Analyze extends Component {
  constructor(props) {
    super(props);
    this.state = { category_count: null, domain_count: null };
  }  

  componentDidMount() {
    var _this=this;
    $.get('http://vamshikolanu.com/hacku5/functions/get_category_count.php',{'user_id': 1}, function(response) {
      let category_response = response.map(function(key, value){ return {'name':key['name'], 'y': parseInt(key['y']) } });  
      $.get('http://vamshikolanu.com/hacku5/functions/get_domain_count.php',{'user_id': 1}, function(response) {
        let domain_response = response.map(function(key, value){ return {'name':key['name'], 'y': parseInt(key['y']) } });
        _this.setState({domain_count: domain_response, category_count: category_response});
      }, 'json');
    }, 'json');
    
  }

  render() {
  	let config_category = {
  	  chart: {
        type: 'column'
      },
      title: {
          text: 'Category visualization'
      },
      subtitle: {
          text: 'Analyzing your search history based on the website categories'
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
          title: {
              text: 'Total number of visits'
          }
      },
      legend: {
          enabled: false
      },
      plotOptions: {
          series: {
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
                  format: '{point.y:.1f}'
              }
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },

      series: [{
          name: 'Websites',
          colorByPoint: true,
          data: this.state.category_count
      }]
    }



    let config_domains = {
      chart: {
        type: 'column'
      },
      title: {
          text: 'Domain visit visualization'
      },
      subtitle: {
          text: 'Analyzing your search history based on the websites'
      },
      xAxis: {
          type: 'Domain names'
      },
      yAxis: {
          title: {
              text: 'Total number of visits'
          }

      },
      legend: {
          enabled: false
      },
      plotOptions: {
          series: {
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
                  format: '{point.y:.1f}'
              }
          }
      },

      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },

      series: [{
          name: 'Websites',
          colorByPoint: true,
          data: this.state.domain_count
      }]
  	};
    return (
      	<section id="main-content">
          <section className="wrapper">
				    <div className="row">
              <div className="col-md-12"><ReactHighcharts config = {config_category}></ReactHighcharts></div>
            </div>
            <div style={{marginTop:"20px"}} className="row">    
              <div className="col-md-12"><ReactHighcharts config = {config_domains}></ReactHighcharts></div>
            </div>
			    </section>
		    </section>
    );
  }
}

