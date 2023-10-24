import Constant from './Constant';

const { STRIKE, BALL, NOTHING } = Constant;

const findSameNumber = (base, char, index) => {
  const occurrenceIndex = base.indexOf(char);

  if (occurrenceIndex > -1) {
    return occurrenceIndex === index ? STRIKE : BALL;
  }

  return NOTHING;
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

  return { strike, ball };
};

export default compareNumberString;
