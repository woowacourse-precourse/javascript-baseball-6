import { computerRandom } from "./computer.js";

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

export function playGame(strike, ball) {
       
    if (strike === 3) {
        console.log(
           `${strike}스트라이크입니다\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
       );
       return;
   }
   if (!strike && !ball) {
       console.log("낫싱");
       return;
   }
   if (strike && ball) {
       console.log(`${ball}볼 ${strike}스트라이크`);
   } else if (strike && !ball) {
       console.log(`${strike}스트라이크`);
   } else if (!strike && ball) {
       console.log(`${ball}볼`);
   }
}

