import React from 'react'
import PropTypes from 'prop-types'
import CodeExample from './CodeExample'
import { camelToNormalCase } from '../helpers/helpers'
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

    const exampleName = camelToNormalCase(name)

    const codeDisplay = showCode ? '' : 'example--code-hide'
    const codeDisplayHint = showCode ? 'hide code \u21E1' : 'show code \u21E3'

    let descriptionArray = description ? description.split('\n\n') : null

    // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
    const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`).default

    return (
      <section className="example">
        <div className="example--header" onClick={this.toggleCode}>
          <span className="example--name"> {exampleName}</span>
          <span className="example--codelink">{`${codeDisplayHint}`}</span>
        </div>
        <CodeExample className={`example--code ${codeDisplay}`}>{code}</CodeExample>
        <div className="example--description-wrap">
          {description &&
            descriptionArray.map(desc => {
              return (
                <p className="example--code-description" key={desc}>
                  {desc}
                </p>
              )
            })}
        </div>

        <div className="example--example">
          <ExampleComponent />
        </div>
      </section>
    )
  }
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired,
}

export default Example
