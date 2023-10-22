/** @format */

export function checkLength(input) {
  // 입력값 길이가 3인지 확인
  if (input.length === 3) {
    return true;
  }
  return false;
}

export function checkIsNumbers(input) {
  // 입력값이 모두 숫자인지 확인
  for (let i = 0; i < 3; i++) {
    if (isNaN(Number(input[i]))) {
      return false;
    }
  }
  return true;
}

export function checkNumberRange(input) {
  // 입력값이 모두 1~9 사이인지 확인
  for (let i = 0; i < 3; i++) {
    if (1 > Number(input[i]) || Number(input[i]) > 9) {
      return false;
    }
  }
  return true;
}

export function checkIsDiff(input) {
  // 입력값이 모두 다른 수인지 확인
  let uniqueNumber = new Set(input);
  if (uniqueNumber.size === input.length) {
    return true;
  }
  return false;
}
