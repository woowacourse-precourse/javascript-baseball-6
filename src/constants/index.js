export const NUMBER_SIZE = 3;

export const InputString = Object.freeze({
  INPUT_USER_NUMBER: '숫자를 입력해주세요 : ',
  INPUT_RESTART_NUMBER: `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`,
});

export const OutputString = Object.freeze({
  OUTPUT_GAME_START: '숫자 야구 게임을 시작합니다.',
  OUTPUT_GAME_END: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
});

export const ErrorString = Object.freeze({
  ERROR_USER_NUMBER_LENGTH: `[ERROR] 입력하신 숫자가 ${NUMBER_SIZE}글자가 아닙니다.`,
  ERROR_USER_NOT_NUMBER: '[ERROR] 숫자가 아닌 값을 입력하셨습니다.',
  ERROR_USER_DUPLICATED_NUMBER: '[ERROR] 숫자를 중복해서 입력하셨습니다.',
  ERROR_RESTART_INVALID_INPUT: '[ERROR] 1, 2가 아닌 다른 값을 입력하셨습니다.',
  ERROR_RESTART_INPUT_LENGTH:
    '[ERROR] 입력값의 개수가 유효하지 않습니다. 1과 2중 하나를 입력해주세요.',
});
