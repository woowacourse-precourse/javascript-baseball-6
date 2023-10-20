//유저 인풋 확인
export default function handleUserInput(userInput) {
  //valid 확인
  const validLength = (userInput) => userInput.length !== 3;
  const validType = (userInput) => isNaN(userInput);
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
