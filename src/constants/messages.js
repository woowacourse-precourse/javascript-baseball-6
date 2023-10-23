import { USER_COMMAND, GAME_CONDITION } from "./conditions.js";

const MESSAGES = Object.freeze({
  startGuide: '숫자 야구 게임을 시작합니다.',
  inputGuide: '숫자를 입력해주세요 : ',
  inputError: '[ERROR] 숫자가 잘못된 형식입니다.',
  endGuide: `${GAME_CONDITION.maxLength}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  replayGuide: `게임을 새로 시작하려면 ${USER_COMMAND.replay}, 종료하려면 ${USER_COMMAND.end}를 입력하세요.\n`,
});

const PROGRESS = Object.freeze({
  nothing: '낫싱',
  ball: '볼',
  strike: '스트라이크',
  and: ' ',
});

export { MESSAGES, PROGRESS };