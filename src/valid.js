import { MissionUtils } from "@woowacourse/mission-utils";

const getUserInput = async (promptMessage) => {
  return await MissionUtils.Console.readLineAsync(promptMessage);
};

const isValidInput = (input, validation) => {
  if (isNaN(Number(input))) {
    throw new Error("[ERROR]");
  }

  if (!validation(input)) {
    throw new Error("[ERROR] 중복되지 않은 3자리 숫자를 입력해주세요.");
  }

  return true;
};

const requestInput = async (promptMessage, validation) => {
  while (true) {
    try {
      const userInput = await getUserInput(promptMessage);
      isValidInput(userInput, validation);
      return userInput;
    } catch (error) {
        MissionUtils.Console.print("[ERROR]");
    }
  }
};

export { getUserInput, isValidInput, requestInput };
