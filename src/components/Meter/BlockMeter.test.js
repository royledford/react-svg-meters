import React from 'react'
import { shallow } from 'enzyme'
import BlockMeter from './BlockMeter'

describe('<BlockMeter />', () => {
  it('should render a svg', () => {
    const wrapper = shallow(<BlockMeter value={20} />)
    expect(wrapper.name()).toEqual('svg')
  })

  it('should render without a class', () => {
    const wrapper = shallow(<BlockMeter value={20} />)
    expect(wrapper.hasClass('')).toBeTruthy()
  })

  it('should render with a class', () => {
    const wrapper = shallow(<BlockMeter value={20} className="Jedi" />)
    expect(wrapper.hasClass('Jedi')).toBeTruthy()
  })

  it('should render with a different size', () => {
    const wrapper = shallow(<BlockMeter value={20} size={100} />)
    expect(wrapper.prop('height')).toBe(100)
  })

  it('should render with a different foreground color', () => {
    const wrapper = shallow(<BlockMeter value={20} foregroundColor="red" />)
    const svg = wrapper.childAt(1)
    expect(svg.prop('style')).toHaveProperty('stroke', 'red')
  })

  it('should render with a different background color', () => {
    const wrapper = shallow(<BlockMeter value={20} backgroundColor="red" />)
    const svg = wrapper.childAt(0)
    expect(svg.prop('style')).toHaveProperty('stroke', 'red')
  })

  it('should render with a different text color', () => {
    const wrapper = shallow(<BlockMeter value={20} textColor="red" />)
    const svg = wrapper.childAt(2)
    expect(svg.prop('style')).toHaveProperty('fill', 'red')
  })

  it('should render with a different text style', () => {
    const wrapper = shallow(<BlockMeter value={20} textStyle={{ fontFamily: 'fantasy' }} />)
    const svg = wrapper.childAt(2)
    expect(svg.prop('style')).toHaveProperty('fontFamily', 'fantasy')
  })

  it('should render with a vertical orientation', () => {
    const wrapper = shallow(<BlockMeter value={100} size={100} direction="vertical" />)
    const svg = wrapper.childAt(1)
    expect(svg.prop('x1')).toEqual(50)
    expect(svg.prop('y1')).toEqual(100)
    expect(svg.prop('x2')).toEqual(50)
    expect(svg.prop('y2')).toEqual(0)
  })
})
