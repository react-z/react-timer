'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SecondsTohhmmss = require('./SecondsTohhmmss');

var _SecondsTohhmmss2 = _interopRequireDefault(_SecondsTohhmmss);

/**
 * Timer module
 * A simple timer component.
**/

var Timer = _react2['default'].createClass({
  displayName: 'Timer',

  getInitialState: function getInitialState() {
    return {
      clock: 0,
      time: ''
    };
  },
  /**
   * Pause the timer.
  **/
  pause: function pause() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  },
  /** 
   * Play the timer.
  **/
  play: function play() {
    if (!this.interval) {
      this.offset = Date.now();
      this.interval = setInterval(this.update, this.props.options.delay); // 100 is delay
    }
  },
  /** 
   * Reset the timer.
  **/
  reset: function reset() {
    var clockReset = 0;
    this.setState({ clock: clockReset });
    var time = (0, _SecondsTohhmmss2['default'])(clockReset / 1000);
    this.setState({ time: time });
  },
  /** 
   * Increment the timer.
  **/
  update: function update() {
    var clock = this.state.clock;
    clock += this.calculateOffset();
    this.setState({ clock: clock });
    var time = (0, _SecondsTohhmmss2['default'])(clock / 1000);
    this.setState({ time: time });
  },
  /** 
   * Calculate the offset time.
  **/
  calculateOffset: function calculateOffset() {
    var now = Date.now(),
        o = now - this.offset;
    this.offset = now;
    return o;
  },
  componentDidMount: function componentDidMount() {
    this.play();
  },
  componentWillUnmount: function componentWillUnmount() {
    this.pause();
  },
  render: function render() {

    var timerStyle = {
      margin: '0',
      padding: '2em'
    };

    var buttonStyle = {
      background: '#fff',
      color: '#666',
      border: '1px solid #ddd',
      margin: '0.25em',
      padding: '0.75em',
      fontWeight: '200'
    };

    var secondsStyles = {
      fontSize: '200%',
      fontWeight: '200',
      lineHeight: '1.5',
      margin: '0',
      color: '#666'
    };

    return _react2['default'].createElement(
      'div',
      { style: timerStyle, className: 'react-timer' },
      _react2['default'].createElement(
        'h3',
        { style: secondsStyles, className: 'seconds' },
        ' ',
        this.state.time,
        ' ',
        this.props.prefix
      ),
      _react2['default'].createElement('br', null),
      _react2['default'].createElement(
        'button',
        { onClick: this.reset, style: buttonStyle },
        'reset'
      ),
      _react2['default'].createElement(
        'button',
        { onClick: this.play, style: buttonStyle },
        'play'
      ),
      _react2['default'].createElement(
        'button',
        { onClick: this.pause, style: buttonStyle },
        'pause'
      )
    );
  }
});

module.exports = Timer;