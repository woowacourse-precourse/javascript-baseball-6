class UserInputValidator {
  constructor(userInput) {
    this.userInputNumber = Number(userInput);
    this.userInputArr = userInput.split('');
  }

  validateUserInput() {
    
    if (
        Number.isNaN(this.userInputNumber) 
        || this.userInputArr.some((number) => Number(number) < 1 || Number(number) > 9) 
        || this.userInputArr.length !== 3
        || new Set(this.userInputArr).size !== this.userInputArr.length
      ) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
  
      return true;
  }
}

export default UserInputValidator;