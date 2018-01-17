import React from 'react'
import { shallow } from 'enzyme'
import DiskMeter from './DiskMeter'

describe('<DiskMeter />', () => {
  it('should render a svg', () => {
    const wrapper = shallow(<DiskMeter value={20} />)
    expect(wrapper.name()).toEqual('svg')
  })

  it('should render with a class', () => {
    const wrapper = shallow(<DiskMeter value={20} className="Jedi" />)
    expect(wrapper.hasClass('Jedi')).toBeTruthy()
  })

  it('should render with a different size', () => {
    const wrapper = shallow(<DiskMeter value={20} size={100} />)
    expect(wrapper.prop('height')).toBe(100)
  })

  it('should render with a different stroke width', () => {
    const wrapper = shallow(<DiskMeter value={20} thickness={50} />)
    const svg = wrapper.childAt(1)
    expect(svg.prop('strokeWidth')).toBe('50px')
  })

  it('should render with a different background color', () => {
    const wrapper = shallow(<DiskMeter value={20} backgroundColor="red" />)
    const svg = wrapper.childAt(2)
    expect(svg.prop('style')).toHaveProperty('fill', 'red')
  })

  it('should render with a different border color', () => {
    const wrapper = shallow(<DiskMeter value={20} borderColor="red" />)
    const svg = wrapper.childAt(1)
    expect(svg.prop('style')).toHaveProperty('stroke', 'red')
  })

  it('should render without a border', () => {
    const wrapper = shallow(<DiskMeter value={20} showBorder={false} />)
    const svg = wrapper.childAt(1)
    expect(svg.prop('strokeWidth')).toBe('0px')
  })

  it('should render with the default text color', () => {
    const wrapper = shallow(<DiskMeter value={20} />)
    const svg = wrapper.childAt(3)
    expect(svg.prop('style')).toHaveProperty('fill', '#35478C')
  })

  it('should render with a different text color', () => {
    const wrapper = shallow(<DiskMeter value={20} textColor="red" />)
    const svg = wrapper.childAt(3)
    expect(svg.prop('style')).toHaveProperty('fill', 'red')
  })

  it('should render with a different text style', () => {
    const wrapper = shallow(<DiskMeter value={20} textStyle={{ fontFamily: 'fantasy' }} />)
    const svg = wrapper.childAt(3)
    expect(svg.prop('style')).toHaveProperty('fontFamily', 'fantasy')
  })
})
