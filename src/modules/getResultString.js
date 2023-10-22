// result
const STRIKE = '스트라이크';
const BALL = '볼';
const NOTHING = '낫싱';

const getResultString = (strike, ball) => {
  if (strike === 0 && ball === 0) {
    return NOTHING;
  }

  const ballString = ball > 0 ? `${ball}${BALL} ` : '';
  const strikeString = strike > 0 ? `${strike}${STRIKE} ` : '';

  return ballString + strikeString;
};

export default getResultString;
