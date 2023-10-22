function matchNumberPositions(TARGET_NUMBER, USER_INPUT, BallSize) {
  let BALLS = 0;
  let STRIKES = 0;
  for (let i = 0; i < BallSize; i++) {
    if (TARGET_NUMBER[i] == USER_INPUT[i]) {
      STRIKES += 1;
    } else if (TARGET_NUMBER.includes(USER_INPUT[i])) {
      BALLS += 1;
    }
  }
  return { BALLS, STRIKES };
}

export default matchNumberPositions;
