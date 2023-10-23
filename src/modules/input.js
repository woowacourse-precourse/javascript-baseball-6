import { Console } from "@woowacourse/mission-utils";

const getUserInput = async (query, regex) => {
  try {
    const userInput = await Console.readLineAsync(query);
    const regularExpression = regex;
    if (!regularExpression.test(userInput)) {
      throw new Error("[ERROR] Invalid input");
    }
    return userInput;
  } catch (error) {
    Console.print(error.message);
  }
};

export { getUserInput };
