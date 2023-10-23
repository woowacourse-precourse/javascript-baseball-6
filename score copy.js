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
        answer = "낫싱"        
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








export function playGame(strike, ball) {
       
    if (strike === 3) {
       Console.print(
           `${strike}스트라이크입니다\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
       );
       Console.print(
           "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
       );
       return;
   }
   if (!strike && !ball) {
       Console.print("낫싱");
       return;
   }
   if (strike && ball) {
       Console.print(`${ball}볼 ${strike}스트라이크`);
   } else if (strike && !ball) {
       Console.print(`${strike}스트라이크`);
   } else if (!strike && ball) {
       Console.print(`${ball}볼`);
   }
}

