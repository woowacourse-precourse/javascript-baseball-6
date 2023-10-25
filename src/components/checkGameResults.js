export default function checkGameResults(userNumbers, computerNumbers) {
    const value = {
        strikeCount: 0,
        ballCount: 0,
    };

    for (let i = 0; i < computerNumbers.length; i++) {
        if (userNumbers[i] === computerNumbers[i]) {
            value.strikeCount++;
        } else if (computerNumbers.includes(userNumbers[i])) {
            value.ball++;
        }
    }

    return value;
}
