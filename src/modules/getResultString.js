import Constant from './Constant';

const { STRIKE, BALL, NOTHING } = Constant;

const getResultString = ({ strike, ball }) => {
  if (strike === 0 && ball === 0) {
    return NOTHING;
  }

  const ballString = ball > 0 ? `${ball}${BALL} ` : '';
  const strikeString = strike > 0 ? `${strike}${STRIKE}` : '';

  return ballString + strikeString;
};

export default getResultString;
