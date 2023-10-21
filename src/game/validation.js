const isValidNumber = (string) => {
  if (!string) {
    return false;
  }
  //3자리를 입력하지 않았을 때
  if (string.length !== 3) {
    return false;
  }
  //1-9사이의 숫자를 입력하지 않았을 때
  if (!/^[1-9]+$/.test(string)) {
    return false;
  }
  //겹치는 숫자를 입력했을 때
  if (string[0] == string[1]) {
    return false;
  }
  if (string[1] == string[2]) {
    return false;
  }
  if (string[2] == string[0]) {
    return false;
  }
  return true;
};

export default isValidNumber;
