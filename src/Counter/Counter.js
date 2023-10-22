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

    return this.getHintValue();
  }

  getStrikes() {
    return this.#strikeCount;
  }

  getHintValue() {
    // 이거 분리하자 Viewer로
    return `${this.#strikeCount} 스트라이크 ${this.#ballCount} 볼`;
  }
}

export default Counter;
