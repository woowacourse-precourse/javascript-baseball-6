import { Console } from "@woowacourse/mission-utils";
import handleUserInput from "../handleAnswer/handleUserInput.js";
import printHint from "./gameHint.js";
import makeAnswer from "../handleAnswer/makeAnswer.js";

// const computerAnswer = makeAnswer();
// while (true) {
//   Console.print(computerAnswer);

//   const userInput = await Console.readLineAsync("숫자를 입력해주세요 :");
//   let userAnswer = handleUserInput(userInput); //예외 처리 후 userInput을 반환
//   //  ballmanager(computerAnswer, userAnswer);
//   if (computerAnswer === userAnswer) {
//     Console.print("3스트라이크");
//     Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
//     const replay = await Console.readLineAsync(
//       "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
//     );
//     if (replay === "1") {
//       continue;
//     } else if (replay === "2") {
//       Console.print("게임 종료");
//       break;
//     }
//   } else {
//     printHint(computerAnswer, userAnswer);
//     continue;
//   }
// }
// async function readUserInput() {
//   const userInput = await Console.readLineAsync("숫자를 입력해주세요 :");
//   let userAnswer = handleUserInput(userInput); //예외 처리 후 userInput을 반환
//   // Console.print(userAnswer);
//   ballmanager(computerAnswer, userAnswer);
// }
// function typeAnswer(computerAnswer) {
//   async function readUserInput() {
//     const userInput = await Console.readLineAsync("숫자를 입력해주세요 :");
//     let userAnswer = handleUserInput(userInput); //예외 처리 후 userInput을 반환
//     // Console.print(userAnswer);
//     ballmanager(computerAnswer, userAnswer);
//   }
//   readUserInput();
// }

// function ballmanager(computerAnswer, userAnswer) {
//   if (computerAnswer === userAnswer) {
//     Console.print("3스트라이크");
//     Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
//     reset();
//   } else {
//     printHint(computerAnswer, userAnswer); //볼, 스트라이크, 낫싱을 출력
//     typeAnswer(computerAnswer);
//   }
// }

// function reset() {
//   async function readUserInput() {
//     const replay = await Console.readLineAsync(
//       "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
//     );
//     if (replay === "1") {
//       playBaseball();
//     } else if (replay === "2") {
//       Console.print("게임 종료");
//       process.exit();
//     }
//   }
//   readUserInput();
// }

// export default function playBaseball() {
//   const computerAnswer = makeAnswer();
//   Console.print(computerAnswer);
//   typeAnswer(computerAnswer);
// }
