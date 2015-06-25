# react-timer

react-timer is a simple timer component using react.js.

![](example/screenshot.png)

## Installation

`npm install react-timer --save`

## Usage

```javascript
var React = require('react');
var Timer = require('react-timer');

// delay option is the delay on showing the update of the timer, it does not effect the timer clock.
var OPTIONS = { prefix: 'seconds elapsed!', delay: 100}

React.renderComponent(<Timer options={OPTIONS} />, document.getElementById("container"));

```

## Development

Initial set up, run:
    
    npm install

## License

[MIT](http://isekivacenz.mit-license.org/)
