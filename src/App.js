import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      await compareNumber();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
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
  try {
    return user.split("").map(Number);
  } catch (error) {
    MissionUtils.Console.print(error);
    return;
  }
}

async function compareNumber() {
  const computer = generateComputerNumber();
  MissionUtils.Console.print(computer);

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
  await chooseReplay();
}

async function chooseReplay() {
  let replay = await MissionUtils.Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );
  if (replay === "1") {
    await compareNumber();
  } else if (replay === "2") {
    MissionUtils.Console.print("게임 종료");
  } else {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
}

const app = new App();
app.play();

export default App;
