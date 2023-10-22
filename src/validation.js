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
