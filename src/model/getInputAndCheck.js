import { MissionUtils } from "@woowacourse/mission-utils";
import consoleView from "../util/consoleControll.js";
import {
  checkNumber,
  checkLength,
  checkDuplicate,
} from "../util/inputValidation.js";
import { INPUT_MESSAGE } from "../constants/message.js";

export default async function getNumberAndCheck() {
  const userInput = await MissionUtils.Console.readLineAsync(
    INPUT_MESSAGE.NUMBER
  );

  checkNumber(userInput);
  checkLength(userInput);
  checkDuplicate(userInput);

  return [...userInput].map(Number);
}
