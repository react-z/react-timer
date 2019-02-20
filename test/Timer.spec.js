import expect from 'expect'
import test from 'tape'
import React from 'react'
import { mount } from 'enzyme'
import Timer from '../src/Timer'

test('Timer component', (t) => {
  let OPTIONS = { prefix: 'seconds elapsed!', delay: 100}

  const wrapper = mount(
    <Timer options={OPTIONS} />
  )

  t.equal(
    wrapper.props().options.delay, 100, 'delay is set at 100'
  )

  t.end()
});
