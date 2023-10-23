import { Console } from "@woowacourse/mission-utils";

const getUserInput = async (query, regex) => {
  try {
    const userInput = await Console.readLineAsync(query);
    const regularExpression = regex;
    if (!regularExpression.test(userInput)) {
      throw new Error("[ERROR] Invalid input");
    }
    const numbers = [...userInput].map(str => Number(str));
    return numbers;
  } catch (error) {
    Console.print(error.message);
  }
};

export { getUserInput };
