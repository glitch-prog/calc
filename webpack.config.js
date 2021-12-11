const path = require('path');

module.exports = {
  entry: [
    './src/app.js',
    './src/functions.js',
    './src/variables.js',
    './src/math__func.js',
    './src/store__func.js',
    './src/clear__ouput__func.js',
    './src/classes.js',
  ],
  output: {
    filename: 'main.js',
  },
};
