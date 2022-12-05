import React from 'react'
import Header from './components/Header'
import DayOne from './components/DayOne'

const App = () => (
  <div className="bg-gray-900 w-full h-screen antialiased">
    <Header />
    <div className="font-['Rubik'] mt-24 w-3/4 mx-auto">
      <DayOne />
    </div>
  </div>
)

export default App