import React from 'react'
import PropTypes from 'prop-types'

import './Props.css'

const Props = ({ props }) => {
  return (
    <React.Fragment>
      <section className="props--table-wrap">
        <table className="props--table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map(prop => {
              // Make sure all prop values exist so we don't crash on missing ones
              // This can happen if the dev forgot to add comments or there is a default
              // with no type.
              const name = prop.name ? prop.name : ''
              const required = prop.required ? prop.required : false
              const type = prop.type ? prop.type.name : ''
              const defaultValue = prop.defaultValue ? prop.defaultValue.value : ''
              const description = prop.description ? prop.description : ''

              const nameFormatted = required ? name + ' *' : name
              const requiredClass = required ? 'props--table-highlight' : ''

              return (
                <tr key={name}>
                  <td className="props--table-name">
                    <span className={`${requiredClass}`}>{nameFormatted}</span>
                  </td>
                  <td className="props--table-type">{type}</td>
                  <td className="props--table-default">{defaultValue}</td>
                  <td>{description}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
      <span className="props--footnote">* denotes a required property</span>
    </React.Fragment>
  )
}

Props.propTypes = {
  props: PropTypes.array.isRequired,
}

export default Props

// {/* <table className="props--table">
// <thead>
//   <tr>
//     <th>Name</th>
//     <th>Type</th>
//     <th>Default</th>
//     <th>Description</th>
//   </tr>
// </thead>
// <tbody>
//   {Object.keys(props).map(key => {
//     let name = props[key].required ? key + ' *' : key
//     return (
//       <tr key={key}>
//         <td>{name}</td>
//         <td>{props[key].type.name}</td>
//         <td>{props[key].defaultValue && props[key].defaultValue.value}</td>
//         <td>{props[key].description}</td>
//       </tr>
//     )
//   })}
// </tbody>
// </table> */}
