/**
 * 입력 형식 등 여러 조건들을 정의한 객체
 */
const CONDITIONS = {
  RANGE: {
    MIN: 1,
    MAX: 9,
  },
  NUMBER_LENGTH: 3,
  NUMBER_REGEX: /^[1-9]{3}$/,
  MAX_STRIKE_COUNT: 3,
  COUNT: 1,
  RESTART: {
    YES: "1",
    NO: "2",
  },
};

export default CONDITIONS;
