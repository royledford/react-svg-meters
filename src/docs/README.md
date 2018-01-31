## Documentation Read Me

This documentation for this package is generated automatically from the source code and additional example pages.

### Development

During development the documentation can be generated as the files are changed by running

```bash
npm run start:docs
# view the documentation at http://localhost:3500/
```

This will watch the source and documentation folders for changes and update the files.

### Adding documentation to a component

Documentation is generated using react-docgen and [jsdoc](http://usejsdoc.org/about-getting-started.html) comments.

**Description**

Descriptions should be placed at the top of the file. These will be shown as the main description on the component documentation page.

```jsx
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * This is a description for a component. Text can
 * wrap and will be treated as a single paragraph.
 *
 * A blank will start a new paragraph.
 */
export default class BlockMeter extends Component {
...
```

**Props**

Proptypes can be documented using a single line comment.

PropTypes will parsed and placed in a table in the Props section of the component documentation page.

```jsx
...
/** This is the description for the property below */
value: PropTypes.number.isRequired,
/** and the second property description */
size: PropTypes.number,
...
```

### Adding examples to a component

Each component will have a dedicated page with the documentation for its usage. You can add one or more examples to show haw to use the component, and the matching code.

Examples are stored in the src/docs/examples folder.

To create a new example:

* Add a folder under examples with the same name as the component being documented.
* Add a new .js file for the example. The filename will be used as the example title in the documentation.
* Add code to the file to display the component examples.

Example:

```jsx
import React from 'react'
import { MyComponent } from 'my-component'

/**
 * Descriptions shown here will display above the example.
 */
export default function ExampleBlockMeter() {

  return (
    <MyComponent someProp='some-value' />
    <MyComponent someProp='a-different-value' />
  )
}
```

Examples should show all the code needed to render a component. Examples can show multiple components and different prop values.

The file name for the example will be converted to Proper case and used as the title for the example.

Each component can have mulitple examples.
