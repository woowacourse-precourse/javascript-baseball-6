import { Random, Console } from "@woowacourse/mission-utils";
import { Message } from "./constants/Message.js";
import { handleError } from "./HandleError.js";

class App {
  async play() {
    Console.print(Message.INIT);
    const computerNum = makeCoumputerNum();
    await startGame(computerNum);
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

const startGame = async (computerNum) => {
  const playerNum = await Console.readLineAsync(Message.INPUT);
  const userNum = handleError(playerNum);
  const playResult = countResult(userNum, computerNum);
  showResultMessage(playResult);
  checkStrike(playResult, computerNum);
};

const countResult = (playerNum, computerNum) => {
  const playResult = [0, 0, 0];

  for (let i = 0; i < 3; i++) {
    if (playerNum[i] == computerNum[i]) {
      playResult[0] += 1
    } else if (computerNum.includes(playerNum[i])) {
      playResult[1] += 1
    } else {
      playResult[2]+=1
    }
  }
  return playResult;
};

const showResultMessage = (playResult) => {
  let resultMessage = "";
  if (playResult[2] === 3) return Console.print("낫싱");
  if (playResult[1] > 0) resultMessage += `${playResult[1]}볼 `;
  if (playResult[0] > 0) resultMessage += `${playResult[0]}스트라이크`;
  Console.print(resultMessage);
};

const checkStrike = (playResult, computerNum) => {
  if (playResult[0] === 3) {
    Console.print(Message.STRIKE);
    finish();
  } else {
    startGame(computerNum);
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
