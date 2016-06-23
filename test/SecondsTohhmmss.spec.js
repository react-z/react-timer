import expect from 'expect'
import test from 'tape'
import SecondsTohhmmss from '../lib/SecondsTohhmmss'

test('SecondsTohhmmss', (t) => {

  t.equal(
    SecondsTohhmmss(2), '00:00:02', '2 seconds is parsed correctly'
  )

  t.equal(
    SecondsTohhmmss(70), '00:01:10', '70 seconds is parsed correctly'
  )

  t.end()
});
