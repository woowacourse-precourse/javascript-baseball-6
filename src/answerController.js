import { MissionUtils, Console } from '@woowacourse/mission-utils';

export async function setAnswer() {
    let answer = [];
    while (answer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!answer.includes(number.toString())) {
            answer.push(number.toString());
        }
    }

    return answer;
}

export async function guessJudge(guess, answer) {
    let result = {
        ball: 0,
        strike: 0
    };

    for (let i = 0; i < 3; i++) {
        if (guess[i] == answer[i]) {
            result.strike++;
        } else if (answer.includes(guess[i])) {
            result.ball++;
        }
    }
    return result
}

export async function guessOutput(result) {
    let output = '';
    if (result.ball + result.strike== 0){
        output = `낫싱`;
    } else if (result.ball * result.strike !== 0) {
        output = `${result.ball}볼 ${result.strike}스트라이크`;
    } else if (result.ball !== 0) {
        output = `${result.ball}볼`;
    } else if (result.strike !== 0) {
        output = `${result.strike}스트라이크`;
    }

    return output;
}
