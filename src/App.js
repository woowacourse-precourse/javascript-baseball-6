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

const ComputerNumbers = async () => {};

const getUserInput = async (computer) => {};

const checkInput = async (userInput) => {};

const compareNumbers = async (user, computer) => {};

const compareResult = async () => {};

const playAgain = async () => {};
