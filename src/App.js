import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}
}

async function getUserNumber() {
  return new Promise((resolve) => {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      resolve(input);
    });
  });
}

function getComputerNumber() {
  const computerNumber = Array.from({ length: 3 }, () =>
    MissionUtils.Random.pickNumberInRange(1, 9)
  ).join("");
  console.log(`컴퓨터가 생성한 숫자 : ${computerNumber}`);
  return computerNumber;
}

async function compareNumber() {
  let strike = 0;

  while (strike !== 3) {
    const userNumber = await getUserNumber();
    const computerNumber = getComputerNumber();
    strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (userNumber[i] === computerNumber[i]) {
        strike++;
      } else if (computerNumber.includes(userNumber[i])) {
        ball++;
      }
    }

    printResult(ball, strike);

    if (strike === 3) {
      console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
  }
}

function printResult(ball, strike) {
  if (ball === 0 && strike === 0) {
    console.log("낫싱");
  } else {
    console.log(`${ball}볼 ${strike}스트라이크`);
  }
}

export default App;

console.log(MissionUtils.Console.print("숫자 야구 게임을 시작합니다."));
compareNumber();
