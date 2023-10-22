import { MissionUtils } from "@woowacourse/mission-utils";

class InsideGame {
  // 랜덤 숫자 생성 로직
  randomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  // 게임을 진행할 때 입력된 값이 올바른 값인지 검증
  vaild(answer) {
    if (answer.includes(" ")) {
      throw new Error("[ERROR] 공백이 포함되어 있습니다.");
    }
    if (isNaN(answer)) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }
    const answerArr = answer.split('');
    if (answerArr.includes('0')){
      throw new Error("[ERROR] 0이 포함되어 있습니다.")
    }
    if (answerArr.includes('-')){
      throw new Error("[ERROR] - 가 포함되어 있습니다.")
    }
    if (answer.length !== 3) {
      throw new Error("[ERROR] 세 자리 숫자를 입력해주세요.");
    }
    const answerSet = new Set(answer);
    if (answerSet.size !== 3) {
      throw new Error("[ERROR] 중복된 숫자를 입력했습니다.");
    }
    return "Normal Value";
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

  // 맞춘 ball과 strike 출력
  outputHint(ball, strike) {
    if (strike === 0 && ball === 0) {
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

  // 게임을 더 진행할 지 안할지에 대한 입력 값 검증
  endInputVaild(question){
    const questionNumber = Number(question);
    if(questionNumber !== 1 && questionNumber !== 2){
      throw new Error ("[ERROR] 1과 2만 입력해주세요.");
    }
    return questionNumber;
  }
}
export default InsideGame;
