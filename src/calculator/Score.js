export function checkingScore (computerInputNumber, userInputNumbers) {
    let strike = 0;
    let ball = 0
    for (let i = 0; i <3; i++) {
        if (computerInputNumber[i] === userInputNumbers[i]) {
            strike += 1;
        }
        else if (computerInputNumber.includes(userInputNumbers[i])) {
            ball += 1;
        }
    }
    return {strike, ball}
}
