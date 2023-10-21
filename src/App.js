import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}
}

async function getUserNumber() {
  try {
    const userNumber = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    return userNumber;
  } catch (error) {
    console.error("[ERROR] 숫자가 잘못된 형식입니다.", error);
  }
}

function getComputerNumber() {
  const uniqueNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  const computerNumber = uniqueNumber.join("");
  return computerNumber;
}

async function compareNumber() {
  let strike = 0;
  const computerNumber = getComputerNumber();

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
      console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      isReplay();
    }
  }
}

function printHint(ball, strike) {
  if (ball === 0 && strike === 0) {
    console.log("낫싱");
  } else {
    console.log(`${ball}볼 ${strike}스트라이크`);
  }
}

async function isReplay() {
  try {
    const isReplay = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    if (isReplay === "1") {
      compareNumber();
    } else if (isReplay === "2") {
      console.log("게임을 종료합니다.");
    } else {
      console.error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  } catch (error) {
    console.error("[ERROR] 숫자가 잘못된 형식입니다.", error);
  }
}

export default App;

console.log(MissionUtils.Console.print("숫자 야구 게임을 시작합니다."));
compareNumber();
