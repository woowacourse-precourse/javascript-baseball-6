class Counter {
  #strikeCount;

  #ballCount;

  init() {
    this.#strikeCount = 0;
    this.#ballCount = 0;
  }

  count(userNum, comNum) {
    this.init();

    const userArr = userNum.split('');
    const comArr = comNum.split('');

    userArr.forEach((val, idx) => {
      if (comArr.includes(val)) {
        if (comArr[idx] === val) this.#strikeCount += 1;
        else this.#ballCount += 1;
      }
    });
  }

  getStrikes() {
    return this.#strikeCount;
  }

  getBalls() {
    return this.#ballCount;
  }
}

export default Counter;
