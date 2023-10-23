import { USER_COMMAND, GAME_CONTROL } from "../constants/Constants.js";

const InputValidator = {
  hasValidNumber(input) {
    const numberRegExp = /^\d+$/;
    const isValidNumberType = numberRegExp.test(input);
    const isValidLength = input.length === GAME_CONTROL.LIMIT_LENGTH;
    const isValidUnique = new Set(input).size === GAME_CONTROL.LIMIT_LENGTH;
    const isValidRange = !input.includes(GAME_CONTROL.LIMIT_NUMBER);

    return isValidNumberType && isValidLength && isValidUnique && isValidRange;
  },

  hasValidCommand(input) {
    const commandInput = parseInt(input, 10);
    
    return (commandInput === USER_COMMAND.REPLAY) || (commandInput === USER_COMMAND.END);
  },
}

export default InputValidator;