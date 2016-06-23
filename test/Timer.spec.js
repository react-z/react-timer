import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from './jsdom'
import Timer from '../src/Timer'

test('Timer component', (t) => {
  setupJsdom()

  let OPTIONS = { prefix: 'seconds elapsed!', delay: 100}

  const wrapper = mount(
    <Timer options={OPTIONS} />
  )

  t.equal(
    wrapper.props().options.delay, 100, 'delay is set at 100'
  )

  t.end()
});
