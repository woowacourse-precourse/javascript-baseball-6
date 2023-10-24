import { MissionUtils } from "@woowacourse/mission-utils";

let replayFlag = true;
class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    while (replayFlag) {
      await compareNumber();
    }
  }
}

// const a = new App();
// a.play();

async function getUserNumber() {
  const userNumber = await MissionUtils.Console.readLineAsync(
    "숫자를 입력해주세요 : "
  );
  if (userNumber.length !== 3) {
    throw new Error("[ERROR] 숫자는 3자리여야 합니다.");
  } else if (userNumber.includes("0")) {
    throw new Error("[ERROR] 숫자에 0이 포함되어 있습니다.");
  } else if (userNumber.split("").some((num) => isNaN(num))) {
    throw new Error("[ERROR] 숫자가 아닌 값이 포함되어 있습니다.");
  } else if (
    userNumber.split("").some((num, index, arr) => arr.indexOf(num) !== index)
  ) {
    throw new Error("[ERROR] 숫자가 중복되어 있습니다.");
  } else if (userNumber.includes(" ")) {
    throw new Error("[ERROR] 숫자에 공백이 포함되어 있습니다.");
  }
  return userNumber;
}

async function getComputerNumber() {
  const computerNumber = [];
  while (computerNumber.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(randomNumber)) {
      computerNumber.push(randomNumber);
    }
  }
  console.log(computerNumber);
  return computerNumber.join("");
}

async function compareNumber() {
  let strike = 0;
  const computerNumber = await getComputerNumber();

  while (strike !== 3) {
    const userNumber = await getUserNumber();
    strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (userNumber[i] === computerNumber[i]) {
        strike++;
      } else if (computerNumber.includes(userNumber[i])) {
        ball++;
      }
    }

    printHint(ball, strike);

    if (strike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      await isReplay();
      break;
    }
  }
}

function printHint(ball, strike) {
  if (ball === 0 && strike === 0) {
    MissionUtils.Console.print("낫싱");
  } else if (ball === 0 && strike !== 0) {
    MissionUtils.Console.print(`${strike}스트라이크`);
  } else if (ball !== 0 && strike === 0) {
    MissionUtils.Console.print(`${ball}볼`);
  } else {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }
}

async function isReplay() {
  const answer = await MissionUtils.Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );

  if (answer === "1") {
    replayFlag = true;
  } else if (answer === "2") {
    replayFlag = false;
  } else {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
}

export default App;
