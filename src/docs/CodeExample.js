import React from 'react'
import PropTypes from 'prop-types'
import '../prism'
import { PrismCode } from 'react-prism'
// import 'prismjs/themes/prism-okaidia.css'
import '../prism.css'

class CodeExample extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <PrismCode component="pre" className="language-jsx">
          {this.props.children}
        </PrismCode>
      </div>
    )
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired,
}

export default CodeExample
