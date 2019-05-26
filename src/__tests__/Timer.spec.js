/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = new JSDOM('').window
global.window = window
global.document = window.document

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Timer from '../Timer'

test('Timer renders correctly and matches snapshot', () => {
  const OPTIONS = { prefix: 'seconds elapsed!', delay: 100}

  const component = renderer.create(
    <Timer options={OPTIONS} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Timer renders the correct elements and props', () => {
  const OPTIONS = { prefix: 'seconds elapsed!', delay: 100}

  const wrapper = shallow(
    <Timer options={OPTIONS} />
  )

  expect(wrapper.instance().props.options).toEqual(OPTIONS)

  wrapper
    .find('button')
    .first()
    .props()
    .onClick()

  expect(wrapper.find('button').length).toEqual(3)
  expect(wrapper.find('h3').length).toEqual(1)

  expect(
    wrapper
      .find('button')
      .first()
      .text()
  ).toContain('reset')

  // console.log(wrapper.debug())
})
