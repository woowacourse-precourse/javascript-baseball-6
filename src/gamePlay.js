import { MissionUtils } from "@woowacourse/mission-utils";
import {
  getRandomNumberArr,
  getInputNumberArr,
  checkArr,
  printResult,
} from "./utils.js";
const gamePlay = async () => {
  let randomArr = getRandomNumberArr();
  while (1) {
    let inputNum = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    let inputArr = getInputNumberArr(inputNum);
    let result = checkArr(randomArr, inputArr);
    printResult(result.ball, result.strike);
    if (result.strike === 3) {
      await MissionUtils.Console.print(
        "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      );
      let select = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
      if (select === "1") {
        randomArr = getRandomNumberArr();
      } else {
        break;
      }
    }
  }
};

export default gamePlay;
