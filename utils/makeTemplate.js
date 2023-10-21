export function makeTemplate({ STRIKE_COUNT, BALL_COUNT }) {
  if (STRIKE_COUNT && BALL_COUNT) {
    return `${BALL_COUNT}볼 ${STRIKE_COUNT}스트라이크`;
  }
  if (STRIKE_COUNT && !BALL_COUNT) {
    return `${STRIKE_COUNT}스트라이크`;
  }
  if (!STRIKE_COUNT && BALL_COUNT) {
    return `${BALL_COUNT}볼`;
  }
  if (!STRIKE_COUNT && !BALL_COUNT) {
    return `낫싱`;
  }
}
