import { MissionUtils } from "@woowacourse/mission-utils";
const computer = [];
const COUNT = 3;
let threeStrike = false;
let realEnd = false;
const selectRandomNumber = async () => {
  while (computer.length < 3) {
    const number = await MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
};
const game = async () => {
  while (1) {
    const userNumber = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해 주세요 :"
    );
    const user = userNumber.split("").map(Number);

    if (
      isNaN(Number(userNumber)) ||
      userNumber === undefined ||
      userNumber === null
    ) {
      throw new Error("[ERROR] 잘못된 입력값입니다.");
    }
    if (
      userNumber.length !== 3 ||
      user[0] == user[1] ||
      user[0] == user[2] ||
      user[1] == user[2]
    ) {
      throw new Error("[ERROR] 서로 다른 3자리 수를 입력해야 합니다.");
    }
    let ballCnt = 0;
    let strikeCnt = 0;

    for (let i = 0; i < COUNT; i++) {
      for (let j = 0; j < COUNT; j++) {
        if (computer[i] === user[j]) {
          if (i === j) strikeCnt++;
          if (i !== j) ballCnt++;
        }
      }
    }
    if (ballCnt === 0 && strikeCnt === 0) MissionUtils.Console.print("낫싱");
    if (ballCnt > 0 && strikeCnt > 0)
      MissionUtils.Console.print(`${ballCnt}볼 ${strikeCnt}스트라이크`);
    if (ballCnt > 0 && strikeCnt === 0)
      MissionUtils.Console.print(`${ballCnt}볼`);
    if (ballCnt === 0 && strikeCnt > 0)
      MissionUtils.Console.print(`${strikeCnt}스트라이크`);
    if (strikeCnt === 3) {
      MissionUtils.Console.print(
        "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );
      threeStrike = true;
      await startOrEnd();
      break;
    }
  }
};

const startOrEnd = async () => {
  const tmp = await MissionUtils.Console.readLineAsync("");
  const enterNumber = Number(tmp);
  MissionUtils.Console.print(enterNumber);
  if (enterNumber === 1) {
    computer.splice(0, computer.length);
    await selectRandomNumber();
    await game();
  }
  if (enterNumber === 2) {
    MissionUtils.Console.print("숫자 야구 게임을 종료합니다.");
    realEnd = true;
  }
  if (
    (enterNumber !== 1 && enterNumber !== 2) ||
    isNaN(enterNumber) ||
    enterNumber === null ||
    enterNumber === undefined
  ) {
    throw new Error("[ERROR] 잘못된 입력값입니다.");
  }
};

class App {
  async play() {
    if (realEnd === false)
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    try {
      await selectRandomNumber();
      await game();
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;
