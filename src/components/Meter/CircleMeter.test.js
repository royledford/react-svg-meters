import React from 'react'
import { shallow } from 'enzyme'
import CircleMeter from './CircleMeter'

describe('<CircleMeter />', () => {
  it('should render a svg', () => {
    const wrapper = shallow(<CircleMeter value={20} />)
    expect(wrapper.name()).toEqual('svg')
  })

  it('should render without a class', () => {
    const wrapper = shallow(<CircleMeter value={20} />)
    expect(wrapper.hasClass('')).toBeTruthy()
  })

  it('should render with a class', () => {
    const wrapper = shallow(<CircleMeter value={20} className="Jedi" />)
    expect(wrapper.hasClass('Jedi')).toBeTruthy()
  })

  it('should render with a different size', () => {
    const wrapper = shallow(<CircleMeter value={20} size={100} />)
    expect(wrapper.prop('height')).toBe(100)
  })

  it('should render with a different stroke width', () => {
    const wrapper = shallow(<CircleMeter value={20} thickness={50} />)
    const svg = wrapper.childAt(1)
    expect(svg.prop('strokeWidth')).toBe('50px')
  })

  it('should render with a different foreground color', () => {
    const wrapper = shallow(<CircleMeter value={20} foregroundColor="red" />)
    const svg = wrapper.childAt(1)
    expect(svg.prop('style')).toHaveProperty('stroke', 'red')
  })

  it('should render with a different background color', () => {
    const wrapper = shallow(<CircleMeter value={20} backgroundColor="red" />)
    const svg = wrapper.childAt(0)
    expect(svg.prop('style')).toHaveProperty('stroke', 'red')
  })

  it('should render with the default text color', () => {
    const wrapper = shallow(<CircleMeter value={20} />)
    const svg = wrapper.childAt(2)
    expect(svg.prop('style')).toHaveProperty('fill', '#35478C')
  })

  it('should render with a different text color', () => {
    const wrapper = shallow(<CircleMeter value={20} textColor="red" />)
    const svg = wrapper.childAt(2)
    expect(svg.prop('style')).toHaveProperty('fill', 'red')
  })

  it('should render with a different text style', () => {
    const wrapper = shallow(<CircleMeter value={20} textStyle={{ fontFamily: 'fantasy' }} />)
    const svg = wrapper.childAt(2)
    expect(svg.prop('style')).toHaveProperty('fontFamily', 'fantasy')
  })

  it('should render with a different progress start', () => {
    const wrapper = shallow(<CircleMeter value={20} progressStart={45} />)
    const svg = wrapper.childAt(1)
    expect(svg.prop('transform')).toEqual('rotate(-45 100 100)')
  })

  it('should render with a different meter length', () => {
    const wrapper = shallow(<CircleMeter value={20} meterLength={180} />)
    const svg = wrapper.childAt(0)
    expect(svg.prop('style')).toHaveProperty('strokeDashoffset', 289.02652413026095)
  })

  it('should render with round ends', () => {
    const wrapper = shallow(<CircleMeter value={20} rounded={true} />)
    const svg = wrapper.childAt(0)
    expect(svg.prop('style')).toHaveProperty('strokeLinecap', 'round')
  })
})
