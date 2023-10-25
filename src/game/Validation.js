export const isValidNumber = (input) => {
  // 세자릿수가 아닐경우 false 반환
  if (input.length !== 3) {
    return false;
  }
  // 서로다른 수로 이루어지지 않았을 경우 false 반환
  if (input[0] === input[1]) {
    return false;
  }
  if (input[1] === input[2]) {
    return false;
  }
  if (input[2] === input[3]) {
    return false;
  }
  // 숫자가 아닐경우 false 반환
  if (isNaN(input)) {
    return false;
  }
  return true;
};
