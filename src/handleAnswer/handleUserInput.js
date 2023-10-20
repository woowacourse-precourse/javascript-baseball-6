// 서로 다른 3개의 숫자를 입력한다.
export default function handleUserInput(userInput) {
  // 길이가 3이어야 한다.
  const validLength = (userInput) => userInput.length !== 3;
  // 숫자여야 한다.
  const validType = (userInput) => isNaN(userInput);
  // 모두 다른 숫자여야 한다.
  const validOverlap = (userInput) => {
    return (
      userInput[0] === userInput[1] ||
      userInput[1] === userInput[2] ||
      userInput[0] === userInput[2]
    );
  };
  if (
    validLength(userInput) ||
    validType(userInput) ||
    validOverlap(userInput)
  ) {
    throw new Error(`[ERROR] 잘못된 입력입니다. ${userInput}`);
  }
  return userInput;
}
