const answerNum = [];
const userInputNum = [];
let ballCnt;
let strikeCnt;

const setAnswerNum = function setAnswerNum(num) {
  let check = false;
  answerNum.forEach((n) => {
    if (n === num) {
      check = true;
    }
  });
  if (check === true) {
    return;
  }
  answerNum.push(num);
};

const setUserInputNum = function setUserInputNum(num) {
  userInputNum.length = 0;
  let tmp;

  tmp = parseInt(num, 10);
  if (Number.isNaN(tmp)) {
    throw new Error('[ERROR] 잘못된 입력입니다.');
  }
  if (tmp < 111 || tmp > 999) {
    throw Error('[ERROR] 잘못된 입력입니다.');
  }
  if (tmp % 10 === 0 || parseInt((tmp % 100) / 10, 10) === 0 || parseInt(tmp / 100, 10) === 0) {
    throw Error('[ERROR] 잘못된 입력입니다.');
  }

  const tmpUserInputNum = [];
  while (tmpUserInputNum.length < 3) {
    for (let chk = 0; chk < tmpUserInputNum.length - 1; chk += 1) {
      if (tmpUserInputNum[chk] === (tmp % 10)) {
        throw Error('[ERROR] 잘못된 입력입니다.');
      }
    }
    tmpUserInputNum.push(tmp % 10);
    tmp = parseInt(tmp / 10, 10);
  }
  for (let idx = 2; idx >= 0; idx -= 1) {
    userInputNum.push(tmpUserInputNum[idx]);
  }

  ballCnt = 0;
  strikeCnt = 0;
};

const clearData = function clearData() {
  answerNum.length = 0;
  userInputNum.length = 0;
};

const setBallStrike = async function setBallStrike(ball) {
  if (ball === 0) {
    ballCnt += 1;
    return;
  }
  if (ball === 1) {
    strikeCnt += 1;
  }
};

export {
  clearData, setBallStrike, setAnswerNum, setUserInputNum,
  userInputNum, answerNum, strikeCnt, ballCnt,
};
