import { MissionUtils } from "@woowacourse/mission-utils";
import compareNumbers from "./CompareNumbers";

const getComputerNumber = async () => {
  let computerNumbers = "";
  while (computerNumbers.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumbers.includes(number)) {
      computerNumbers += number;
    }
  }
  return computerNumbers;
};

const getPlayerNumbers = async () => {
  try {
    const answer = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요: "
    );
    if (answer.length !== 3) {
      throw new Error("[ERROR]");
    } else {
      return answer;
    }
  } catch (error) {
    throw error;
  }
};

const startGame = async (computerNumbers) => {
  const playerNumbers = await getPlayerNumbers();
  if (computerNumbers === playerNumbers) {
    MissionUtils.Console.print("3스트라이크");
    return await askGameAgain();
  }

  const result = compareNumbers(computerNumbers, playerNumbers);
  MissionUtils.Console.print(result);
  await startGame(computerNumbers);
};

const initalStartGame = async () => {
  const computerNumbers = await getComputerNumber();
  await startGame(computerNumbers);
};

export default initalStartGame;
