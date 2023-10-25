import consoleView from "../util/consoleControll.js";
import {
  checkNumber,
  checkLength,
  checkDuplicate,
} from "../util/inputValidation.js";

export default async function getNumberAndCheck() {
  const userInput = await consoleView.readNumber();

  checkNumber(userInput);
  checkLength(userInput);
  checkDuplicate(userInput);

  return [...userInput].map(Number);
}
