import { MissionUtils } from "@woowacourse/mission-utils";
import {
  getRandomNumberArr,
  setInputValueArr,
  checkArr,
  printResult,
  getInputValue,
} from "./utils.js";

const gameProgress = async () => {
  let randomArr = getRandomNumberArr();

  while (1) {
    let inputValue = await getInputValue("숫자를 입력해주세요 : ");
    let inputArr = setInputValueArr(inputValue);

    let { strike, ball } = checkArr(randomArr, inputArr);

    printResult(ball, strike);

    if (strike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      let select = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
      if (select === "1") {
        await gameProgress();
        break;
      } else {
        break;
      }
    }
  }
};

export default gameProgress;
