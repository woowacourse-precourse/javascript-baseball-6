export const compare = (COMPUTER, userInput) => {
  let strike = 0;
  let ball = 0;

  if (COMPUTER[0] === userInput[0]) {
    strike++;
  } else if (userInput.includes(COMPUTER[0])) {
    ball++;
  }
  if (COMPUTER[1] === userInput[1]) {
    strike++;
  } else if (userInput.includes(COMPUTER[1])) {
    ball++;
  }
  if (COMPUTER[2] === userInput[2]) {
    strike++;
  } else if (userInput.includes(COMPUTER[2])) {
    ball++;
  }
  return [strike, ball];
};
