/** @jsx React.DOM */

var React = require('react');
var SecondsTohhmmss = require('./SecondsTohhmmss.jsx');

/**
 * Timer module
 * A simple timer component.
**/

var Timer = React.createClass({
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
      <div className="react-timer">
       <span className="seconds"> {this.state.time}</span>
       <span className="title">{this.state.prefix}</span>

       <br />

       <button onClick={this.reset} className="btn">reset</button>
       <button onClick={this.play} className="btn">play</button>
       <button onClick={this.pause} className="btn">pause</button>
      </div>
    );
  }
});

module.exports = Timer;