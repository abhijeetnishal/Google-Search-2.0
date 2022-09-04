import React from 'react'
import { useState } from 'react'

import {Navbar} from './components/navbar'
import {Footer} from './components/footer'
import {RouteComponent} from './components/routeComponent'

const App = () => {
    const [darkTheme,setDarkTheme]=useState(true)
  return (
    //create layout
    //ternary operator
    <div className={darkTheme?'dark':''}>
       <div className='dark:bg-gray-900 bg-gray-100 dark:text-gray-200 min-h-screen'>
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <RouteComponent />
            <Footer />
       </div>
    </div>
  )
}

export default App