export const isNumber = (input) => {
  return !isNaN(Number(input));
};

export const isValidCost = (cost) => {
  return cost % 1000 === 0;
};
