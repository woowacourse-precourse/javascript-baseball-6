import { computerRandom } from "./computer.js";

export function checkingScore (computerInputNumber, userInputNumbers) {
    let score = [0, 0];
    for (let i = 0; i <3; i++) {
        if (computerInputNumber[i] === userInputNumbers[i]) {
            score[0] += 1;
        }
        else if (computerInputNumber.includes(userInputNumbers[i])) {
            score[1] += 1;
        }
    }
    return score
}


export function playGame(computerInputNumber, userInputNumbers) {
    const score = checkingScore(computerInputNumber, userInputNumbers);
    let answer = ""
    if (score[0] === 0 && score[1] === 0) {
        answer = "낫싱";
        '3개의 숫자를 모두 맞히셨습니다! 게임종료'
    }
    else if (score[0] === 0 && score[1] > 0) {
        answer = `${score[1]}볼`
    }
    else if (score[0] > 0 && score[1] === 0) {
        answer = `${score[0]}스트라이크`
    }
    else {
        answer = `${score[1]}볼 ${score[0]}스트라이크`
    }
    return answer;
}


