import { MissionUtils } from "@woowacourse/mission-utils";

const print = (msg) => {
  MissionUtils.Console.print(msg);
};

const readLineAsync = async (msg) => {
  return await MissionUtils.Console.readLineAsync(msg);
};

export { print, readLineAsync };
