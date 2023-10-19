import { MissionUtils } from '@woowacourse/mission-utils';

export async function setAnswer() {
    const answer = [];
    while (answer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!answer.includes(number.toString())) {
            answer.push(number.toString());
        }
    }

    return answer;
}

export async function guessJudge(guess, answer) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < 3; i++) {
        if (guess[i] === answer[i]) {
            strike += 1;
        } else if (answer.includes(guess[i])) {
            ball += 1;
        }
    }
    
    return {ball, strike};
}

export async function guessOutput({ball, strike}) {
    let output = ''

    if (ball + strike === 0) {
        output = '낫싱';
    } else if (ball * strike !== 0) {
        output = `${ball}볼 ${strike}스트라이크`;
    } else if (ball !== 0) {
        output = `${ball}볼`;
    } else if (strike !== 0) {
        output = `${strike}스트라이크`;
    }

    return output;
}
