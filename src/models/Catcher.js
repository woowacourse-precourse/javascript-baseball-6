class Catcher {
  static CATCH_COUNT = 3;
  static MIN_COUNT = 1;
  static MAX_COUNT = 9;

  #catcherNumbers;

  constructor(catcherNumbers) {
    this.#catcherNumbers = catcherNumbers;
    Object.freeze(this);
  }

  static getCatcherNumbers() {
    const catcherNumbers = [];
    while (catcherNumbers.length < CATCH_COUNT) {
      const catcherNumber = Random.pickNumberInRange(MIN_COUNT, MAX_COUNT);
      if (!catcherNumbers.includes(catcherNumber)) {
        catcherNumbers.push(catcherNumber);
      }
    }
    return new Catcher(catcherNumbers);
  }
}

export default Catcher;

