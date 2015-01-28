var React = require('react');
var Timer = require('../jsx/timer.jsx');

// delay is the delay on showing the update of the timer,
// it does not effect the timer clock.
var OPTIONS = { prefix: 'seconds elapsed!', delay: 100}

React.render(
	React.createElement(
		Timer, 
		{options: OPTIONS}
	),
	document.getElementById("container")
);