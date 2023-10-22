const STRIKE = '스트라이크';
const BALL = '볼';
const NOTHING = '낫싱';

const findSameNumber = (base, char, index) => {
  const occurrenceIndex = base.indexOf(char);

  if (occurrenceIndex > -1) {
    return occurrenceIndex === index ? STRIKE : BALL;
  }

  return NOTHING;
};

const getResultString = (strike, ball) => {
  if (strike === 0 && ball === 0) {
    return NOTHING;
  }

  const ballString = ball > 0 ? `${ball}${BALL} ` : '';
  const strikeString = strike > 0 ? `${strike}${STRIKE} ` : '';

  return ballString + strikeString;
};

const compareNumberString = (base, target) => {
  let strike = 0;
  let ball = 0;
  const charArray = target.split('');
  const resultMapping = {
    [NOTHING]: () => {},
    [STRIKE]: () => {
      strike += 1;
    },
    [BALL]: () => {
      ball += 1;
    },
  };

  charArray.forEach((elem, index) => {
    const findeResult = findSameNumber(base, elem, index);

    resultMapping[findeResult]();
  });

  const resultString = getResultString(strike, ball);
  return resultString;
};

export default compareNumberString;
