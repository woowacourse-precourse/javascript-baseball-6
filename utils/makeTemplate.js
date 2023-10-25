export default function makeTemplate({ STRIKE_COUNT, BALL_COUNT }) {
  if (STRIKE_COUNT !== 0 && BALL_COUNT !== 0) {
    return `${BALL_COUNT}볼 ${STRIKE_COUNT}스트라이크`;
  }
  if (STRIKE_COUNT !== 0 && BALL_COUNT === 0) {
    return `${STRIKE_COUNT}스트라이크`;
  }
  if (STRIKE_COUNT === 0 && BALL_COUNT !== 0) {
    return `${BALL_COUNT}볼`;
  }
  if (STRIKE_COUNT === 0 && BALL_COUNT === 0) {
    return `낫싱`;
  }
}
