var React = require('react');
var Timer = require('../jsx/timer.jsx');

var OPTIONS = { initialTime: 20, prefix: 'seconds elapsed!' }

React.render(
	React.createElement(
		Timer, 
		{options: OPTIONS}
	),
	document.getElementById("container")
);