import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Header from './Header';
import LeftSideBar from './LeftSideBar';
import BookMarkHistory from './BookMarkHistory';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { component: <Dashboard />};
    this.loadComponent = this.loadComponent.bind(this, null);
  }

  componentDidMount() {
  }

  loadComponent(e, component) {
    this.setState({component: component});
  }

  render() {
    return (
      <div className="container">
        <Header />
        <LeftSideBar onclick={this.loadComponent}/>
        <div style={{marginTop: "30px"}}>
        {this.state.component}
        </div>
      </div>
    );
  }
}

export default App;
