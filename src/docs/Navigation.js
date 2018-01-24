import React from 'react'
import PropTypes from 'prop-types'
import './Navigation.css'

const Navigation = ({ components }) => {
  return (
    <nav className="navigation">
      {components.map(name => {
        return (
          <a key={name} href={`#${name}`} className="navigation--link">
            {name}
          </a>
        )
      })}
    </nav>
  )
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired,
}

export default Navigation
