class UserNumber {
  #userNumbers;

  constructor(userNumbers) {
    this.#userNumbers = this.convertStringToArray(userNumbers);
  }

  getUserNumbers() {
    return this.#userNumbers;
  }

  convertStringToArray(userNumbers) {
    const userNumberArray = userNumbers.split('').map((num) => parseInt(num));
    return userNumberArray;
  }
}

export default UserNumber;
