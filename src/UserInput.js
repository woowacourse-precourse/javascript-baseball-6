import { MissionUtils } from "@woowacourse/mission-utils";

const getUserInput = async () => {
  const value = await MissionUtils.Console.readLineAsync(
    "정답을 입력하세요. (3자리 수의 숫자만 입력하세요): "
  );

  return value;
};

export default getUserInput;
