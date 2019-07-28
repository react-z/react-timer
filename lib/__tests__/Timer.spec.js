"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Timer = _interopRequireDefault(require("../Timer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
test('Timer renders correctly and matches snapshot', function () {
  var OPTIONS = {
    prefix: 'seconds elapsed!',
    delay: 100
  };

  var component = _reactTestRenderer.default.create(_react.default.createElement(_Timer.default, {
    options: OPTIONS
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Timer renders the correct elements and props', function () {
  var OPTIONS = {
    prefix: 'seconds elapsed!',
    delay: 100
  };
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Timer.default, {
    options: OPTIONS
  }));
  expect(wrapper.instance().props.options).toEqual(OPTIONS);
  wrapper.find('button').first().props().onClick();
  expect(wrapper.find('button').length).toEqual(3);
  expect(wrapper.find('h3').length).toEqual(1);
  expect(wrapper.find('button').first().text()).toContain('reset'); // console.log(wrapper.debug())
});