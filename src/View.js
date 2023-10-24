import { MissionUtils } from "@woowacourse/mission-utils";
import { validateUserNum } from "./validation";

export const View = {
  async readUserNum() {
    const userNumber = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    const numberList = userNumber.split("");

    validateUserNum(numberList);

    return numberList.map(Number);
  },

  async chooseRestart() {
    const userInput = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    if (userInput === 1) return True;
    if (userInput === 2) return false;

    throw new Error(" [ERROR] 1과 2 중에 하나를 입력해주세요.");
  },

  printGameHint({ strike, ball }) {
    MissionUtils.Console.print(getGameHint({ strike, ball }));
  },
};

const getGameHint = ({ strike, ball }) => {
  if (strike === 0 && ball === 0) return "낫싱";

  return [ball && `${ball}볼`, strike && `${strike}스트라이크`]
    .filter(Boolean)
    .join(" ");
};
