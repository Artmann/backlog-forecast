import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss'

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
      <div className="forecast-input">
        <form onSubmit={ submit }>
          <div>
            <label
              className="forecast-input__label"
              htmlFor="backlog-size"
              >
                Number of items in the backlog
              </label>
            <input 
              className="forecast-input__input"
              defaultValue={ backlogSize }
              id="backlog-size"
              name="backlogSize"
              onChange={ handleChange }
              type="number"
              />
          </div>
          <div>
            <label
              className="forecast-input__label"
              htmlFor="throughput"
              >
                Throughput for each previous sprint, comma separated
            </label>
            <textarea 
              className="forecast-input__input forecast-input__input--higher"
              defaultValue={ throughputValues }
              id="throughput"
              name="backlogSize"
              onChange={ handleChange }
            ></textarea>
          </div>
          <div>
            <label
              className="forecast-input__label"
              htmlFor="iterations"
              >
                Number of iterations
            </label>
            <input
              className="forecast-input__input"
              defaultValue={ iterations }
              id="iterations"
              name="backlogSize"
              onChange={ handleChange }
              type="number"
              />
          </div>
          <div>
            <button
              className="forecast-input__create-button"
              disabled={ isBuildingForeCast }
              >
              Build Forecast
            </button>
          </div>
        </form>
      </div>
    );
  }
}

ForecastInput.propTypes = {
  buildForecast: PropTypes.func.isRequired,
  isBuildingForeCast: PropTypes.bool.isRequired
};
