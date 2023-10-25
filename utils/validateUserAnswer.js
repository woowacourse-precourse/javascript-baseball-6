import { IN_GAME_SETTING, IN_GAME_ERROR } from "./Constants";

export default function validateUserAnswer(userAnswer) {
  if (!/^\d{3}$/.test(userAnswer)) {
    throw new Error(IN_GAME_ERROR.invalidFormat);
  }

  if (userAnswer.includes("0")) {
    throw new Error(IN_GAME_ERROR.invalidRange);
  }

  if (new Set(userAnswer).size !== IN_GAME_SETTING.answerLength) {
    throw new Error(IN_GAME_ERROR.duplicatedNumber);
  }

  return true;
}
