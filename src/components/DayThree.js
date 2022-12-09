import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DayText from './DayText'
import PartText from './PartText'
import Solution from './Solution'
import getLetterPriority from '../helpers/getLetterPriority.js'

const DayThree = () => {
    const [items, setItems] = useState()
    const [compartments, setCompartments] = useState()
    const [matches, setMatches] = useState()
    const [priorities, setPriorities] = useState()
    const [sum, setSum] = useState()
    const [groupItems, setGroupItems] = useState()
    const [groupMatches, setGroupMatches] = useState()
    const [groupPriorities, setGroupPriorities] = useState()
    const [groupSum, setGroupSum] = useState()

    useEffect(() => {
        axios.get('resources/dayThree.txt')
            .then(response => setItems(response.data.toString().split("\n")))
    }, [])

    useEffect(() => {
        if (items) {
            // Part One
            const compartmentsArr = []
            items.forEach(item => {
                const compartmentArr = []
                compartmentArr.push(item.slice(0, item.length / 2))
                compartmentArr.push(item.slice(item.length / 2, item.length))
                compartmentsArr.push(compartmentArr)
            })
            setCompartments(compartmentsArr)

            // Part Two
            const groupItemsArr = []
            for (let i = 0; i < items.length; i++) {
                if (i % 3 === 0) {
                    groupItemsArr.push([items[i]])
                } else {
                    groupItemsArr[groupItemsArr.length -1].push(items[i])
                }
            }
            setGroupItems(groupItemsArr)
        }
    }, [items])

    useEffect(() => {
        if (compartments) {
            const matchesArr = []
            compartments.forEach(compartment => {
                const partOneArr = compartment[0].split('')
                const partTwoArr = compartment[1].split('')
                const itemIntersection = partOneArr.filter(item => partTwoArr.includes(item))
                matchesArr.push(itemIntersection[0])
            })
            setMatches(matchesArr)
        }
    }, [compartments])

    useEffect(() => {
        if (matches) {
            const prioritiesArr = []
            matches.forEach(match => prioritiesArr.push(getLetterPriority(match)))
            setPriorities(prioritiesArr)
        }
    }, [matches])

    useEffect(() => {
        if (priorities) {
            setSum(priorities.reduce((total, value) => total + value))
        }
    }, [priorities])

    useEffect(() => {
        if (groupItems) {
            const groupMatchesArr = []
            groupItems.forEach(group => {
                const groupOne = group[0].split('')
                const groupTwo = group[1].split('')
                const groupThree = group[2].split('')
                const intersection = groupOne.filter(value => groupTwo.includes(value) && groupThree.includes(value))
                groupMatchesArr.push(intersection[0])
            })
            setGroupMatches(groupMatchesArr)
        }
    }, [groupItems])

    useEffect(() => {
        if (groupMatches) {
            const groupPrioritiesArr = []
            groupMatches.forEach(groupMatch => groupPrioritiesArr.push(getLetterPriority(groupMatch)))
            setGroupPriorities(groupPrioritiesArr)
        }
    }, [groupMatches])

    useEffect(() => {
        if (groupPriorities) {
            setGroupSum(groupPriorities.reduce((total, value) => total + value))
        }
    }, [groupPriorities])

    return (
        <div>
            <DayText dayNumber={3} />
            <PartText partNumber={'One'} />
            <Solution result={sum ? sum : null} />
            <PartText partNumber={'Two'} />
            <Solution result={groupSum ? groupSum : null} />
        </div>
    )
}

export default DayThree