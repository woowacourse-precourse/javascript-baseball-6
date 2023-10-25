import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    await MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await gameStart();
  }
}
export default App;

const gameStart = async () => {
  const computer = await ComputerNumbers();
  await getUserInput(computer);
  console.log("computer", computer);
};

const ComputerNumbers = async () => {
  let computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

const getUserInput = async (computer) => {
  let userInput = "";
  try {
    userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 :");
    await checkInput(userInput);
    const user = userInput.split("").map(Number);
    await compareNumbers(user, computer);
  } catch (error) {
    await MissionUtils.Console.print(error);
  }
};

const checkInput = async (input) => {
  let inputArr = input.toString().split("");
  if (isNaN(input) || !Number(input)) {
    throw "숫자가 아닙니다.";
  } else if (input < 0) {
    throw "양수가 아닙니다.";
  } else if (inputArr.length !== 3) {
    throw "세자리 수가 아닙니다.";
  } else if (new Set(inputArr).size !== 3) {
    throw "중복되지 않은 세자리 수가 아닙니다.";
  } else if (inputArr.includes("0")) {
    throw "0을 포함하고 있습니다.";
  }
};

const compareNumbers = async (user, computer) => {};

const compareResult = async () => {};

const playAgain = async () => {};
