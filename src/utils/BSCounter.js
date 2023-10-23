export const Bcounter = (input, num, strike) => {
  let ball = 0;

  for (let i = 0; i < input.length; ++i) {
    if (num.includes(input[i])) {
      ball++;
    }
  }
  return ball - strike;
};

export const Scounter = (input, num) => {
  let strike = 0;
  for (let i = 0; i < input.length; ++i) {
    if (input[i] === num[i]) {
      strike++;
    }
  }

  return strike;
};
