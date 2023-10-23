import { RIGHT_DIGIT_NUMBER } from "./constant.js";

function validateUserInput(userInput) {
  const formattedValue = Number(userInput)
  
  if (wrongType(formattedValue)){
    throw new Error('[ERROR] 숫자 타입이 아닙니다.');
  }
  if (hasZero(userInput)){
    throw new Error('[ERROR] 0은 사용할 수 없습니다.')
  }
  if (wrongDigitNumber(formattedValue)){
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.')
  }
  if (hasSameNumber(formattedValue)) {
    throw new Error('[ERROR] 자릿수 중 같은 값이 존재합니다.')
  }
};

function wrongType(userInput) {
  return isNaN(userInput)
}

function hasZero(userInput) {
  return userInput.includes("0")
}

function wrongDigitNumber(userInput) {
  if (userInput.toString().length !== RIGHT_DIGIT_NUMBER || userInput % 1 !== 0 || userInput < 0){
    return true
  }
  return false
}

function hasSameNumber(userInput) {
  userInput = userInput.toString();
  if (userInput[0] === userInput[1] || userInput[1] === userInput[2] || userInput[0] === userInput[2]){
    return true
  }
  return false
}

export default validateUserInput;