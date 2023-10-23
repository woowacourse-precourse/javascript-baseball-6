export const calculateBalls = function returnBallCountByUserNumberAndComputerNumber(userNumber, computerNumber) {
    let cntBall = 0;
    for (let ni = 0; ni < 3; ni++) {
        const foundIdx = computerNumber.indexOf(userNumber[ni])
        if (foundIdx !== -1 && ni !== foundIdx) {
            cntBall += 1;
        }
    }
    return cntBall
}