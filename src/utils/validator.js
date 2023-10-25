import { GAME_MESSAGE, INPUT_REG_EX } from "../constants";

export function validator(input) {
  if (!INPUT_REG_EX.test(input)) {
    throw new Error(GAME_MESSAGE.invalidInput);
  }

  const inputSet = new Set(input);
  if (inputSet.size !== 3) {
    throw new Error(GAME_MESSAGE.dupulicateInput);
  }
}
