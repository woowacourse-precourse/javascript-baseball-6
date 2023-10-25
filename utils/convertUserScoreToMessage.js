import { IN_GAME_RESULT_ITEM } from "./Constants";

export default function convertUserScoreToMessage(userScore) {
  let message = "";

  if (userScore.ball === 0 && userScore.strike === 0) {
    message = IN_GAME_RESULT_ITEM.none;
  }

  if (userScore.ball > 0) {
    message += `${userScore.ball}${IN_GAME_RESULT_ITEM.ball}`;
  }

  if (userScore.strike > 0) {
    if (userScore.ball > 0) {
      message += " ";
    }
    message += `${userScore.strike}${IN_GAME_RESULT_ITEM.strike}`;
  }

  return message;
}
