export const isValid = (numbers) => {
    return numbers.every((num) => num <= 9 && num >= 1);
  };