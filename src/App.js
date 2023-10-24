import { Random, Console } from "@woowacourse/mission-utils";
import { Message } from "./constants/Message.js";
import { handleError } from "./HandleError.js";

class App {
  async play() {
    Console.print(Message.INIT);
    const computerNum = makeCoumputerNum();
    await inputNum(computerNum);
  }
}

const removeDuplicate = (num, nums) => {
  if (!nums.includes(num)) {
    nums.push(num);
  }
};

const makeCoumputerNum = () => {
  const nums = [];
  while (nums.length < 3) {
    const num = Random.pickNumberInRange(1, 9);
    removeDuplicate(num, nums);
  }
  return nums;
};

const inputNum = async (computerNum) => {
  const playerNum = await Console.readLineAsync(Message.INPUT);
  const userNum = handleError(playerNum);
  const playResult = countResult(userNum, computerNum);
  showResultMessage(playResult);
  checkStrike(playResult, computerNum);
};

const countResult = (playerNum, computerNum) => {
  let strike = 0;
  let ball = 0;
  let out = 0;

  for (let i = 0; i < 3; i++) {
    if (playerNum[i] == computerNum[i]) {
      strike += 1;
    } else if (computerNum.includes(playerNum[i])) {
      ball += 1;
    } else {
      out += 1;
    }
  }
  return [strike, ball, out];
};

const showResultMessage = (playResult, computerNum) => {
  let resultMessage = "";
  const strike = playResult[0];
  const ball = playResult[1];
  const out = playResult[2];
  if (out === 3) return Console.print("낫싱");
  if (ball > 0) resultMessage += `${ball}볼 `;
  if (strike > 0) resultMessage += `${strike}스트라이크`;
  Console.print(resultMessage);
};

const checkStrike = (playResult, computerNum) => {
  if (playResult[0] === 3) {
    Console.print(Message.STRIKE);
    finish();
  } else {
    inputNum(computerNum);
  }
};

const finish = async () => {
  const endAnswer = await Console.readLineAsync(Message.RESET);
  if (endAnswer === "1") app.play();
  else if (endAnswer === "2") {
    return;
  } else {
    throw new Error(Message.ERROR);
  }
};

const app = new App();
app.play();
export default App;
