import React from 'react';
import { mount } from 'enzyme';
import ForecastTable from './index';

describe('ForecastTable', () => {
  let component;

  beforeEach(() => {
    const props = {
      simulation: [
        { sprint: 1, probability: 0.4 },
        { sprint: 2, probability: 0.5 },
        { sprint: 3, probability: 0.1 }
      ]
    };

    component = mount(<ForecastTable { ...props } />);
  });

  it('renders a forecast table', () => {
    expect.assertions(1);
    
    expect(component.find('[data-test-forecast-table]')).toBeTruthy();
  });

  it('renders rows that displays the sprint and probability', () => {
    expect.assertions(6);

    const row1 = component.find('[data-test-forecast-row=0]');
    expect(row1.find('[data-test-forecast-row-sprint]').text()).toBe('Sprint 1');
    expect(row1.find('[data-test-forecast-row-probability]').text()).toBe('40%')
    
    const row2 = component.find('[data-test-forecast-row=1]');
    expect(row2.find('[data-test-forecast-row-sprint]').text()).toBe('Sprint 2');
    expect(row2.find('[data-test-forecast-row-probability]').text()).toBe('50%')
    
    const row3 = component.find('[data-test-forecast-row=2]');
    expect(row3.find('[data-test-forecast-row-sprint]').text()).toBe('Sprint 3');
    expect(row3.find('[data-test-forecast-row-probability]').text()).toBe('10%');
  });

  it('adds a darker color to every other row', () => {
    expect.assertions(3);
    
    const cssClass = 'forecast-table-row--dark';

    const row1 = component.find('[data-test-forecast-row=0]');
    const row2 = component.find('[data-test-forecast-row=1]');
    const row3 = component.find('[data-test-forecast-row=2]');
    
    expect(row1.hasClass(cssClass)).toBeTruthy();
    expect(row2.hasClass(cssClass)).toBeFalsy();
    expect(row3.hasClass(cssClass)).toBeTruthy();
  });
});
