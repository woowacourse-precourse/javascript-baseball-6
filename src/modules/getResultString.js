import Constant from '../constant/Constant';

const { STRIKE, BALL, NOTHING } = Constant;
const ZERO = 0;

const getResultString = ({ strike, ball }) => {
  if (strike + ball === ZERO) {
    return NOTHING;
  }

  const ballString = ball > ZERO ? `${ball}${BALL} ` : '';
  const strikeString = strike > ZERO ? `${strike}${STRIKE}` : '';

  return ballString + strikeString;
};

export default getResultString;
