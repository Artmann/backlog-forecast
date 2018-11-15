import React from 'react';
import './style.scss';

const row = (dataPoint, i) => {
  const probability = Math.round(dataPoint.probability * 100);
  const modifier = i % 2 === 0 ? 'forecast-table-row--dark' : '';

  return (
    <div className={ `forecast-table-row ${ modifier }` } key={ i }>
      <div className="forecast-table-row__sprint">
        Sprint { dataPoint.sprint }
      </div>
      <div className="forecast-table-row__probability">
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
    <div className="forecast-table">
      { simulation.map((dataPoint, i) => row(dataPoint, i)) }
    </div>
  );
};

export default ForecastTable;