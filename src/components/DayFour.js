import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DayText from './DayText'
import PartText from './PartText'
import Solution from './Solution'
import getRangeArr from '../helpers/getRangeArr.js'

const DayFour = () => {
    const [assignments, setAssignments] = useState()
    const [containSum, setContainSum] = useState()
    const [includesSum, setIncludesSum] = useState()

    useEffect(() => {
        axios.get('resources/dayFour.txt')
            .then(response => setAssignments(response.data.toString().split("\n")))
    }, [])

    useEffect(() => {
        if (assignments) {
            let counterContains = 0
            let counterIncludes = 0
            assignments.forEach(assignment => {
                const assignmentArr = assignment.split(',')
                const assignmentOneArr = getRangeArr(assignmentArr[0].split('-'))
                const assignmentTwoArr = getRangeArr(assignmentArr[1].split('-'))
                if (assignmentOneArr.every(numb => assignmentTwoArr.includes(numb)) || assignmentTwoArr.every(numb => assignmentOneArr.includes(numb))) counterContains++

                // Part Two
                const includesArr = assignmentOneArr.filter(value => assignmentTwoArr.includes(value)) 
                if (includesArr.length > 0) counterIncludes++

            })
            setContainSum(counterContains)
            setIncludesSum(counterIncludes)

        }
    }, [assignments])

    return (
        <div>
            <DayText dayNumber={4} />
            <PartText partNumber={'One'} />
            <Solution result={containSum ? containSum : null} />
            <PartText partNumber={'Two'} />
            <Solution result={includesSum ? includesSum : null} />
        </div>
    )
}

export default DayFour