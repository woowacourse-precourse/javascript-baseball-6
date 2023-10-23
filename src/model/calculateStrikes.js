const isStrike = function checkNumberElementIsStrike(numberElement, computerNumber, idx) {
    return numberElement === computerNumber[idx]
}

const calculateStrikes = function returnStrikeCountByUserNumberAndComputerNumber(userNumber, computerNumber) {
    return [...userNumber].reduce((cntStrike, numberElement, idx) => {
        if (isStrike(numberElement, computerNumber, idx)) {
            cntStrike += 1;
        }
        return cntStrike
    }, 0)
}

export default calculateStrikes