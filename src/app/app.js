import React, { Component } from 'react';
import ForecastInput from '../forecast-input';
import ForecastTable from '../forecast-table';
import Simulation from '../simulation';
import './app.css';

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

    simulation.run(iterations).then(simulation => {
      this.setState({
        isBuildingForeCast: false,
        simulation 
      });
    }).catch(error => {
      console.log(error);
    });
  }
  
  render() {
    const { isBuildingForeCast, simulation } = this.state;

    return (
      <div className="app">
        <ForecastInput
          buildForecast={ this.buildForecast.bind(this) }
          isBuildingForeCast={ isBuildingForeCast }
          />
        
        <ForecastTable simulation={ simulation } />
      </div>
    );
  }
}

export default App;
