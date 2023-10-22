import { USER_COMMAND, GAME_CONTROL } from "./Constants.js";

export const MESSAGES = {
  START_GUIDE: "숫자 야구 게임을 시작합니다.",
  INPUT_GUIDE: "숫자를 입력해주세요 : ",
  INPUT_ERROR: "[ERROR] 숫자가 잘못된 형식입니다.",
  END_GUIDE: `${GAME_CONTROL.LIMIT_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  REPLAY_GUIDE: `게임을 새로 시작하려면 ${USER_COMMAND.REPLAY}, 종료하려면 ${USER_COMMAND.END}를 입력하세요.\n`,
}