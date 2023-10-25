export const stringToIntArrayConvertor = (inputString) => {
  return Array.from(inputString, (char) => parseInt(char, 10));
};
