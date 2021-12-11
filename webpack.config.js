const path = require('path');

module.exports = {
  entry: [
    './src/app.js',
    './src/functions.js',
    './src/variables.js',
    './src/classes.js',
  ],
  output: {
    filename: 'main.js',
  },
};
