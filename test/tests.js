var test = require('tape');
var SecondsTohhmmss = require('../lib/SecondsTohhmmss');

test('Seconds is converted correctly to string output', function (t) {
    t.equal(SecondsTohhmmss(2), "00:00:02");
    t.equal(SecondsTohhmmss(70), "00:01:10");
    t.end();
});