import { MissionUtils } from "@woowacourse/mission-utils";

const getUserInput = async (query, regex) => {
  try {
    const userInput = await MissionUtils.Console.readLineAsync(query);
    const regularExpression = regex;
    if (!regularExpression.test(userInput)) {
      throw new Error("[ERROR]");
    }
    const numbers = [...userInput].map(str => Number(str));
    return numbers;
  } catch (error) {
    throw error;
  }
};

export { getUserInput };
