import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const row = (dataPoint, i) => {
  const probability = Math.round(dataPoint.probability * 100);
  const modifier = i % 2 === 0 ? 'forecast-table-row--dark' : '';

  return (
    <div 
      className={ `forecast-table-row ${ modifier }` }
      key={ i }
      data-test-forecast-row={ i }
    >
      <div className="forecast-table-row__sprint" data-test-forecast-row-sprint>
        Sprint { dataPoint.sprint }
      </div>
      <div className="forecast-table-row__probability" data-test-forecast-row-probability>
        { probability }%
      </div>
    </div>
  );
};

const ForecastTable = ({ simulation}) => {
  if (!simulation) {
    return <div></div>;
  }

  return (
    <div className="forecast-table" data-test-forecast-table>
      { simulation.map((dataPoint, i) => row(dataPoint, i)) }
    </div>
  );
};

ForecastTable.propTypes = {
  simulation: PropTypes.arrayOf(PropTypes.shape({
    sprint: PropTypes.number,
    probability: PropTypes.number
  }))
};

export default ForecastTable;
