const path = require('path')
module.exports = {
  ignore: ['**/src/examples/*.js', '**/*.test.js', '**/src/components/index.js'],
  template: './docs/template.html',
  webpackConfig: require('./config/webpack.config.dev.js'),
  sections: [
    {
      name: 'React SVG Meters',
      content: './docs/heading.md',
    },
    {
      content: './docs/overview.md',
    },
    {
      name: 'Components',
      components: './src/components/**/*.js',
    },
  ],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')
    // const dir = path.dirname(componentPath)
    return `import { ${name} } from 'react-svg-meters';`
  },
  showUsage: true,
  theme: {
    fontSize: {
      base: 15,
      text: 16,
      small: 13,
      h1: 36,
      h2: 24,
      h3: 18,
      h4: 16,
      h5: 16,
      h6: 16,
    },
  },
}
