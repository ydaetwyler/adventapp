import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DayText from './DayText'
import PartText from './PartText'
import Solution from './Solution'

const DaySix = () => {
    const [buffer, setBuffer] = useState()
    const [startCounter, setStartCounter] = useState()
    const [startMessageCounter, setStartMessageCounter] = useState()

    useEffect(() => {
        axios.get('resources/daySix.txt')
            .then(response => setBuffer(response.data.toString().split("")))
    }, [])

    // Returns an empty array if no duplicate is found
    const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)

    // Returns amount of chars processed until <times> of chars are unique
    const signalStarts = (arr, times) => {

        const controlGroup = []
        let counter = 0

        arr.forEach(char => {
            if (controlGroup.length < times) {
                controlGroup.push(char)
                counter++
            } else {
                if (findDuplicates(controlGroup).length !== 0) {
                    controlGroup.shift()
                    controlGroup.push(char)
                    counter++
                }
            }
        })

        return counter
    }

    useEffect(() => {
        if (buffer) {
            setStartCounter(signalStarts(buffer, 4))
            setStartMessageCounter(signalStarts(buffer, 14))
        }
    }, [buffer])

    return (
        <div>
            <DayText dayNumber={6} />
            <PartText partNumber={'One'} />
            <Solution result={startCounter ? startCounter : null} />
            <PartText partNumber={'Two'} />
            <Solution result={startMessageCounter ? startMessageCounter : null} />
        </div>
    )
}

export default DaySix