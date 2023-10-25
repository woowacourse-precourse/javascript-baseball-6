class UserInputValidator {
  constructor(userInput) {
    this.userInputNumber = Number(userInput);
    this.userInputArr = userInput.split('');
  }

  validateUserInput() {
    if (
        isNaN(this.userInputNumber) 
        || this.userInputArr.some((digit) => Number(digit) < 1 || Number(digit) > 9) 
        || this.userInputArr.length !== 3
      ) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
  
      if (new Set(this.userInputArr).size !== this.userInputArr.length) {
        throw new Error('[ERROR] 숫자가 중복됩니다.');
      }
  
      return true;
  }
}

export default UserInputValidator;