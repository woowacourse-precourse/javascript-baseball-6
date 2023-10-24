// import baseballGame from "./baseballGame.js";
import { Console } from "@woowacourse/mission-utils";
import getRandomNumber from "./getRandomNumber.js";

const gameStart = async () => {
  const targetNumber = await getRandomNumber(3);
  while (true) {
    const validInputNumber = await userInputNumber(3);
    const { ball, strike } = getCheckedGameData(targetNumber, validInputNumber);
    printGameResult(ball, strike);
    if (validInputNumber === targetNumber) {
      printGameEnd();
      break;
    }
  }
  const reTryInputNumber = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  );
  isReTry(reTryInputNumber);
};

const getCheckedGameData = (targetNumber, inputNumber) => {
  let ball = 0;
  let strike = 0;
  for (const [targetIndex, currentTargetNumber] of Object.entries(
    targetNumber
  )) {
    for (const [inputIndex, currentInputNumber] of Object.entries(
      inputNumber
    )) {
      if (currentTargetNumber === currentInputNumber) {
        if (targetIndex === inputIndex) {
          strike += 1;
          continue;
        }
        ball += 1;
      }
    }
  }
  return { ball, strike };
};

// 유효한 값이 입력됐는지 확인
const userInputNumber = async (digitNumber) => {
  const guessInputNumber = await Console.readLineAsync(
    "숫자를 입력해주세요 : "
  );
  if (isNaN(guessInputNumber)) {
    throw new Error("[ERROR]: guessInputNumber must be a Number");
  }
  if (guessInputNumber.length !== digitNumber) {
    throw new Error(
      `[ERROR]: guessInputNumber must be ${digitNumber} digit Number`
    );
  }
  return guessInputNumber;
};

const isReTry = (seletedNumber) => {
  if (seletedNumber === "1") {
    gameStart();
  } else if (seletedNumber === "2") {
    // Console.print("숫자 야구 게임을 종료합니다.");
    return;
  } else {
    throw new Error("[ERROR]: Invalid input. Please enter 1 or 2");
  }
};

// 뷰
const printGameStart = () => Console.print("숫자 야구 게임을 시작합니다.");
const printGameEnd = () =>
  Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
const printGameResult = (ball, strike) => {
  ball === 0 && strike === 0
    ? Console.print("낫싱")
    : ball === 0
    ? Console.print(`${strike}스트라이크`)
    : strike === 0
    ? Console.print(`${ball}볼`)
    : Console.print(`${ball}볼 ${strike}스트라이크`);
};

class App {
  async play() {
    try {
      printGameStart();
      await gameStart();
    } catch (error) {
      throw error;
    }
  }
}

const app = new App();
app.play();

export default App;
