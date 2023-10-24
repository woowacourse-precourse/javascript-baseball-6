import { MAGIC_NUM } from "../constants/magicNum.js";

export const INPUT_ERROR_MESSAGE = Object.freeze({
  NUM_ERR: "[ERROR] 숫자가 잘못된 형식입니다.",
  LENGTH_ERR: `[ERROR] ${MAGIC_NUM.MAX_BASEBALL_NUM}자리의 수를 입력해 주세요.`,
  RESTART_LENGTH_ERR: `[ERROR] ${MAGIC_NUM.MAX_RESTART_NUM}자리의 수를 입력해 주세요.`,
  DUPLICATE_ERR: "[ERROR] 서로 다른 수로 이루어진 숫자를 입력해 주세요.",
  INCLUDE_NUM_ERR: `[ERROR] 숫자 ${MAGIC_NUM.NUM_NOT_INCLUDED}이 포함되지 않아야 합니다.`,
  INCLUDE_NUMS_ERR: `[ERROR] 숫자 ${MAGIC_NUM.NEW_GAME_NUM} 또는 ${MAGIC_NUM.END_GAME_NUM}을(를) 입력하셔야 합니다.`,
});

export const INFO_MESSAGE = Object.freeze({
  INPUT_NUM_MESSAGE: "숫자를 입력해 주세요 : ",
  START_MESSAGE: "숫자 야구 게임을 시작합니다.",
  WIN_MESSAGE: `${MAGIC_NUM.MAX_BASEBALL_NUM}개의 숫자를 모두 맞히셨습니다! `,
  END_MESSAGE: "게임 종료",
  RESTART_MESSAGE: `게임을 새로 시작하려면 ${MAGIC_NUM.NEW_GAME_NUM}, 종료하려면 ${MAGIC_NUM.END_GAME_NUM}를 입력하세요.`,
  NOTHING_MESSAGE: "낫싱",
});
