/** @jsx React.DOM */

var React = require('react');
var SecondsTohhmmss = require('./SecondsTohhmmss.jsx');

/**
 * Timer module
 * A simple timer component.
**/

var Timer = React.createClass({displayName: "Timer",
  getInitialState: function(){
     return {
       clock: 0,
       time: '',
       prefix: this.props.options.prefix,
     }
  },
  /**
   * Pause the timer.
  **/
  pause: function() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  },
  /** 
   * Play the timer.
  **/
  play: function() {
    if (!this.interval) {
      this.offset   = Date.now();
      this.interval = setInterval(this.update, 100); // 100 is delay
    }
  },
  /** 
   * Reset the timer.
  **/
  reset: function() {
    this.setState({clock: 0 });
  },
  /** 
   * Increment the timer.
  **/
  update: function() {
    var clock = this.state.clock;
    clock += this.delta();
    this.setState({clock: clock });
    var time = SecondsTohhmmss(clock / 1000);
    this.setState({time: time });    
  },
  delta: function() {
    var now = Date.now(),
        d   = now - this.offset;    
    this.offset = now;
    return d;
  },
  componentDidMount: function() {
    this.play();
  },
  componentWillUnmount: function() {
    this.pause();
  },  
  render: function(){
    return (
      React.createElement("div", {className: "react-timer"}, 
       React.createElement("span", {className: "seconds"}, " ", this.state.time), 
       React.createElement("span", {className: "title"}, this.state.prefix), 

       React.createElement("br", null), 

       React.createElement("button", {onClick: this.reset, className: "btn"}, "reset"), 
       React.createElement("button", {onClick: this.play, className: "btn"}, "play"), 
       React.createElement("button", {onClick: this.pause, className: "btn"}, "pause")
      )
    );
  }
});

module.exports = Timer;