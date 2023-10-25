import Constant from '../constant/Constant';

const { STRIKE, BALL, NOTHING } = Constant;

const findSameNumber = (base, char, index) => {
  const occurrenceIndex = base.indexOf(char);

  if (occurrenceIndex > -1) {
    return occurrenceIndex === index ? STRIKE : BALL;
  }

  return NOTHING;
};

const compareNumberString = (base, target) => {
  const resultMapping = {
    [STRIKE]: 0,
    [BALL]: 0,
  };

  const charArray = target.split('');
  charArray.forEach((elem, index) => {
    const findeResult = findSameNumber(base, elem, index);

    resultMapping[findeResult] += 1;
  });

  const { [STRIKE]: strike, [BALL]: ball } = resultMapping;

  return { strike, ball };
};

export default compareNumberString;
