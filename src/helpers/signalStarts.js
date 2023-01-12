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

export default signalStarts