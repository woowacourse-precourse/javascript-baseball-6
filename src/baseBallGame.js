import { Console } from "@woowacourse/mission-utils";
import createRandomNumber from "./function/createRandomNumber.js";
import userInput from "./function/userInput.js";
import gameResultPrint from "./function/gameResultPrint.js";
// 1. Random Number 출력
// 2. 사용자가 입력 할 수 있는 함수 생성 O
// 3. 입력값을 받아서 random Number와 비교 하기 O
// 4. 비교 후 값에 맞는 문자열 문구 print O
// 5. print 후 3스트라이크 일 경우 1 or 2를 입력하는 함수 생성 O
// 6. 1일경우 baseballGame재실행
// 7. 2일경우 함수종료

const baseBallGame = async () => {
  const computerValue = createRandomNumber();
  const userValue = await userInput();
  const userInputArr = userValue.split("").map((el) => {
    return Number(el);
  });
  let strike = 0;
  let ball = 0;

  computerValue.forEach((el, index) => {
    if (el === userInputArr[index]) {
      strike += 1;
    } else if (el !== userInputArr[index] && userInputArr.indexOf(el) !== -1) {
      ball += 1;
    }
  });

  Console.print(gameResultPrint(ball, strike));
};

baseBallGame();

export default baseBallGame;
