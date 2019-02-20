"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _SecondsTohhmmss = _interopRequireDefault(require("./SecondsTohhmmss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var offset = null,
    interval = null;
/**
 * Timer module
 * A simple timer component.
**/

var Timer =
/*#__PURE__*/
function (_Component) {
  _inherits(Timer, _Component);

  _createClass(Timer, null, [{
    key: "propTypes",
    get: function get() {
      return {
        options: _propTypes.default.object
      };
    }
  }]);

  function Timer(props) {
    var _this;

    _classCallCheck(this, Timer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Timer).call(this, props));
    _this.state = {
      clock: 0,
      time: ''
    };
    return _this;
  }

  _createClass(Timer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.play();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.pause();
    }
  }, {
    key: "pause",
    value: function pause() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }
  }, {
    key: "play",
    value: function play() {
      if (!interval) {
        offset = Date.now();
        interval = setInterval(this.update.bind(this), this.props.options.delay);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var clockReset = 0;
      this.setState({
        clock: clockReset
      });
      var time = (0, _SecondsTohhmmss.default)(clockReset / 1000);
      this.setState({
        time: time
      });
    }
  }, {
    key: "update",
    value: function update() {
      var clock = this.state.clock;
      clock += this.calculateOffset();
      this.setState({
        clock: clock
      });
      var time = (0, _SecondsTohhmmss.default)(clock / 1000);
      this.setState({
        time: time
      });
    }
  }, {
    key: "calculateOffset",
    value: function calculateOffset() {
      var now = Date.now();
      var newOffset = now - offset;
      offset = now;
      return newOffset;
    }
  }, {
    key: "render",
    value: function render() {
      var timerStyle = {
        margin: "0px",
        padding: "2em"
      };
      var buttonStyle = {
        background: "#fff",
        color: "#666",
        border: "1px solid #ddd",
        marginRight: "5px",
        padding: "10px",
        fontWeight: "200"
      };
      var secondsStyles = {
        fontSize: "200%",
        fontWeight: "200",
        lineHeight: "1.5",
        margin: "0",
        color: "#666"
      };
      return _react.default.createElement("div", {
        style: timerStyle,
        className: "react-timer"
      }, _react.default.createElement("h3", {
        style: secondsStyles,
        className: "seconds"
      }, " ", this.state.time, " ", this.props.prefix), _react.default.createElement("br", null), _react.default.createElement("button", {
        onClick: this.reset.bind(this),
        style: buttonStyle
      }, "reset"), _react.default.createElement("button", {
        onClick: this.play.bind(this),
        style: buttonStyle
      }, "play"), _react.default.createElement("button", {
        onClick: this.pause.bind(this),
        style: buttonStyle
      }, "pause"));
    }
  }]);

  return Timer;
}(_react.Component);

exports.default = Timer;