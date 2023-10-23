import { USER_COMMAND, GAME_CONDITION } from "../constants/conditions.js";

const InputValidator = {
  hasValidNumber(input) {
    const numberRegExp = /^\d+$/;
    const isValidNumberType = numberRegExp.test(input);
    const isValidLength = input.length === GAME_CONDITION.maxLength;
    const isValidUnique = new Set(input).size === GAME_CONDITION.maxLength;
    const isValidRange = !input.includes(GAME_CONDITION.limitNumber);

    return isValidNumberType && isValidLength && isValidUnique && isValidRange;
  },

  hasValidCommand(input) {
    const commandInput = parseInt(input, 10);
    
    return (commandInput === USER_COMMAND.replay) || (commandInput === USER_COMMAND.end);
  },
}

export default InputValidator;