# react-timer

[![npm version](https://badge.fury.io/js/react-timer.svg)](https://badge.fury.io/js/react-timer)

react-timer is a simple timer component using react.

![](https://raw.githubusercontent.com/StevenIseki/react-timer/master/example/screenshot.gif)


[Click here for a demo](https://whispering-shelf-76879.herokuapp.com)

## Install

``` js
yarn add react-timer --save
```
## Versions

#### `1.0.0` uses React `^0.13.0`

#### `1.0.1` uses React `^0.15.1`

#### `1.1.0` uses React `^16.0.0`

## Use

```javascript
import Timer from 'react-timer'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {
  /* delay is just the delay on showing the update of the timer */
  const OPTIONS = { prefix: 'seconds elapsed!', delay: 100}
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
    yarn
    yarn dev

## Test
    yarn test

## Build
    yarn
    yarn build

## Publish
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish

## License

[MIT](http://isekivacenz.mit-license.org/)
