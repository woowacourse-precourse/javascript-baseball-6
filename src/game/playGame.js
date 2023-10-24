import { MissionUtils } from "@woowacourse/mission-utils";

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
    return answer;
  } catch (error) {
    console.error(error);
  }
};

const startGame = async (computerNumbers) => {
  const playerNumbers = await getPlayerNumbers();
};

const initalStartGame = async () => {
  const computerNumbers = await getComputerNumber();
  await startGame(computerNumbers);
};

export default initalStartGame;
