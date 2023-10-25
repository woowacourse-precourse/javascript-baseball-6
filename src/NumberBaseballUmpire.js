class NumberBaseballUmpire {
  #umpireIndicator;

  constructor(umpireIndicator) {
    this.#umpireIndicator = umpireIndicator;
  }

  umpire(array1, array2) {
    return this.#umpireIndicator.indicateAbout(array1, array2);
  }

  isEnd() {
    return this.#umpireIndicator.isOut();
  }
}

export default NumberBaseballUmpire;
