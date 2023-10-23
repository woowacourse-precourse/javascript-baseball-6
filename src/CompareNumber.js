/**
 * 입력숫자와 컴퓨터숫자를 비교하는 함수
 * @param {Array} comNum 컴퓨터에게 받은 숫자 배열
 * @param {Array} userNum 유저가 입력한 숫자 배열
 * @returns {Object} 볼/스트라이크의 갯수를 담은 객체
 */
function CompareNumber(comNum, userNum) {
  const compareResult = { strike: 0, ball: 0 };
  userNum.forEach((item, idx) => {
    if (comNum.includes(item)) {
      if (comNum.indexOf(item) === idx) {
        compareResult.strike++;
      } else {
        compareResult.ball++;
      }
    }
  });
  return compareResult;
}

export default CompareNumber;
