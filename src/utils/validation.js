// 입력받은 숫자가 3개가 아닐 경우 게임 종료
function isLengthError(userNumbers) {
  if (userNumbers.length !== 3)
    throw new Error("입력받은 숫자가 3개가 아닙니다.");

  return false;
}

export { isLengthError };
