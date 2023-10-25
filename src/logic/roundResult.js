import { MissionUtils } from "@woowacourse/mission-utils";

export default async function roundResult(computerNumber, userNumber) {
    let strike = strikeCount(computerNumber, userNumber);
    let ball = ballCount(computerNumber, userNumber);

    let hintMessage = getHintMessage(strike,ball);
    return {gameSuccess:??, hintMessage: ""};
}

const strikeCount = (computerNumber, userNumber) => {
    return userNumber.split("").reduce((acc, cur, index) => {
          if (Number(computerNumber[index]) === Number(cur)) {
              acc++;
              Console.print(`strikeCount: ${acc}`)
          }
          return acc;
      },0)
}

const ballCount = (computerNumber, userNumber) => {
    return userNumber.split("").reduce((acc, cur, index) => {
          if (computerNumber.includes(Number(cur))) {
              acc++;
          }
          return acc;
      },0)
}

