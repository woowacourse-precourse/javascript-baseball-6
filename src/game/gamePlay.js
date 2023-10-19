import { Console } from "@woowacourse/mission-utils";
import handleUserInput from "../handleAnswer/handleUserInput.js";

function reset() {
  Console.readLine("게임이 끝났습니다. 다시 플레이 하시겠습니까?", (replay) => {
    if (replay === 1) {
      computerAnswer = makeAnswer();
      init();
    } else {
      throw new Error("Game over");
    }
  });
}

function ballmanager(computerAnswer, userAnswer) {
  if (computerAnswer === userAnswer) {
    Console.print("3스트라이크");
    reset();
  } else {
    printHint(computerAnswer, userAnswer);
    typeAnswer(computerAnswer);
  }
}

function typeAnswer(computerAnswer) {
  Console.readLine("숫자를 입력해주세요 :", (userInput) => {
    const userAnswer = handleUserInput(userInput);
    Console.print(userAnswer);
    ballmanager(computerAnswer, userAnswer);
  });
}

export default function playBaseball() {
  const computerAnswer = makeAnswer();
  Console.print(computerAnswer);
  typeAnswer(computerAnswer);
}
