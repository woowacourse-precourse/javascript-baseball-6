import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      compareNumber();
    } catch (error) {
      throw new Error("[ERROR] 게임 종료");
    }
  }
}

function generateComputerNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

async function getUserNumber() {
  let user = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
  if (user.length !== 3 || new Set(user).size !== 3) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  return user.split("").map(Number);
}

async function compareNumber() {
  const computer = generateComputerNumber();

  let ball = 0;
  let strike = 0;

  while (strike !== 3) {
    const user = await getUserNumber();
    ball = 0;
    strike = 0;
    for (let num = 0; num < 3; num++) {
      if (computer[num] === user[num]) {
        strike++;
      } else if (user.includes(computer[num])) {
        ball++;
      }
    }

    let printBall = ball !== 0 ? `${ball}볼 ` : "";
    let printSkrike = strike !== 0 ? `${strike}스트라이크 ` : "";
    if (ball !== 0 || strike !== 0) {
      MissionUtils.Console.print(printBall + printSkrike);
    } else {
      MissionUtils.Console.print("낫싱");
    }
  }

  MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
}

export default App;
