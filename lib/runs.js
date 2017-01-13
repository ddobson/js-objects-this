'use strict';

const mcFaceRuns = {
  name: 'Person McFace',
  email: 'wdi@personmcface.com',
  runs: [
    {
      date: '2015-05-25 15:00',
      distance: 1200,
      timeTaken: 600,
    },
    {
      date: '2015-05-25 15:00',
      distance: 1400,
      timeTaken: 800,
    },
  ],
  totalDistance: function () {
    // Go through all runs and add distance together //
    let result = 0;

    for (let i = 0, max = this.runs.length; i < max; i++) {
      result += this.runs[i].distance;
    }

    return result;
  },
  longestRun: function () {
    // Find the longest distance by looking at each run in runs //
    let result = 0;
    let max = this.runs.length;

    for (let i = 0; i < max; i++) {
      let current = this.runs[i].distance;

      if (result < current) {
        result = current;
      }
    }

    return result;
  },
  totalTime: function () {
    // Go through all runs and add time together //
    let result = 0;

    for (let i = 0, max = this.runs.length; i < max; i++) {
      result += this.runs[i].timeTaken;
    }

    return result;
  },
  averageSpeed: function () {
    return this.totalDistance() / this.totalTime();
  },
};

module.exports = mcFaceRuns;
