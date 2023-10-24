export const GAME_MESSAGES = Object.freeze({
  START_GAME: '숫자 야구 게임을 시작합니다.',
  INPUT_GONGS: '숫자를 입력해주세요 : ',
  WINNING_GAME: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  /**
   *
   * @param {number} ballCount
   * @returns {string}
   */
  BALLS_COUNT: (ballCount) => `${ballCount}볼`,
  /**
   *
   * @param {number} strikesCount
   * @returns {string}
   */
  STRIKES_COUNT: (strikesCount) => `${strikesCount}스트라이크`,
  NOTHING: '낫싱',
  ALL_MATCH: '3스트라이크',
  SELECT_END_OR_RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
});
