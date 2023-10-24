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

const initalStartGame = async () => {
  const computerNumbers = await getComputerNumber();
};

export default initalStartGame;
