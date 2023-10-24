import ConsoleView from "../util/ConsoleControll.js";
import {
  checkNumber,
  checkLength,
  checkDuplicate,
} from "../util/inputValidation.js";

export default async function getNumberAndCheck() {
  const userInput = await ConsoleView.readNumber();

  checkNumber(userInput);
  checkLength(userInput);
  checkDuplicate(userInput);

  return [...userInput].map(Number);
}
