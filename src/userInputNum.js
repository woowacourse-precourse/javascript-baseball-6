import { MissionUtils } from "@woowacourse/mission-utils";

let userInputs = [];

const compareUserNum = async () => {
  try {
    const input = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );

    userInputs = input.split("").map((i) => Number(i));

    console.log("현재까지의 입력 값들: ", userInputs);
  } catch (error) {
    console.error("[ERROR] 입력 과정에서 오류가 발생했습니다: ", error);
  }
};

export default compareUserNum;
