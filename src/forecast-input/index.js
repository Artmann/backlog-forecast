import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ForecastInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backlogSize: 180,
      iterations: 5000,
      isRunning: false,
      throughputValues: '11,23,13,14,12,11,11,14,6'
    };
  }

  render() {
    const { backlogSize, iterations, throughputValues } = this.state;
    const { buildForecast, isBuildingForeCast } = this.props;

    const handleChange = event => {
      const { name, value } = event.target;
      
      this.setState({
        [name]: value
      });
    };

    const submit = event => {
      event.preventDefault();
      const dataSet = throughputValues.split(',').map(p => p.trim()).map(p => parseInt(p, 10));
      
      buildForecast(dataSet, backlogSize, iterations);
    };

    return (
      <form onSubmit={ submit }>
        <div>
          <label htmlFor="backlog-size">Number of items in the backlog</label>
          <input type="number" id="backlog-size" defaultValue={ backlogSize } name="backlogSize" onChange={ handleChange } />
        </div>
        <div>
          <label htmlFor="throughput">A comma separated list of throughput values</label>
          <textarea id="throughput" defaultValue={ throughputValues } name="backlogSize" onChange={ handleChange }></textarea>
        </div>
        <div>
          <label htmlFor="iterations">Number of iterations</label>
          <input type="number" id="iterations" defaultValue={ iterations } name="backlogSize" onChange={ handleChange } />
        </div>
        <div>
          <input type="submit" defaultValue="Build forecast" disabled={ isBuildingForeCast } />
        </div>
      </form>
    );
  }
}

ForecastInput.propTypes = {
  buildForecast: PropTypes.func.isRequired,
  isBuildingForeCast: PropTypes.bool.isRequired
};
