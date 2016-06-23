# react-timer

[![npm version](https://badge.fury.io/js/react-timer.svg)](https://badge.fury.io/js/react-timer)

react-timer is a simple timer component using react.

## Install

``` js
npm install react-timer --save
```
## Versions

#### `1.0.0` uses React `^0.13.0`

#### `1.0.1` uses React `^0.15.1`

## Use

```javascript
import Dropdown from '../lib/Timer' // 'react-timer'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {
  // delay is the delay on showing the update of the timer,
  // it does not effect the timer clock.
  let OPTIONS = { prefix: 'seconds elapsed!', delay: 100}

  render () {
    return (
      <div>
        <Timer options={OPTIONS} />
      </div>
    )
  }
}

ReactDOM.render( <TestComponent />, document.getElementById('root') )

```

## Development

    npm install
    npm run build
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
