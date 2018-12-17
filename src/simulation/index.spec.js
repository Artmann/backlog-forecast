import Simulation from './index'; 

describe('Simulation', () => {
  describe('run', () => {
    it('rejects empty data set', () => {
      expect.assertions(1);

      const simulation = new Simulation([], 100);

      return expect(simulation.run())
        .rejects.toMatch('Can not simulate an empty data set.');
    });

    it('returns correct values', () => {
      expect.assertions(1);

      const expectedResults = [
        { sprint: 5, probability: 1 }
      ];
      
      const simulation = new Simulation ([10, 25], 50, () => 0);

      return simulation.run(100).then(results => {
        expect(results).toEqual(expectedResults);
      });
    });

  });
});
