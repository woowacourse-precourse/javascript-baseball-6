const checkBatterResult = (pitcherBallNumbers, batterBallNumbers, strikeCount, ballCount) => {
    for (let i = 0; i < pitcherBallNumbers.length; i++) {
        pitcherBallNumbers.map((pitcherBall, index) => {
            if (pitcherBall === batterBallNumbers[i] && i === index) {
                strikeCount++;
            }

            if (pitcherBall === batterBallNumbers[i] && i !== index) {
                ballCount++;
            }
        });
    }

    return [
        strikeCount,
        ballCount,
    ]
}

export default checkBatterResult;