import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { hello } from '@scope/lib'

hello()

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('root'))