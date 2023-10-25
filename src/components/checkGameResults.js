export default function checkGameResults(userNumbers, computerNumbers) {
    const value = {
        strike: 0,
        ball: 0,
    };

    for (let i = 0; i < computerNumbers.length; i++) {
        if (userNumbers[i] === computerNumbers[i]) {
            value.strike++;
        } else if (computerNumbers.includes(userNumbers[i])) {
            value.ball++;
        }
    }

    return value;
}
