import { MissionUtils } from "@woowacourse/mission-utils";
import { requestInput } from "./valid";

const requestUserNumber = () => {
  return requestInput(
    "숫자를 입력해주세요 : ",
    (input) =>
      !isNaN(Number(input)) && input.length === 3 && new Set(input).size === 3
  );
};

const printErrorMessage = (error) => {
  MissionUtils.Console.print(error.message);
};

const restartGameDecision = async () => {
  let answer = await requestInput(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    (input) => input === "1" || input === "2"
  );
  return answer === "1";
};

export { requestUserNumber, restartGameDecision, printErrorMessage };
