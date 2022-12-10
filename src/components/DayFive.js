import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DayText from './DayText'
import PartText from './PartText'
import Solution from './Solution'

const rearangeStacks = (instructionsNumbersCopy) => {

    const stacks = {
        1: ['B', 'S', 'J', 'Z', 'V', 'D', 'G'],
        2: ['P', 'V', 'G', 'M', 'S', 'Z'],
        3: ['F', 'Q', 'T', 'W', 'S', 'B', 'L', 'C'],
        4: ['Q', 'V', 'R', 'M', 'W', 'G', 'J', 'H'],
        5: ['D', 'M', 'F', 'N', 'S', 'L', 'C'],
        6: ['D', 'C', 'G', 'R'],
        7: ['Q', 'S', 'D', 'J', 'R', 'T', 'G', 'H'],
        8: ['V', 'F', 'P'],
        9: ['J', 'T', 'S', 'R', 'D']
    }

    instructionsNumbersCopy.forEach(instruction => {
        const times = instruction[0]
        const from = instruction[1]
        const to = instruction[2]
        
        for (let i = 0; i < times; i++) {
            stacks[to].unshift(stacks[from].shift())
        }
    })
    
    return stacks
}

const DayFive = () => {
    const [instructions, setInstructions] = useState()
    const [instructionsNumbers, setInstructionsNumbers] = useState()
    const [stacksNew, setStacksNew] = useState()
    const [stacksFirst, setStacksFirst] = useState()

    useEffect(() => {
        axios.get('resources/dayFive.txt')
            .then(response => setInstructions(response.data.toString().split("\n")))
    }, [])

    useEffect(() => {
        if (instructions) {
            const instructionsNumbersArr = []
            instructions.forEach(instruction => {
                const valuesRaw = instruction.split(" ")
                instructionsNumbersArr.push([parseInt(valuesRaw[1]), parseInt(valuesRaw[3]), parseInt(valuesRaw[5])])
            })
            setInstructionsNumbers(instructionsNumbersArr)
        }
    }, [instructions])

    useEffect(() => {
        if (instructionsNumbers) {
            setStacksNew(rearangeStacks(instructionsNumbers))
        }
    }, [instructionsNumbers])

    useEffect(() => {
        if (stacksNew) {
            const stacksFirstArr = []
            for (let i = 1; i <= 9; i++) {
                stacksFirstArr.push(stacksNew[i][0])
            }
            setStacksFirst(stacksFirstArr.join(''))
        }  
    }, [stacksNew])

    return (
        <div>
            <DayText dayNumber={5} />
            <PartText partNumber={'One'} />
            <Solution result={stacksFirst ? stacksFirst : null} />
        </div>
    )
}

export default DayFive