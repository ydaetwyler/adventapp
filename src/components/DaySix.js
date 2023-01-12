import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DayText from './DayText'
import PartText from './PartText'
import Solution from './Solution'
import signalStarts from '../helpers/signalStarts.js'

const DaySix = () => {
    const [buffer, setBuffer] = useState()
    const [startCounter, setStartCounter] = useState()
    const [startMessageCounter, setStartMessageCounter] = useState()

    useEffect(() => {
        axios.get('resources/daySix.txt')
            .then(response => setBuffer(response.data.toString().split("")))
    }, [])

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