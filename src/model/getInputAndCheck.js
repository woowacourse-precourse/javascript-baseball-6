import consoleControl from "../util/consoleControl.js";
import {
  checkNumber,
  checkLength,
  checkDuplicate,
} from "../util/inputValidation.js";

export default async function getInputAndCheck() {
  const userInput = await consoleControl.readNumber();

  checkNumber(userInput);
  checkLength(userInput);
  checkDuplicate(userInput);

  return [...userInput].map(Number);
}
