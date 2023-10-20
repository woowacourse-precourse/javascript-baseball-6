//유저 인풋 확인
export default function handleUserInput(userInput) {
  //valid 확인
  const validLength = (userInput) => userInput.length !== 3;
  const validType = (userInput) => isNaN(userInput);
  if (validLength(userInput) || validType(userInput)) {
    throw new Error("[ERROR] 잘못된 입력입니다.");
  }

  return userInput;
}
