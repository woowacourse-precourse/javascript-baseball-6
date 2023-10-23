const MissionUtils = require("@woowacourse/mission-utils");

const randomComputer = () => {
  const computer = new Set();
  while (computer.size < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    computer.add(number)
  }
  const computerNum = [...computer];

  return computerNum;
}

//스코어 체크
const checkScore = (humanNumber, computerNumber) => { //둘다 문자열이여서 한번에 받을 수 있어야 할꺼 같은데
  const numberSplit = humanNumber.toString().split('');
  const computerSplit = computerNumber.join('').split('');
  const checkedStrike = checkStrike(numberSplit, computerSplit);
  const checkedBall = checkBall(numberSplit, computerSplit);
  const textMessage = [];
  if (checkedBall !== 0) {
    textMessage.push(`${checkedBall}볼`)
  }
  if (checkedStrike !== 0) {
    textMessage.push(`${checkedStrike}스트라이크`)
  }

  if (textMessage.length === 0) {
    return '낫싱';
  }

  return textMessage.join(' ');
}

//스트라이크 체크
const checkStrike = (humanNumber, computerNumber) => {
  const countStrike = humanNumber.map((value, index) => {
    return value === computerNumber[index] ? 1 : 0
  }).reduce((a, b) => a + b);

  return countStrike;
}

// 볼 체크
const checkBall = (humanNumber, computerNumber) => {
  const countBall = humanNumber.map((value, index) => {
    return value !== computerNumber[index] && computerNumber.includes(value) ? 1 : 0
  }).reduce((a, b) => a + b);

  return countBall;
}

module.exports = {
  randomComputer,
  checkScore
};