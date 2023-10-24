import { Console } from "@woowacourse/mission-utils";

export const printMessage = (message) => Console.print(message);

export const printErrorMessage = (message) => {
  throw new Error(message);
};
