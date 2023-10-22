import { Console } from "@woowacourse/mission-utils";
import getRandomNumBer from "./getRandomNumber.js";

export default async function startGame() {
  Console.print("숫자 야구 게임을 시작합니다.");
  const targetNumber = getRandomNumBer(3);
  Console.print(targetNumber);
  while (true) {
    const validInputNumber = await userInputNumber(3);
    check(targetNumber, validInputNumber);
    if (validInputNumber === targetNumber) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      break;
    }
  }
}

function check(targetNumber, inputNumber) {
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

  ball === 0 && strike === 0
    ? Console.print("낫싱")
    : ball === 0
    ? Console.print(`${strike}스트라이크`)
    : strike === 0
    ? Console.print(`${ball}볼`)
    : Console.print(`${ball}볼 ${strike}스트라이크`);
}

// 유효한 값이 입력됐는지 확인
const userInputNumber = async (digitNumber) => {
  const guessInputNumber = await Console.readLineAsync(
    "숫자를 입력해주세요 : "
  );
  if (isNaN(guessInputNumber)) {
    throw new Error("guessInputNumber must be a Number");
  }
  if (guessInputNumber.length !== digitNumber) {
    throw new Error(`guessInputNumber must be ${digitNumber} digit Number`);
  }
  return guessInputNumber;
};
