Simple and stylish meters built with SVG for React projects.

<div align="center">
    <img src="https://raw.githubusercontent.com/royledford/react-svg-meters/master/docs/img/meters-animated.gif?raw=true"/>
</div>

<div align="center">
    <h2>React SVG Meters</h2>
    <p align="center">
        <a href="https://royledford.github.io/react-svg-meters">
            <b>View the documentation »</b>
        </a>
    </p>

[![npm](https://img.shields.io/npm/dt/react-svg-meters.svg)](https://www.npmjs.com/package/react-svg-meters)
[![npm](https://img.shields.io/npm/v/react-svg-meters.svg)](https://www.npmjs.com/package/react-svg-meters)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

</div>

## Installation

Install via npm:

```bash
$ npm install react-svg-meters --save
```

or yarn:

```bash
$ yarn add react-svg-meters
```

## Usage

Here is quick example to get you started!

```js
import React from 'react'
import { render } from 'react-dom'
import { CircleMeter } from 'react-svg-meters'

function App() {
  return <CircleMeter value={23} size={150} />
}

render(<App />, document.querySelector('#app'))
```

## Built With

* This was originally built with [create-reat-app](https://github.com/facebookincubator/create-react-app) but was ejected to build the npm package.
* [React](https://reactjs.org/) - the library used to built the meters.
* [Styleguidist](https://react-styleguidist.js.org/) - for the documentation.
* [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme) - for testing utils.

## Development

To setup the development environment.

```bash
# to install locally
$ git clone https://github.com/royledford/react-svg-meters.git

# install
$ yarn install

# run the examples
$ yarn start
# and point your browser to http://localhost:3500/

# to run the documentation
$ yarn styleguide
```

#### Running tests

```bash
$ yarn test
```

#### Viewing/Running the documentation

```bash
$ yarn styleguide
```

## Building

#### Documentation

The documentation is hosted as a Github project page on the gh-pages branch.

```bash
# to build locally
$ yarn run styleguide:build
```

## The other stuff

### svg

Why use Svg? It is [supported](http://caniuse.com/#search=svg) by all major browsers.

### License

This repository has been released under the [MIT License](LICENSE).

### Acknowledgments

Just a shout out to all the various things that helped maked this library

* Facebook for [react](https://reactjs.org/) and [create-react-app](https://github.com/facebookincubator/create-react-app)
* The folks at [React Styleguidist](https://react-styleguidist.js.org/) for providing a tool to build the documentation for library
* All the authors, coders, and friends who inspired me to release an open source project
