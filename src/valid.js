import { MissionUtils } from "@woowacourse/mission-utils";

const getUserInput = async (promptMessage) => {
  return await MissionUtils.Console.readLineAsync(promptMessage);
};

const validateInput = (input, validation) => {
  if (isNaN(Number(input))) {
    throw new Error("입력한 값이 숫자가 아닙니다.");
  }

  if (!validation(input)) {
    throw new Error("중복되지 않은 3자리 숫자를 입력해주세요.");
  }
};

const requestValidInput = async (promptMessage, validation) => {
  while (true) {
    try {
      const userInput = await getUserInput(promptMessage);
      validateInput(userInput, validation);
      return userInput;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
};

export { getUserInput, validateInput, requestValidInput };
