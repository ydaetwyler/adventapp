import React from 'react'
import Header from './components/Header'
import DayOne from './components/DayOne'
import DayTwo from './components/DayTwo'
import DayThree from './components/DayThree'
import DayFour from './components/DayFour'
import DayFive from './components/DayFive'
import DaySix from './components/DaySix'

const App = () => (
  <div className="bg-gray-900 w-full h-screen overflow-y-auto antialiased pb-32">
    <Header />
    <div className="font-['Rubik'] w-3/4 mx-auto">
      <DayOne />
      <DayTwo />
      <DayThree />
      <DayFour />
      <DayFive />
      <DaySix />
    </div>
  </div>
)

export default App