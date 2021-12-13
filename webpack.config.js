const path = require('path');

module.exports = {
  entry: ['./src/app.js',
  './src/calculator/Calculator.js',
  './src/functions'],
  output: {
    filename: 'main.js',
  },
};
