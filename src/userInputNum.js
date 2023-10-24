import { MissionUtils } from "@woowacourse/mission-utils";

let userInputs = [];

const userInputNum = async () => {
  try {
    const input = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );

    const numbers = input.split("").map((i) => Number(i));

    if (numbers.length !== 3 || new Set(numbers).size !== 3) {
      console.error(
        "[ERROR] 잘못된 입력입니다. 3자리의 서로 다른 숫자를 입력해주세요."
      );
      await userInputNum();
    } else {
      userInputs = numbers;

      return userInputs;
    }
  } catch (error) {
    console.error("[ERROR] 입력 과정에서 오류가 발생했습니다: ", error);
  }
};

export default userInputNum;
