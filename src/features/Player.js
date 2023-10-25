import { Console } from "@woowacourse/mission-utils";
import { Validation } from "./Validation.js";

export const player = {
  input: async function (inputString) {
    try {
      const input = await Console.readLineAsync(inputString);
      const validation = new Validation(input);
      const valid = validation.validate();
      if (!valid) {
        throw new Error(validation.errorMessage);
      }

      return input;
    } catch (error) {
      return new Promise((_, reject) => {
        reject(error);
      });
    }
  },
};
