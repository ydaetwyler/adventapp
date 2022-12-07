const roundScore = round => {
    const enemy = round[0]
    const you = round[1]

    /*
        Rock = A / X
        Paper = B / Y
        Scissors = C / Z
    */

    if ((enemy === 'A' && you === 'X') || (enemy === 'B' && you === 'Y') || (enemy === 'C' && you === 'Z')) {

        return 3

    } else {

        if (enemy === 'A') {
            
            return (you === 'Y') ? 6 : 0
        
        } else if (enemy === 'B') {

            return (you === 'Z') ? 6 : 0

        } else if (enemy === 'C') {

            return (you === 'X') ? 6 : 0

        }
    }
}

export default roundScore