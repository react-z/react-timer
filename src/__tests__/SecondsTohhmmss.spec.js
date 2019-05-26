import SecondsTohhmmss from '../SecondsTohhmmss'

test('2 seconds is parsed correctly', () => {
  expect(SecondsTohhmmss(2)).toEqual('00:00:02');
})

test('70 seconds is parsed correctly', () => {
  expect(SecondsTohhmmss(70)).toEqual('00:01:10');
})
