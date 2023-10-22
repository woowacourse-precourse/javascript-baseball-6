import { MissionUtils } from "@woowacourse/mission-utils";

class InsideGame {
  randomNumber(){
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
  Check(computerNumber, userNumber){
    let ball = 0;
    let strike = 0;
    const user = userNumber.split('').map(Number);
    for(let i = 0; i < user.length; i++){
      if (computerNumber[i] === user[i]) {
        strike++;
      }
      if (computerNumber[i] !== user[i] && computerNumber.includes(user[i])){
        ball++;
      }
    }
    return [ball, strike];
  }

  outputHint(ball, strike) {
    if (strike === 3) {
      return "3스트라이크";
    }
    if (strike === 0 && ball === 0) {
      return "낫싱";
    } 
    if (strike === 0 && ball !== 0) {
      return `${ball}볼`;
    }
    if (strike !== 0 && ball === 0) {
      return `${strike}스트라이크`;
    } 
    if (strike !== 0 && ball !== 0) {
      return `${ball}볼 ${strike}스트라이크`;
    }
  }
}
export default InsideGame;
