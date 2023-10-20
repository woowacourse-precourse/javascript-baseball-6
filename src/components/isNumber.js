const isNumber = (number) => {
  for (let i = 0; i < number.length; i++) {
    if (!isNaN(number[i])) {
      return true;
    }
  }

  return false;
};

export default isNumber;
