# react-timer

react-timer is a simple timer component using react.js.

## Installation

`npm install react-timer --save`

## Usage

```javascript

import React from 'react'
import Timer from 'react-timer'

let OPTIONS = { prefix: 'seconds elapsed!', delay: 100}

React.render(
	<Timer options={OPTIONS} />,
	document.getElementById("container")
);

```

## Development

    npm install
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)