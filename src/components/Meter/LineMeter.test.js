import React from 'react'
import { shallow } from 'enzyme'
import LineMeter from './LineMeter'

describe('<LineMeter />', () => {
  it('should render a svg', () => {
    const wrapper = shallow(<LineMeter value={20} />)
    expect(wrapper.name()).toEqual('svg')
  })

  it('should render without a class', () => {
    const wrapper = shallow(<LineMeter value={20} />)
    expect(wrapper.hasClass('')).toBeTruthy()
  })

  it('should render with a class', () => {
    const wrapper = shallow(<LineMeter value={20} className="Jedi" />)
    expect(wrapper.hasClass('Jedi')).toBeTruthy()
  })

  it('should render with a different size', () => {
    const wrapper = shallow(<LineMeter value={20} size={100} />)
    expect(wrapper.prop('width')).toBe(100)
  })

  it('should render with a different stroke width', () => {
    const wrapper = shallow(<LineMeter value={20} thickness={50} />)
    const svg = wrapper.childAt(1)
    expect(svg.prop('strokeWidth')).toBe(50)
  })

  it('should render with a different foreground color', () => {
    const wrapper = shallow(<LineMeter value={20} foregroundColor="red" />)
    const svg = wrapper.childAt(1)
    expect(svg.prop('style')).toHaveProperty('stroke', 'red')
  })

  it('should render with a different background color', () => {
    const wrapper = shallow(<LineMeter value={20} backgroundColor="red" />)
    const svg = wrapper.childAt(0)
    expect(svg.prop('style')).toHaveProperty('stroke', 'red')
  })

  it('should render with the default text color', () => {
    const wrapper = shallow(<LineMeter value={20} />)
    const svg = wrapper.childAt(2)
    expect(svg.prop('style')).toHaveProperty('fill', '#35478C')
  })

  it('should render with a different text color', () => {
    const wrapper = shallow(<LineMeter value={20} textColor="red" />)
    const svg = wrapper.childAt(2)
    expect(svg.prop('style')).toHaveProperty('fill', 'red')
  })

  it('should render with a different text style', () => {
    const wrapper = shallow(<LineMeter value={20} textStyle={{ fontFamily: 'fantasy' }} />)
    const svg = wrapper.childAt(2)
    expect(svg.prop('style')).toHaveProperty('fontFamily', 'fantasy')
  })

  it('should render with round ends', () => {
    const wrapper = shallow(<LineMeter value={20} rounded={true} />)
    const svg = wrapper.childAt(1)
    expect(svg.prop('style')).toHaveProperty('strokeLinecap', 'round')
  })

  it('should render with text below the meter', () => {
    const wrapper = shallow(<LineMeter value={20} size={100} position={'top'} />)
    const svg = wrapper.childAt(2)
    expect(svg.prop('y')).toEqual(75)
  })
})
