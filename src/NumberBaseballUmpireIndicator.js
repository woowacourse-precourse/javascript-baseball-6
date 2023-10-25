class NumberBaseballUmpireIndicator {
  #strike = 0;
  #ball = 0;
  #count;
  constructor(count) {
    this.#count = count;
  }

  indicateAbout(array1, array2) {
    this.#click(array1, array2);
    return { strike: this.#strike, ball: this.#ball };
  }

  isOut() {
    return this.#strike === this.#count;
  }

  #reset() {
    this.#strike = 0;
    this.#ball = 0;
  }

  #click(array1, array2) {
    this.#reset();
    for (let i = 0; i < this.#count; i++) {
      if (array1[i] === array2[i]) this.#strike += 1;
      else if (array1.includes(array2[i])) this.#ball += 1;
    }
  }
}

export default NumberBaseballUmpireIndicator;
