/*스트라이크, 볼, 낫싱으로 결과를 내는 기능*/
export default function checkResult(userNumbers, computerNumbers) {
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
