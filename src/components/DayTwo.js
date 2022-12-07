import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DayText from './DayText'
import PartText from './PartText'
import Solution from './Solution'
import roundScore from '../helpers/roundScore.js'
import shapeScore from '../helpers/shapeScore.js'
import secretShape from '../helpers/secretShape.js'

const DayTwo = () => {
    const [strategy, setStrategy] = useState()
    const [score, setScore] = useState()
    const [secretStrategy, setSecretStrategy] = useState()
    const [secretScore, setSecretScore] = useState()

    useEffect(() => {
        axios.get('resources/dayTwo.txt')
            .then(response => {
                const raw = response.data.toString().split("\n")
                const roundsArrs = []
                raw.forEach(str => roundsArrs.push(str.split(" ")))
                setStrategy(roundsArrs)
            })
    }, [])

    useEffect(() => {
        if (strategy) {
            
            // Part 1
            let count = 0
            strategy.forEach(round => count += roundScore(round) + shapeScore(round[1]))
            setScore(count)

            // Part 2 (preparation)
            const secretArr = []
            strategy.forEach(round => secretArr.push([round[0], secretShape(round)]))
            setSecretStrategy(secretArr)
        }
    }, [strategy])

    useEffect(() => {
        if (secretStrategy) {
            let count = 0
            secretStrategy.forEach(round => count += roundScore(round) + shapeScore(round[1]))
            setSecretScore(count)
        }
    }, [secretStrategy])

    return (
        <div>
            <DayText dayNumber={2} />
            <PartText partNumber={'One'} />
            <Solution result={score ? score : null} />
            <PartText partNumber={'Two'} />
            <Solution result={secretScore ? secretScore : null} />
        </div>
    )
}

export default DayTwo