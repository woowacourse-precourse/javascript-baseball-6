import { MissionUtils } from "@woowacourse/mission-utils";

const requestUserNumber = async () => {
  return await this.requestInput(
    "숫자를 입력해주세요 : ",
    (input) =>
      !isNaN(Number(input)) && input.length === 3 && new Set(input).size === 3
  );
};

const printErrorMessage = (error) => {
  if (error.message === "[ERROR]") {
    MissionUtils.Console.print(
      "문자가 포함된 입력입니다. 애플리케이션을 종료합니다."
    );
    throw error;
  }
  MissionUtils.Console.print(error.message);
};

const restartGameDecision = async () => {
  let answer = await this.requestInput(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    (input) => input === "1" || input === "2"
  );
  return answer === "1";
};

export {requestUserNumber, restartGameDecision, printErrorMessage};
