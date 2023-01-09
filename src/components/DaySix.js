import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DayText from './DayText'
import PartText from './PartText'
import Solution from './Solution'

const DaySix = () => {
    const [buffer, setBuffer] = useState()
    const [startCounter, setStartCounter] = useState()

    useEffect(() => {
        axios.get('resources/daySix.txt')
            .then(response => setBuffer(response.data.toString().split("")))
    }, [])

    // Returns an empty array if no duplicate is found
    const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)

    useEffect(() => {
        if (buffer) {

            const controlGroup = []
            let counter = 0

            buffer.forEach(char => {
                if (controlGroup.length < 4) {
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

            setStartCounter(counter)
        }
    }, [buffer])

    return (
        <div>
            <DayText dayNumber={6} />
            <PartText partNumber={'One'} />
            <Solution result={startCounter ? startCounter : null} />
        </div>
    )
}

export default DaySix