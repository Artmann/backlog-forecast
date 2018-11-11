import React, { Component } from 'react';
import ForecastInput from '../forecast-input';
import './app.css';
import Simulation from '../simulation';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: null,
      isBuildingForeCast: false
    };
  }

  buildForecast(dataSet, backlogSize, iterations) {
    this.setState({ isBuildingForeCast: true });
  
    const simulation = new Simulation(dataSet, backlogSize);

    simulation.run(iterations).then(result => {
      console.log(result);
 
      this.setState({ isBuildingForeCast: false });
    }).catch(error => {
      console.log(error);
    });
  }
  
  render() {
    const { isBuildingForeCast } = this.state;

    return (
      <div className="app">
        <ForecastInput buildForecast={ this.buildForecast.bind(this) } isBuildingForeCast={ isBuildingForeCast }/>
      </div>
    );
  }
}

export default App;
