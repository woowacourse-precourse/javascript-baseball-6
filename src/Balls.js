class Balls {
  constructor() {
    this.randomNumbers = this.generateRandomNumber();
  }

  generateRandomNumber() {
    const threeDigitNumber = [];
    while (threeDigitNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!threeDigitNumber.includes(number)) {
        threeDigitNumber.push(number);
      }
    }
    Console.print(threeDigitNumber);
    return threeDigitNumber;
  }
}
