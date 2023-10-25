import { Console } from "@woowacourse/mission-utils";

export const player = {
  input: async function (inputString) {
    const input = await Console.readLineAsync(inputString);
    return input;
  },
};
