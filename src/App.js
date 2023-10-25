import { MissionUtils } from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";

function setComputerNumber() {
  let computerNumber = [];
  while (computerNumber.length < 3) {
    let number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(number)) {
      computerNumber.push(number);
    }
  }
  // Console.print(computerNumber);
  return computerNumber;
}

function compare(player, computer) {
  let ball = 0;
  let strike = 0;
  for (let i = 0; i < 3; i++) {
    if (player[i] == computer[i]) {
      strike += 1;
    } else if (computer.includes(player[i])) {
      ball += 1;
    }
  }
  return [ball, strike];
}

function isValidNumber(num) {
  let isSame = new Set(num).size != 3;
  let includeZero = num.includes("0");
  let notThree = num.length != 3;
  let isInvalidNum = Number.isNaN(num);
  if (isSame) {
    throw new Error("[ERROR]같은 숫자가 입력되었습니다.");
  }
  if (includeZero) {
    throw new Error("[ERROR]숫자엔 0이 들어갈 수 없습니다.");
  }
  if (notThree) {
    throw new Error("[ERROR]숫자의 길이는 3이어야 합니다.");
  }
  if (isInvalidNum) {
    throw new Error("[ERROR]숫자를 입력해야합니다.");
  }
}

function result(ball, strike) {
  if (strike == 0 && ball == 0) {
    Console.print("낫싱");
  } else if (ball == 0) {
    Console.print(strike + "스트라이크");
  } else if (strike == 0) {
    Console.print(ball + "볼");
  } else {
    Console.print(ball + "볼 " + strike + "스트라이크");
  }

  if (strike == 3) {
    return true;
  }
  return false;
}

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    let computer = setComputerNumber();
    while (true) {
      let num = await Console.readLineAsync("숫자를 입력해주세요 : ");
      let player = num.split("").map(Number);
      isValidNumber(player);
      let [ball, strike] = compare(player, computer);
      let isSuccess = result(ball, strike);
      if (isSuccess) break;
    }
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    let regame = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (regame == 1) {
      this.play();
      return;
    }
  }
}

const app = new App();
app.play();

export default App;
