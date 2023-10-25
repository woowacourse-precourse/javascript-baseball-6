const MissionUtils = require("@woowacourse/mission-utils");

//종합 검사
const totalCheck = (humanNumber) => {
  if (!checkLength(humanNumber)) return false;
  if (!checkNum(humanNumber)) return false;
  if (!checkOverlap(humanNumber)) return false;

  return true;
}

// 검사 1, 숫자인가
const checkNum = (humanNumber) => {
  if (isNaN(parseInt(humanNumber, 10))) {
    return false;
  }
  return true;
}

// 검사 2, 3자리 수인가
const checkLength = (humanNumber) => {
  if (humanNumber.length !== 3) {
    return false;
  }
  return true;
}

// 검사 3, 겹치는 숫자가 존재하는가
const checkOverlap = (humanNumber) => {
  if (humanNumber[0] === humanNumber[1]) return false;
  if (humanNumber[1] === humanNumber[2]) return false;
  if (humanNumber[2] === humanNumber[0]) return false;

  return true;
}

module.exports = {
  totalCheck
};