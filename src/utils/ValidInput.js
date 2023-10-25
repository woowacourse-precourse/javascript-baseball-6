async function validCheckUserNum(userNum) {
  if (!isCheckLength(userNum)) {
    throw new Error("[ERROR] 숫자의 길이는 3이어야합니다.");
  } else if (!isCheckDigit(userNum)) {
    throw new Error("[ERROR] 1~9사이의 숫자만 입력해야합니다.");
  } else if (!isCheckDuplicate(userNum)) {
    throw new Error("[ERROR] 중복되지 않은 숫자여야합니다.");
  }
}

function isCheckLength(userNum) {
  return userNum.length === 3;
}

function isCheckDigit(userNum) {
  return /^[1-9]+$/.test(userNum);
}

function isCheckDuplicate(userNum) {
  return new Set(userNum).size === 3;
}

export { validCheckUserNum };
