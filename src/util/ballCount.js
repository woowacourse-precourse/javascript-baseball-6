export default function ballCount(userNumbers, computerNumbers) {
  const data = {
    ball: 0,
    strike: 0,
  };
  for (let i = 0; i < computerNumbers.length; i++) {
    if (userNumbers[i] === computerNumbers[i]) {
      data.strike++;
    } else if (computerNumbers.includes(userNumbers[i])) {
      data.ball++;
    }
  }
  return data;
}
