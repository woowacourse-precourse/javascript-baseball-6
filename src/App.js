import { Console } from "@woowacourse/mission-utils";
import { getAnswer, getUserInput } from "./getRandomNumber.js";

const Start = async () => {
  const answer = await getAnswer(3);

  while (true) {
    const user = await getUserInput(3);
    const { ball, strike } = getGameResult(answer, user);

    printResult(ball, strike);

    if (user === answer) {
      printEnd();
      break;
    }
  }

  const reStartInput = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  );

  isReStart(reStartInput);
};

const getGameResult = (answer, user) => {
  let ball = 0;
  let strike = 0;
  const size = answer.length;

  for (let i = 0; i < size; i++) {
    if (answer[i] === user[i]) {
      strike += 1;
    } else if (answer.includes(user[i])) {
      ball += 1;
    }
  }
  return { ball, strike };
};

const isReStart = (seletedNumber) => {
  if (seletedNumber === "1") {
    Start();
    return;
  }
  if (seletedNumber === "2") {
    return;
  }
  throw new Error("[ERROR]: Invalid input. Please enter 1 or 2");
};

// 뷰
const printStart = () => Console.print("숫자 야구 게임을 시작합니다.");

const printEnd = () =>
  Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

const printResult = (ball, strike) => {
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
      printStart();
      await Start();
    } catch (error) {
      throw error;
    }
  }
}

// const app = new App();
// app.play();

export default App;
