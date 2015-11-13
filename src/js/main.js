import React from 'react'
import { render } from 'react-dom'

import Home from './components/home'
import Sidebar from './components/sidebar'

render(<Home />, document.querySelector('main'))
render(<Sidebar />, document.querySelector('sidebar > div > span'))