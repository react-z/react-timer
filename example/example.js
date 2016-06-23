import Timer from '../lib/Timer' // 'react-timer'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  render () {
    /* delay is just the delay on showing the update of the timer */
    let OPTIONS = { prefix: 'seconds elapsed!', delay: 100}
    return (
      <div>
        <Timer options={OPTIONS} />
      </div>
    )
  }
}

ReactDOM.render( <TestComponent />, document.getElementById('root') )
