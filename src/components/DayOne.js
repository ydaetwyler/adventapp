import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DayText from './DayText'
import PartText from './PartText'
import Solution from './Solution'

const DayOne = () => {
    const [calories, setCalories] = useState()
    const [groupedCalories, setGroupedCalories] = useState([])
    const [mostCalories, setMostCalories] = useState()

    useEffect(() => {
        axios.get('resources/dayOne.txt')
            .then(response => setCalories(response.data.toString().split("\n")))
    }, [])

    useEffect(() => {
        if (calories) {
            const group = []
            let count = 0
            calories.forEach(entry => {
                if (entry) {
                    count += parseInt(entry)
                } else {
                    group.push(count)
                    count = 0
                }
            })
            setGroupedCalories(group)
        }
    }, [calories])

    useEffect(() => {
        if (groupedCalories) {
            setMostCalories(Math.max(...groupedCalories))
        }
    }, [groupedCalories])

    return (
        <div>
            <DayText dayNumber={1} />
            <PartText partNumber={'One'} />
            <Solution result={mostCalories ? mostCalories.toString() : null} />
        </div>
    )
}

export default DayOne