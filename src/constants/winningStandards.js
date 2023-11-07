export const WINNING_STANDARDS = Object.freeze({
  FIRST_PRIZE: {
    matchCnt: 6,
    bonusMatch: false,
  },
  SECOND_PRIZE: {
    matchCnt: 5,
    bonusMatch: true,
  },
  THIRD_PRIZE: {
    matchCnt: 5,
    bonusMatch: false,
  },
  FOURTH_PRIZE: {
    matchCnt: 4,
    bonusMatch: false,
  },
  FIFTH_PRIZE: {
    matchCnt: 3,
    bonusMatch: false,
  },
});

export const PRIZE = Object.freeze({
  FIFTH_PRIZE: 5000,
  FOURTH_PRIZE: 50000,
  THIRD_PRIZE: 1500000,
  SECOND_PRIZE: 30000000,
  FIRST_PRIZE: 2000000000,
});
