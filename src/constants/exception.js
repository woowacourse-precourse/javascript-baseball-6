import { GAME_INFO } from "./baseballGameInfo.js";

export const EXCEPTION_CASE = Object.freeze({
  NUMBER_FORMAT_EXCEPTION: "입력값은 숫자로만 구성되어야합니다.",
  LENGTH_EXCEPTION: `${GAME_INFO.GUESS_NUMBER_LENGTH}개의 숫자를 넣어주세요.`,
  RANGE_EXCEPTION: `${GAME_INFO.MIN_NUMBER}~${GAME_INFO.MAX_NUMBER} 사이의 값을 넣어주세요.`,
  DUPLICATION_EXCEPTION: "중복된 값이 있으면 안됩니다.",
});
