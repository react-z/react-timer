"use strict";

var _SecondsTohhmmss = _interopRequireDefault(require("../SecondsTohhmmss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('2 seconds is parsed correctly', function () {
  expect((0, _SecondsTohhmmss.default)(2)).toEqual('00:00:02');
});
test('70 seconds is parsed correctly', function () {
  expect((0, _SecondsTohhmmss.default)(70)).toEqual('00:01:10');
});