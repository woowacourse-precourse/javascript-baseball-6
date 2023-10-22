import { MissionUtils } from "@woowacourse/mission-utils";

export async function readInput(string) {
  return await MissionUtils.Console.readLineAsync(string);
}

export function printOutput(string) {
  return MissionUtils.Console.print(string);
}

export function pickNumberInRange(min, max) {
  return MissionUtils.Random.pickNumberInRange(min, max);
}
