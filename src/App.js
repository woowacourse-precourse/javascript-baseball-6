import { Console } from "@woowacourse/mission-utils";
import { getAnswer, getUserInput } from "./getValue.js";
import { printStart, printEnd, printResult } from "./printMessage.js";

const SIZE = 3;

const Start = async () => {
  const answer = await getAnswer(SIZE);

  while (true) {
    const user = await getUserInput(SIZE);
    const { ball, strike } = getGameResult(answer, user);

    printResult(ball, strike);

    if (user === answer) {
      printEnd();
      break;
    }
  }

  await isReStart();
};

const getGameResult = (answer, user) => {
  let ball = 0;
  let strike = 0;

  for (let i = 0; i < SIZE; i++) {
    if (answer[i] === user[i]) {
      strike += 1;
    } else if (answer.includes(user[i])) {
      ball += 1;
    }
  }
  return { ball, strike };
};

const isReStart = async () => {
  const reStartInput = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  );

  if (reStartInput === "1") {
    Start();
    return;
  }
  if (reStartInput === "2") {
    return;
  }
  throw new Error("[ERROR]: Invalid input. Please enter 1 or 2");
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
