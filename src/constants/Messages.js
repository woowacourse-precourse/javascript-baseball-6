export const OUTPUT_MESSAGES = Object.freeze({
  game_start: '숫자 야구 게임을 시작합니다.',
  game_success: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  game_number: '숫자를 입력해주세요 : ',
  game_command: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
});

export const ERROR_MESSAGE = Object.freeze({
  prefix: '[ERROR]',
  number: '숫자만 입력 가능합니다.',
  zero: '0 은 포함될 수 없습니다. 1~9 사이의 숫자만 입력해 주세요',
  duplication: '서로 다른 숫자를 입력해야 합니다.',
  three_digit: '3자리 숫자만 가능합니다.',
  game_number_generator: '생선된 결과 값은 1~9 사이의 서로 다른 3자리 숫자가 아닙니다.',
  only_one_or_two: '1~2 사이의 숫자만 입력할 수 있습니다.',
});
