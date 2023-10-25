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
  let inputSplit;
  inputSplit = userInput.split("").map(Number);

  return inputSplit;
}
