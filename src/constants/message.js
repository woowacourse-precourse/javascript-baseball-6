import { MAGIC_NUM } from "../constants/magicNum.js";

export const INPUT_ERROR_MESSAGE = Object.freeze({
  NUM_ERR: "[ERROR] 숫자가 잘못된 형식입니다.",
  LENGTH_ERR: `[ERROR] ${MAGIC_NUM.MAX_BASEBALL_NUM}자리의 수를 입력해 주세요.`,
  DUPLICATE_ERR: "[ERROR] 서로 다른 수로 이루어진 숫자를 입력해 주세요.",
  INCLUDE_ZERO_ERR: `[ERROR] 숫자 ${MAGIC_NUM.NUM_NOT_INCLUDED}이 포함되지 않아야 합니다.`,
});
