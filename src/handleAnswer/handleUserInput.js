// 서로 다른 3개의 숫자를 입력한다.
const handleUserInput = (userInput) => {
  // 길이가 3이어야 한다.
  const isValidLength = (userInput) => userInput.length !== 3;
  // 숫자여야 한다.
  const isNumeric = (userInput) => isNaN(userInput);
  // 모두 다른 숫자여야 한다.
  const isDuplicate = (userInput) => {
    return (
      userInput[0] === userInput[1] ||
      userInput[1] === userInput[2] ||
      userInput[0] === userInput[2]
    );
  };

  if (
    isValidLength(userInput) ||
    isNumeric(userInput) ||
    isDuplicate(userInput)
  ) {
    throw new Error(`[ERROR] 잘못된 입력입니다. ${userInput}`);
  }

  return userInput;
};

export default handleUserInput;
