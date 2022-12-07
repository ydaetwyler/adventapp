const secretShape = round => {

    /*
        Rock = A / X
        Paper = B / Y
        Scissors = C / Z
    */
    const enemy = round[0]

    /*
        X = lose
        Y = draw
        Z = win
    */
    const outcome = round[1]

    if (outcome === 'X') {
        switch (enemy) {
            case 'A':
                return 'Z'
            case 'B':
                return 'X'
            case 'C':
                return 'Y'
        }
    } else if (outcome === 'Y') {
        switch (enemy) {
            case 'A':
                return 'X'
            case 'B':
                return 'Y'
            case 'C':
                return 'Z'
        }
    } else if (outcome === 'Z') {
        switch (enemy) {
            case 'A':
                return 'Y'
            case 'B':
                return 'Z'
            case 'C':
                return 'X'
        }
    }
}

export default secretShape