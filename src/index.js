import React from 'react'
import ReactDOM from 'react-dom'
import './css/normalize.css'
import './css/reset.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
