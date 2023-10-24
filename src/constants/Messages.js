export const OUTPUT_MESSAGES = Object.freeze({
  game_start: '숫자 야구 게임을 시작합니다.',
  game_success: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  game_number: '숫자를 입력해주세요 : ',
  game_command: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
});

export const ERROR_MESSAGE = Object.freeze({
  prefix: '[ERROR]',
  number: '숫자만 입력 가능합니다.',
  exclude(number) {
    return `${number} 은 포함될 수 없습니다.`;
  },
  duplication: '서로 다른 숫자를 입력해야 합니다.',
  length(number) {
    return `${number}자리 숫자만 가능합니다.`;
  },
  game_number_generator(start, end, digit) {
    return `생성된 결과 값은 ${start} ~ ${end} 사이의 서로 다른 ${digit}자리 숫자가 아닙니다.`;
  },
  game_command(restart, end) {
    return `숫자 ${restart} or ${end} 만 입력할 수 있습니다. `;
  },
});

export const HINT = Object.freeze({
  nothing: '낫싱',
  message(ball, strike) {
    return `${ball}볼 ${strike}스트라이크`;
  },
  clear: /0볼|0스트라이크/g,
});
