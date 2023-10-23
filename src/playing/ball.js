const MissionUtils = require("@woowacourse/mission-utils");

// 컴퓨터 랜덤 생성
const randomComputer = () => {
  const computer = new Set();

  while (computer.size < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    computer.add(number)
  }

  return [...computer];
}

//스코어 체크
const checkScore = (humanNumber, computerNumber) => {
  const numberSplit = humanNumber.split(''); // 둘다 문자 배열로 변환
  const computerSplit = computerNumber.join('').split('');
  const checkedStrike = checkStrike(numberSplit, computerSplit);
  const checkedBall = checkBall(numberSplit, computerSplit);

  const textMessage = [];

  //볼이 먼저기 때문에 볼 먼저
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
  const countStrike = humanNumber.reduce((accumulator, value, index) => {
    return value === computerNumber[index] ? accumulator + 1 : accumulator;
  }, 0);

  return countStrike;
}

// 볼 체크
const checkBall = (humanNumber, computerNumber) => {
  const countBall = humanNumber.reduce((accumulator, value, index) => {
    return (value !== computerNumber[index]) && (computerNumber.includes(value)) ? accumulator + 1 : accumulator;
  }, 0);

  return countBall;
}

module.exports = { randomComputer, checkScore };