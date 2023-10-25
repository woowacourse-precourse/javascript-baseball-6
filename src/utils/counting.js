export const countMatchNumbers = (numberArray1, numberArray2) => {
  return numberArray1.filter((element) => numberArray2.includes(element))
    .length;
};

export const countMatchNumbersWithPos = (numberArray1, numberArray2) => {
  return numberArray1.reduce((prev, curr, currIdx) => {
    if (curr === numberArray2[currIdx]) return prev + 1;
    return prev;
  }, 0);
};
