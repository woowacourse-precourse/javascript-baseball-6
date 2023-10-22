import { MissionUtils } from "@woowacourse/mission-utils";

export const print = (message) => {
  MissionUtils.Console.print(message);
};

export const readLineAsync = async (message) => {
  return await MissionUtils.Console.readLineAsync(message);
};
