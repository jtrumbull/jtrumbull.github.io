/*
|------------------------------------------------------------------------------
| Index
|------------------------------------------------------------------------------
|
|   App entry point
|
*/

const App = require('./app');

var app = new App({
    element: document.body
});

const version = '0.0.1';
console.log(version);

var bootstrap = require('bootstrap');
console.log(bootstrap);
