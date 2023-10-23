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
    return computer;
  }
  // 오류 확인 로직
  isValidAnswer(answer) {
    if (answer.includes(" ")) {
      throw new Error("[ERROR] 공백이 포함되어 있습니다.");
    }
    if (isNaN(answer)) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }
    if (answer.split("").includes("0")) {
      throw new Error("[ERROR] 0이 포함되어 있습니다.");
    }
    if (answer.split("").includes("-")) {
      throw new Error("[ERROR] - 가 포함되어 있습니다.");
    }
    if (answer.length !== 3) {
      throw new Error("[ERROR] 세 자리 숫자를 입력해주세요.");
    }
    if (new Set(answer).size !== 3) {
      throw new Error("[ERROR] 중복된 숫자를 입력했습니다.");
    }
    return "Normal Value";
  }
  //볼과 스트라이크 개수 확인
  Check(computerNumber, userNumber) {
    let ball = 0;
    let strike = 0;
    const user = userNumber.split("").map(Number);
    for (let i = 0; i < user.length; i++) {
      if (computerNumber[i] === user[i]) {
        strike++;
      }
      if (computerNumber[i] !== user[i] && computerNumber.includes(user[i])) {
        ball++;
      }
    }
    return [ball, strike];
  }
  // 힌트 출력 로직
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

  // 1과 2 이외의 값이 생기면 에러를 던짐.
  endInputValid(question) {
    if (question !== "1" && question !== "2") {
      throw new Error("[ERROR] 1과 2만 입력해주세요.");
    }
    return question;
  }
}
export default InsideGame;
