import { Console } from "@woowacourse/mission-utils";
import handleUserInput from "../handleAnswer/handleUserInput.js";


function typeAnswer(computerAnswer) {
  Console.readLine("숫자를 입력해주세요 :", (userInput) => {
    const userAnswer = handleUserInput(userInput);
    Console.print(userAnswer);
  });
}

