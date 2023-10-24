export const isValidNumbers = (numbers) => {
  return numbers.every((num) => num >= 1 && num <= 9);
};
