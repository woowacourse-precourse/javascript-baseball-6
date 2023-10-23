const isUniqueNumber = function checkNumberElementIsUnique(numberElement, computerNumber, idx) {
    return computerNumber.indexOf(numberElement) !== -1 && computerNumber.indexOf(numberElement) !== idx
}


const calculateBalls = function returnBallCountByUserNumberAndComputerNumber(userNumber, computerNumber) {
    return [...userNumber].reduce((cntBall, numberElement, idx) => {
        if (isUniqueNumber(numberElement, computerNumber, idx)) {
            cntBall += 1;
        }
        return cntBall
    }, 0)
}

export default calculateBalls