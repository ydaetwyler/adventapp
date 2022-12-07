import React from 'react'
import Header from './components/Header'
import DayOne from './components/DayOne'
import DayTwo from './components/DayTwo'

const App = () => (
  <div className="bg-gray-900 w-full h-screen antialiased">
    <Header />
    <div className="font-['Rubik'] w-3/4 mx-auto">
      <DayOne />
      <DayTwo />
    </div>
  </div>
)

export default App