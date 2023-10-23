class Catcher {
  #catcherNumbers;

  constructor(catcherNumbers) {
    this.#catcherNumbers = catcherNumbers;
    Object.freeze(this);
  }

  static getCatcherNumbers() {
    const catcherNumbers = [];
    while (catcherNumbers.length < 3) {
      const catcherNumber = Random.pickNumberInRange(1, 9);
      if (!catcherNumbers.includes(catcherNumber)) {
        catcherNumbers.push(catcherNumber);
      }
    }
    return new Catcher(catcherNumbers);
  }
}

export default Catcher;

