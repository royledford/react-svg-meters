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
              let name = prop.required ? prop.name + ' *' : prop.name
              let required = prop.required ? 'props--table-highlight' : ''

              return (
                <tr key={prop.name}>
                  <td className="props--table-name">
                    <span className={`${required}`}>{name}</span>
                  </td>
                  <td className="props--table-type">{prop.type.name}</td>
                  <td className="props--table-default">{prop.defaultValue && prop.defaultValue.value}</td>
                  <td>{prop.description}</td>
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
