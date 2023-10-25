export function isValid(userInput) {
  const numbers = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const userInputList = String(userInput).split("");
  const userInputLength = userInputList.length;

  // 사용자 입력이 3자리수인지 확인
  if (userInputLength !== 3) return false;

  // 사용자 입력이 숫자로만 이뤄졌는지 확인
  for (let num of userInputList) {
    // String 을 Number 로 형변환
    num = +num;
    if (!numbers.has(num)) return false;
  }

  // 사용자 입력이 3자리의 숫자로만 이뤄졌다면 isVaild = true
  return true;
}
