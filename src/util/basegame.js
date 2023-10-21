const baseGame = (randomNumberArray, inputNumber) => {
    const RANDOM_STRING = randomNumberArray.join('')
    const INPUT_STRING = String(inputNumber)
    let strike_count = 0;
    let ball_count = 0;

    // 2.2.1 모든 숫자가 일치하는지 확인하기

    if (RANDOM_STRING === INPUT_STRING) {
        return "3스트라이크"
    }

    const INPUT_NUMBER_ARRAY = INPUT_STRING.split('');

    for (let i in INPUT_NUMBER_ARRAY) {
        if (RANDOM_STRING.includes(INPUT_NUMBER_ARRAY[i])) {

            // 2.2.2 자리와 값이 일치하는 수 골라내기 = strike
            // 2.2.3 자리는 다르지만 값이 일치하는 수 골라내기 = ball
            RANDOM_STRING[i] === (INPUT_NUMBER_ARRAY[i]) ? strike_count++ : ball_count++;
        }
    }

    if (!strike_count && !ball_count) return "낫싱";

    if (!strike_count && ball_count) return `${ball_count}볼`;

    if (strike_count && !ball_count) return `${strike_count}스트라이크`;

    return `${ball_count}볼 ${strike_count}스트라이크`
}

export default baseGame