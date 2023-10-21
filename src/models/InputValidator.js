import { USER_COMMAND, GAME_CONTROL, NUMBER_REGEX } from "../constants/Constants.js";

const InputValidator = {

  numberValidate(input) {
    const typeValidate = NUMBER_REGEX.test(input);
    const digitsValidate = new Set(input).size === GAME_CONTROL.LIMIT_LENGTH && input.length === GAME_CONTROL.LIMIT_LENGTH;
    const rangeValidate = !input.includes(GAME_CONTROL.LIMIT_NUMBER);

    return typeValidate && digitsValidate && rangeValidate;
  },

  commandValidate(input) {
    const commandInput = parseInt(input);
    return commandInput === USER_COMMAND.REPLAY || commandInput === USER_COMMAND.END;
  },
};

export default InputValidator;