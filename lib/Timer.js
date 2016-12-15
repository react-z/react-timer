'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _SecondsTohhmmss = require('./SecondsTohhmmss');

var _SecondsTohhmmss2 = _interopRequireDefault(_SecondsTohhmmss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var offset = null,
    interval = null;

/**
 * Timer module
 * A simple timer component.
**/

var Timer = function (_Component) {
  _inherits(Timer, _Component);

  function Timer(props) {
    _classCallCheck(this, Timer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Timer).call(this, props));

    _this.state = { clock: 0, time: '' };
    return _this;
  }

  _createClass(Timer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.play();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.pause();
    }
  }, {
    key: 'pause',
    value: function pause() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }
  }, {
    key: 'play',
    value: function play() {
      if (!interval) {
        offset = Date.now();
        interval = setInterval(this.update.bind(this), this.props.options.delay);
      }
    }
  }, {
    key: 'reset',
    value: function reset() {
      var clockReset = 0;
      this.setState({ clock: clockReset });
      var time = (0, _SecondsTohhmmss2.default)(clockReset / 1000);
      this.setState({ time: time });
    }
  }, {
    key: 'update',
    value: function update() {
      var clock = this.state.clock;
      clock += this.calculateOffset();
      this.setState({ clock: clock });
      var time = (0, _SecondsTohhmmss2.default)(clock / 1000);
      this.setState({ time: time });
    }
  }, {
    key: 'calculateOffset',
    value: function calculateOffset() {
      var now = Date.now();
      var newOffset = now - offset;
      offset = now;
      return newOffset;
    }
  }, {
    key: 'render',
    value: function render() {
      var timerStyle = {
        margin: "0px",
        padding: "2em"
      };

      var buttonStyle = {
        background: "#fff",
        color: "#666",
        border: "1px solid #ddd",
        margin: "0.25em",
        padding: "0.75em",
        fontWeight: "200"
      };

      var secondsStyles = {
        fontSize: "200%",
        fontWeight: "200",
        lineHeight: "1.5",
        margin: "0px",
        color: "#666"
      };

      return _react2.default.createElement(
        'div',
        { style: timerStyle, className: 'react-timer' },
        _react2.default.createElement(
          'h3',
          { style: secondsStyles, className: 'seconds' },
          ' ',
          this.state.time,
          ' ',
          this.props.prefix
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'button',
          { onClick: this.reset.bind(this), style: buttonStyle },
          'reset'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.play.bind(this), style: buttonStyle },
          'play'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.pause.bind(this), style: buttonStyle },
          'pause'
        )
      );
    }
  }]);

  return Timer;
}(_react.Component);

exports.default = Timer;


Timer.propTypes = {
  options: _react.PropTypes.object
};
