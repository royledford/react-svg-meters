import React from 'react'
import PropTypes from 'prop-types'
import CodeExample from './CodeExample'
import './Example.css'

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showCode: false }
  }

  toggleCode = event => {
    event.preventDefault()
    this.setState(prevState => {
      return { showCode: !prevState.showCode }
    })
  }

  render() {
    const { showCode } = this.state
    const { code, description, name } = this.props.example

    const codeDisplay = showCode ? '' : 'example--code-hide'

    // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
    const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`).default
    return (
      <div className="example">
        <div className="example--header" onClick={this.toggleCode}>
          <span className="example--name"> {name}</span>
          <span className="example--codelink">{`{ }`}</span>
        </div>

        <CodeExample className={`example--code ${codeDisplay}`}>{code}</CodeExample>

        <div className="example--example">
          {description && <h4>{description}</h4>}

          <ExampleComponent />
        </div>
      </div>
    )
  }
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired,
}

export default Example
