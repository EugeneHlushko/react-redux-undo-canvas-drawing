// Delete the `BROWSER` env variable if it's present
delete process.env.BROWSER;

require('app-module-path').addPath(__dirname + '/app');

// Install `babel` hook for ES6
require('babel-core/register');

// Start the server
require('./express.js');
