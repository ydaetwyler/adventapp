import React from 'react'
import Header from './components/Header'
import DayOne from './components/DayOne'
import DayTwo from './components/DayTwo'
import DayThree from './components/DayThree'

const App = () => (
  <div className="bg-gray-900 w-full h-screen antialiased">
    <Header />
    <div className="font-['Rubik'] w-3/4 mx-auto">
      <DayOne />
      <DayTwo />
      <DayThree />
    </div>
  </div>
)

export default App