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

const askGameAgain = async () => {
  try {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const answer = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (answer === "1") {
      return await initialStartGame();
    }
    if (answer === "2") {
      MissionUtils.Console.print("게임종료");
    }
  } catch {
    throw new Error();
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

const initialStartGame = async () => {
  const computerNumbers = await getComputerNumber();
  await startGame(computerNumbers);
};

export default initialStartGame;
