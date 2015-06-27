import React from 'react'
import Timer from '../lib/timer'

// delay is the delay on showing the update of the timer,
// it does not effect the timer clock.
let OPTIONS = { prefix: 'seconds elapsed!', delay: 100}

React.render(
	<Timer options={OPTIONS} />,
	document.getElementById("container")
);