import React from 'react'
import PropTypes from 'prop-types'
import Example from './Example'
import Props from './Props'
import './ComponentPage.css'

const ComponentPage = ({ component }) => {
  const { name, description, props, examples } = component

  // Convert props from an object to an array
  let propArray = []
  Object.keys(props).map(key => {
    let obj = {}
    obj = props[key]
    obj.name = key
    return propArray.push(props[key])
  })
  propArray.sort((a, b) => a.name > b.name)

  return (
    <div className="componentpage">
      <h2 className="componentpage--title">{name}</h2>
      <hr />
      <p className="componentpage--description">{description}</p>
      <h3 className="componentpage--subtitle">Example{examples.length > 1 && 's'}</h3>
      {examples.length > 0
        ? examples.map(example => <Example key={example.name} example={example} componentName={name} />)
        : 'No examples exist.'}
      <h3 className="componentpage--subtitle">Props</h3>
      {props ? <Props props={propArray} /> : 'This component accepts no props.'}
    </div>
  )
}

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired,
}

export default ComponentPage
