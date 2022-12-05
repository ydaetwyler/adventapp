import React from 'react'

const DayText = ({ dayNumber }) => (
        <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(234 179 8)" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            <h3 className="ml-3 text-3xl text-yellow-500">Day {dayNumber}</h3>
        </div>
)

export default DayText