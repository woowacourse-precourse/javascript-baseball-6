import { MissionUtils } from "@woowacourse/mission-utils";

class InsideGame {
  randomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('');
  }

  vaild(answer){
    const inputSet = new Set(answer.split('').map(Number));
        if (isNaN(answer)) {
          throw new Error("[ERROR] 숫자만 입력해주세요.");
        }
        if (answer.length !== 3){
          throw new Error("[ERROR] 세 자리 숫자를 입력해주세요.");
        }
        if (answer.includes(' ')) {
          throw new Error("[ERROR] 공백이 포함되어 있습니다.");
        } 
        if ([...inputSet].length !== 3){
          throw new Error("[ERROR] 중첩되지 않은 세 자리 숫자를 입력해주세요");
        }
    return "Normal Value";
  }
  strikeCheck(computerNumber, userNumber) {
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (computerNumber[i] === userNumber[i]) strike++;
    }

    return strike;
  }
  ballCheck(computerNumber, userNumber) {
    let ball = 0;

    for (let j = 0; j < 3; j++) {
      if (computerNumber[j] !== userNumber[j] && computerNumber.includes(userNumber[j])){
        ball++;
      } 
    }
    return ball;
  }

  outputHint(ball, strike) {
    if(strike === 0 && ball === 0){
      return "낫싱";
    }
    if (strike === 3) {
      return "3스트라이크";
    } else if (strike === 0 && ball !== 0) {
      return `${ball}볼`;
    } else if (strike !== 0 && ball === 0) {
      return `${strike}스트라이크`;
    } else {
      return `${ball}볼 ${strike}스트라이크`;
    }
    
  }
}
export default InsideGame;