import InputView from "./view/InputView.mjs";
import InputValidator from "./utils/InputValidator.mjs";

InputView.readUserNumber((input) => {
  InputValidator.validateUserNumber(input);
  console.log(input);
});
