import { USER_COMMAND, GAME_CONTROL } from "../constants/Constants.js";

const InputValidator = {

  numberValidate(input) {
    const numberRegExp = /^\d+$/;
    const typeValidate = numberRegExp.test(input);
    const digitsValidate = new Set(input).size === GAME_CONTROL.LIMIT_LENGTH && input.length === GAME_CONTROL.LIMIT_LENGTH;
    const rangeValidate = !input.includes(GAME_CONTROL.LIMIT_NUMBER);

    return typeValidate && digitsValidate && rangeValidate;
  },

  commandValidate(input) {
    const commandInput = parseInt(input);
    
    return commandInput === USER_COMMAND.REPLAY || commandInput === USER_COMMAND.END;
  }
}

export default InputValidator;