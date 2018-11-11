export default class Simulation {
  constructor(dataSet, backlogSize) {
    this.dataSet = dataSet;
    this.backlogSize = backlogSize || 0;
  }

  run(iterations = 10000) {
    return new Promise((resolve, reject) => {
      if (!this.dataSet) {
        reject('Can not simulate an empty data set.');
      }
  
      const results = {};
  
      for (let i = 0; i < iterations; i++) {
        const result = this.simulate();
        if (!results.hasOwnProperty(result)) {
          results[result] = 0;
        }
        results[result] += 1;
      }
      
      resolve(
        Object.keys(results).map(key => ({
          sprint: parseInt(key),
          probability: Math.round((results[key] / iterations) * 100) / 100
        }))
      );
    });
  }

  simulate() {
    let storyCount = 0;
    let sprintCount = 0;

    while (storyCount < this.backlogSize) {
      const index = Math.floor(Math.random() * this.dataSet.length);
      const sample = this.dataSet[index];
      
      storyCount += sample;
      sprintCount++;
    }

    return sprintCount;
  }
}